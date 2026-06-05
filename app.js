/* ============================================================
   Boss Around — application
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- i18n ---------------- */
  const DICT = {
    el: {
      tagline: 'Αναθέστε. Παρακολουθήστε. Ολοκληρώστε.',
      loading: 'Φόρτωση…',
      save: 'Αποθήκευση', cancel: 'Ακύρωση', delete: 'Διαγραφή', edit: 'Επεξεργασία',
      send: 'Αποστολή', close: 'Κλείσιμο', back: 'Πίσω', retry: 'Δοκιμή ξανά',
      copy: 'Αντιγραφή', copied: 'Αντιγράφηκε!',

      welcomeTitle: 'Καλώς ήρθατε',
      welcomeSub: 'Συνδεθείτε για να διαχειριστείτε τις εργασίες της ομάδας σας.',
      email: 'Email', password: 'Κωδικός πρόσβασης', fullName: 'Ονοματεπώνυμο',
      fullNamePlaceholder: 'π.χ. Μαρία Παπαδοπούλου',
      signIn: 'Σύνδεση', signUp: 'Εγγραφή', signOut: 'Αποσύνδεση',
      noAccount: 'Δεν έχετε λογαριασμό;', haveAccount: 'Έχετε ήδη λογαριασμό;',
      createAccount: 'Δημιουργία λογαριασμού', or: 'ή',
      magicLink: 'Σύνδεση με σύνδεσμο email', magicSent: 'Σας στείλαμε σύνδεσμο σύνδεσης — ελέγξτε το email σας.',
      emailRequired: 'Συμπληρώστε το email σας.',
      checkEmailConfirm: 'Ελέγξτε το email σας για να επιβεβαιώσετε τον λογαριασμό, μετά συνδεθείτε.',
      invalidCredentials: 'Λάθος email ή κωδικός.',
      authError: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.',
      passwordShort: 'Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες.',

      onbTitle: 'Ξεκινήστε',
      onbSub: 'Δημιουργήστε την επιχείρησή σας ή συνδεθείτε σε μία υπάρχουσα.',
      createBiz: 'Δημιουργία επιχείρησης', createBizSub: 'Είμαι ο ιδιοκτήτης και θα αναθέτω εργασίες.',
      joinBiz: 'Σύνδεση σε επιχείρηση', joinBizSub: 'Έχω κωδικό πρόσκλησης από το αφεντικό μου.',
      bizNameLabel: 'Όνομα επιχείρησης', bizNamePlaceholder: 'π.χ. Καφέ Ακρόπολη', create: 'Δημιουργία',
      codeLabel: 'Κωδικός πρόσκλησης', codePlaceholder: 'π.χ. K7P2QX', join: 'Σύνδεση',
      invitesTitle: 'Προσκλήσεις για εσάς', invitedToJoin: 'Πρόσκληση από', acceptInvite: 'Αποδοχή',
      invalidCode: 'Μη έγκυρος κωδικός. Ελέγξτε τον και δοκιμάστε ξανά.',

      navTasks: 'Εργασίες', navNotif: 'Ειδοποιήσεις', navSettings: 'Ρυθμίσεις',
      tabMine: 'Δικές μου', tabAll: 'Όλες',
      'f.all': 'Όλες', 'f.pending': 'Εκκρεμείς', 'f.in_progress': 'Σε εξέλιξη',
      'f.on_hold': 'Σε αναμονή', 'f.completed': 'Ολοκληρωμένες', 'f.starred': 'Με αστέρι',
      assignedTo: 'Ανατέθηκε σε', unassigned: 'Χωρίς ανάθεση', noDue: 'Χωρίς προθεσμία',
      allAssignees: 'Όλοι οι υπεύθυνοι',
      emptyTasksBossTitle: 'Δεν υπάρχουν εργασίες ακόμη',
      emptyTasksBossSub: 'Πατήστε + για να αναθέσετε την πρώτη εργασία στην ομάδα σας.',
      emptyTasksEmpTitle: 'Καμία εργασία',
      emptyTasksEmpSub: 'Δεν σας έχουν ανατεθεί εργασίες προς το παρόν.',
      emptyFilterTitle: 'Τίποτα εδώ', emptyFilterSub: 'Δεν υπάρχουν εργασίες με αυτά τα φίλτρα.',

      'status.pending': 'Εκκρεμεί', 'status.in_progress': 'Σε εξέλιξη', 'status.on_hold': 'Σε αναμονή',
      'status.completed': 'Ολοκληρώθηκε', 'status.cancelled': 'Ακυρώθηκε',
      'prio.low': 'Χαμηλή', 'prio.normal': 'Κανονική', 'prio.high': 'Υψηλή',
      priorityLabel: 'Προτεραιότητα',

      newTaskTitle: 'Νέα εργασία', editTaskTitle: 'Επεξεργασία εργασίας',
      titleLabel: 'Τίτλος', titlePlaceholder: 'Τι πρέπει να γίνει;',
      descLabel: 'Περιγραφή', descPlaceholder: 'Προσθέστε λεπτομέρειες (προαιρετικό)',
      assigneeLabel: 'Ανάθεση σε', dueLabel: 'Προθεσμία', statusLabel: 'Κατάσταση',
      createTaskBtn: 'Δημιουργία εργασίας', saveChanges: 'Αποθήκευση αλλαγών',
      deleteTask: 'Διαγραφή εργασίας', deleteTaskConfirm: 'Να διαγραφεί αυτή η εργασία; Η ενέργεια δεν αναιρείται.',
      titleRequired: 'Ο τίτλος είναι υποχρεωτικός.',

      chatTitle: 'Συνομιλία', chatPlaceholder: 'Γράψτε ένα μήνυμα…',
      chatEmpty: 'Δεν υπάρχουν μηνύματα ακόμη. Ξεκινήστε τη συζήτηση!',
      chatLocked: 'Η συνομιλία είναι διαθέσιμη μόνο στο αφεντικό και στον υπεύθυνο της εργασίας.',
      you: 'Εσείς',

      notifTitle: 'Ειδοποιήσεις', markAllRead: 'Όλα ως αναγνωσμένα',
      noNotifTitle: 'Καμία ειδοποίηση', noNotifSub: 'Θα ειδοποιηθείτε για νέες εργασίες, αλλαγές και σχόλια.',
      'n.task_assigned': 'Σας ανατέθηκε νέα εργασία', 'n.task_status': 'Αλλαγή κατάστασης εργασίας',
      'n.new_comment': 'Νέο σχόλιο', 'n.task_updated': 'Η εργασία ενημερώθηκε',
      justNow: 'μόλις τώρα',

      settingsTitle: 'Ρυθμίσεις',
      secProfile: 'Προφίλ', secAppearance: 'Εμφάνιση', secNotif: 'Ειδοποιήσεις',
      secTeam: 'Η ομάδα μου', secOrg: 'Επιχείρηση', secAccount: 'Λογαριασμός',
      nameLabel: 'Όνομα', roleLabel: 'Ρόλος',
      'role.boss': 'Αφεντικό', 'role.employee': 'Υπάλληλος',
      themeLabel: 'Θέμα', 'theme.system': 'Συστήματος', 'theme.light': 'Φωτεινό', 'theme.dark': 'Σκοτεινό',
      langLabel: 'Γλώσσα',
      notifInApp: 'Ειδοποιήσεις εφαρμογής', notifInAppSub: 'Λαμβάνετε ειδοποιήσεις μέσα στην εφαρμογή.',
      notifBrowser: 'Ειδοποιήσεις συσκευής', notifBrowserSub: 'Εμφάνιση ειδοποιήσεων στη συσκευή σας.',
      notifBrowserBlocked: 'Αποκλεισμένες στις ρυθμίσεις της συσκευής.', enable: 'Ενεργοποίηση',
      members: 'Μέλη ομάδας',
      joinCodeLabel: 'Κωδικός πρόσκλησης', joinCodeSub: 'Μοιραστείτε τον με τους υπαλλήλους σας.',
      regenerate: 'Νέος κωδικός', regenerated: 'Δημιουργήθηκε νέος κωδικός',
      inviteEmailLabel: 'Πρόσκληση με email', inviteEmailPlaceholder: 'email υπαλλήλου',
      sendInvite: 'Αποστολή πρόσκλησης', inviteSent: 'Η πρόσκληση καταχωρήθηκε ✓',
      inviteExists: 'Αυτό το email έχει ήδη προσκληθεί.', inviteSelf: 'Δεν μπορείτε να προσκαλέσετε τον εαυτό σας.',
      pendingInvites: 'Εκκρεμείς προσκλήσεις',
      businessNameLabel: 'Όνομα επιχείρησης',
      leaveBiz: 'Αποχώρηση από την επιχείρηση', leaveConfirm: 'Σίγουρα θέλετε να αποχωρήσετε; Δεν θα βλέπετε πλέον τις εργασίες.',
      deleteBiz: 'Διαγραφή επιχείρησης', deleteBizConfirm: 'Διαγραφή της επιχείρησης και ΟΛΩΝ των εργασιών; Δεν αναιρείται.',
      signOutConfirm: 'Αποσύνδεση;',
      savedToast: 'Αποθηκεύτηκε ✓', youTag: 'Εσείς', bossTag: 'Αφεντικό',

      genericError: 'Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά.',
      configMissingTitle: 'Απαιτείται ρύθμιση',
      configMissingSub: 'Ανοίξτε το αρχείο config.js και συμπληρώστε το URL και το anon key του Supabase.'
    },
    en: {
      tagline: 'Assign. Track. Get it done.',
      loading: 'Loading…',
      save: 'Save', cancel: 'Cancel', delete: 'Delete', edit: 'Edit',
      send: 'Send', close: 'Close', back: 'Back', retry: 'Try again',
      copy: 'Copy', copied: 'Copied!',

      welcomeTitle: 'Welcome',
      welcomeSub: 'Sign in to manage your team’s tasks.',
      email: 'Email', password: 'Password', fullName: 'Full name',
      fullNamePlaceholder: 'e.g. Maria Smith',
      signIn: 'Sign in', signUp: 'Sign up', signOut: 'Sign out',
      noAccount: 'No account yet?', haveAccount: 'Already have an account?',
      createAccount: 'Create account', or: 'or',
      magicLink: 'Sign in with an email link', magicSent: 'We sent you a sign-in link — check your email.',
      emailRequired: 'Please enter your email.',
      checkEmailConfirm: 'Check your email to confirm your account, then sign in.',
      invalidCredentials: 'Wrong email or password.',
      authError: 'Something went wrong. Please try again.',
      passwordShort: 'Password must be at least 6 characters.',

      onbTitle: 'Get started',
      onbSub: 'Create your business or join an existing one.',
      createBiz: 'Create a business', createBizSub: 'I’m the owner and I’ll assign tasks.',
      joinBiz: 'Join a business', joinBizSub: 'I have an invite code from my boss.',
      bizNameLabel: 'Business name', bizNamePlaceholder: 'e.g. Acropolis Café', create: 'Create',
      codeLabel: 'Invite code', codePlaceholder: 'e.g. K7P2QX', join: 'Join',
      invitesTitle: 'Invites for you', invitedToJoin: 'Invited by', acceptInvite: 'Accept',
      invalidCode: 'Invalid code. Check it and try again.',

      navTasks: 'Tasks', navNotif: 'Alerts', navSettings: 'Settings',
      tabMine: 'Mine', tabAll: 'All',
      'f.all': 'All', 'f.pending': 'Pending', 'f.in_progress': 'In progress',
      'f.on_hold': 'On hold', 'f.completed': 'Completed', 'f.starred': 'Starred',
      assignedTo: 'Assigned to', unassigned: 'Unassigned', noDue: 'No due date',
      allAssignees: 'All assignees',
      emptyTasksBossTitle: 'No tasks yet',
      emptyTasksBossSub: 'Tap + to assign the first task to your team.',
      emptyTasksEmpTitle: 'No tasks',
      emptyTasksEmpSub: 'You have no tasks assigned right now.',
      emptyFilterTitle: 'Nothing here', emptyFilterSub: 'No tasks match these filters.',

      'status.pending': 'Pending', 'status.in_progress': 'In progress', 'status.on_hold': 'On hold',
      'status.completed': 'Completed', 'status.cancelled': 'Cancelled',
      'prio.low': 'Low', 'prio.normal': 'Normal', 'prio.high': 'High',
      priorityLabel: 'Priority',

      newTaskTitle: 'New task', editTaskTitle: 'Edit task',
      titleLabel: 'Title', titlePlaceholder: 'What needs to be done?',
      descLabel: 'Description', descPlaceholder: 'Add details (optional)',
      assigneeLabel: 'Assign to', dueLabel: 'Due date', statusLabel: 'Status',
      createTaskBtn: 'Create task', saveChanges: 'Save changes',
      deleteTask: 'Delete task', deleteTaskConfirm: 'Delete this task? This cannot be undone.',
      titleRequired: 'Title is required.',

      chatTitle: 'Chat', chatPlaceholder: 'Write a message…',
      chatEmpty: 'No messages yet. Start the conversation!',
      chatLocked: 'The chat is only available to the boss and the task’s assignee.',
      you: 'You',

      notifTitle: 'Notifications', markAllRead: 'Mark all read',
      noNotifTitle: 'No notifications', noNotifSub: 'You’ll be notified about new tasks, changes and comments.',
      'n.task_assigned': 'You were assigned a new task', 'n.task_status': 'Task status changed',
      'n.new_comment': 'New comment', 'n.task_updated': 'Task updated',
      justNow: 'just now',

      settingsTitle: 'Settings',
      secProfile: 'Profile', secAppearance: 'Appearance', secNotif: 'Notifications',
      secTeam: 'My team', secOrg: 'Business', secAccount: 'Account',
      nameLabel: 'Name', roleLabel: 'Role',
      'role.boss': 'Boss', 'role.employee': 'Employee',
      themeLabel: 'Theme', 'theme.system': 'System', 'theme.light': 'Light', 'theme.dark': 'Dark',
      langLabel: 'Language',
      notifInApp: 'In-app notifications', notifInAppSub: 'Get alerts inside the app.',
      notifBrowser: 'Device notifications', notifBrowserSub: 'Show notifications on your device.',
      notifBrowserBlocked: 'Blocked in your device settings.', enable: 'Enable',
      members: 'Team members',
      joinCodeLabel: 'Invite code', joinCodeSub: 'Share it with your employees so they can join.',
      regenerate: 'New code', regenerated: 'New code generated',
      inviteEmailLabel: 'Invite by email', inviteEmailPlaceholder: 'employee email',
      sendInvite: 'Send invite', inviteSent: 'Invite saved ✓',
      inviteExists: 'This email is already invited.', inviteSelf: 'You can’t invite yourself.',
      pendingInvites: 'Pending invites',
      businessNameLabel: 'Business name',
      leaveBiz: 'Leave business', leaveConfirm: 'Leave this business? You’ll no longer see its tasks.',
      deleteBiz: 'Delete business', deleteBizConfirm: 'Delete the business and ALL its tasks? This cannot be undone.',
      signOutConfirm: 'Sign out?',
      savedToast: 'Saved ✓', youTag: 'You', bossTag: 'Boss',

      genericError: 'Something went wrong. Please try again.',
      configMissingTitle: 'Setup required',
      configMissingSub: 'Open config.js and fill in your Supabase URL and anon key.'
    }
  };

  const STATUSES   = ['pending', 'in_progress', 'on_hold', 'completed', 'cancelled'];
  const PRIORITIES = ['low', 'normal', 'high'];
  const AVATAR_COLORS = ['#E8590C', '#2F6FED', '#1B8E4E', '#9333EA', '#D6336C', '#0CA678', '#E8A317', '#5C7CFA'];

  /* ---------------- state ---------------- */
  const state = {
    ready: false, session: null, me: null, org: null,
    members: [], tasks: [], notifications: [], invites: [], myInvites: [],
    view: 'tasks', scope: 'mine', filter: 'all', assignee: 'all',
    authMode: 'signin', lang: 'el', busy: false
  };

  let sb = null;            // supabase client
  let channels = [];        // realtime channels
  let chatChannel = null;   // per-open-task channel
  const cfg = window.BOSS_AROUND_CONFIG || {};

  /* ---------------- tiny helpers ---------------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = () => document.getElementById('app');
  const modalRoot = () => {
    let m = document.getElementById('modal-root');
    if (!m) { m = document.createElement('div'); m.id = 'modal-root'; document.body.appendChild(m); }
    return m;
  };

  function t(key, ...args) {
    const d = DICT[state.lang] || DICT.el;
    let v = d[key];
    if (v === undefined) v = DICT.el[key];
    if (v === undefined) return key;
    return typeof v === 'function' ? v(...args) : v;
  }

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  function initials(name, email) {
    const base = (name || '').trim() || (email || '').split('@')[0] || '?';
    const parts = base.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return base.slice(0, 2).toUpperCase();
  }

  function profileById(id) {
    if (!id) return null;
    if (state.me && state.me.id === id) return state.me;
    return state.members.find((m) => m.id === id) || null;
  }
  const displayName = (p) => p ? ((p.full_name || '').trim() || (p.email || '').split('@')[0]) : '—';

  function relTime(iso) {
    const d = new Date(iso), now = Date.now();
    const s = Math.round((now - d.getTime()) / 1000);
    const loc = state.lang === 'el' ? 'el-GR' : 'en-US';
    if (s < 45) return t('justNow');
    const rtf = new Intl.RelativeTimeFormat(loc, { numeric: 'auto' });
    const m = Math.round(s / 60);
    if (m < 60) return rtf.format(-m, 'minute');
    const h = Math.round(m / 60);
    if (h < 24) return rtf.format(-h, 'hour');
    const day = Math.round(h / 24);
    if (day < 7) return rtf.format(-day, 'day');
    return d.toLocaleDateString(loc, { day: 'numeric', month: 'short' });
  }
  function fmtDate(iso) {
    if (!iso) return '';
    const loc = state.lang === 'el' ? 'el-GR' : 'en-US';
    return new Date(iso).toLocaleDateString(loc, { day: 'numeric', month: 'short', year: 'numeric' });
  }
  function fmtDueShort(d) {
    if (!d) return t('noDue');
    const loc = state.lang === 'el' ? 'el-GR' : 'en-US';
    return new Date(d + 'T00:00:00').toLocaleDateString(loc, { day: 'numeric', month: 'short' });
  }
  const isOverdue = (task) => task.due_date && task.status !== 'completed' && task.status !== 'cancelled'
    && new Date(task.due_date + 'T23:59:59') < new Date();

  function toast(msg, isErr) {
    const root = document.getElementById('toast-root');
    const el = document.createElement('div');
    el.className = 'toast' + (isErr ? ' err' : '');
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(8px)'; el.style.transition = 'all .2s'; }, 2400);
    setTimeout(() => el.remove(), 2700);
  }

  /* ---------------- icons ---------------- */
  const I = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    checks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12.5l4 4L17 6"/><path d="M9 16.5l1 1L21 6.5"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1.4"/><circle cx="3.5" cy="12" r="1.4"/><circle cx="3.5" cy="18" r="1.4"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2.5 15.1 9 22 9.7 17 14.5 18.3 21.4 12 18 5.7 21.4 7 14.5 2 9.7 8.9 9"/></svg>',
    starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"><polygon points="12 2.5 15.1 9 22 9.7 17 14.5 18.3 21.4 12 18 5.7 21.4 7 14.5 2 9.7 8.9 9"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.5 9.5 0 0 1-4-.9L3 21l1.9-4.5a8.4 8.4 0 0 1-.9-4A8.4 8.4 0 0 1 12 4a8.4 8.4 0 0 1 9 7.5z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1.5A3.5 3.5 0 0 0 12.5 15h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="8" r="3.2"/><path d="M21 20v-1.4a3.5 3.5 0 0 0-2.6-3.4M16 4.6a3.2 3.2 0 0 1 0 6.2"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6m2 0v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 6 9-6"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16l-1 13H5L4 7z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V4h12l-1.5 4L16 12H4"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.2"/><circle cx="17.5" cy="10.5" r="1.2"/><circle cx="8.5" cy="7.5" r="1.2"/><circle cx="6.5" cy="12.5" r="1.2"/><path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.7 1.7-1.7H17a5 5 0 0 0 5-5c0-4.4-4.5-7.8-10-7.8z"/></svg>'
  };
  const statusDot = '<span class="ico"></span>';

  /* ============================================================
     THEME
     ============================================================ */
  function applyTheme(theme) {
    const dark = theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
  function setTheme(theme) {
    try { localStorage.setItem('ba_theme', theme); } catch (e) {}
    applyTheme(theme);
    if (state.me) { state.me.theme = theme; saveProfile({ theme }); }
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const th = (state.me && state.me.theme) || localStorage.getItem('ba_theme') || 'system';
    if (th === 'system') applyTheme('system');
  });

  function setLang(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('ba_lang', lang); } catch (e) {}
    if (state.me) { state.me.language = lang; saveProfile({ language: lang }); }
    route();
  }

  /* ============================================================
     SUPABASE — auth + data
     ============================================================ */
  function configOK() {
    return cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY &&
      !/YOUR-/.test(cfg.SUPABASE_URL) && !/YOUR-/.test(cfg.SUPABASE_ANON_KEY);
  }

  async function saveProfile(patch) {
    if (!sb || !state.me) return;
    try { await sb.from('profiles').update(patch).eq('id', state.me.id); } catch (e) {}
  }

  async function loadProfile() {
    let data, error;
    for (let attempt = 0; attempt < 2; attempt++) {
      const res = await sb.from('profiles').select('*').eq('id', state.session.user.id).maybeSingle();
      data = res.data; error = res.error;
      if (data) break;
      await new Promise((r) => setTimeout(r, 450)); // trigger may lag just after sign-up
    }
    if (error) throw error;
    if (!data) throw new Error(t('genericError'));
    state.me = data;
    // sync language/theme from profile (server is source of truth once signed in)
    if (data.language && data.language !== state.lang) { state.lang = data.language; document.documentElement.lang = data.language; }
    if (data.theme) { try { localStorage.setItem('ba_theme', data.theme); } catch (e) {} applyTheme(data.theme); }
    return data;
  }

  async function loadOrgData() {
    const orgId = state.me.org_id;
    const [org, members, tasks, notifs] = await Promise.all([
      sb.from('organizations').select('*').eq('id', orgId).single(),
      sb.from('profiles').select('*').eq('org_id', orgId),
      sb.from('tasks').select('*').eq('org_id', orgId).order('created_at', { ascending: false }),
      sb.from('notifications').select('*').eq('user_id', state.me.id).order('created_at', { ascending: false }).limit(60)
    ]);
    state.org = org.data;
    state.members = (members.data || []).sort((a, b) =>
      (a.role === 'boss' ? -1 : 0) - (b.role === 'boss' ? -1 : 0) || displayName(a).localeCompare(displayName(b)));
    state.tasks = tasks.data || [];
    state.notifications = notifs.data || [];
    if (state.me.role === 'boss') {
      const inv = await sb.from('invites').select('*').eq('org_id', orgId).eq('status', 'pending');
      state.invites = inv.data || [];
    }
    // default scope: boss sees everyone, employee sees own
    state.scope = state.me.role === 'boss' ? 'all' : 'mine';
  }

  async function reloadTasks() {
    if (!state.me || !state.me.org_id) return;
    const { data } = await sb.from('tasks').select('*').eq('org_id', state.me.org_id)
      .order('created_at', { ascending: false });
    state.tasks = data || [];
  }

  /* ---------------- realtime ---------------- */
  function teardownChannels() {
    channels.forEach((c) => { try { sb.removeChannel(c); } catch (e) {} });
    channels = [];
  }

  function setupRealtime() {
    teardownChannels();
    const orgId = state.me.org_id;

    const taskCh = sb.channel('rt-tasks-' + orgId)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tasks', filter: 'org_id=eq.' + orgId },
        async () => { await reloadTasks(); if (state.view === 'tasks') renderView(); refreshOpenSheet(); })
      .subscribe();

    const notifCh = sb.channel('rt-notif-' + state.me.id)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: 'user_id=eq.' + state.me.id },
        (payload) => onNewNotification(payload.new))
      .subscribe();

    const profCh = sb.channel('rt-prof-' + orgId)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles', filter: 'org_id=eq.' + orgId },
        async () => {
          const { data } = await sb.from('profiles').select('*').eq('org_id', orgId);
          if (data) state.members = data;
          if (state.view === 'tasks' || state.view === 'settings') renderView();
        })
      .subscribe();

    channels = [taskCh, notifCh, profCh];
  }

  function onNewNotification(n) {
    if (state.notifications.find((x) => x.id === n.id)) return;
    state.notifications.unshift(n);
    updateNavBadges();
    if (state.view === 'notif') renderView();
    if (state.me && state.me.notify_enabled) showDeviceNotification(n);
  }

  /* ---------------- device notifications ---------------- */
  function showDeviceNotification(n) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (document.visibilityState === 'visible') return; // app open → in-app badge is enough
    try {
      new Notification('Boss Around', {
        body: t('n.' + n.type) + (n.body ? ' — ' + n.body : ''),
        icon: 'icon-192.png', badge: 'icon-192.png', tag: 'ba-' + n.id
      });
    } catch (e) {}
  }
  async function requestNotifPermission() {
    if (!('Notification' in window)) { toast(t('genericError'), true); return; }
    try { const p = await Notification.requestPermission(); if (state.view === 'settings') renderView();
      if (p === 'granted') toast(t('savedToast')); } catch (e) {}
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  function route() {
    if (!configOK()) return renderConfigMissing();
    if (!state.session) return renderAuth();
    if (!state.me) return renderLoading();
    if (!state.me.org_id) return renderOnboarding();
    return renderApp();
  }

  function renderLoading() {
    app().innerHTML = '<div class="loading-screen"><div class="spinner"></div></div>';
  }

  function renderConfigMissing() {
    app().innerHTML =
      '<div class="screen no-nav"><div class="center-wrap">' +
      '<div class="hero"><div class="badge-logo">' + I.checks + '</div>' +
      '<h1>Boss Around</h1></div>' +
      '<div class="card pad-lg mt-16">' +
      '<div class="error-text">' + esc(t('configMissingTitle')) + '</div>' +
      '<p class="muted" style="line-height:1.55">' + esc(t('configMissingSub')) + '</p>' +
      '</div></div></div>';
  }

  /* ============================================================
     AUTH SCREEN
     ============================================================ */
  function renderAuth() {
    teardownChannels();
    const signup = state.authMode === 'signup';
    app().innerHTML =
      '<div class="screen no-nav"><div class="center-wrap">' +
      '<div class="hero">' +
      '<div class="badge-logo">' + I.checks + '</div>' +
      '<h1>Boss Around</h1>' +
      '<p>' + esc(t('tagline')) + '</p>' +
      '</div>' +
      '<div class="card pad-lg mt-24">' +
      '<div id="auth-msg"></div>' +
      (signup ? field('text', 'au-name', t('fullName'), t('fullNamePlaceholder')) : '') +
      field('email', 'au-email', t('email'), 'name@email.com', 'email') +
      field('password', 'au-pass', t('password'), '••••••••', 'current-password') +
      '<button class="btn btn-primary btn-block mt-8" data-act="auth:submit">' +
        '<span class="lbl">' + esc(signup ? t('signUp') : t('signIn')) + '</span></button>' +
      '<div class="divider">' + esc(t('or')) + '</div>' +
      '<button class="btn btn-block" data-act="auth:magic">' + I.mail + esc(t('magicLink')) + '</button>' +
      '<div class="text-c mt-16 tiny muted">' +
        esc(signup ? t('haveAccount') : t('noAccount')) + ' ' +
        '<button class="link-btn" data-act="auth:toggle">' + esc(signup ? t('signIn') : t('createAccount')) + '</button>' +
      '</div>' +
      '</div>' +
      langToggleRow() +
      '</div></div>';
  }

  function field(type, id, label, ph, autocomplete) {
    return '<label class="field"><span class="label">' + esc(label) + '</span>' +
      '<input class="input" id="' + id + '" type="' + type + '" placeholder="' + esc(ph || '') + '"' +
      (autocomplete ? ' autocomplete="' + autocomplete + '"' : '') + ' /></label>';
  }
  function langToggleRow() {
    return '<div class="text-c mt-16">' +
      '<button class="link-btn" data-act="lang:set" data-val="' + (state.lang === 'el' ? 'en' : 'el') + '">' +
      (state.lang === 'el' ? 'English' : 'Ελληνικά') + '</button></div>';
  }
  function authMsg(html, ok) {
    const m = $('#auth-msg'); if (m) m.innerHTML = html ? ('<div class="' + (ok ? 'ok-text' : 'error-text') + '">' + esc(html) + '</div>') : '';
  }

  async function doAuthSubmit(btn) {
    const email = ($('#au-email') || {}).value || '';
    const pass = ($('#au-pass') || {}).value || '';
    const name = ($('#au-name') || {}).value || '';
    authMsg('');
    if (!email.trim()) return authMsg(t('emailRequired'));
    if (pass.length < 6) return authMsg(t('passwordShort'));
    btnBusy(btn, true);
    try {
      if (state.authMode === 'signup') {
        const { data, error } = await sb.auth.signUp({
          email: email.trim(), password: pass,
          options: { data: { full_name: name.trim() }, emailRedirectTo: window.location.href.split('#')[0] }
        });
        if (error) throw error;
        if (!data.session) { authMsg(t('checkEmailConfirm'), true); btnBusy(btn, false); return; }
      } else {
        const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password: pass });
        if (error) throw error;
      }
      // onAuthStateChange will take over
    } catch (e) {
      btnBusy(btn, false);
      const msg = /invalid login/i.test(e.message || '') ? t('invalidCredentials') : (e.message || t('authError'));
      authMsg(msg);
    }
  }

  async function doMagicLink(btn) {
    const email = ($('#au-email') || {}).value || '';
    authMsg('');
    if (!email.trim()) return authMsg(t('emailRequired'));
    btnBusy(btn, true);
    try {
      const { error } = await sb.auth.signInWithOtp({
        email: email.trim(), options: { emailRedirectTo: window.location.href.split('#')[0] }
      });
      if (error) throw error;
      authMsg(t('magicSent'), true);
    } catch (e) { authMsg(e.message || t('authError')); }
    btnBusy(btn, false);
  }

  function btnBusy(btn, busy) {
    if (!btn) return;
    if (busy) { btn._html = btn.innerHTML; btn.innerHTML = '<span class="spinner"></span>'; btn.disabled = true; }
    else if (btn._html) { btn.innerHTML = btn._html; btn.disabled = false; }
  }

  /* ============================================================
     ONBOARDING
     ============================================================ */
  function renderOnboarding() {
    teardownChannels();
    const invitesHtml = state.myInvites.length ? (
      '<div class="section-title">' + esc(t('invitesTitle')) + '</div>' +
      '<div class="list">' + state.myInvites.map((iv) =>
        '<div class="list-row"><div class="lr-ico">' + I.mail + '</div>' +
        '<div class="lr-main"><div class="t">' + esc(iv.org_name) + '</div>' +
        '<div class="s">' + esc(t('invitedToJoin')) + '</div></div>' +
        '<button class="btn btn-soft btn-sm" data-act="onb:accept" data-id="' + iv.invite_id + '">' + esc(t('acceptInvite')) + '</button>' +
        '</div>').join('') + '</div>'
    ) : '';

    app().innerHTML =
      '<div class="app-bar"><div class="wordmark"><span class="dot">' + I.check + '</span>' +
      '<span class="sub">Boss</span> <b>Around</b></div>' +
      iconBtn('lang:set', state.lang === 'el' ? '<b style="font-size:13px;font-weight:800">EN</b>' : '<b style="font-size:13px;font-weight:800">ΕΛ</b>', state.lang === 'el' ? 'en' : 'el') +
      iconBtn('signout', I.logout) +
      '</div>' +
      '<div class="screen no-nav"><div class="center-wrap">' +
      '<div class="hero" style="padding-top:14px"><h1>' + esc(t('onbTitle')) + '</h1><p>' + esc(t('onbSub')) + '</p></div>' +
      '<div id="onb-msg" class="mt-8"></div>' +

      '<div class="card choice link mt-8" data-act="onb:show" data-val="create">' +
      '<div class="c-ico">' + I.shop + '</div><div class="c-main"><div class="t">' + esc(t('createBiz')) + '</div>' +
      '<div class="s">' + esc(t('createBizSub')) + '</div></div><span class="chev">' + I.chevR + '</span></div>' +

      '<div id="onb-create" class="card pad-lg mt-8 hidden">' +
      field('text', 'onb-name', t('bizNameLabel'), t('bizNamePlaceholder')) +
      '<button class="btn btn-primary btn-block" data-act="onb:create"><span class="lbl">' + esc(t('create')) + '</span></button></div>' +

      '<div class="card choice link mt-16" data-act="onb:show" data-val="join">' +
      '<div class="c-ico">' + I.users + '</div><div class="c-main"><div class="t">' + esc(t('joinBiz')) + '</div>' +
      '<div class="s">' + esc(t('joinBizSub')) + '</div></div><span class="chev">' + I.chevR + '</span></div>' +

      '<div id="onb-join" class="card pad-lg mt-8 hidden">' +
      '<label class="field"><span class="label">' + esc(t('codeLabel')) + '</span>' +
      '<input class="input" id="onb-code" type="text" placeholder="' + esc(t('codePlaceholder')) +
      '" style="text-transform:uppercase;letter-spacing:.18em;font-family:var(--mono);font-weight:700" maxlength="6" /></label>' +
      '<button class="btn btn-primary btn-block" data-act="onb:join"><span class="lbl">' + esc(t('join')) + '</span></button></div>' +

      invitesHtml +
      '</div></div>';
  }

  function onbMsg(html, ok) {
    const m = $('#onb-msg'); if (m) m.innerHTML = html ? ('<div class="' + (ok ? 'ok-text' : 'error-text') + '">' + esc(html) + '</div>') : '';
  }

  async function onboardingReload() {
    renderLoading();
    await loadProfile();
    if (state.me.org_id) { await loadOrgData(); await afterOrgReady(); }
    else renderOnboarding();
  }

  async function doCreateOrg(btn) {
    const name = ($('#onb-name') || {}).value || '';
    onbMsg(''); btnBusy(btn, true);
    try {
      const { error } = await sb.rpc('create_organization', { p_name: name.trim() });
      if (error) throw error;
      await onboardingReload();
    } catch (e) { btnBusy(btn, false); onbMsg(e.message || t('genericError')); }
  }
  async function doJoinOrg(btn) {
    const code = ($('#onb-code') || {}).value || '';
    onbMsg(''); btnBusy(btn, true);
    try {
      const { error } = await sb.rpc('join_organization', { p_code: code.trim() });
      if (error) throw (/INVALID_CODE/.test(error.message) ? new Error(t('invalidCode')) : error);
      await onboardingReload();
    } catch (e) { btnBusy(btn, false); onbMsg(e.message || t('genericError')); }
  }
  async function doAcceptInvite(id, btn) {
    btnBusy(btn, true);
    try { const { error } = await sb.rpc('accept_invite', { p_invite_id: id }); if (error) throw error; await onboardingReload(); }
    catch (e) { btnBusy(btn, false); onbMsg(e.message || t('genericError')); }
  }

  /* ============================================================
     MAIN APP SHELL
     ============================================================ */
  function iconBtn(act, svg, val, extra) {
    return '<button class="icon-btn" data-act="' + act + '"' + (val ? ' data-val="' + val + '"' : '') + '>' + svg +
      (extra || '') + '</button>';
  }

  function renderApp() {
    const unread = state.notifications.filter((n) => !n.is_read).length;
    const theme = (state.me && state.me.theme) || 'system';
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    app().innerHTML =
      '<div class="app-bar">' +
      '<div class="wordmark"><span class="dot">' + I.check + '</span><span class="sub">Boss</span> <b>Around</b></div>' +
      iconBtn('toggle-theme', isDark ? I.sun : I.moon) +
      iconBtn('nav', I.bell, 'notif', unread ? '<span class="count">' + (unread > 9 ? '9+' : unread) + '</span>' : '') +
      '</div>' +
      '<div id="view"></div>' +
      navBar(unread) +
      (state.me.role === 'boss' && state.view === 'tasks'
        ? '<button class="fab" data-act="task:new" aria-label="' + esc(t('newTaskTitle')) + '">' + I.plus + '</button>' : '');
    renderView();
  }

  function navBar(unread) {
    const item = (key, icon, label) => {
      const active = state.view === key;
      const badge = (key === 'notif' && unread) ? '<span class="nav-badge">' + (unread > 9 ? '9+' : unread) + '</span>' : '';
      return '<button class="nav-item' + (active ? ' active' : '') + '" data-act="nav" data-val="' + key + '">' +
        '<span class="nav-ico">' + icon + badge + '</span><span>' + esc(label) + '</span></button>';
    };
    return '<nav class="bottom-nav">' +
      item('tasks', I.list, t('navTasks')) +
      item('notif', I.bell, t('navNotif')) +
      item('settings', I.gear, t('navSettings')) +
      '</nav>';
  }

  function renderView() {
    const v = document.getElementById('view');
    if (!v) return;
    if (state.view === 'tasks') v.innerHTML = viewTasks();
    else if (state.view === 'notif') v.innerHTML = viewNotifications();
    else if (state.view === 'settings') v.innerHTML = viewSettings();
    // toggle FAB visibility
    const fab = $('.fab');
    if (state.me.role === 'boss') {
      if (state.view === 'tasks' && !fab) {
        const b = document.createElement('button'); b.className = 'fab'; b.setAttribute('data-act', 'task:new');
        b.innerHTML = I.plus; app().appendChild(b);
      } else if (state.view !== 'tasks' && fab) fab.remove();
    }
  }

  function updateNavBadges() {
    const unread = state.notifications.filter((n) => !n.is_read).length;
    const navBadgeWrap = $('.nav-item[data-val="notif"] .nav-ico');
    const top = $('.app-bar .icon-btn[data-val="notif"]');
    if (navBadgeWrap) {
      const ex = navBadgeWrap.querySelector('.nav-badge'); if (ex) ex.remove();
      if (unread) { const s = document.createElement('span'); s.className = 'nav-badge'; s.textContent = unread > 9 ? '9+' : unread; navBadgeWrap.appendChild(s); }
    }
    if (top) {
      const ex = top.querySelector('.count'); if (ex) ex.remove();
      if (unread) { const s = document.createElement('span'); s.className = 'count'; s.textContent = unread > 9 ? '9+' : unread; top.appendChild(s); }
    }
  }

  /* ============================================================
     TASKS VIEW
     ============================================================ */
  function filteredTasks() {
    let list = state.tasks.slice();
    if (state.scope === 'mine') list = list.filter((t0) => t0.assigned_to === state.me.id);
    else if (state.assignee && state.assignee !== 'all') {
      if (state.assignee === 'unassigned') list = list.filter((t0) => !t0.assigned_to);
      else list = list.filter((t0) => t0.assigned_to === state.assignee);
    }
    if (state.filter === 'starred') list = list.filter((t0) => t0.starred);
    else if (state.filter !== 'all') list = list.filter((t0) => t0.status === state.filter);
    // sort: starred first, then overdue, then by status priority, then created
    const order = { pending: 0, in_progress: 1, on_hold: 2, completed: 3, cancelled: 4 };
    list.sort((a, b) =>
      (b.starred - a.starred) ||
      (order[a.status] - order[b.status]) ||
      (new Date(b.created_at) - new Date(a.created_at)));
    return list;
  }

  function viewTasks() {
    const list = filteredTasks();
    const filters = ['all', 'pending', 'in_progress', 'on_hold', 'completed', 'starred'];
    let html = '<div class="screen">';

    html += '<div class="seg" style="margin-bottom:12px">' +
      '<button class="' + (state.scope === 'mine' ? 'active' : '') + '" data-act="scope" data-val="mine">' + esc(t('tabMine')) + '</button>' +
      '<button class="' + (state.scope === 'all' ? 'active' : '') + '" data-act="scope" data-val="all">' + esc(t('tabAll')) + '</button>' +
      '</div>';

    html += '<div class="filters">' + filters.map((f) =>
      '<button class="fchip' + (state.filter === f ? ' active' : '') + '" data-act="filter" data-val="' + f + '">' +
      esc(t('f.' + f)) + '</button>').join('') + '</div>';

    // assignee filter — only meaningful when viewing everyone's board
    if (state.scope === 'all') {
      html += '<div style="display:flex;align-items:center;gap:10px;margin:2px 0 14px">' +
        '<span style="color:var(--text-3);display:flex;flex:0 0 auto">' + I.users + '</span>' +
        '<select class="select" data-change="assignee" style="flex:1">' +
        '<option value="all">' + esc(t('allAssignees')) + '</option>' +
        state.members.map((m) => '<option value="' + m.id + '"' + (state.assignee === m.id ? ' selected' : '') + '>' +
          esc(displayName(m)) + (m.role === 'boss' ? ' (' + t('bossTag') + ')' : '') + '</option>').join('') +
        '<option value="unassigned"' + (state.assignee === 'unassigned' ? ' selected' : '') + '>' + esc(t('unassigned')) + '</option>' +
        '</select></div>';
    }

    const scopeHasAny = state.scope === 'mine'
      ? state.tasks.some((x) => x.assigned_to === state.me.id)
      : state.tasks.length > 0;

    if (!list.length) {
      const boss = state.me.role === 'boss';
      if (!scopeHasAny) html += emptyState(I.checks, boss ? t('emptyTasksBossTitle') : t('emptyTasksEmpTitle'),
        boss ? t('emptyTasksBossSub') : t('emptyTasksEmpSub'));
      else html += emptyState(I.checks, t('emptyFilterTitle'), t('emptyFilterSub'));
    } else if (state.filter === 'all' || state.filter === 'starred') {
      // group into sections by status (category)
      const order = ['pending', 'in_progress', 'on_hold', 'completed', 'cancelled'];
      const groups = {};
      list.forEach((tk) => { (groups[tk.status] = groups[tk.status] || []).push(tk); });
      const present = order.filter((s) => groups[s]);
      html += present.map((s, idx) =>
        '<div class="spread" style="align-items:center;margin:' + (idx === 0 ? '4px' : '22px') + ' 4px 8px">' +
        '<span class="chip ' + s + '">' + statusDot + esc(t('status.' + s)) + '</span>' +
        '<span class="muted" style="font-weight:800;font-size:13px">' + groups[s].length + '</span></div>' +
        '<div class="stack">' + groups[s].map((tk, i) => taskCard(tk, i)).join('') + '</div>'
      ).join('');
    } else {
      html += '<div class="stack">' + list.map((tk, i) => taskCard(tk, i)).join('') + '</div>';
    }
    return html + '</div>';
  }

  function statusBar(status) {
    return { pending: 'var(--st-pending-fg)', in_progress: 'var(--st-progress-fg)', on_hold: 'var(--st-hold-fg)',
      completed: 'var(--st-done-fg)', cancelled: 'var(--st-cancel-fg)' }[status] || 'var(--border-2)';
  }

  function taskCard(task, idx) {
    const assignee = profileById(task.assigned_to);
    const showAssignee = state.scope === 'all';
    const meta = [];
    if (showAssignee) {
      meta.push('<span class="mi">' + avatar(assignee, 'sm') + esc(assignee ? displayName(assignee) : t('unassigned')) + '</span>');
    }
    if (task.due_date) meta.push('<span class="mi' + (isOverdue(task) ? ' overdue' : '') + '">' + I.cal + esc(fmtDueShort(task.due_date)) + '</span>');
    if (task.priority === 'high') meta.push('<span class="chip prio-high">' + I.flag + esc(t('prio.high')) + '</span>');

    return '<div class="card task' + (task.status === 'completed' ? ' done' : '') + '" style="--bar:' + statusBar(task.status) +
      ';animation-delay:' + Math.min(idx * 35, 350) + 'ms" data-act="task:open" data-id="' + task.id + '">' +
      '<div class="t-main">' +
      '<div class="spread" style="align-items:flex-start;gap:8px">' +
      '<div class="t-title">' + esc(task.title) + '</div>' +
      '<button class="star-btn' + (task.starred ? ' on' : '') + '" data-act="task:star" data-id="' + task.id + '" data-stop="1" aria-label="star">' +
        (task.starred ? I.starFill : I.star) + '</button>' +
      '</div>' +
      (task.description ? '<div class="t-desc">' + esc(task.description) + '</div>' : '') +
      '<div class="t-meta">' +
      '<span class="chip ' + task.status + '">' + statusDot + esc(t('status.' + task.status)) + '</span>' +
      meta.join('') +
      '</div>' +
      '</div></div>';
  }

  function avatar(p, size) {
    const cls = 'avatar' + (size ? ' ' + size : '');
    const color = (p && p.avatar_color) || '#888';
    return '<span class="' + cls + '" style="background:' + esc(color) + '">' + esc(p ? initials(p.full_name, p.email) : '?') + '</span>';
  }

  function emptyState(icon, title, sub) {
    return '<div class="empty"><div class="e-ico">' + icon + '</div><h3>' + esc(title) + '</h3><p>' + esc(sub) + '</p></div>';
  }

  /* ============================================================
     TASK SHEET (detail + chat)
     ============================================================ */
  let openTaskId = null;
  let chatDraft = '';

  async function openTask(id) {
    openTaskId = id;
    const task = state.tasks.find((x) => x.id === id);
    if (!task) return;
    renderTaskSheet(task, true);
    subscribeChat(id);
    await loadComments(id);
  }

  function closeSheet() {
    openTaskId = null; chatDraft = '';
    if (chatChannel) { try { sb.removeChannel(chatChannel); } catch (e) {} chatChannel = null; }
    modalRoot().innerHTML = '';
  }

  function refreshOpenSheet() {
    if (!openTaskId) return;
    const task = state.tasks.find((x) => x.id === openTaskId);
    if (!task) { closeSheet(); return; }
    // patch status chip + star + done class + selected option without rebuilding chat
    const sheet = $('#task-sheet'); if (!sheet) return;
    const chip = sheet.querySelector('#sheet-status-chip');
    if (chip) { chip.className = 'chip ' + task.status; chip.innerHTML = statusDot + esc(t('status.' + task.status)); }
    const sel = sheet.querySelector('#sheet-status');
    if (sel && sel.value !== task.status) sel.value = task.status;
    const star = sheet.querySelector('#sheet-star');
    if (star) { star.className = 'star-btn' + (task.starred ? ' on' : ''); star.innerHTML = task.starred ? I.starFill : I.star; }
  }

  function canChat(task) {
    return state.me.role === 'boss' || task.assigned_to === state.me.id;
  }
  function canEditStatus(task) {
    return state.me.role === 'boss' || task.assigned_to === state.me.id;
  }

  function renderTaskSheet(task, withChatLoading) {
    const boss = state.me.role === 'boss';
    const assignee = profileById(task.assigned_to);
    const creator = profileById(task.created_by);

    const statusSelect = canEditStatus(task) ?
      ('<select class="select" id="sheet-status" data-change="task:status" data-id="' + task.id + '" style="margin-top:6px">' +
        STATUSES.map((s) => '<option value="' + s + '"' + (task.status === s ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>').join('') +
        '</select>') :
      ('<div style="margin-top:6px"><span id="sheet-status-chip" class="chip ' + task.status + '">' + statusDot + esc(t('status.' + task.status)) + '</span></div>');

    const infoRows =
      '<div class="list mt-16">' +
      row(I.user, t('assignedTo'), assignee ? displayName(assignee) : t('unassigned')) +
      (task.due_date ? row(I.cal, t('dueLabel'), fmtDate(task.due_date + 'T00:00:00')) : '') +
      row(I.flag, t('priorityLabel'), t('prio.' + task.priority)) +
      '</div>';

    const chatSection = canChat(task) ?
      ('<div class="section-title">' + esc(t('chatTitle')) + '</div>' +
        '<div id="chat-box" class="chat">' + (withChatLoading ? '<div class="chat-empty"><div class="spinner" style="margin:0 auto"></div></div>' : '') + '</div>') :
      ('<div class="card mt-16"><p class="muted tiny" style="margin:0">' + esc(t('chatLocked')) + '</p></div>');

    const footer = canChat(task) ?
      ('<div class="sheet-foot"><div class="chat-input grow">' +
        '<textarea class="textarea" id="chat-text" rows="1" placeholder="' + esc(t('chatPlaceholder')) + '">' + esc(chatDraft) + '</textarea>' +
        '<button class="btn btn-primary" data-act="chat:send" data-id="' + task.id + '" style="padding:0 14px;height:44px">' + I.send + '</button>' +
        '</div></div>') : '';

    modalRoot().innerHTML =
      '<div class="overlay" data-act="sheet:bg"><div class="sheet" id="task-sheet" data-stop="1">' +
      '<div class="sheet-head">' +
      '<button class="icon-btn" data-act="sheet:close">' + I.arrowL + '</button>' +
      '<h2>' + esc(task.title) + '</h2>' +
      '<button class="star-btn' + (task.starred ? ' on' : '') + '" id="sheet-star" data-act="task:star" data-id="' + task.id + '">' +
        (task.starred ? I.starFill : I.star) + '</button>' +
      (boss ? iconBtn('task:edit', I.pencil, task.id) : '') +
      '</div>' +
      '<div class="sheet-body">' +
      '<div class="spread" style="align-items:flex-start"><div class="grow">' +
      '<div class="label" style="font-size:13px;font-weight:700;color:var(--text-2)">' + esc(t('statusLabel')) + '</div>' +
      statusSelect +
      '</div></div>' +
      (task.description ? '<div class="card mt-16"><div style="white-space:pre-wrap;line-height:1.5">' + esc(task.description) + '</div></div>' : '') +
      infoRows +
      (creator ? '<p class="tiny muted" style="margin:12px 4px 0">' +
        esc((state.lang === 'el' ? 'Δημιουργήθηκε από ' : 'Created by ') + displayName(creator) + ' • ' + fmtDate(task.created_at)) + '</p>' : '') +
      chatSection +
      '</div>' +
      footer +
      '</div></div>';

    autosizeChat();
  }

  function row(icon, title, sub) {
    return '<div class="list-row"><div class="lr-ico">' + icon + '</div>' +
      '<div class="lr-main"><div class="t">' + esc(title) + '</div>' +
      (sub ? '<div class="s">' + esc(sub) + '</div>' : '') + '</div></div>';
  }

  async function loadComments(taskId) {
    const { data, error } = await sb.from('comments').select('*').eq('task_id', taskId).order('created_at', { ascending: true });
    if (openTaskId !== taskId) return;
    const box = $('#chat-box'); if (!box) return;
    if (error) { box.innerHTML = '<div class="chat-empty">' + esc(t('genericError')) + '</div>'; return; }
    renderChat(data || []);
  }

  function renderChat(comments) {
    const box = $('#chat-box'); if (!box) return;
    if (!comments.length) { box.innerHTML = '<div class="chat-empty">' + esc(t('chatEmpty')) + '</div>'; return; }
    box.innerHTML = comments.map(msgHtml).join('');
    box.scrollTop = box.scrollHeight;
  }

  function msgHtml(c) {
    const mine = c.user_id === state.me.id;
    const p = profileById(c.user_id);
    const pending = String(c.id).indexOf('tmp-') === 0;
    return '<div class="msg' + (mine ? ' me' : '') + '" data-cid="' + esc(c.id) + '" data-uid="' + esc(c.user_id) +
      '" data-content="' + esc(c.content) + '"' + (pending ? ' data-pending="1"' : '') + '>' +
      '<div class="bubble">' + esc(c.content) + '</div>' +
      '<div class="meta">' + esc(mine ? t('you') : displayName(p)) + ' · ' + esc(relTime(c.created_at)) + '</div></div>';
  }

  function appendMessage(c) {
    const box = $('#chat-box'); if (!box) return;
    const empty = box.querySelector('.chat-empty'); if (empty) box.innerHTML = '';
    // already shown by id?
    if (box.querySelector('[data-cid="' + c.id + '"]')) return;
    // reconcile: a real row arriving for a message we already showed optimistically
    if (String(c.id).indexOf('tmp-') !== 0) {
      const pend = Array.prototype.slice.call(box.querySelectorAll('.msg[data-pending="1"]'))
        .find((n) => n.getAttribute('data-uid') === c.user_id && n.getAttribute('data-content') === c.content);
      if (pend) { pend.setAttribute('data-cid', c.id); pend.removeAttribute('data-pending'); return; }
    }
    const wrap = document.createElement('div');
    wrap.innerHTML = msgHtml(c);
    box.appendChild(wrap.firstElementChild);
    box.scrollTop = box.scrollHeight;
  }

  function subscribeChat(taskId) {
    if (chatChannel) { try { sb.removeChannel(chatChannel); } catch (e) {} }
    chatChannel = sb.channel('rt-chat-' + taskId)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments', filter: 'task_id=eq.' + taskId },
        (payload) => { if (openTaskId === taskId) appendMessage(payload.new); })
      .subscribe();
  }

  function autosizeChat() {
    const ta = $('#chat-text'); if (!ta) return;
    const fit = () => { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'; };
    ta.addEventListener('input', () => { chatDraft = ta.value; fit(); });
    ta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendComment(openTaskId); }
    });
    fit();
  }

  async function sendComment(taskId) {
    const ta = $('#chat-text'); if (!ta) return;
    const content = ta.value.trim(); if (!content) return;
    ta.value = ''; chatDraft = ''; ta.style.height = '44px';
    const optimistic = { id: 'tmp-' + Date.now(), task_id: taskId, user_id: state.me.id, content, created_at: new Date().toISOString() };
    appendMessage(optimistic);
    try {
      const { error } = await sb.from('comments').insert({ task_id: taskId, user_id: state.me.id, content });
      if (error) throw error;
    } catch (e) { toast(t('genericError'), true); }
  }

  /* ---------------- task mutations ---------------- */
  async function toggleStar(id) {
    const task = state.tasks.find((x) => x.id === id); if (!task) return;
    const next = !task.starred; task.starred = next;
    if (state.view === 'tasks') renderView();
    refreshOpenSheet();
    const star = $('.star-btn[data-id="' + id + '"]');
    try {
      const { error } = await sb.from('tasks').update({ starred: next }).eq('id', id);
      if (error) throw error;
    } catch (e) { task.starred = !next; if (state.view === 'tasks') renderView(); refreshOpenSheet(); toast(t('genericError'), true); }
  }

  async function setStatus(id, status) {
    const task = state.tasks.find((x) => x.id === id); if (!task) return;
    const prev = task.status; task.status = status;
    if (status === 'completed') task.completed_at = new Date().toISOString();
    if (state.view === 'tasks') renderView();
    refreshOpenSheet();
    try { const { error } = await sb.from('tasks').update({ status }).eq('id', id); if (error) throw error; }
    catch (e) { task.status = prev; if (state.view === 'tasks') renderView(); refreshOpenSheet(); toast(t('genericError'), true); }
  }

  /* ============================================================
     TASK FORM (create / edit) — boss only
     ============================================================ */
  function openTaskForm(taskId) {
    const editing = !!taskId;
    const task = editing ? state.tasks.find((x) => x.id === taskId) : null;
    const employees = state.members; // boss can assign to anyone in org (incl. self)

    modalRoot().innerHTML =
      '<div class="overlay" data-act="form:bg"><div class="sheet" data-stop="1">' +
      '<div class="sheet-head"><button class="icon-btn" data-act="form:close">' + I.x + '</button>' +
      '<h2>' + esc(editing ? t('editTaskTitle') : t('newTaskTitle')) + '</h2></div>' +
      '<div class="sheet-body">' +
      '<div id="form-msg"></div>' +
      '<label class="field"><span class="label">' + esc(t('titleLabel')) + '</span>' +
      '<input class="input" id="f-title" type="text" placeholder="' + esc(t('titlePlaceholder')) + '" value="' + esc(task ? task.title : '') + '" /></label>' +
      '<label class="field"><span class="label">' + esc(t('descLabel')) + '</span>' +
      '<textarea class="textarea" id="f-desc" placeholder="' + esc(t('descPlaceholder')) + '">' + esc(task ? (task.description || '') : '') + '</textarea></label>' +
      '<label class="field"><span class="label">' + esc(t('assigneeLabel')) + '</span>' +
      '<select class="select" id="f-assignee">' +
      '<option value="">' + esc(t('unassigned')) + '</option>' +
      employees.map((m) => '<option value="' + m.id + '"' + (task && task.assigned_to === m.id ? ' selected' : '') + '>' +
        esc(displayName(m)) + (m.role === 'boss' ? ' (' + t('bossTag') + ')' : '') + '</option>').join('') +
      '</select></label>' +
      '<div class="row">' +
      '<label class="field"><span class="label">' + esc(t('priorityLabel')) + '</span>' +
      '<select class="select" id="f-prio">' + PRIORITIES.map((p) =>
        '<option value="' + p + '"' + ((task ? task.priority : 'normal') === p ? ' selected' : '') + '>' + esc(t('prio.' + p)) + '</option>').join('') + '</select></label>' +
      '<label class="field"><span class="label">' + esc(t('dueLabel')) + '</span>' +
      '<input class="input" id="f-due" type="date" value="' + esc(task && task.due_date ? task.due_date : '') + '" /></label>' +
      '</div>' +
      (editing ?
        '<label class="field"><span class="label">' + esc(t('statusLabel')) + '</span>' +
        '<select class="select" id="f-status">' + STATUSES.map((s) =>
          '<option value="' + s + '"' + (task.status === s ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>').join('') + '</select></label>' : '') +
      (editing ? '<button class="btn btn-danger btn-block mt-8" data-act="task:delete" data-id="' + taskId + '">' + I.trash + esc(t('deleteTask')) + '</button>' : '') +
      '</div>' +
      '<div class="sheet-foot">' +
      '<button class="btn grow" data-act="form:close">' + esc(t('cancel')) + '</button>' +
      '<button class="btn btn-primary grow" data-act="task:save" data-id="' + (taskId || '') + '"><span class="lbl">' + esc(editing ? t('saveChanges') : t('createTaskBtn')) + '</span></button>' +
      '</div></div></div>';
  }

  async function saveTask(taskId, btn) {
    const title = ($('#f-title') || {}).value || '';
    if (!title.trim()) { const m = $('#form-msg'); if (m) m.innerHTML = '<div class="error-text">' + esc(t('titleRequired')) + '</div>'; return; }
    const payload = {
      title: title.trim(),
      description: (($('#f-desc') || {}).value || '').trim() || null,
      assigned_to: (($('#f-assignee') || {}).value || '') || null,
      priority: ($('#f-prio') || {}).value || 'normal',
      due_date: (($('#f-due') || {}).value || '') || null
    };
    btnBusy(btn, true);
    try {
      if (taskId) {
        const st = ($('#f-status') || {}).value; if (st) payload.status = st;
        const { error } = await sb.from('tasks').update(payload).eq('id', taskId);
        if (error) throw error;
      } else {
        payload.org_id = state.me.org_id; payload.created_by = state.me.id;
        const { error } = await sb.from('tasks').insert(payload);
        if (error) throw error;
      }
      await reloadTasks();
      modalRoot().innerHTML = '';
      if (openTaskId === taskId) { const tk = state.tasks.find((x) => x.id === taskId); if (tk) { renderTaskSheet(tk); subscribeChat(taskId); loadComments(taskId); } }
      if (state.view === 'tasks') renderView();
      toast(t('savedToast'));
    } catch (e) { btnBusy(btn, false); const m = $('#form-msg'); if (m) m.innerHTML = '<div class="error-text">' + esc(e.message || t('genericError')) + '</div>'; }
  }

  async function deleteTask(id) {
    if (!confirm(t('deleteTaskConfirm'))) return;
    try {
      const { error } = await sb.from('tasks').delete().eq('id', id); if (error) throw error;
      state.tasks = state.tasks.filter((x) => x.id !== id);
      modalRoot().innerHTML = ''; openTaskId = null;
      if (state.view === 'tasks') renderView();
      toast(t('savedToast'));
    } catch (e) { toast(t('genericError'), true); }
  }

  /* ============================================================
     NOTIFICATIONS VIEW
     ============================================================ */
  function notifIconFor(type) {
    const map = {
      task_assigned: { i: I.list, bg: 'var(--accent-weak)', fg: 'var(--accent)' },
      task_status:   { i: I.refresh, bg: 'var(--st-progress-bg)', fg: 'var(--st-progress-fg)' },
      new_comment:   { i: I.chat, bg: 'var(--st-done-bg)', fg: 'var(--st-done-fg)' },
      task_updated:  { i: I.pencil, bg: 'var(--st-pending-bg)', fg: 'var(--st-pending-fg)' }
    };
    const m = map[type] || map.task_updated;
    return '<div class="n-ico" style="background:' + m.bg + ';color:' + m.fg + '">' + m.i + '</div>';
  }

  function viewNotifications() {
    const unread = state.notifications.filter((n) => !n.is_read).length;
    let html = '<div class="screen">';
    html += '<div class="spread" style="margin:6px 2px 14px"><div class="section-title" style="margin:0">' + esc(t('notifTitle')) + '</div>' +
      (unread ? '<button class="link-btn" data-act="notif:readall">' + esc(t('markAllRead')) + '</button>' : '') + '</div>';
    if (!state.notifications.length) {
      html += emptyState(I.bell, t('noNotifTitle'), t('noNotifSub'));
    } else {
      html += '<div class="list">' + state.notifications.map((n) =>
        '<div class="notif' + (n.is_read ? '' : ' unread') + '" data-act="notif:open" data-id="' + n.id + '" data-task="' + (n.task_id || '') + '">' +
        notifIconFor(n.type) +
        '<div class="n-main"><div class="n-title">' + esc(t('n.' + n.type)) + '</div>' +
        (n.body ? '<div class="n-body">' + esc(n.body) + '</div>' : '') +
        '<div class="n-time">' + esc(relTime(n.created_at)) + '</div></div>' +
        (n.is_read ? '' : '<span class="n-dot"></span>') +
        '</div>').join('') + '</div>';
    }
    return html + '</div>';
  }

  async function openNotification(id, taskId) {
    const n = state.notifications.find((x) => x.id === id);
    if (n && !n.is_read) { n.is_read = true; renderView(); updateNavBadges(); markNotifRead([id]); }
    if (taskId) {
      state.view = 'tasks';
      if (!state.tasks.find((x) => x.id === taskId)) await reloadTasks();
      renderApp();
      openTask(taskId);
    }
  }
  async function markNotifRead(ids) {
    try { await sb.from('notifications').update({ is_read: true }).in('id', ids); } catch (e) {}
  }
  async function markAllRead() {
    const ids = state.notifications.filter((n) => !n.is_read).map((n) => n.id);
    state.notifications.forEach((n) => n.is_read = true);
    renderView(); updateNavBadges();
    if (ids.length) markNotifRead(ids);
  }

  /* ============================================================
     SETTINGS VIEW
     ============================================================ */
  function viewSettings() {
    const me = state.me, boss = me.role === 'boss';
    const theme = me.theme || 'system';
    const lang = state.lang;
    const notifPerm = ('Notification' in window) ? Notification.permission : 'unsupported';

    let html = '<div class="screen"><div class="stack-lg">';

    // profile header
    html += '<div class="card pad-lg"><div style="display:flex;gap:14px;align-items:center">' +
      avatar(me, 'lg') +
      '<div class="grow"><div style="font-weight:800;font-size:18px">' + esc(displayName(me)) + '</div>' +
      '<div class="muted tiny">' + esc(me.email || '') + '</div>' +
      '<span class="chip ' + (boss ? 'completed' : '') + '" style="margin-top:6px">' + esc(t('role.' + me.role)) + '</span>' +
      '</div></div>' +
      '<label class="field mt-16" style="margin-bottom:0"><span class="label">' + esc(t('nameLabel')) + '</span>' +
      '<div class="row"><input class="input" id="set-name" type="text" value="' + esc(me.full_name || '') + '" />' +
      '<button class="btn btn-soft" data-act="profile:save" style="flex:0 0 auto">' + esc(t('save')) + '</button></div></label>' +
      '</div>';

    // appearance
    html += '<div><div class="section-title">' + esc(t('secAppearance')) + '</div>' +
      '<div class="list">' +
      settingSelect(I.palette, t('themeLabel'), 'theme:set', theme,
        [['system', t('theme.system')], ['light', t('theme.light')], ['dark', t('theme.dark')]]) +
      settingSelect('<b style="font-weight:800;font-size:13px">' + (lang === 'el' ? 'ΕΛ' : 'EN') + '</b>', t('langLabel'), 'lang:set', lang,
        [['el', 'Ελληνικά'], ['en', 'English']]) +
      '</div></div>';

    // notifications
    const browserSub = notifPerm === 'granted' ? t('notifBrowserSub')
      : notifPerm === 'denied' ? t('notifBrowserBlocked') : t('notifBrowserSub');
    html += '<div><div class="section-title">' + esc(t('secNotif')) + '</div><div class="list">' +
      '<div class="list-row"><div class="lr-ico">' + I.bell + '</div>' +
      '<div class="lr-main"><div class="t">' + esc(t('notifInApp')) + '</div><div class="s">' + esc(t('notifInAppSub')) + '</div></div>' +
      switchEl('notify:toggle', me.notify_enabled) + '</div>' +
      '<div class="list-row"><div class="lr-ico">' + I.bell + '</div>' +
      '<div class="lr-main"><div class="t">' + esc(t('notifBrowser')) + '</div><div class="s">' + esc(browserSub) + '</div></div>' +
      (notifPerm === 'granted' ? '<span class="chip completed">✓</span>'
        : notifPerm === 'denied' ? '<span class="chip cancelled">✕</span>'
        : '<button class="btn btn-soft btn-sm" data-act="notif:perm">' + esc(t('enable')) + '</button>') +
      '</div></div></div>';

    // team (boss)
    if (boss) {
      html += '<div><div class="section-title">' + esc(t('secTeam')) + '</div>' +
        '<div class="card pad-lg">' +
        '<div class="label" style="font-size:13px;font-weight:700;color:var(--text-2)">' + esc(t('joinCodeLabel')) + '</div>' +
        '<div class="s muted tiny" style="margin:2px 0 10px">' + esc(t('joinCodeSub')) + '</div>' +
        '<div class="codebox"><div class="code">' + esc(state.org.join_code) + '</div>' +
        iconBtn('code:copy', I.copy) + iconBtn('code:regen', I.refresh) + '</div>' +
        '<label class="field mt-16" style="margin-bottom:8px"><span class="label">' + esc(t('inviteEmailLabel')) + '</span>' +
        '<div class="row"><input class="input" id="set-invite" type="email" placeholder="' + esc(t('inviteEmailPlaceholder')) + '" />' +
        '<button class="btn btn-soft" data-act="invite:send" style="flex:0 0 auto">' + esc(t('sendInvite')) + '</button></div></label>' +
        '<div id="invite-msg"></div>' +
        '</div>';

      // members
      html += '<div class="list mt-8">' + state.members.map((m) =>
        '<div class="list-row">' + avatar(m) +
        '<div class="lr-main"><div class="t">' + esc(displayName(m)) + (m.id === me.id ? ' <span class="chip" style="padding:2px 7px;font-size:10px">' + esc(t('youTag')) + '</span>' : '') + '</div>' +
        '<div class="s">' + esc(m.email || '') + '</div></div>' +
        '<span class="chip' + (m.role === 'boss' ? ' completed' : '') + '" style="font-size:11px">' + esc(t('role.' + m.role)) + '</span></div>').join('') + '</div>';

      // pending invites
      if (state.invites.length) {
        html += '<div class="section-title">' + esc(t('pendingInvites')) + '</div><div class="list">' +
          state.invites.map((iv) => '<div class="list-row"><div class="lr-ico">' + I.mail + '</div>' +
            '<div class="lr-main"><div class="t">' + esc(iv.email) + '</div></div>' +
            '<button class="icon-btn" data-act="invite:cancel" data-id="' + iv.id + '">' + I.x + '</button></div>').join('') + '</div>';
      }
      html += '</div>';

      // org
      html += '<div><div class="section-title">' + esc(t('secOrg')) + '</div><div class="list">' +
        '<div class="list-row"><div class="lr-ico">' + I.shop + '</div>' +
        '<div class="lr-main"><div class="t">' + esc(t('businessNameLabel')) + '</div></div></div>' +
        '<div class="list-row"><input class="input" id="set-orgname" type="text" value="' + esc(state.org.name) + '" />' +
        '<button class="btn btn-soft" data-act="org:rename" style="flex:0 0 auto">' + esc(t('save')) + '</button></div>' +
        '<div class="list-row link" data-act="org:delete"><div class="lr-ico" style="background:var(--st-cancel-bg);color:var(--st-cancel-fg)">' + I.trash + '</div>' +
        '<div class="lr-main"><div class="t" style="color:var(--st-cancel-fg)">' + esc(t('deleteBiz')) + '</div></div></div>' +
        '</div></div>';
    } else {
      // employee: show business + leave
      html += '<div><div class="section-title">' + esc(t('secOrg')) + '</div><div class="list">' +
        '<div class="list-row"><div class="lr-ico">' + I.shop + '</div>' +
        '<div class="lr-main"><div class="t">' + esc(state.org.name) + '</div><div class="s">' + esc(t('joinCodeLabel')) + ': ' + esc(state.org.join_code) + '</div></div></div>' +
        '<div class="list-row link" data-act="org:leave"><div class="lr-ico" style="background:var(--st-cancel-bg);color:var(--st-cancel-fg)">' + I.logout + '</div>' +
        '<div class="lr-main"><div class="t" style="color:var(--st-cancel-fg)">' + esc(t('leaveBiz')) + '</div></div></div>' +
        '</div></div>';
    }

    // account
    html += '<div><div class="section-title">' + esc(t('secAccount')) + '</div><div class="list">' +
      '<div class="list-row link" data-act="signout"><div class="lr-ico">' + I.logout + '</div>' +
      '<div class="lr-main"><div class="t">' + esc(t('signOut')) + '</div><div class="s">' + esc(me.email || '') + '</div></div></div>' +
      '</div></div>';

    html += '<p class="text-c tiny muted mt-8">Boss Around · PWA</p>';
    return html + '</div></div>';
  }

  function settingSelect(icon, title, act, value, options) {
    return '<div class="list-row"><div class="lr-ico">' + icon + '</div>' +
      '<div class="lr-main"><div class="t">' + esc(title) + '</div></div>' +
      '<select class="select" data-change="' + act + '" style="width:auto;min-width:130px;padding:9px 36px 9px 12px">' +
      options.map((o) => '<option value="' + o[0] + '"' + (value === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>').join('') +
      '</select></div>';
  }
  function switchEl(act, on) {
    return '<label class="switch"><input type="checkbox"' + (on ? ' checked' : '') + ' data-change="' + act + '" /><span class="track"></span></label>';
  }

  async function saveName() {
    const name = (($('#set-name') || {}).value || '').trim();
    state.me.full_name = name;
    await saveProfile({ full_name: name });
    toast(t('savedToast'));
    renderView();
  }
  async function renameOrg() {
    const name = (($('#set-orgname') || {}).value || '').trim(); if (!name) return;
    try { const { error } = await sb.from('organizations').update({ name }).eq('id', state.org.id); if (error) throw error;
      state.org.name = name; toast(t('savedToast')); }
    catch (e) { toast(t('genericError'), true); }
  }
  async function regenCode(btn) {
    btnBusy(btn, true);
    try { const { data, error } = await sb.rpc('regenerate_join_code'); if (error) throw error;
      state.org.join_code = data; renderView(); toast(t('regenerated')); }
    catch (e) { btnBusy(btn, false); toast(t('genericError'), true); }
  }
  function copyCode() {
    const txt = state.org.join_code;
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => toast(t('copied')), () => toast(txt));
    else toast(txt);
  }
  async function sendInvite() {
    const email = (($('#set-invite') || {}).value || '').trim().toLowerCase();
    const msg = $('#invite-msg');
    const setMsg = (h, ok) => { if (msg) msg.innerHTML = h ? '<div class="' + (ok ? 'ok-text' : 'error-text') + '">' + esc(h) + '</div>' : ''; };
    if (!email) return;
    if (email === (state.me.email || '').toLowerCase()) return setMsg(t('inviteSelf'));
    try {
      const { error } = await sb.from('invites').insert({ org_id: state.org.id, email, invited_by: state.me.id });
      if (error) { if (/duplicate|unique/i.test(error.message)) return setMsg(t('inviteExists')); throw error; }
      const { data } = await sb.from('invites').select('*').eq('org_id', state.org.id).eq('status', 'pending');
      state.invites = data || [];
      renderView();
      const m2 = $('#invite-msg'); if (m2) m2.innerHTML = '<div class="ok-text">' + esc(t('inviteSent')) + '</div>';
    } catch (e) { setMsg(e.message || t('genericError')); }
  }
  async function cancelInvite(id) {
    try { await sb.from('invites').update({ status: 'cancelled' }).eq('id', id);
      state.invites = state.invites.filter((i) => i.id !== id); renderView(); } catch (e) {}
  }
  async function leaveOrg() {
    if (!confirm(t('leaveConfirm'))) return;
    try { const { error } = await sb.rpc('leave_organization'); if (error) throw error;
      state.me.org_id = null; state.me.role = 'employee'; teardownChannels(); route(); }
    catch (e) { toast(t('genericError'), true); }
  }
  async function deleteOrg() {
    if (!confirm(t('deleteBizConfirm'))) return;
    try { const { error } = await sb.from('organizations').delete().eq('id', state.org.id); if (error) throw error;
      state.me.org_id = null; state.me.role = 'employee'; state.org = null; state.tasks = []; teardownChannels(); route(); }
    catch (e) { toast(t('genericError'), true); }
  }
  async function toggleNotify(on) {
    state.me.notify_enabled = on;
    await saveProfile({ notify_enabled: on });
    if (on && ('Notification' in window) && Notification.permission === 'default') requestNotifPermission();
  }

  /* ============================================================
     SIGN OUT
     ============================================================ */
  async function signOut() {
    if (!confirm(t('signOutConfirm'))) return;
    teardownChannels();
    try { await sb.auth.signOut(); } catch (e) {}
    Object.assign(state, { session: null, me: null, org: null, members: [], tasks: [], notifications: [], invites: [], myInvites: [], view: 'tasks' });
    route();
  }

  /* ============================================================
     EVENT DELEGATION
     ============================================================ */
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.getAttribute('data-act');
    const id = el.getAttribute('data-id');
    const val = el.getAttribute('data-val');

    switch (act) {
      case 'lang:set': setLang(val); break;
      case 'toggle-theme': {
        const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(cur);
        const ib = el; ib.innerHTML = (cur === 'dark') ? I.sun : I.moon;
        break;
      }
      case 'auth:toggle': state.authMode = state.authMode === 'signup' ? 'signin' : 'signup'; renderAuth(); break;
      case 'auth:submit': doAuthSubmit(el); break;
      case 'auth:magic': doMagicLink(el); break;

      case 'onb:show': {
        const target = $('#onb-' + val); if (target) target.classList.toggle('hidden');
        break;
      }
      case 'onb:create': doCreateOrg(el); break;
      case 'onb:join': doJoinOrg(el); break;
      case 'onb:accept': doAcceptInvite(id, el); break;

      case 'nav': state.view = val; renderApp(); break;

      case 'scope': state.scope = val; renderView(); break;
      case 'filter': state.filter = val; renderView(); break;

      case 'task:new': openTaskForm(null); break;
      case 'task:open': {
        if (e.target.closest('.star-btn')) break; // star handled separately
        openTask(id); break;
      }
      case 'task:star': e.stopPropagation(); toggleStar(id); break;
      case 'task:edit': openTaskForm(id); break;
      case 'task:save': saveTask(id || null, el); break;
      case 'task:delete': deleteTask(id); break;

      case 'sheet:close': closeSheet(); break;
      case 'sheet:bg': if (e.target.classList.contains('overlay')) closeSheet(); break;
      case 'form:close': modalRoot().innerHTML = ''; break;
      case 'form:bg': if (e.target.classList.contains('overlay')) modalRoot().innerHTML = ''; break;

      case 'chat:send': sendComment(id); break;

      case 'notif:open': openNotification(id, el.getAttribute('data-task') || null); break;
      case 'notif:readall': markAllRead(); break;
      case 'notif:perm': requestNotifPermission(); break;

      case 'profile:save': saveName(); break;
      case 'org:rename': renameOrg(); break;
      case 'org:leave': leaveOrg(); break;
      case 'org:delete': deleteOrg(); break;
      case 'code:copy': copyCode(); break;
      case 'code:regen': regenCode(el); break;
      case 'invite:send': sendInvite(); break;
      case 'invite:cancel': cancelInvite(id); break;

      case 'signout': signOut(); break;
    }
  });

  document.addEventListener('change', (e) => {
    const el = e.target.closest('[data-change]');
    if (!el) return;
    const act = el.getAttribute('data-change');
    const id = el.getAttribute('data-id');
    switch (act) {
      case 'theme:set': setTheme(el.value); break;
      case 'lang:set': setLang(el.value); break;
      case 'task:status': setStatus(id, el.value); break;
      case 'assignee': state.assignee = el.value; renderView(); break;
      case 'notify:toggle': toggleNotify(el.checked); break;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { if (openTaskId) closeSheet(); else if (modalRoot().innerHTML) modalRoot().innerHTML = ''; }
  });

  /* ============================================================
     BOOT
     ============================================================ */
  async function afterOrgReady() {
    state.view = 'tasks';
    setupRealtime();
    renderApp();
    // ask for notification permission opportunistically if enabled
    if (state.me.notify_enabled && ('Notification' in window) && Notification.permission === 'default') {
      // defer slightly so it doesn't block first paint
      setTimeout(() => { try { Notification.requestPermission(); } catch (e) {} }, 1200);
    }
  }

  async function onSignedIn() {
    renderLoading();
    try {
      await loadProfile();
      if (!state.me.org_id) {
        const { data } = await sb.rpc('get_my_invites');
        state.myInvites = data || [];
        renderOnboarding();
      } else {
        await loadOrgData();
        await afterOrgReady();
      }
    } catch (e) {
      app().innerHTML = '<div class="screen no-nav"><div class="center-wrap"><div class="card pad-lg mt-24">' +
        '<div class="error-text">' + esc(e.message || t('genericError')) + '</div>' +
        '<button class="btn btn-primary btn-block" data-act="signout">' + esc(t('signOut')) + '</button></div></div></div>';
    }
  }

  async function boot() {
    // language preference (before sign in)
    try { const l = localStorage.getItem('ba_lang'); if (l) { state.lang = l; document.documentElement.lang = l; } } catch (e) {}

    if (!configOK()) { renderConfigMissing(); return; }

    sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });

    const { data: { session } } = await sb.auth.getSession();
    state.session = session;

    sb.auth.onAuthStateChange((event, sess) => {
      const had = !!state.session;
      state.session = sess;
      if (event === 'SIGNED_IN' && !had) onSignedIn();
      else if (event === 'SIGNED_OUT') { teardownChannels(); route(); }
    });

    if (session) onSignedIn();
    else route();
  }

  // Test-only hook (inert in production; only active when a test harness opts in)
  if (typeof window !== 'undefined' && window.__BA_ENABLE_TEST__) {
    window.__BA_TEST__ = {
      state, DICT, t,
      setState: (p) => Object.assign(state, p),
      renderConfigMissing, renderAuth, renderOnboarding, renderApp, renderView,
      viewTasks, viewNotifications, viewSettings, openTaskForm, renderTaskSheet, taskCard,
      filteredTasks, appendMessage, msgHtml, renderChat
    };
  }

  // wait for the supabase UMD global to be present
  function start() {
    if (!window.supabase) { setTimeout(start, 30); return; }
    boot();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
