-- ============================================================================
--  BOSS AROUND — Supabase schema
--  Task assignment & monitoring for a business owner and their employees.
--
--  HOW TO USE
--  1. Create a new project at https://supabase.com
--  2. Open the SQL Editor, paste this ENTIRE file, and click "Run".
--  3. (Auth) Settings → Authentication → providers → Email is enabled by default.
--     For a smooth first run you can turn OFF "Confirm email" while testing.
--  4. (Auth) Add your GitHub Pages URL under URL Configuration → Redirect URLs
--     e.g.  https://<username>.github.io/<repo>/
--
--  Designed to be run once on a fresh project. It is mostly idempotent
--  (functions / policies / triggers are re-created safely).
-- ============================================================================

create extension if not exists "pgcrypto";   -- gen_random_uuid(), gen_random_bytes()

-- ============================================================================
--  TABLES
-- ============================================================================

create table if not exists public.organizations (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  owner_id    uuid not null references auth.users(id) on delete cascade,
  join_code   text not null unique,
  created_at  timestamptz not null default now()
);

create table if not exists public.profiles (
  id             uuid primary key references auth.users(id) on delete cascade,
  full_name      text,
  email          text,
  org_id         uuid references public.organizations(id) on delete set null,
  role           text not null default 'employee' check (role in ('boss','employee')),
  avatar_color   text not null default '#E8731C',
  language       text not null default 'el'     check (language in ('el','en')),
  theme          text not null default 'system' check (theme in ('system','light','dark')),
  notify_enabled boolean not null default true,
  created_at     timestamptz not null default now()
);

create table if not exists public.tasks (
  id           uuid primary key default gen_random_uuid(),
  org_id       uuid not null references public.organizations(id) on delete cascade,
  title        text not null check (char_length(title) between 1 and 200),
  description  text,
  assigned_to  uuid references public.profiles(id) on delete set null,
  created_by   uuid references public.profiles(id) on delete set null,
  status       text not null default 'pending'
                 check (status in ('pending','in_progress','on_hold','completed','cancelled')),
  starred      boolean not null default false,
  priority     text not null default 'normal' check (priority in ('low','normal','high')),
  due_date     date,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.comments (
  id          uuid primary key default gen_random_uuid(),
  task_id     uuid not null references public.tasks(id) on delete cascade,
  user_id     uuid not null references public.profiles(id) on delete cascade,
  content     text not null check (char_length(content) between 1 and 4000),
  created_at  timestamptz not null default now()
);

create table if not exists public.notifications (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  type        text not null check (type in ('task_assigned','task_status','new_comment','task_updated')),
  title       text not null,
  body        text,
  task_id     uuid references public.tasks(id) on delete cascade,
  is_read     boolean not null default false,
  created_at  timestamptz not null default now()
);

create table if not exists public.invites (
  id          uuid primary key default gen_random_uuid(),
  org_id      uuid not null references public.organizations(id) on delete cascade,
  email       text not null,
  invited_by  uuid references public.profiles(id) on delete set null,
  status      text not null default 'pending' check (status in ('pending','accepted','cancelled')),
  created_at  timestamptz not null default now(),
  unique (org_id, email)
);

-- Helpful indexes ------------------------------------------------------------
create index if not exists idx_tasks_org          on public.tasks(org_id);
create index if not exists idx_tasks_assigned      on public.tasks(assigned_to);
create index if not exists idx_comments_task       on public.comments(task_id);
create index if not exists idx_notifications_user  on public.notifications(user_id, is_read);
create index if not exists idx_profiles_org        on public.profiles(org_id);
create index if not exists idx_invites_email       on public.invites(lower(email));

-- ============================================================================
--  HELPER FUNCTIONS  (SECURITY DEFINER → bypass RLS, avoid policy recursion)
-- ============================================================================

-- The current user's organization id.
create or replace function public.auth_org_id()
returns uuid
language sql stable security definer set search_path = public as $$
  select org_id from public.profiles where id = auth.uid();
$$;

-- Is the current user the boss (owner) of their organization?
create or replace function public.auth_is_boss()
returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select role = 'boss' from public.profiles where id = auth.uid()), false);
$$;

-- Does a task belong to the current user's organization?
create or replace function public.task_in_my_org(p_task_id uuid)
returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.tasks t
    where t.id = p_task_id and t.org_id = public.auth_org_id()
  );
$$;

-- Can the current user read/write the private chat of a task?
-- (the boss, or the employee the task is assigned to)
create or replace function public.can_access_task_chat(p_task_id uuid)
returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.tasks t
    where t.id = p_task_id
      and t.org_id = public.auth_org_id()
      and (public.auth_is_boss() or t.assigned_to = auth.uid())
  );
$$;

-- Generate an unambiguous 6-character join code (no 0/O/1/I confusion).
create or replace function public.gen_join_code()
returns text
language plpgsql as $$
declare
  alphabet text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  res text := '';
  i int;
begin
  for i in 1..6 loop
    res := res || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
  end loop;
  return res;
end;
$$;

-- ============================================================================
--  NEW-USER HOOK — create a profile row whenever someone signs up
-- ============================================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1)
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
--  COLUMN GUARDS — stop employees from escalating privileges / editing
--  fields they shouldn't.  RPC functions set a transaction-local flag to
--  legitimately bypass these guards.
-- ============================================================================

-- profiles: a user may edit their name/theme/language/notify settings only.
create or replace function public.protect_profile_columns()
returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if current_setting('app.bypass_guard', true) = 'on' then
    return new;
  end if;
  new.id     := old.id;
  new.email  := old.email;     -- synced from auth, not editable here
  new.role   := old.role;      -- prevent self-promotion to 'boss'
  new.org_id := old.org_id;    -- prevent jumping orgs without an invite/code
  return new;
end;
$$;

drop trigger if exists trg_protect_profile on public.profiles;
create trigger trg_protect_profile
  before update on public.profiles
  for each row execute function public.protect_profile_columns();

-- tasks: employees may only change status & starred. The boss may change all.
-- This BEFORE-UPDATE trigger also keeps timestamps in sync.
create or replace function public.before_task_update()
returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not public.auth_is_boss() then
    new.title       := old.title;
    new.description := old.description;
    new.assigned_to := old.assigned_to;
    new.created_by  := old.created_by;
    new.org_id      := old.org_id;
    new.priority    := old.priority;
    new.due_date    := old.due_date;
  end if;

  if new.status = 'completed' and old.status is distinct from 'completed' then
    new.completed_at := now();
  elsif new.status <> 'completed' then
    new.completed_at := null;
  end if;

  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists trg_before_task_update on public.tasks;
create trigger trg_before_task_update
  before update on public.tasks
  for each row execute function public.before_task_update();

-- ============================================================================
--  NOTIFICATION TRIGGERS — write into notifications (rendered/localised in UI)
-- ============================================================================

create or replace function public.notify_task_assigned()
returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.assigned_to is not null and new.assigned_to is distinct from new.created_by then
    insert into public.notifications (user_id, type, title, body, task_id)
    values (new.assigned_to, 'task_assigned', 'Νέα εργασία', new.title, new.id);
  end if;
  return new;
end;
$$;

drop trigger if exists trg_notify_task_assigned on public.tasks;
create trigger trg_notify_task_assigned
  after insert on public.tasks
  for each row execute function public.notify_task_assigned();

create or replace function public.notify_task_changed()
returns trigger
language plpgsql security definer set search_path = public as $$
begin
  -- status changed → tell the other party
  if new.status is distinct from old.status then
    if new.created_by is not null and new.created_by <> auth.uid() then
      insert into public.notifications (user_id, type, title, body, task_id)
      values (new.created_by, 'task_status', 'Αλλαγή κατάστασης', new.title, new.id);
    end if;
    if new.assigned_to is not null
       and new.assigned_to <> auth.uid()
       and new.assigned_to is distinct from new.created_by then
      insert into public.notifications (user_id, type, title, body, task_id)
      values (new.assigned_to, 'task_status', 'Αλλαγή κατάστασης', new.title, new.id);
    end if;
  end if;

  -- re-assigned to a different employee → tell them
  if new.assigned_to is distinct from old.assigned_to
     and new.assigned_to is not null
     and new.assigned_to <> auth.uid() then
    insert into public.notifications (user_id, type, title, body, task_id)
    values (new.assigned_to, 'task_assigned', 'Νέα εργασία', new.title, new.id);
  end if;

  return new;
end;
$$;

drop trigger if exists trg_notify_task_changed on public.tasks;
create trigger trg_notify_task_changed
  after update on public.tasks
  for each row execute function public.notify_task_changed();

create or replace function public.notify_new_comment()
returns trigger
language plpgsql security definer set search_path = public as $$
declare t record;
begin
  select * into t from public.tasks where id = new.task_id;
  if t.assigned_to is not null and t.assigned_to <> new.user_id then
    insert into public.notifications (user_id, type, title, body, task_id)
    values (t.assigned_to, 'new_comment', 'Νέο σχόλιο', t.title, t.id);
  end if;
  if t.created_by is not null
     and t.created_by <> new.user_id
     and t.created_by is distinct from t.assigned_to then
    insert into public.notifications (user_id, type, title, body, task_id)
    values (t.created_by, 'new_comment', 'Νέο σχόλιο', t.title, t.id);
  end if;
  return new;
end;
$$;

drop trigger if exists trg_notify_new_comment on public.comments;
create trigger trg_notify_new_comment
  after insert on public.comments
  for each row execute function public.notify_new_comment();

-- ============================================================================
--  RPC FUNCTIONS — called from the app
-- ============================================================================

-- Boss: create an organization and become its owner.
create or replace function public.create_organization(p_name text)
returns public.organizations
language plpgsql security definer set search_path = public as $$
declare org public.organizations; code text;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;

  loop
    code := public.gen_join_code();
    exit when not exists (select 1 from public.organizations where join_code = code);
  end loop;

  insert into public.organizations (name, owner_id, join_code)
  values (coalesce(nullif(trim(p_name), ''), 'Η επιχείρησή μου'), auth.uid(), code)
  returning * into org;

  perform set_config('app.bypass_guard', 'on', true);
  update public.profiles set org_id = org.id, role = 'boss' where id = auth.uid();

  return org;
end;
$$;

-- Employee: join an organization with a code.
create or replace function public.join_organization(p_code text)
returns public.organizations
language plpgsql security definer set search_path = public as $$
declare org public.organizations; my_email text;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;

  select * into org from public.organizations
  where upper(join_code) = upper(trim(p_code));
  if org.id is null then raise exception 'INVALID_CODE'; end if;

  perform set_config('app.bypass_guard', 'on', true);
  update public.profiles set org_id = org.id, role = 'employee' where id = auth.uid();

  select email into my_email from public.profiles where id = auth.uid();
  update public.invites set status = 'accepted'
  where org_id = org.id and lower(email) = lower(my_email);

  return org;
end;
$$;

-- Boss: rotate the join code.
create or replace function public.regenerate_join_code()
returns text
language plpgsql security definer set search_path = public as $$
declare code text; oid uuid;
begin
  if not public.auth_is_boss() then raise exception 'NOT_ALLOWED'; end if;
  select org_id into oid from public.profiles where id = auth.uid();

  loop
    code := public.gen_join_code();
    exit when not exists (select 1 from public.organizations where join_code = code);
  end loop;

  update public.organizations set join_code = code where id = oid;
  return code;
end;
$$;

-- Employee: pending invites addressed to my email.
create or replace function public.get_my_invites()
returns table (invite_id uuid, org_id uuid, org_name text)
language sql stable security definer set search_path = public as $$
  select i.id, i.org_id, o.name
  from public.invites i
  join public.organizations o on o.id = i.org_id
  where i.status = 'pending'
    and lower(i.email) = lower((select email from public.profiles where id = auth.uid()));
$$;

-- Employee: accept an invite addressed to my email.
create or replace function public.accept_invite(p_invite_id uuid)
returns public.organizations
language plpgsql security definer set search_path = public as $$
declare inv public.invites; org public.organizations; my_email text;
begin
  select email into my_email from public.profiles where id = auth.uid();
  select * into inv from public.invites where id = p_invite_id;
  if inv.id is null or lower(inv.email) <> lower(my_email) then
    raise exception 'INVALID_INVITE';
  end if;

  perform set_config('app.bypass_guard', 'on', true);
  update public.profiles set org_id = inv.org_id, role = 'employee' where id = auth.uid();
  update public.invites set status = 'accepted' where id = inv.id;

  select * into org from public.organizations where id = inv.org_id;
  return org;
end;
$$;

-- Employee: leave the organization.
create or replace function public.leave_organization()
returns void
language plpgsql security definer set search_path = public as $$
begin
  if public.auth_is_boss() then raise exception 'BOSS_CANNOT_LEAVE'; end if;
  perform set_config('app.bypass_guard', 'on', true);
  update public.profiles set org_id = null, role = 'employee' where id = auth.uid();
end;
$$;

grant execute on function public.create_organization(text)   to authenticated;
grant execute on function public.join_organization(text)     to authenticated;
grant execute on function public.regenerate_join_code()      to authenticated;
grant execute on function public.get_my_invites()            to authenticated;
grant execute on function public.accept_invite(uuid)         to authenticated;
grant execute on function public.leave_organization()        to authenticated;

-- ============================================================================
--  ROW LEVEL SECURITY
-- ============================================================================

alter table public.organizations enable row level security;
alter table public.profiles      enable row level security;
alter table public.tasks         enable row level security;
alter table public.comments      enable row level security;
alter table public.notifications enable row level security;
alter table public.invites       enable row level security;

-- organizations --------------------------------------------------------------
drop policy if exists org_select on public.organizations;
create policy org_select on public.organizations for select to authenticated
  using (id = public.auth_org_id() or owner_id = auth.uid());

drop policy if exists org_update on public.organizations;
create policy org_update on public.organizations for update to authenticated
  using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists org_delete on public.organizations;
create policy org_delete on public.organizations for delete to authenticated
  using (owner_id = auth.uid());
-- (INSERT is done through create_organization() only.)

-- profiles -------------------------------------------------------------------
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles for select to authenticated
  using (id = auth.uid() or org_id = public.auth_org_id());

drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());
-- (INSERT is done by the handle_new_user() trigger only.)

-- tasks ----------------------------------------------------------------------
drop policy if exists tasks_select on public.tasks;
create policy tasks_select on public.tasks for select to authenticated
  using (org_id = public.auth_org_id());          -- everyone sees the org board

drop policy if exists tasks_insert on public.tasks;
create policy tasks_insert on public.tasks for insert to authenticated
  with check (public.auth_is_boss()
              and org_id = public.auth_org_id()
              and created_by = auth.uid());        -- only the boss creates tasks

drop policy if exists tasks_update on public.tasks;
create policy tasks_update on public.tasks for update to authenticated
  using (org_id = public.auth_org_id()
         and (public.auth_is_boss() or assigned_to = auth.uid()))
  with check (org_id = public.auth_org_id());      -- columns guarded by trigger

drop policy if exists tasks_delete on public.tasks;
create policy tasks_delete on public.tasks for delete to authenticated
  using (public.auth_is_boss() and org_id = public.auth_org_id());

-- comments -------------------------------------------------------------------
drop policy if exists comments_select on public.comments;
create policy comments_select on public.comments for select to authenticated
  using (public.can_access_task_chat(task_id));

drop policy if exists comments_insert on public.comments;
create policy comments_insert on public.comments for insert to authenticated
  with check (user_id = auth.uid() and public.can_access_task_chat(task_id));

drop policy if exists comments_delete on public.comments;
create policy comments_delete on public.comments for delete to authenticated
  using (user_id = auth.uid()
         or (public.auth_is_boss() and public.task_in_my_org(task_id)));

-- notifications --------------------------------------------------------------
drop policy if exists notif_select on public.notifications;
create policy notif_select on public.notifications for select to authenticated
  using (user_id = auth.uid());

drop policy if exists notif_update on public.notifications;
create policy notif_update on public.notifications for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists notif_delete on public.notifications;
create policy notif_delete on public.notifications for delete to authenticated
  using (user_id = auth.uid());
-- (INSERT happens only inside SECURITY DEFINER triggers.)

-- invites --------------------------------------------------------------------
drop policy if exists invites_select on public.invites;
create policy invites_select on public.invites for select to authenticated
  using (public.auth_is_boss() and org_id = public.auth_org_id());

drop policy if exists invites_insert on public.invites;
create policy invites_insert on public.invites for insert to authenticated
  with check (public.auth_is_boss()
              and org_id = public.auth_org_id()
              and invited_by = auth.uid());

drop policy if exists invites_update on public.invites;
create policy invites_update on public.invites for update to authenticated
  using (public.auth_is_boss() and org_id = public.auth_org_id())
  with check (public.auth_is_boss() and org_id = public.auth_org_id());

drop policy if exists invites_delete on public.invites;
create policy invites_delete on public.invites for delete to authenticated
  using (public.auth_is_boss() and org_id = public.auth_org_id());

-- ============================================================================
--  REALTIME — let the app subscribe to live changes
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_publication_tables
                 where pubname='supabase_realtime' and schemaname='public' and tablename='tasks') then
    alter publication supabase_realtime add table public.tasks;
  end if;
  if not exists (select 1 from pg_publication_tables
                 where pubname='supabase_realtime' and schemaname='public' and tablename='comments') then
    alter publication supabase_realtime add table public.comments;
  end if;
  if not exists (select 1 from pg_publication_tables
                 where pubname='supabase_realtime' and schemaname='public' and tablename='notifications') then
    alter publication supabase_realtime add table public.notifications;
  end if;
  if not exists (select 1 from pg_publication_tables
                 where pubname='supabase_realtime' and schemaname='public' and tablename='profiles') then
    alter publication supabase_realtime add table public.profiles;
  end if;
end $$;

-- Done. 🎉
