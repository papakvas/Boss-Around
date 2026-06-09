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

      navTasks: 'Εργασίες', navNotif: 'Ειδοποιήσεις', navSettings: 'Ρυθμίσεις', navCalendar: 'Ημερολόγιο',
      today: 'Σήμερα', noTasksDay: 'Καμία εργασία για αυτή την ημέρα',
      dateFilter: 'Ημερομηνία', dateFilterTitle: 'Φίλτρο ημερομηνίας',
      presetToday: 'Σήμερα', presetWeek: 'Αυτή την εβδομάδα', presetMonth: 'Αυτόν τον μήνα',
      fromLabel: 'Από', toLabel: 'Έως', apply: 'Εφαρμογή', clear: 'Καθαρισμός',
      tabMine: 'Δικές μου', tabAll: 'Όλες',
      'f.all': 'Όλες', 'f.pending': 'Εκκρεμείς', 'f.in_progress': 'Σε εξέλιξη',
      'f.on_hold': 'Σε αναμονή', 'f.completed': 'Ολοκληρωμένες', 'f.cancelled': 'Ακυρωμένες', 'f.starred': 'Με αστέρι',
      'f.overdue': 'Εκπρόθεσμες',
      searchPlaceholder: 'Αναζήτηση εργασιών…', sortLabel: 'Ταξινόμηση',
      'sort.smart': 'Έξυπνη', 'sort.due': 'Προθεσμία', 'sort.priority': 'Προτεραιότητα', 'sort.updated': 'Πρόσφατες', 'sort.title': 'Τίτλος',
      overdueBadge: 'Εκπρόθεσμη', loadMore: 'Περισσότερες', refreshFailed: 'Η ανανέωση απέτυχε',
      emptySearchTitle: 'Καμία εργασία', emptySearchSub: 'Δοκίμασε διαφορετικούς όρους αναζήτησης.',
      assignedTo: 'Ανατέθηκε σε', unassigned: 'Χωρίς ανάθεση', noDue: 'Χωρίς προθεσμία',
      allAssignees: 'Όλοι οι υπεύθυνοι',
      markComplete: 'Σήμανση ως ολοκληρωμένη',
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
      assigneesLabel: 'Υπεύθυνοι', extraAssigneesLabel: 'Επιπλέον υπεύθυνοι',
      primaryTag: 'κύριος', noOtherMembers: 'Δεν υπάρχουν άλλα μέλη στην ομάδα.', selectPlaceholder: 'Επιλέξτε…',
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
      'role.boss': 'Αφεντικό', 'role.employee': 'Υπάλληλος', 'role.manager': 'Υπεύθυνος',
      canAddJobs: 'Προσθήκη εργασιών',
      roleHint: 'Ο «Υπεύθυνος» έχει πλήρη πρόσβαση (όπως το αφεντικό), εκτός από τη διαγραφή/μετονομασία της επιχείρησης και τη διαχείριση ρόλων.',
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
      navHome: 'Αρχική',
      greetMorning: 'Καλημέρα', greetAfternoon: 'Καλησπέρα', greetEvening: 'Καλησπέρα',
      homeSubBoss: 'Η εικόνα της ομάδας με μια ματιά', homeSubEmp: 'Οι εργασίες σας με μια ματιά',
      statOpen: 'Ανοιχτές', statOverdue: 'Εκπρόθεσμες', statDueToday: 'Σήμερα', statDoneWeek: 'Ολοκληρ. (7 ημ.)',
      workloadTitle: 'Φόρτος ομάδας', openTasksWord: 'ανοιχτές',
      todayTitle: 'Για σήμερα', allClearTitle: 'Όλα τακτοποιημένα', allClearSub: 'Δεν έχετε επείγουσες εργασίες.',
      dueTimeLabel: 'Ώρα', recurLabel: 'Επανάληψη',
      'recur.none': 'Καμία', 'recur.daily': 'Καθημερινά', 'recur.weekly': 'Εβδομαδιαία', 'recur.monthly': 'Μηνιαία',
      checklistTitle: 'Λίστα ελέγχου', noSubtasks: 'Καμία υποεργασία ακόμη.', addSubtaskPlaceholder: 'Προσθήκη στοιχείου…',
      add: 'Προσθήκη', delete: 'Διαγραφή', mention: 'Αναφορά', unreadLabel: 'Μη αναγνωσμένα',
      'n.mention': 'σας ανέφερε', 'n.reminder': 'Υπενθύμιση εργασίας',
      phoneLabel: 'Τηλέφωνο', phonePlaceholder: 'π.χ. 69XXXXXXXX', jobTitleLabel: 'Θέση', jobTitlePlaceholder: 'π.χ. Σερβιτόρος',
      removeMember: 'Αφαίρεση', removeMemberConfirm: 'Αφαίρεση του/της {name} από την επιχείρηση;', memberRemoved: 'Το μέλος αφαιρέθηκε',
      changeEmail: 'Αλλαγή email', changePassword: 'Αλλαγή κωδικού', newPasswordPlaceholder: 'Νέος κωδικός', passwordTooShort: 'Τουλάχιστον 6 χαρακτήρες.',
      emailChangeSent: 'Σας στείλαμε σύνδεσμο επιβεβαίωσης.', passwordChanged: 'Ο κωδικός άλλαξε ✓',
      deleteAccount: 'Διαγραφή λογαριασμού', deleteAccountSub: 'Αφαιρεί τα δεδομένα σας', deleteAccountConfirm: 'Σίγουρα; Τα δεδομένα σας θα αφαιρεθούν οριστικά.',
      deleteAccountBoss: 'Ως ιδιοκτήτης, διαγράψτε ή μεταβιβάστε πρώτα την επιχείρηση.',

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

      navTasks: 'Tasks', navNotif: 'Alerts', navSettings: 'Settings', navCalendar: 'Calendar',
      today: 'Today', noTasksDay: 'No tasks for this day',
      dateFilter: 'Date', dateFilterTitle: 'Filter by date',
      presetToday: 'Today', presetWeek: 'This week', presetMonth: 'This month',
      fromLabel: 'From', toLabel: 'To', apply: 'Apply', clear: 'Clear',
      tabMine: 'Mine', tabAll: 'All',
      'f.all': 'All', 'f.pending': 'Pending', 'f.in_progress': 'In progress',
      'f.on_hold': 'On hold', 'f.completed': 'Completed', 'f.cancelled': 'Cancelled', 'f.starred': 'Starred',
      'f.overdue': 'Overdue',
      searchPlaceholder: 'Search tasks…', sortLabel: 'Sort',
      'sort.smart': 'Smart', 'sort.due': 'Due date', 'sort.priority': 'Priority', 'sort.updated': 'Recent', 'sort.title': 'Title',
      overdueBadge: 'Overdue', loadMore: 'Show more', refreshFailed: 'Refresh failed',
      emptySearchTitle: 'No tasks found', emptySearchSub: 'Try different search terms.',
      assignedTo: 'Assigned to', unassigned: 'Unassigned', noDue: 'No due date',
      allAssignees: 'All assignees',
      markComplete: 'Mark as completed',
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
      assigneesLabel: 'Assignees', extraAssigneesLabel: 'Additional assignees',
      primaryTag: 'main', noOtherMembers: 'No other team members yet.', selectPlaceholder: 'Select…',
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
      'role.boss': 'Boss', 'role.employee': 'Employee', 'role.manager': 'Manager',
      canAddJobs: 'Can add tasks',
      roleHint: 'A “Manager” has full access (like the boss), except for deleting/renaming the business and managing roles.',
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
      navHome: 'Home',
      greetMorning: 'Good morning', greetAfternoon: 'Good afternoon', greetEvening: 'Good evening',
      homeSubBoss: 'Your team at a glance', homeSubEmp: 'Your work at a glance',
      statOpen: 'Open', statOverdue: 'Overdue', statDueToday: 'Today', statDoneWeek: 'Done (7d)',
      workloadTitle: 'Team workload', openTasksWord: 'open',
      todayTitle: 'For today', allClearTitle: 'All clear', allClearSub: 'Nothing urgent on your plate.',
      dueTimeLabel: 'Time', recurLabel: 'Repeat',
      'recur.none': 'None', 'recur.daily': 'Daily', 'recur.weekly': 'Weekly', 'recur.monthly': 'Monthly',
      checklistTitle: 'Checklist', noSubtasks: 'No items yet.', addSubtaskPlaceholder: 'Add an item…',
      add: 'Add', delete: 'Delete', mention: 'Mention', unreadLabel: 'Unread',
      'n.mention': 'mentioned you', 'n.reminder': 'Task reminder',
      phoneLabel: 'Phone', phonePlaceholder: 'e.g. 555-0123', jobTitleLabel: 'Job title', jobTitlePlaceholder: 'e.g. Server',
      removeMember: 'Remove', removeMemberConfirm: 'Remove {name} from the business?', memberRemoved: 'Member removed',
      changeEmail: 'Change email', changePassword: 'Change password', newPasswordPlaceholder: 'New password', passwordTooShort: 'At least 6 characters.',
      emailChangeSent: 'We sent a confirmation link.', passwordChanged: 'Password changed ✓',
      deleteAccount: 'Delete account', deleteAccountSub: 'Removes your data', deleteAccountConfirm: 'Are you sure? Your data will be permanently removed.',
      deleteAccountBoss: 'As the owner, delete or transfer the business first.',

      genericError: 'Something went wrong. Please try again.',
      configMissingTitle: 'Setup required',
      configMissingSub: 'Open config.js and fill in your Supabase URL and anon key.'
    }
  };

  const STATUSES   = ['pending', 'in_progress', 'on_hold', 'completed', 'cancelled'];
  const PRIORITIES = ['low', 'normal', 'high'];
  const PAGE_SIZE = 20;
  const AVATAR_COLORS = ['#E8590C', '#2F6FED', '#1B8E4E', '#9333EA', '#D6336C', '#0CA678', '#E8A317', '#5C7CFA'];

  /* ---------------- state ---------------- */
  const state = {
    ready: false, session: null, me: null, org: null,
    members: [], tasks: [], notifications: [], invites: [], myInvites: [],
    view: 'tasks', scope: 'mine', statuses: [], starredOnly: false, assignee: 'all', collapsed: {}, armedTaskId: null,
    search: '', sort: 'smart', overdueOnly: false, taskLimit: PAGE_SIZE, refreshing: false,
    calMonth: null, calSelected: null, dateFrom: null, dateTo: null, taskAssignees: {},
    subtasks: {}, unread: {},
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

  // all assignees of a task = primary (assigned_to) + additional (task_assignees)
  function taskAssigneeIds(task) {
    const ids = [];
    if (task.assigned_to) ids.push(task.assigned_to);
    (state.taskAssignees[task.id] || []).forEach((id) => { if (ids.indexOf(id) < 0) ids.push(id); });
    return ids;
  }
  function isAssignee(task, userId) { return taskAssigneeIds(task).indexOf(userId) >= 0; }
  function avatarStack(ids, max) {
    max = max || 4;
    const shown = ids.slice(0, max).map((id) => avatar(profileById(id), 'sm')).join('');
    const extra = ids.length > max ? '<span class="avatar sm more">+' + (ids.length - max) + '</span>' : '';
    return '<span class="avatar-stack">' + shown + extra + '</span>';
  }

  // roles & permissions
  function hasFullAccess() { return !!state.me && (state.me.role === 'boss' || state.me.role === 'manager'); }
  function isOwner() { return !!state.me && state.me.role === 'boss'; }
  function canCreateTasks() { return hasFullAccess() || !!(state.me && state.me.can_create_tasks); }
  function canManageTask(task) { return hasFullAccess() || (!!task && !!state.me && task.created_by === state.me.id); }

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
  function fmtTime(hm) {
    if (!hm) return '';
    const parts = String(hm).split(':');
    return parts[0].padStart(2, '0') + ':' + (parts[1] || '00');
  }
  function dueLabel(task) {
    if (!task.due_date) return t('noDue');
    return fmtDueShort(task.due_date) + (task.due_time ? ' · ' + fmtTime(task.due_time) : '');
  }
  function dueAt(task) {
    if (!task.due_date) return null;
    const tm = task.due_time ? (task.due_time.length === 5 ? task.due_time + ':00' : task.due_time) : '23:59:59';
    return new Date(task.due_date + 'T' + tm);
  }
  const isOverdue = (task) => task.due_date && task.status !== 'completed' && task.status !== 'cancelled'
    && dueAt(task) < new Date();

  const RECUR = ['none', 'daily', 'weekly', 'monthly'];
  function recurLabel(r) { return t('recur.' + (r || 'none')); }

  // checklist / subtasks
  function subtasksFor(taskId) {
    return (state.subtasks[taskId] || []).slice().sort((a, b) => (a.position - b.position) || (new Date(a.created_at) - new Date(b.created_at)));
  }
  function subtaskProgress(taskId) {
    const list = state.subtasks[taskId] || [];
    return { done: list.filter((s) => s.done).length, total: list.length };
  }

  // unread chat
  function isUnread(taskId) { return !!state.unread[taskId]; }
  function unreadCount() { return Object.keys(state.unread).length; }

  function toast(msg, isErr) {
    const root = document.getElementById('toast-root');
    const el = document.createElement('div');
    el.className = 'toast' + (isErr ? ' err' : '');
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(8px)'; el.style.transition = 'all .2s'; }, 2400);
    setTimeout(() => el.remove(), 2700);
  }

  function haptic(ms) { try { if (navigator.vibrate) navigator.vibrate(ms || 8); } catch (e) {} }
  function resetTaskPaging() { state.taskLimit = PAGE_SIZE; }

  // case/diacritic-insensitive contains
  function norm(s) {
    s = String(s == null ? '' : s).toLowerCase();
    try { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch (e) { return s; }
  }
  function matchesSearch(task, q) {
    if (!q) return true;
    if (norm(task.title).indexOf(q) >= 0) return true;
    if (task.description && norm(task.description).indexOf(q) >= 0) return true;
    return taskAssigneeIds(task).some((id) => norm(displayName(profileById(id))).indexOf(q) >= 0);
  }

  /* ---------------- refresh helpers (pull-to-refresh) ---------------- */
  async function reloadNotifications() {
    if (!state.me) return;
    const { data } = await sb.from('notifications').select('*').eq('user_id', state.me.id)
      .order('created_at', { ascending: false }).limit(60);
    if (data) { state.notifications = data; updateNavBadges(); }
  }
  async function reloadMembers() {
    if (!state.me || !state.me.org_id) return;
    const { data } = await sb.from('profiles').select('*').eq('org_id', state.me.org_id);
    if (data) {
      state.members = data;
      const mine = data.find((p) => p.id === state.me.id);
      if (mine) { state.me.role = mine.role; state.me.can_create_tasks = mine.can_create_tasks; state.me.full_name = mine.full_name; }
    }
  }
  async function refreshData() {
    if (!state.me || !state.me.org_id) return;
    await Promise.all([reloadTasks(), reloadAssignees(), reloadNotifications(), reloadMembers()]);
    renderView();
  }

  let ptrStartY = null, ptrPulling = false;
  const ptrScroller = () => document.scrollingElement || document.documentElement;
  function ptrIndicator() {
    let el = document.getElementById('ptr');
    if (!el) { el = document.createElement('div'); el.id = 'ptr'; el.innerHTML = '<span class="spinner"></span>'; (app() || document.body).insertBefore(el, app() ? app().firstChild : null); }
    return el;
  }
  function ptrActive() {
    return state.me && state.me.org_id && !modalRoot().innerHTML &&
      (state.view === 'tasks' || state.view === 'calendar' || state.view === 'notif' || state.view === 'home');
  }
  document.addEventListener('touchstart', (e) => {
    if (!ptrActive() || ptrScroller().scrollTop > 4) { ptrStartY = null; return; }
    ptrStartY = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchmove', (e) => {
    if (ptrStartY == null || state.refreshing) return;
    const dy = e.touches[0].clientY - ptrStartY;
    if (dy > 0 && ptrScroller().scrollTop <= 0) {
      ptrPulling = true;
      const ind = ptrIndicator(); const p = Math.min(dy * 0.5, 64);
      ind.style.height = p + 'px'; ind.style.opacity = String(Math.min(p / 50, 1));
      ind.classList.toggle('ready', dy > 64);
    }
  }, { passive: true });
  document.addEventListener('touchend', () => {
    if (!ptrPulling) { ptrStartY = null; return; }
    const ind = document.getElementById('ptr'); const ready = ind && ind.classList.contains('ready');
    ptrPulling = false; ptrStartY = null;
    if (ind) ind.classList.remove('ready');
    if (ready) doPullRefresh(); else if (ind) { ind.style.height = ''; ind.style.opacity = ''; }
  });
  async function doPullRefresh() {
    if (state.refreshing) return;
    state.refreshing = true; haptic(12);
    const ind = ptrIndicator(); ind.classList.add('spin'); ind.style.height = '52px'; ind.style.opacity = '1';
    try { await refreshData(); } catch (e) { toast(t('refreshFailed'), true); }
    finally { state.refreshing = false; ind.classList.remove('spin'); ind.style.height = ''; ind.style.opacity = ''; }
  }

  /* ---------------- skeletons ---------------- */
  function skelLine(w) { return '<span class="sk-line" style="width:' + (w || 100) + '%"></span>'; }
  function chatSkeleton() {
    const row = (me) => '<div class="msg' + (me ? ' me' : '') + '"><div class="bubble sk-bubble">' + skelLine(me ? 60 : 80) + '</div></div>';
    return '<div class="chat-skel">' + row(false) + row(true) + row(false) + '</div>';
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
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
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
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.2"/><circle cx="17.5" cy="10.5" r="1.2"/><circle cx="8.5" cy="7.5" r="1.2"/><circle cx="6.5" cy="12.5" r="1.2"/><path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.7 1.7-1.7H17a5 5 0 0 0 5-5c0-4.4-4.5-7.8-10-7.8z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    sort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    at: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.9 7.9"/></svg>',
    repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>'
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
    const [org, members, tasks, notifs, ta, subs, unread] = await Promise.all([
      sb.from('organizations').select('*').eq('id', orgId).single(),
      sb.from('profiles').select('*').eq('org_id', orgId),
      sb.from('tasks').select('*').eq('org_id', orgId).order('created_at', { ascending: false }),
      sb.from('notifications').select('*').eq('user_id', state.me.id).order('created_at', { ascending: false }).limit(60),
      sb.from('task_assignees').select('task_id,user_id'),
      sb.from('subtasks').select('*'),
      sb.rpc('unread_task_ids')
    ]);
    state.org = org.data;
    state.members = (members.data || []).sort((a, b) =>
      (a.role === 'boss' ? -1 : 0) - (b.role === 'boss' ? -1 : 0) || displayName(a).localeCompare(displayName(b)));
    state.tasks = tasks.data || [];
    state.notifications = notifs.data || [];
    state.taskAssignees = buildAssigneeMap(ta.data);
    state.subtasks = buildSubtaskMap(subs.data);
    state.unread = {}; (unread.data || []).forEach((r) => { state.unread[r.task_id] = true; });
    if (state.me.role === 'boss') {
      const inv = await sb.from('invites').select('*').eq('org_id', orgId).eq('status', 'pending');
      state.invites = inv.data || [];
    }
    // default scope: boss sees everyone, employee sees own
    state.scope = state.me.role === 'boss' ? 'all' : 'mine';
  }

  function buildSubtaskMap(rows) {
    const map = {};
    (rows || []).forEach((r) => { (map[r.task_id] = map[r.task_id] || []).push(r); });
    return map;
  }
  async function reloadSubtasks() {
    if (!state.me || !state.me.org_id) return;
    const { data } = await sb.from('subtasks').select('*');
    state.subtasks = buildSubtaskMap(data);
  }
  async function reloadUnread() {
    if (!state.me || !state.me.org_id) return;
    const { data } = await sb.rpc('unread_task_ids');
    state.unread = {}; (data || []).forEach((r) => { state.unread[r.task_id] = true; });
  }
  async function markRead(taskId) {
    if (!state.unread[taskId]) { /* still upsert to advance the read pointer */ }
    delete state.unread[taskId];
    updateNavBadges();
    try { await sb.from('chat_reads').upsert({ user_id: state.me.id, task_id: taskId, last_read_at: new Date().toISOString() }, { onConflict: 'user_id,task_id' }); } catch (e) {}
  }

  function buildAssigneeMap(rows) {
    const map = {};
    (rows || []).forEach((r) => { (map[r.task_id] = map[r.task_id] || []).push(r.user_id); });
    return map;
  }
  async function reloadAssignees() {
    if (!state.me || !state.me.org_id) return;
    const { data } = await sb.from('task_assignees').select('task_id,user_id');
    state.taskAssignees = buildAssigneeMap(data);
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
        async () => { await reloadTasks(); renderListView(); refreshOpenSheet(); })
      .subscribe();

    const notifCh = sb.channel('rt-notif-' + state.me.id)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: 'user_id=eq.' + state.me.id },
        (payload) => onNewNotification(payload.new))
      .subscribe();

    const profCh = sb.channel('rt-prof-' + orgId)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles', filter: 'org_id=eq.' + orgId },
        async () => {
          const { data } = await sb.from('profiles').select('*').eq('org_id', orgId);
          if (data) {
            state.members = data;
            const mine = data.find((p) => p.id === state.me.id);
            if (mine) { state.me.role = mine.role; state.me.can_create_tasks = mine.can_create_tasks; state.me.full_name = mine.full_name; }
          }
          if (state.view === 'tasks' || state.view === 'calendar' || state.view === 'settings') renderView();
        })
      .subscribe();

    const taCh = sb.channel('rt-ta-' + orgId)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'task_assignees' },
        async () => { await reloadAssignees(); renderListView(); refreshOpenSheet(); })
      .subscribe();

    const subCh = sb.channel('rt-sub-' + orgId)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'subtasks' },
        async () => { await reloadSubtasks(); renderListView(); refreshOpenSheet(); })
      .subscribe();

    // global comments stream (RLS limits rows to chats I can access) → unread badges
    const cmtCh = sb.channel('rt-cmt-' + state.me.id)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' },
        (payload) => {
          const c = payload.new;
          if (!c || c.user_id === state.me.id) return;
          const tk = state.tasks.find((x) => x.id === c.task_id);
          if (!tk || !(hasFullAccess() || isAssignee(tk, state.me.id))) return;
          if (openTaskId === c.task_id) { markRead(c.task_id); return; }
          if (!state.unread[c.task_id]) { state.unread[c.task_id] = true; updateNavBadges(); renderListView(); }
        })
      .subscribe();

    channels = [taskCh, notifCh, profCh, taCh, subCh, cmtCh];
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
  function iconBtn(act, svg, val, extra, label) {
    return '<button class="icon-btn" data-act="' + act + '"' + (val ? ' data-val="' + val + '"' : '') +
      (label ? ' aria-label="' + esc(label) + '"' : '') + '>' + svg + (extra || '') + '</button>';
  }

  function renderApp() {
    const unread = state.notifications.filter((n) => !n.is_read).length;
    const theme = (state.me && state.me.theme) || 'system';
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    app().innerHTML =
      '<div class="app-bar">' +
      '<div class="wordmark"><span class="dot">' + I.check + '</span><span class="sub">Boss</span> <b>Around</b></div>' +
      iconBtn('toggle-theme', isDark ? I.sun : I.moon, null, '', t('themeLabel')) +
      iconBtn('nav', I.bell, 'notif', unread ? '<span class="count">' + (unread > 9 ? '9+' : unread) + '</span>' : '', t('navNotif')) +
      '</div>' +
      '<div id="view"></div>' +
      navBar(unread) +
      (canCreateTasks() && (state.view === 'tasks' || state.view === 'calendar')
        ? '<button class="fab" data-act="task:new" aria-label="' + esc(t('newTaskTitle')) + '">' + I.plus + '</button>' : '');
    renderView();
  }

  function navBar(unread) {
    const item = (key, icon, label, badgeN) => {
      const active = state.view === key;
      const badge = badgeN ? '<span class="nav-badge">' + (badgeN > 9 ? '9+' : badgeN) + '</span>' : '';
      return '<button class="nav-item' + (active ? ' active' : '') + '" data-act="nav" data-val="' + key + '"' +
        (active ? ' aria-current="page"' : '') + ' aria-label="' + esc(label) + '">' +
        '<span class="nav-ico" aria-hidden="true">' + icon + badge + '</span><span>' + esc(label) + '</span></button>';
    };
    return '<nav class="bottom-nav" aria-label="' + esc(t('navTasks')) + '">' +
      item('home', I.home, t('navHome')) +
      item('tasks', I.list, t('navTasks'), unreadCount()) +
      item('calendar', I.cal, t('navCalendar')) +
      item('notif', I.bell, t('navNotif'), unread) +
      item('settings', I.gear, t('navSettings')) +
      '</nav>';
  }

  function renderView() {
    const v = document.getElementById('view');
    if (!v) return;
    if (state.view === 'home') v.innerHTML = viewHome();
    else if (state.view === 'tasks') v.innerHTML = viewTasks();
    else if (state.view === 'calendar') v.innerHTML = viewCalendar();
    else if (state.view === 'notif') v.innerHTML = viewNotifications();
    else if (state.view === 'settings') v.innerHTML = viewSettings();
    // toggle FAB visibility
    const fab = $('.fab');
    const wantFab = canCreateTasks() && (state.view === 'tasks' || state.view === 'calendar');
    if (wantFab && !fab) {
      const b = document.createElement('button'); b.className = 'fab'; b.setAttribute('data-act', 'task:new');
      b.innerHTML = I.plus; app().appendChild(b);
    } else if (!wantFab && fab) fab.remove();
  }

  // re-render only the list-style views (used after task mutations / realtime)
  function renderListView() { if (state.view === 'tasks' || state.view === 'calendar') renderView(); }

  function updateNavBadges() {
    const unread = state.notifications.filter((n) => !n.is_read).length;
    const setBadge = (wrap, n, cls) => {
      if (!wrap) return;
      const ex = wrap.querySelector('.' + cls); if (ex) ex.remove();
      if (n) { const s = document.createElement('span'); s.className = cls; s.textContent = n > 9 ? '9+' : n; wrap.appendChild(s); }
    };
    setBadge($('.nav-item[data-val="notif"] .nav-ico'), unread, 'nav-badge');
    setBadge($('.nav-item[data-val="tasks"] .nav-ico'), unreadCount(), 'nav-badge');
    setBadge($('.app-bar .icon-btn[data-val="notif"]'), unread, 'count');
  }

  /* ============================================================
     HOME DASHBOARD
     ============================================================ */
  function todayStr() {
    const n = new Date();
    return n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0');
  }
  function viewHome() {
    const me = state.me, full = hasFullAccess();
    const all = state.tasks;
    const mine = all.filter((tk) => isAssignee(tk, me.id));
    const scopeTasks = full ? all : mine;
    const now = new Date(), today = todayStr();
    const openSet = ['pending', 'in_progress', 'on_hold'];
    const isOpen = (tk) => openSet.indexOf(tk.status) >= 0;
    const open = scopeTasks.filter(isOpen).length;
    const overdue = scopeTasks.filter(isOverdue).length;
    const dueToday = scopeTasks.filter((tk) => tk.due_date === today && isOpen(tk)).length;
    const weekAgo = new Date(now.getTime() - 7 * 864e5);
    const doneWeek = scopeTasks.filter((tk) => tk.status === 'completed'
      && new Date(tk.completed_at || tk.updated_at || tk.created_at) >= weekAgo).length;

    const hr = now.getHours();
    const greet = hr < 12 ? t('greetMorning') : hr < 18 ? t('greetAfternoon') : t('greetEvening');
    const first = (displayName(me) || '').split(' ')[0];

    let html = '<div class="screen">';
    html += '<div class="hero" style="padding:6px 0 16px"><h1 style="margin:0">' + esc(greet) +
      (me.full_name ? ', ' + esc(first) : '') + '</h1>' +
      '<p style="margin:4px 0 0">' + esc(full ? t('homeSubBoss') : t('homeSubEmp')) + '</p></div>';

    const stat = (n, label, cls, val) => '<button class="stat' + (cls ? ' ' + cls : '') + '" data-act="home:goto" data-val="' + val + '">' +
      '<div class="stat-n">' + n + '</div><div class="stat-l">' + esc(label) + '</div></button>';
    html += '<div class="stat-grid">' +
      stat(open, t('statOpen'), '', 'open') +
      stat(overdue, t('statOverdue'), overdue ? 'danger' : '', 'overdue') +
      stat(dueToday, t('statDueToday'), dueToday ? 'warn' : '', 'today') +
      stat(doneWeek, t('statDoneWeek'), 'ok', 'doneweek') +
      '</div>';

    if (full) {
      const rows = state.members.map((m) => ({ m: m, n: all.filter((tk) => isAssignee(tk, m.id) && isOpen(tk)).length }))
        .sort((a, b) => b.n - a.n || displayName(a.m).localeCompare(displayName(b.m)));
      html += '<div class="section-title" style="margin-top:20px">' + esc(t('workloadTitle')) + '</div>';
      html += '<div class="stack">' + rows.map((r) =>
        '<button class="card row-card" data-act="home:member" data-val="' + r.m.id + '">' +
        avatar(r.m, 'md') +
        '<div class="rc-main"><div class="rc-title">' + esc(displayName(r.m)) +
        (r.m.role !== 'employee' ? ' <span class="chip ' + roleChipClass(r.m.role) + '">' + esc(t('role.' + r.m.role)) + '</span>' : '') +
        '</div><div class="rc-sub">' + r.n + ' ' + esc(t('openTasksWord')) + '</div></div>' +
        '<span class="wl-badge' + (r.n === 0 ? ' zero' : '') + '">' + r.n + '</span></button>').join('') + '</div>';
    } else {
      const todays = mine.filter((tk) => isOpen(tk) && (tk.due_date === today || isOverdue(tk)))
        .sort((a, b) => (isOverdue(b) - isOverdue(a)) || ('' + (a.due_date || '')).localeCompare('' + (b.due_date || '')));
      html += '<div class="section-title" style="margin-top:20px">' + esc(t('todayTitle')) + '</div>';
      if (!todays.length) html += emptyState(I.checks, t('allClearTitle'), t('allClearSub'));
      else html += '<div class="stack">' + todays.slice(0, 6).map((tk, i) => taskCard(tk, i)).join('') + '</div>';
    }
    return html + '</div>';
  }

  /* ============================================================
     TASKS VIEW
     ============================================================ */
  function filteredTasks() {
    let list = state.tasks.slice();
    if (state.scope === 'mine') list = list.filter((t0) => isAssignee(t0, state.me.id));
    else if (state.assignee && state.assignee !== 'all') {
      if (state.assignee === 'unassigned') list = list.filter((t0) => taskAssigneeIds(t0).length === 0);
      else list = list.filter((t0) => isAssignee(t0, state.assignee));
    }
    if (state.starredOnly) list = list.filter((t0) => t0.starred);
    if (state.overdueOnly) list = list.filter((t0) => isOverdue(t0));
    if (state.statuses.length) list = list.filter((t0) => state.statuses.indexOf(t0.status) >= 0);
    if (state.dateFrom || state.dateTo) {
      list = list.filter((t0) => {
        if (!t0.due_date) return false;
        if (state.dateFrom && t0.due_date < state.dateFrom) return false;
        if (state.dateTo && t0.due_date > state.dateTo) return false;
        return true;
      });
    }
    if (state.search.trim()) { const q = norm(state.search.trim()); list = list.filter((t0) => matchesSearch(t0, q)); }

    const created = (a, b) => new Date(b.created_at) - new Date(a.created_at);
    if (state.sort === 'due') {
      list.sort((a, b) => {
        if (!a.due_date && !b.due_date) return created(a, b);
        if (!a.due_date) return 1; if (!b.due_date) return -1;
        return a.due_date.localeCompare(b.due_date) || created(a, b);
      });
    } else if (state.sort === 'priority') {
      const pr = { high: 0, normal: 1, low: 2 };
      list.sort((a, b) => (pr[a.priority] - pr[b.priority]) || created(a, b));
    } else if (state.sort === 'updated') {
      list.sort((a, b) => new Date(b.updated_at || b.created_at) - new Date(a.updated_at || a.created_at));
    } else if (state.sort === 'title') {
      const loc = state.lang === 'el' ? 'el-GR' : 'en-US';
      list.sort((a, b) => (a.title || '').localeCompare(b.title || '', loc));
    } else {
      // 'smart' (default): starred first, then status order, then newest
      const order = { pending: 0, in_progress: 1, on_hold: 2, completed: 3, cancelled: 4 };
      list.sort((a, b) => (b.starred - a.starred) || (order[a.status] - order[b.status]) || created(a, b));
    }
    return list;
  }

  function viewTasks() {
    let html = '<div class="screen">';

    // search + sort toolbar
    html += '<div class="toolbar">' +
      '<div class="search">' +
      '<span class="search-ico" aria-hidden="true">' + I.search + '</span>' +
      '<input class="search-input" id="task-search" type="search" data-input="search" ' +
      'placeholder="' + esc(t('searchPlaceholder')) + '" value="' + esc(state.search) + '" aria-label="' + esc(t('searchPlaceholder')) + '" />' +
      '<button class="search-clear" data-act="search:clear" aria-label="' + esc(t('clear')) + '"' +
      (state.search ? '' : ' style="display:none"') + '>' + I.x + '</button>' +
      '</div>' +
      '<label class="sortbox"><span class="sort-ico" aria-hidden="true">' + I.sort + '</span>' +
      '<select class="select sort-select" data-change="sort" aria-label="' + esc(t('sortLabel')) + '">' +
      ['smart', 'due', 'priority', 'updated', 'title'].map((s) =>
        '<option value="' + s + '"' + (state.sort === s ? ' selected' : '') + '>' + esc(t('sort.' + s)) + '</option>').join('') +
      '</select></label>' +
      '</div>';

    html += '<div class="seg" role="tablist" style="margin-bottom:12px">' +
      '<button role="tab" aria-selected="' + (state.scope === 'mine') + '" class="' + (state.scope === 'mine' ? 'active' : '') + '" data-act="scope" data-val="mine">' + esc(t('tabMine')) + '</button>' +
      '<button role="tab" aria-selected="' + (state.scope === 'all') + '" class="' + (state.scope === 'all' ? 'active' : '') + '" data-act="scope" data-val="all">' + esc(t('tabAll')) + '</button>' +
      '</div>';

    const statusChips = ['pending', 'in_progress', 'on_hold', 'completed', 'cancelled'];
    html += '<div class="filters">';
    html += '<button class="fchip' + (state.statuses.length === 0 ? ' active' : '') + '" aria-pressed="' + (state.statuses.length === 0) + '" data-act="filter" data-val="all">' + esc(t('f.all')) + '</button>';
    html += '<button class="fchip star' + (state.starredOnly ? ' active' : '') + '" aria-pressed="' + state.starredOnly + '" data-act="filter" data-val="starred">' +
      '<span class="fchip-star">' + (state.starredOnly ? I.starFill : I.star) + '</span>' + esc(t('f.starred')) + '</button>';
    html += '<button class="fchip overdue-chip' + (state.overdueOnly ? ' active' : '') + '" aria-pressed="' + state.overdueOnly + '" data-act="filter" data-val="overdue">' +
      '<span class="fchip-ico">' + I.alert + '</span>' + esc(t('f.overdue')) + '</button>';
    html += statusChips.map((f) =>
      '<button class="fchip' + (state.statuses.indexOf(f) >= 0 ? ' active' : '') + '" aria-pressed="' + (state.statuses.indexOf(f) >= 0) + '" data-act="filter" data-val="' + f + '">' +
      esc(t('f.' + f)) + '</button>').join('');
    const dfActive = !!(state.dateFrom || state.dateTo);
    html += '<button class="fchip date ico-chip' + (dfActive ? ' active' : '') + '" data-act="datefilter:open">' +
      I.cal + '<span>' + esc(dfActive ? dateRangeLabel() : t('dateFilter')) + '</span></button>';
    html += '</div>';

    if (state.scope === 'all') {
      html += '<div style="display:flex;align-items:center;gap:10px;margin:2px 0 14px">' +
        '<span style="color:var(--text-3);display:flex;flex:0 0 auto" aria-hidden="true">' + I.users + '</span>' +
        '<select class="select" data-change="assignee" aria-label="' + esc(t('allAssignees')) + '" style="flex:1">' +
        '<option value="all">' + esc(t('allAssignees')) + '</option>' +
        state.members.map((m) => '<option value="' + m.id + '"' + (state.assignee === m.id ? ' selected' : '') + '>' +
          esc(displayName(m)) + (m.role === 'boss' ? ' (' + t('bossTag') + ')' : '') + '</option>').join('') +
        '<option value="unassigned"' + (state.assignee === 'unassigned' ? ' selected' : '') + '>' + esc(t('unassigned')) + '</option>' +
        '</select></div>';
    }

    html += '<div id="task-list">' + taskListHtml() + '</div>';
    return html + '</div>';
  }

  function taskListHtml() {
    const list = filteredTasks();
    const scopeHasAny = state.scope === 'mine'
      ? state.tasks.some((x) => isAssignee(x, state.me.id))
      : state.tasks.length > 0;

    if (!list.length) {
      if (state.search.trim()) return emptyState(I.search, t('emptySearchTitle'), t('emptySearchSub'));
      const boss = state.me.role === 'boss';
      if (!scopeHasAny) return emptyState(I.checks, boss ? t('emptyTasksBossTitle') : t('emptyTasksEmpTitle'),
        boss ? t('emptyTasksBossSub') : t('emptyTasksEmpSub'));
      return emptyState(I.checks, t('emptyFilterTitle'), t('emptyFilterSub'));
    }

    const visible = list.slice(0, state.taskLimit);
    const order = ['pending', 'in_progress', 'on_hold', 'completed', 'cancelled'];
    const groups = {};
    visible.forEach((tk) => { (groups[tk.status] = groups[tk.status] || []).push(tk); });
    const present = order.filter((s) => groups[s]);
    let html = present.map((s, idx) => {
      const collapsed = !!state.collapsed[s];
      return '<div class="group">' +
        '<button class="group-head' + (idx === 0 ? ' first' : '') + (collapsed ? ' collapsed' : '') +
          '" data-act="group:toggle" data-val="' + s + '" aria-expanded="' + (!collapsed) + '">' +
          '<span class="chip ' + s + '">' + statusDot + esc(t('f.' + s)) + '</span>' +
          '<span class="g-count">' + groups[s].length + '</span>' +
          '<span class="g-chev">' + I.chevR + '</span>' +
        '</button>' +
        '<div class="group-body' + (collapsed ? ' collapsed' : '') + '" data-group="' + s + '">' +
          '<div class="stack" style="padding-top:8px">' + groups[s].map((tk, i) => taskCard(tk, i)).join('') + '</div>' +
        '</div>' +
        '</div>';
    }).join('');

    const remaining = list.length - visible.length;
    if (remaining > 0) {
      html += '<button class="load-more" data-act="task:loadmore">' + esc(t('loadMore')) + ' (' + remaining + ')</button>';
    }
    return html;
  }

  function renderTaskList() { const el = $('#task-list'); if (el) el.innerHTML = taskListHtml(); }

  function statusBar(status) {
    return { pending: 'var(--st-pending-fg)', in_progress: 'var(--st-progress-fg)', on_hold: 'var(--st-hold-fg)',
      completed: 'var(--st-done-fg)', cancelled: 'var(--st-cancel-fg)' }[status] || 'var(--border-2)';
  }

  function taskCard(task, idx) {
    const showAssignee = state.scope === 'all';
    const overdue = isOverdue(task);
    const prog = subtaskProgress(task.id);
    const unread = isUnread(task.id);
    const meta = [];
    if (overdue) meta.push('<span class="chip overdue-badge">' + I.alert + esc(t('overdueBadge')) + '</span>');
    if (showAssignee) {
      const ids = taskAssigneeIds(task);
      if (!ids.length) meta.push('<span class="mi">' + avatar(null, 'sm') + esc(t('unassigned')) + '</span>');
      else if (ids.length === 1) { const p = profileById(ids[0]); meta.push('<span class="mi">' + avatar(p, 'sm') + esc(displayName(p)) + '</span>'); }
      else meta.push('<span class="mi">' + avatarStack(ids) + '</span>');
    }
    if (task.due_date) meta.push('<span class="mi' + (overdue ? ' overdue' : '') + '">' + I.cal + esc(fmtDueShort(task.due_date) + (task.due_time ? ' ' + fmtTime(task.due_time) : '')) + '</span>');
    if (prog.total) meta.push('<span class="chip checklist-chip' + (prog.done === prog.total ? ' all' : '') + '">' + I.check + prog.done + '/' + prog.total + '</span>');
    if (task.recurrence && task.recurrence !== 'none') meta.push('<span class="chip recur-chip" aria-label="' + esc(recurLabel(task.recurrence)) + '">' + I.repeat + '</span>');
    if (task.priority === 'high') meta.push('<span class="chip prio-high">' + I.flag + esc(t('prio.high')) + '</span>');

    const armed = state.armedTaskId === task.id;
    return '<div class="card task' + (task.status === 'completed' ? ' done' : '') + (armed ? ' armed' : '') + (overdue ? ' is-overdue' : '') +
      '" style="--bar:' + statusBar(task.status) + ';animation-delay:' + Math.min(idx * 35, 350) + 'ms"' +
      ' role="button" tabindex="0" aria-label="' + esc(task.title) + '" data-act="task:click" data-id="' + task.id + '">' +
      '<button class="t-check" data-act="task:check" data-id="' + task.id + '" aria-label="' + esc(t('markComplete')) + '">' +
        '<span class="cbox">' + I.check + '</span></button>' +
      '<div class="t-main">' +
      '<div class="spread" style="align-items:flex-start;gap:8px">' +
      '<div class="t-title">' + (unread ? '<span class="unread-dot" aria-label="' + esc(t('unreadLabel')) + '"></span>' : '') + esc(task.title) + '</div>' +
      '<button class="star-btn' + (task.starred ? ' on' : '') + '" data-act="task:star" data-id="' + task.id + '" aria-pressed="' + (!!task.starred) + '" aria-label="' + esc(t('f.starred')) + '">' +
        (task.starred ? I.starFill : I.star) + '</button>' +
      '</div>' +
      (task.description ? '<div class="t-desc">' + esc(task.description) + '</div>' : '') +
      '<div class="t-meta">' +
      '<span class="chip ' + task.status + '">' + statusDot + esc(t('status.' + task.status)) + '</span>' +
      meta.join('') +
      '</div>' +
      '</div></div>';
  }

  function taskCheckboxShown(task) {
    return task.status === 'completed' || state.armedTaskId === task.id;
  }
  function handleTaskClick(id) {
    const task = state.tasks.find((x) => x.id === id);
    if (!task) return;
    if (taskCheckboxShown(task)) { openTask(id); }       // checkbox already shown → open details
    else { state.armedTaskId = id; renderArmState(); }   // first tap → reveal the checkbox
  }
  function renderArmState() {
    $$('.task').forEach((card) => {
      card.classList.toggle('armed', state.armedTaskId === card.getAttribute('data-id'));
    });
  }
  function toggleComplete(id) {
    const task = state.tasks.find((x) => x.id === id);
    if (!task) return;
    const next = task.status === 'completed' ? 'pending' : 'completed';
    if (next === 'completed') { state.armedTaskId = null; haptic(12); }
    setStatus(id, next);
  }

  /* ============================================================
     DATE UTILITIES + CALENDAR + DATE FILTER
     ============================================================ */
  const EL_MONTHS = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος',
    'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];

  function isoOf(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function todayISO() { return isoOf(new Date()); }
  function parseISO(s) { return new Date(s + 'T00:00:00'); }
  function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
  function startOfWeekMon(d) { const x = new Date(d); const k = (x.getDay() + 6) % 7; x.setDate(x.getDate() - k); x.setHours(0, 0, 0, 0); return x; }

  function weekdayLabels() {
    const loc = state.lang === 'el' ? 'el-GR' : 'en-US';
    const out = [];
    for (let i = 0; i < 7; i++) out.push(new Date(2024, 0, 1 + i).toLocaleDateString(loc, { weekday: 'short' }));
    return out; // Monday-first
  }

  function dateRangeLabel() {
    const loc = state.lang === 'el' ? 'el-GR' : 'en-US';
    const fmt = (s) => parseISO(s).toLocaleDateString(loc, { day: 'numeric', month: 'short' });
    const f = state.dateFrom ? fmt(state.dateFrom) : '';
    const to = state.dateTo ? fmt(state.dateTo) : '';
    if (f && to) return f === to ? f : (f + ' – ' + to);
    if (f) return '≥ ' + f;
    if (to) return '≤ ' + to;
    return t('dateFilter');
  }

  function applyDatePreset(val) {
    const now = new Date();
    if (val === 'today') { const d = todayISO(); state.dateFrom = d; state.dateTo = d; }
    else if (val === 'week') { const s = startOfWeekMon(now); state.dateFrom = isoOf(s); state.dateTo = isoOf(addDays(s, 6)); }
    else if (val === 'month') { state.dateFrom = isoOf(startOfMonth(now)); state.dateTo = isoOf(new Date(now.getFullYear(), now.getMonth() + 1, 0)); }
    modalRoot().innerHTML = ''; state.armedTaskId = null; resetTaskPaging(); renderView();
  }

  function openDateFilter() {
    const from = state.dateFrom || '', to = state.dateTo || '';
    modalRoot().innerHTML =
      '<div class="overlay" data-act="df:bg"><div class="sheet" data-stop="1">' +
      '<div class="sheet-head"><button class="icon-btn" data-act="df:close">' + I.x + '</button>' +
      '<h2>' + esc(t('dateFilterTitle')) + '</h2></div>' +
      '<div class="sheet-body">' +
      '<div class="filters" style="flex-wrap:wrap;overflow:visible">' +
      '<button class="fchip" data-act="df:preset" data-val="today">' + esc(t('presetToday')) + '</button>' +
      '<button class="fchip" data-act="df:preset" data-val="week">' + esc(t('presetWeek')) + '</button>' +
      '<button class="fchip" data-act="df:preset" data-val="month">' + esc(t('presetMonth')) + '</button>' +
      '</div>' +
      '<div class="row" style="margin-top:16px">' +
      '<label class="field" style="margin:0"><span class="label">' + esc(t('fromLabel')) + '</span>' +
      '<input class="input" id="df-from" type="date" value="' + esc(from) + '" /></label>' +
      '<label class="field" style="margin:0"><span class="label">' + esc(t('toLabel')) + '</span>' +
      '<input class="input" id="df-to" type="date" value="' + esc(to) + '" /></label>' +
      '</div></div>' +
      '<div class="sheet-foot">' +
      '<button class="btn grow" data-act="df:clear">' + esc(t('clear')) + '</button>' +
      '<button class="btn btn-primary grow" data-act="df:apply">' + esc(t('apply')) + '</button>' +
      '</div></div></div>';
  }

  function calendarTasks() {
    let list = state.tasks.slice();
    if (state.scope === 'mine') list = list.filter((t0) => isAssignee(t0, state.me.id));
    return list;
  }

  function viewCalendar() {
    if (!state.calMonth) state.calMonth = startOfMonth(new Date());
    if (!state.calSelected) state.calSelected = todayISO();
    const loc = state.lang === 'el' ? 'el-GR' : 'en-US';
    const y = state.calMonth.getFullYear(), m = state.calMonth.getMonth();
    const monthTitle = (state.lang === 'el' ? EL_MONTHS[m] + ' ' + y
      : state.calMonth.toLocaleDateString(loc, { month: 'long', year: 'numeric' }));

    const byDay = {};
    calendarTasks().forEach((tk) => { if (tk.due_date) (byDay[tk.due_date] = byDay[tk.due_date] || []).push(tk); });

    const first = new Date(y, m, 1);
    const lead = (first.getDay() + 6) % 7;
    const dim = new Date(y, m + 1, 0).getDate();
    const rows = Math.ceil((lead + dim) / 7);
    const gridStart = addDays(first, -lead);
    const today = todayISO();

    let cells = '';
    for (let i = 0; i < rows * 7; i++) {
      const d = addDays(gridStart, i);
      const iso = isoOf(d);
      const dayTasks = byDay[iso] || [];
      let dots = '';
      if (dayTasks.length) {
        dots = '<span class="cal-dots">' +
          dayTasks.slice(0, 3).map((tk) => '<span class="cal-dot" style="background:' + statusBar(tk.status) + '"></span>').join('') +
          (dayTasks.length > 3 ? '<span class="cal-more">+</span>' : '') + '</span>';
      }
      cells += '<button class="cal-cell' + (d.getMonth() === m ? '' : ' out') + (iso === today ? ' today' : '') +
        (iso === state.calSelected ? ' sel' : '') + '" data-act="cal:day" data-val="' + iso + '">' +
        '<span class="cal-num">' + d.getDate() + '</span>' + dots + '</button>';
    }

    const weekdays = weekdayLabels().map((w) => '<span class="cal-wd">' + esc(w) + '</span>').join('');

    const selDate = parseISO(state.calSelected);
    const selTitle = selDate.toLocaleDateString(loc, { weekday: 'long', day: 'numeric', month: 'long' });
    const ord = { pending: 0, in_progress: 1, on_hold: 2, completed: 3, cancelled: 4 };
    const selTasks = (byDay[state.calSelected] || []).slice()
      .sort((a, b) => (b.starred - a.starred) || (ord[a.status] - ord[b.status]));
    const list = selTasks.length
      ? '<div class="stack" style="padding-top:4px">' + selTasks.map((tk, i) => taskCard(tk, i)).join('') + '</div>'
      : '<div class="empty" style="padding:36px 18px"><div class="e-ico">' + I.cal + '</div><p>' + esc(t('noTasksDay')) + '</p></div>';

    let html = '<div class="screen">';
    html += '<div class="seg" style="margin-bottom:14px">' +
      '<button class="' + (state.scope === 'mine' ? 'active' : '') + '" data-act="scope" data-val="mine">' + esc(t('tabMine')) + '</button>' +
      '<button class="' + (state.scope === 'all' ? 'active' : '') + '" data-act="scope" data-val="all">' + esc(t('tabAll')) + '</button>' +
      '</div>';
    html += '<div class="card" style="padding:14px">' +
      '<div class="cal-head"><button class="icon-btn" data-act="cal:prev" aria-label="prev">' + I.chevL + '</button>' +
      '<div class="cal-title">' + esc(monthTitle) + '</div>' +
      '<button class="icon-btn" data-act="cal:next" aria-label="next">' + I.chevR + '</button></div>' +
      '<button class="link-btn" data-act="cal:today" style="display:block;margin:0 auto 8px">' + esc(t('today')) + '</button>' +
      '<div class="cal-weekdays">' + weekdays + '</div>' +
      '<div class="cal-grid">' + cells + '</div>' +
      '</div>';
    html += '<div class="section-title" style="margin:18px 4px 8px">' + esc(selTitle) + '</div>' + list;
    return html + '</div>';
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
  let chatMentions = {};

  async function openTask(id) {
    openTaskId = id; chatMentions = {};
    const task = state.tasks.find((x) => x.id === id);
    if (!task) return;
    renderTaskSheet(task, true);
    subscribeChat(id);
    await loadComments(id);
    if (canChat(task)) markRead(id);
  }

  function closeSheet() {
    openTaskId = null; chatDraft = ''; chatMentions = {};
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
    renderChecklist(task.id);
  }

  function canChat(task) {
    return state.me.role === 'boss' || isAssignee(task, state.me.id);
  }
  function canEditStatus(task) {
    return state.me.role === 'boss' || isAssignee(task, state.me.id);
  }

  function renderTaskSheet(task, withChatLoading) {
    const creator = profileById(task.created_by);

    const statusSelect = canEditStatus(task) ?
      ('<select class="select" id="sheet-status" data-change="task:status" data-id="' + task.id + '" style="margin-top:6px">' +
        STATUSES.map((s) => '<option value="' + s + '"' + (task.status === s ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>').join('') +
        '</select>') :
      ('<div style="margin-top:6px"><span id="sheet-status-chip" class="chip ' + task.status + '">' + statusDot + esc(t('status.' + task.status)) + '</span></div>');

    const ids = taskAssigneeIds(task);
    const assigneesBlock =
      '<div class="section-title" style="margin:16px 4px 8px">' + esc(t('assigneesLabel')) + '</div>' +
      '<div class="achip-wrap">' +
      (ids.length
        ? ids.map((uid) => {
            const p = profileById(uid);
            const isPrimary = task.assigned_to === uid;
            return '<span class="achip">' + avatar(p, 'sm') + '<span>' + esc(displayName(p)) + '</span>' +
              (isPrimary ? '<span class="achip-tag">' + esc(t('primaryTag')) + '</span>' : '') + '</span>';
          }).join('')
        : '<span class="muted tiny">' + esc(t('unassigned')) + '</span>') +
      '</div>';

    const infoRows =
      '<div class="list mt-16">' +
      (task.due_date ? row(isOverdue(task) ? I.alert : I.cal, t('dueLabel'), dueLabel(task)) : '') +
      row(I.flag, t('priorityLabel'), t('prio.' + task.priority)) +
      ((task.recurrence && task.recurrence !== 'none') ? row(I.repeat, t('recurLabel'), recurLabel(task.recurrence)) : '') +
      '</div>';

    const chatSection = canChat(task) ?
      ('<div class="section-title">' + esc(t('chatTitle')) + '</div>' +
        '<div id="chat-box" class="chat">' + (withChatLoading ? chatSkeleton() : '') + '</div>') :
      ('<div class="card mt-16"><p class="muted tiny" style="margin:0">' + esc(t('chatLocked')) + '</p></div>');

    const mentionables = state.members.filter((m) => m.id !== state.me.id);
    const footer = canChat(task) ?
      ('<div class="sheet-foot"><div class="chat-input grow">' +
        (mentionables.length ? '<button class="chat-at" data-act="chat:mention" aria-label="' + esc(t('mention')) + '">' + I.at + '</button>' : '') +
        '<textarea class="textarea" id="chat-text" rows="1" placeholder="' + esc(t('chatPlaceholder')) + '">' + esc(chatDraft) + '</textarea>' +
        '<button class="btn btn-primary" data-act="chat:send" data-id="' + task.id + '" style="padding:0 14px;height:44px">' + I.send + '</button>' +
        (mentionables.length ? '<div id="mention-pop" class="mention-pop hidden">' + mentionables.map((m) =>
          '<button class="mention-opt" data-act="mention:add" data-id="' + m.id + '" data-name="' + esc(displayName(m)) + '">' +
          avatar(m, 'sm') + '<span>' + esc(displayName(m)) + '</span></button>').join('') + '</div>' : '') +
        '</div></div>') : '';

    modalRoot().innerHTML =
      '<div class="overlay" data-act="sheet:bg"><div class="sheet" id="task-sheet" data-stop="1">' +
      '<div class="sheet-head">' +
      '<button class="icon-btn" data-act="sheet:close">' + I.arrowL + '</button>' +
      '<h2>' + esc(task.title) + '</h2>' +
      '<button class="star-btn' + (task.starred ? ' on' : '') + '" id="sheet-star" data-act="task:star" data-id="' + task.id + '">' +
        (task.starred ? I.starFill : I.star) + '</button>' +
      (canManageTask(task) ? iconBtn('task:edit', I.pencil, task.id, '', t('editTaskTitle')) : '') +
      '</div>' +
      '<div class="sheet-body">' +
      '<div class="spread" style="align-items:flex-start"><div class="grow">' +
      '<div class="label" style="font-size:13px;font-weight:700;color:var(--text-2)">' + esc(t('statusLabel')) + '</div>' +
      statusSelect +
      '</div></div>' +
      (task.description ? '<div class="card mt-16"><div style="white-space:pre-wrap;line-height:1.5">' + esc(task.description) + '</div></div>' : '') +
      assigneesBlock +
      infoRows +
      checklistSectionHtml(task) +
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

  /* ---------------- checklist / subtasks ---------------- */
  function checklistItemsHtml(task) {
    const items = subtasksFor(task.id);
    const canTick = canChat(task) || hasFullAccess();
    const canEdit = canManageTask(task);
    if (!items.length) return '<p class="muted tiny" style="margin:4px 2px 0">' + esc(t('noSubtasks')) + '</p>';
    return items.map((s) =>
      '<div class="subt' + (s.done ? ' done' : '') + '">' +
      '<button class="subt-check" data-act="sub:toggle" data-id="' + s.id + '" data-task="' + task.id + '"' +
        (canTick ? '' : ' disabled') + ' aria-pressed="' + (!!s.done) + '"><span class="cbox">' + I.check + '</span></button>' +
      '<span class="subt-title">' + esc(s.title) + '</span>' +
      (canEdit ? '<button class="subt-del" data-act="sub:del" data-id="' + s.id + '" data-task="' + task.id + '" aria-label="' + esc(t('delete')) + '">' + I.x + '</button>' : '') +
      '</div>').join('');
  }
  function checklistSectionHtml(task) {
    const p = subtaskProgress(task.id);
    const canEdit = canManageTask(task);
    return '<div class="section-title spread" style="margin:18px 4px 6px"><span>' + esc(t('checklistTitle')) + '</span>' +
      '<span class="muted tiny" id="sheet-checklist-count">' + (p.total ? p.done + '/' + p.total : '') + '</span></div>' +
      '<div id="sheet-checklist">' + checklistItemsHtml(task) + '</div>' +
      (canEdit ? '<div class="subt-add"><input class="input" id="subt-new" type="text" placeholder="' + esc(t('addSubtaskPlaceholder')) +
        '" data-enter="sub:add" data-task="' + task.id + '" />' +
        '<button class="btn btn-soft" data-act="sub:add" data-task="' + task.id + '" aria-label="' + esc(t('add')) + '">' + I.plus + '</button></div>' : '');
  }
  function renderChecklist(taskId) {
    const el = $('#sheet-checklist');
    const task = state.tasks.find((x) => x.id === taskId);
    if (el && task) el.innerHTML = checklistItemsHtml(task);
    const cnt = $('#sheet-checklist-count');
    if (cnt) { const p = subtaskProgress(taskId); cnt.textContent = p.total ? p.done + '/' + p.total : ''; }
  }
  async function toggleSubtask(id, taskId) {
    const list = state.subtasks[taskId] || []; const s = list.find((x) => x.id === id); if (!s) return;
    s.done = !s.done; haptic(6); renderChecklist(taskId); renderListView();
    try { const { error } = await sb.from('subtasks').update({ done: s.done }).eq('id', id); if (error) throw error; }
    catch (e) { s.done = !s.done; renderChecklist(taskId); renderListView(); toast(t('genericError'), true); }
  }
  async function deleteSubtask(id, taskId) {
    const list = state.subtasks[taskId] || []; const idx = list.findIndex((x) => x.id === id); if (idx < 0) return;
    const removed = list[idx]; list.splice(idx, 1); renderChecklist(taskId); renderListView();
    try { const { error } = await sb.from('subtasks').delete().eq('id', id); if (error) throw error; }
    catch (e) { list.splice(idx, 0, removed); renderChecklist(taskId); toast(t('genericError'), true); }
  }
  async function addSubtask(taskId) {
    const inp = $('#subt-new'); if (!inp) return;
    const title = inp.value.trim(); if (!title) return;
    inp.value = '';
    const list = state.subtasks[taskId] = state.subtasks[taskId] || [];
    const pos = list.reduce((mx, s) => Math.max(mx, s.position || 0), 0) + 1;
    const tmp = { id: 'tmp-' + Date.now(), task_id: taskId, title: title, done: false, position: pos, created_at: new Date().toISOString() };
    list.push(tmp); renderChecklist(taskId); renderListView(); haptic(6);
    try {
      const { data, error } = await sb.from('subtasks').insert({ task_id: taskId, title: title, position: pos }).select().single();
      if (error) throw error;
      const i = list.findIndex((x) => x.id === tmp.id); if (i >= 0) list[i] = data; renderChecklist(taskId);
    } catch (e) {
      const i = list.findIndex((x) => x.id === tmp.id); if (i >= 0) list.splice(i, 1);
      renderChecklist(taskId); toast(t('genericError'), true); inp.value = title;
    }
  }

  async function loadComments(taskId) {
    const { data, error } = await sb.from('comments').select('*').eq('task_id', taskId).order('created_at', { ascending: true });
    if (openTaskId !== taskId) return;
    const box = $('#chat-box'); if (!box) return;
    if (error) { box.innerHTML = '<div class="chat-empty">' + esc(t('genericError')) +
      ' <button class="btn btn-soft btn-sm" data-act="chat:retry" data-id="' + taskId + '" style="margin-top:8px">' + esc(t('retry')) + '</button></div>'; return; }
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
    haptic(6);
    // keep only mentions whose @Name still appears in the text
    const mentions = Object.keys(chatMentions).filter((id) => content.indexOf('@' + chatMentions[id]) >= 0);
    ta.value = ''; chatDraft = ''; ta.style.height = '44px'; chatMentions = {};
    const optimistic = { id: 'tmp-' + Date.now(), task_id: taskId, user_id: state.me.id, content: content, created_at: new Date().toISOString() };
    appendMessage(optimistic);
    try {
      const { error } = await sb.from('comments').insert({ task_id: taskId, user_id: state.me.id, content: content, mentions: mentions });
      if (error) throw error;
    } catch (e) { toast(t('genericError'), true); }
  }

  /* ---------------- task mutations ---------------- */
  async function toggleStar(id) {
    const task = state.tasks.find((x) => x.id === id); if (!task) return;
    const next = !task.starred; task.starred = next; haptic(8);
    renderListView();
    refreshOpenSheet();
    const star = $('.star-btn[data-id="' + id + '"]');
    try {
      const { error } = await sb.from('tasks').update({ starred: next }).eq('id', id);
      if (error) throw error;
    } catch (e) { task.starred = !next; renderListView(); refreshOpenSheet(); toast(t('genericError'), true); }
  }

  async function setStatus(id, status) {
    const task = state.tasks.find((x) => x.id === id); if (!task) return;
    const prev = task.status; task.status = status;
    if (status === 'completed') task.completed_at = new Date().toISOString();
    renderListView();
    refreshOpenSheet();
    try { const { error } = await sb.from('tasks').update({ status }).eq('id', id); if (error) throw error; }
    catch (e) { task.status = prev; renderListView(); refreshOpenSheet(); toast(t('genericError'), true); }
  }

  /* ============================================================
     TASK FORM (create / edit) — boss only
     ============================================================ */
  let formExtraAssignees = new Set();
  let formExtraOpen = false;
  function formExtraHtml(primaryId) {
    const others = state.members.filter((m) => m.id !== primaryId);
    if (!others.length) return '<p class="muted tiny" style="margin:2px 2px 0">' + esc(t('noOtherMembers')) + '</p>';

    const selIds = Array.prototype.slice.call(formExtraAssignees).filter((id) => id !== primaryId);
    const names = selIds.map((id) => displayName(profileById(id))).filter(Boolean);
    const summary = names.length
      ? '<span class="ms-summary">' + esc(names.join(', ')) + '</span>'
      : '<span class="ms-summary ms-ph">' + esc(t('selectPlaceholder')) + '</span>';

    let panel = '';
    if (formExtraOpen) {
      panel = '<div class="ms-panel">' + others.map((m) => {
        const sel = formExtraAssignees.has(m.id);
        return '<button type="button" class="ms-opt' + (sel ? ' sel' : '') + '" data-act="form:toggle-assignee" data-id="' + m.id + '">' +
          '<span class="ms-check">' + (sel ? I.check : '') + '</span>' +
          avatar(m, 'sm') + '<span class="ms-name">' + esc(displayName(m)) + '</span></button>';
      }).join('') + '</div>';
    }

    return '<div class="ms' + (formExtraOpen ? ' open' : '') + '">' +
      '<button type="button" class="ms-trigger" data-act="form:extra-toggle">' +
      summary + '<span class="ms-chev">' + I.chevR + '</span></button>' +
      panel + '</div>';
  }

  function openTaskForm(taskId, prefill) {
    const editing = !!taskId;
    const task = editing ? state.tasks.find((x) => x.id === taskId) : null;
    const employees = state.members; // boss can assign to anyone in org (incl. self)
    const dueVal = task && task.due_date ? task.due_date : (prefill && prefill.due_date ? prefill.due_date : '');
    const timeVal = task && task.due_time ? fmtTime(task.due_time) : '';
    formExtraAssignees = new Set(editing ? (state.taskAssignees[taskId] || []) : []);
    formExtraOpen = false;
    const primaryId = task && task.assigned_to ? task.assigned_to : null;

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
      '<select class="select" id="f-assignee" data-change="form:primary">' +
      '<option value="">' + esc(t('unassigned')) + '</option>' +
      employees.map((m) => '<option value="' + m.id + '"' + (task && task.assigned_to === m.id ? ' selected' : '') + '>' +
        esc(displayName(m)) + (m.role === 'boss' ? ' (' + t('bossTag') + ')' : '') + '</option>').join('') +
      '</select></label>' +
      '<div class="field"><span class="label">' + esc(t('extraAssigneesLabel')) + '</span>' +
      '<div id="form-extra">' + formExtraHtml(primaryId) + '</div></div>' +
      '<div class="row">' +
      '<label class="field"><span class="label">' + esc(t('priorityLabel')) + '</span>' +
      '<select class="select" id="f-prio">' + PRIORITIES.map((p) =>
        '<option value="' + p + '"' + ((task ? task.priority : 'normal') === p ? ' selected' : '') + '>' + esc(t('prio.' + p)) + '</option>').join('') + '</select></label>' +
      '<label class="field"><span class="label">' + esc(t('dueLabel')) + '</span>' +
      '<input class="input" id="f-due" type="date" value="' + esc(dueVal) + '" /></label>' +
      '</div>' +
      '<div class="row">' +
      '<label class="field"><span class="label">' + esc(t('dueTimeLabel')) + '</span>' +
      '<input class="input" id="f-due-time" type="time" value="' + esc(timeVal) + '" /></label>' +
      '<label class="field"><span class="label">' + esc(t('recurLabel')) + '</span>' +
      '<select class="select" id="f-recur">' + RECUR.map((r) =>
        '<option value="' + r + '"' + ((task ? (task.recurrence || 'none') : 'none') === r ? ' selected' : '') + '>' + esc(t('recur.' + r)) + '</option>').join('') + '</select></label>' +
      '</div>' +
      (editing ?
        '<label class="field"><span class="label">' + esc(t('statusLabel')) + '</span>' +
        '<select class="select" id="f-status">' + STATUSES.map((s) =>
          '<option value="' + s + '"' + (task.status === s ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>').join('') + '</select></label>' : '') +
      (editing && canManageTask(task) ? '<button class="btn btn-danger btn-block mt-8" data-act="task:delete" data-id="' + taskId + '">' + I.trash + esc(t('deleteTask')) + '</button>' : '') +
      '</div>' +
      '<div class="sheet-foot">' +
      '<button class="btn grow" data-act="form:close">' + esc(t('cancel')) + '</button>' +
      '<button class="btn btn-primary grow" data-act="task:save" data-id="' + (taskId || '') + '"><span class="lbl">' + esc(editing ? t('saveChanges') : t('createTaskBtn')) + '</span></button>' +
      '</div></div></div>';
  }

  async function saveTask(taskId, btn) {
    const title = ($('#f-title') || {}).value || '';
    if (!title.trim()) { const m = $('#form-msg'); if (m) m.innerHTML = '<div class="error-text">' + esc(t('titleRequired')) + '</div>'; return; }
    const primary = (($('#f-assignee') || {}).value) || null;
    const extras = Array.prototype.slice.call(formExtraAssignees).filter((uid) => uid && uid !== primary);
    const payload = {
      title: title.trim(),
      description: (($('#f-desc') || {}).value || '').trim() || null,
      assigned_to: primary,
      priority: ($('#f-prio') || {}).value || 'normal',
      due_date: (($('#f-due') || {}).value || '') || null,
      due_time: (($('#f-due-time') || {}).value || '') || null,
      recurrence: ($('#f-recur') || {}).value || 'none'
    };
    btnBusy(btn, true);
    try {
      let id = taskId;
      if (taskId) {
        const st = ($('#f-status') || {}).value; if (st) payload.status = st;
        const { error } = await sb.from('tasks').update(payload).eq('id', taskId);
        if (error) throw error;
        // reconcile additional assignees (only add/remove the diffs)
        const existing = state.taskAssignees[taskId] || [];
        const toAdd = extras.filter((u) => existing.indexOf(u) < 0);
        const toRemove = existing.filter((u) => extras.indexOf(u) < 0);
        if (toRemove.length) { const r = await sb.from('task_assignees').delete().eq('task_id', taskId).in('user_id', toRemove); if (r.error) throw r.error; }
        if (toAdd.length) { const r = await sb.from('task_assignees').insert(toAdd.map((u) => ({ task_id: taskId, user_id: u }))); if (r.error) throw r.error; }
      } else {
        payload.org_id = state.me.org_id; payload.created_by = state.me.id;
        const { data, error } = await sb.from('tasks').insert(payload).select().single();
        if (error) throw error;
        id = data.id;
        if (extras.length) { const r = await sb.from('task_assignees').insert(extras.map((u) => ({ task_id: id, user_id: u }))); if (r.error) throw r.error; }
      }
      await reloadTasks();
      await reloadAssignees();
      modalRoot().innerHTML = '';
      if (openTaskId === id) { const tk = state.tasks.find((x) => x.id === id); if (tk) { renderTaskSheet(tk); subscribeChat(id); loadComments(id); } }
      renderListView();
      toast(t('savedToast'));
    } catch (e) { btnBusy(btn, false); const m = $('#form-msg'); if (m) m.innerHTML = '<div class="error-text">' + esc(e.message || t('genericError')) + '</div>'; }
  }

  async function deleteTask(id) {
    if (!confirm(t('deleteTaskConfirm'))) return;
    try {
      const { error } = await sb.from('tasks').delete().eq('id', id); if (error) throw error;
      state.tasks = state.tasks.filter((x) => x.id !== id);
      modalRoot().innerHTML = ''; openTaskId = null;
      renderListView();
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
      task_updated:  { i: I.pencil, bg: 'var(--st-pending-bg)', fg: 'var(--st-pending-fg)' },
      mention:       { i: I.at, bg: 'var(--accent-weak)', fg: 'var(--accent)' },
      reminder:      { i: I.alert, bg: 'var(--st-cancel-bg)', fg: 'var(--st-cancel-fg)' }
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
    const me = state.me, owner = isOwner(), full = hasFullAccess();
    const theme = me.theme || 'system';
    const lang = state.lang;
    const notifPerm = ('Notification' in window) ? Notification.permission : 'unsupported';

    let html = '<div class="screen"><div class="stack-lg">';

    // profile header
    html += '<div class="card pad-lg"><div style="display:flex;gap:14px;align-items:center">' +
      avatar(me, 'lg') +
      '<div class="grow"><div style="font-weight:800;font-size:18px">' + esc(displayName(me)) + '</div>' +
      '<div class="muted tiny">' + esc(me.email || '') + '</div>' +
      '<span class="chip ' + roleChipClass(me.role) + '" style="margin-top:6px">' + esc(t('role.' + me.role)) + '</span>' +
      '</div></div>' +
      '<label class="field mt-16"><span class="label">' + esc(t('nameLabel')) + '</span>' +
      '<input class="input" id="set-name" type="text" value="' + esc(me.full_name || '') + '" /></label>' +
      '<div class="row">' +
      '<label class="field"><span class="label">' + esc(t('jobTitleLabel')) + '</span>' +
      '<input class="input" id="set-jobtitle" type="text" value="' + esc(me.job_title || '') + '" placeholder="' + esc(t('jobTitlePlaceholder')) + '" /></label>' +
      '<label class="field"><span class="label">' + esc(t('phoneLabel')) + '</span>' +
      '<input class="input" id="set-phone" type="tel" value="' + esc(me.phone || '') + '" placeholder="' + esc(t('phonePlaceholder')) + '" /></label>' +
      '</div>' +
      '<button class="btn btn-soft btn-block" data-act="profile:save">' + esc(t('save')) + '</button>' +
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

    // team & roles
    const roleChip = (m) => '<span class="chip ' + roleChipClass(m.role) + '" style="font-size:11px">' + esc(t('role.' + m.role)) + '</span>';
    const memberRow = (m) => {
      const isSelf = m.id === me.id;
      const editable = owner && m.role !== 'boss' && !isSelf;
      const sub = m.job_title ? esc(m.job_title) : esc(m.email || '');
      const phone = m.phone ? '<a class="rc-phone" href="tel:' + esc(m.phone) + '">' + I.phone + esc(m.phone) + '</a>' : '';
      const ctl = editable
        ? '<div class="member-ctl">' +
            '<select class="select sm" data-change="member:role" data-id="' + m.id + '">' +
            '<option value="employee"' + (m.role === 'employee' ? ' selected' : '') + '>' + esc(t('role.employee')) + '</option>' +
            '<option value="manager"' + (m.role === 'manager' ? ' selected' : '') + '>' + esc(t('role.manager')) + '</option>' +
            '</select>' +
            (m.role === 'employee'
              ? '<label class="member-toggle">' + switchEl('member:cancreate', m.can_create_tasks, m.id) + '<span>' + esc(t('canAddJobs')) + '</span></label>'
              : '') +
            '<button class="btn btn-danger btn-sm member-remove" data-act="member:remove" data-id="' + m.id + '" data-name="' + esc(displayName(m)) + '">' + I.trash + esc(t('removeMember')) + '</button>' +
          '</div>'
        : '';
      return '<div class="list-row"' + (editable ? ' style="align-items:flex-start"' : '') + '>' + avatar(m) +
        '<div class="lr-main"><div class="t">' + esc(displayName(m)) +
        (isSelf ? ' <span class="chip" style="padding:2px 7px;font-size:10px">' + esc(t('youTag')) + '</span>' : '') + '</div>' +
        '<div class="s">' + sub + '</div>' + phone + ctl + '</div>' +
        (editable ? '' : roleChip(m)) +
        '</div>';
    };

    // team (boss & managers have full access)
    if (full) {
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

      html += '<div class="list mt-8">' + state.members.map(memberRow).join('') + '</div>';

      if (owner) html += '<p class="tiny muted" style="margin:8px 4px 0">' + esc(t('roleHint')) + '</p>';

      if (state.invites.length) {
        html += '<div class="section-title">' + esc(t('pendingInvites')) + '</div><div class="list">' +
          state.invites.map((iv) => '<div class="list-row"><div class="lr-ico">' + I.mail + '</div>' +
            '<div class="lr-main"><div class="t">' + esc(iv.email) + '</div></div>' +
            '<button class="icon-btn" data-act="invite:cancel" data-id="' + iv.id + '">' + I.x + '</button></div>').join('') + '</div>';
      }
      html += '</div>';
    }

    // organization
    if (owner) {
      html += '<div><div class="section-title">' + esc(t('secOrg')) + '</div><div class="list">' +
        '<div class="list-row"><div class="lr-ico">' + I.shop + '</div>' +
        '<div class="lr-main"><div class="t">' + esc(t('businessNameLabel')) + '</div></div></div>' +
        '<div class="list-row"><input class="input" id="set-orgname" type="text" value="' + esc(state.org.name) + '" />' +
        '<button class="btn btn-soft" data-act="org:rename" style="flex:0 0 auto">' + esc(t('save')) + '</button></div>' +
        '<div class="list-row link" data-act="org:delete"><div class="lr-ico" style="background:var(--st-cancel-bg);color:var(--st-cancel-fg)">' + I.trash + '</div>' +
        '<div class="lr-main"><div class="t" style="color:var(--st-cancel-fg)">' + esc(t('deleteBiz')) + '</div></div></div>' +
        '</div></div>';
    } else {
      html += '<div><div class="section-title">' + esc(t('secOrg')) + '</div><div class="list">' +
        '<div class="list-row"><div class="lr-ico">' + I.shop + '</div>' +
        '<div class="lr-main"><div class="t">' + esc(state.org.name) + '</div>' +
        (full ? '<div class="s">' + esc(t('joinCodeLabel')) + ': ' + esc(state.org.join_code) + '</div>' : '') + '</div></div>' +
        '<div class="list-row link" data-act="org:leave"><div class="lr-ico" style="background:var(--st-cancel-bg);color:var(--st-cancel-fg)">' + I.logout + '</div>' +
        '<div class="lr-main"><div class="t" style="color:var(--st-cancel-fg)">' + esc(t('leaveBiz')) + '</div></div></div>' +
        '</div></div>';
    }

    // account
    html += '<div><div class="section-title">' + esc(t('secAccount')) + '</div>' +
      '<div class="card pad-lg">' +
      '<label class="field"><span class="label">' + esc(t('changeEmail')) + '</span>' +
      '<div class="row"><input class="input" id="set-email" type="email" value="' + esc(me.email || '') + '" />' +
      '<button class="btn btn-soft" data-act="acct:email" style="flex:0 0 auto">' + esc(t('save')) + '</button></div></label>' +
      '<label class="field" style="margin-bottom:0"><span class="label">' + esc(t('changePassword')) + '</span>' +
      '<div class="row"><input class="input" id="set-pass" type="password" placeholder="' + esc(t('newPasswordPlaceholder')) + '" autocomplete="new-password" />' +
      '<button class="btn btn-soft" data-act="acct:password" style="flex:0 0 auto">' + esc(t('save')) + '</button></div></label>' +
      '<div id="acct-msg"></div>' +
      '</div>' +
      '<div class="list mt-8">' +
      '<div class="list-row link" data-act="signout"><div class="lr-ico">' + I.logout + '</div>' +
      '<div class="lr-main"><div class="t">' + esc(t('signOut')) + '</div><div class="s">' + esc(me.email || '') + '</div></div></div>' +
      '<div class="list-row link" data-act="acct:delete"><div class="lr-ico" style="background:var(--st-cancel-bg);color:var(--st-cancel-fg)">' + I.trash + '</div>' +
      '<div class="lr-main"><div class="t" style="color:var(--st-cancel-fg)">' + esc(t('deleteAccount')) + '</div><div class="s">' + esc(t('deleteAccountSub')) + '</div></div></div>' +
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
  function switchEl(act, on, id) {
    return '<label class="switch"><input type="checkbox"' + (on ? ' checked' : '') +
      ' data-change="' + act + '"' + (id ? ' data-id="' + id + '"' : '') + ' /><span class="track"></span></label>';
  }
  function roleChipClass(role) { return role === 'boss' ? 'completed' : role === 'manager' ? 'in_progress' : ''; }

  async function saveName() {
    const name = (($('#set-name') || {}).value || '').trim();
    const phone = (($('#set-phone') || {}).value || '').trim();
    const job = (($('#set-jobtitle') || {}).value || '').trim();
    state.me.full_name = name; state.me.phone = phone || null; state.me.job_title = job || null;
    await saveProfile({ full_name: name, phone: phone || null, job_title: job || null });
    toast(t('savedToast'));
    renderView();
  }

  async function removeMember(uid, name) {
    if (!confirm(t('removeMemberConfirm').replace('{name}', name || ''))) return;
    try {
      const { error } = await sb.rpc('remove_member', { p_user_id: uid });
      if (error) throw error;
      state.members = state.members.filter((m) => m.id !== uid);
      await reloadTasks(); await reloadAssignees();
      renderView(); toast(t('memberRemoved'));
    } catch (e) { toast(t('genericError'), true); }
  }

  function acctMsg(h, ok) { const m = $('#acct-msg'); if (m) m.innerHTML = h ? '<div class="' + (ok ? 'ok-text' : 'error-text') + '">' + esc(h) + '</div>' : ''; }
  async function changeEmail() {
    const email = (($('#set-email') || {}).value || '').trim().toLowerCase();
    if (!email || email === (state.me.email || '').toLowerCase()) return;
    acctMsg('');
    try { const { error } = await sb.auth.updateUser({ email: email }); if (error) throw error; acctMsg(t('emailChangeSent'), true); }
    catch (e) { acctMsg(e.message || t('genericError')); }
  }
  async function changePassword() {
    const pass = (($('#set-pass') || {}).value || '');
    if (pass.length < 6) return acctMsg(t('passwordTooShort'));
    acctMsg('');
    try { const { error } = await sb.auth.updateUser({ password: pass }); if (error) throw error;
      const i = $('#set-pass'); if (i) i.value = ''; acctMsg(t('passwordChanged'), true); }
    catch (e) { acctMsg(e.message || t('genericError')); }
  }
  async function deleteMyAccount() {
    if (isOwner()) { acctMsg(t('deleteAccountBoss')); return; }
    if (!confirm(t('deleteAccountConfirm'))) return;
    try {
      const { error } = await sb.rpc('delete_my_account');
      if (error) { if (/BOSS_MUST_TRANSFER/.test(error.message)) { acctMsg(t('deleteAccountBoss')); return; } throw error; }
      teardownChannels();
      try { await sb.auth.signOut(); } catch (e) {}
      Object.assign(state, { session: null, me: null, org: null, members: [], tasks: [], notifications: [] });
      route();
    } catch (e) { acctMsg(e.message || t('genericError')); }
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

  async function setMemberRole(uid, role) {
    try {
      const { error } = await sb.rpc('set_member_role', { p_user_id: uid, p_role: role });
      if (error) throw error;
      const m = state.members.find((x) => x.id === uid); if (m) m.role = role;
      renderView(); toast(t('savedToast'));
    } catch (e) { toast(t('genericError'), true); renderView(); }
  }
  async function setMemberCanCreate(uid, val) {
    try {
      const { error } = await sb.rpc('set_member_can_create', { p_user_id: uid, p_value: val });
      if (error) throw error;
      const m = state.members.find((x) => x.id === uid); if (m) m.can_create_tasks = val;
      renderView(); toast(t('savedToast'));
    } catch (e) { toast(t('genericError'), true); renderView(); }
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
    // close the additional-assignees dropdown when tapping outside it
    if (formExtraOpen && !e.target.closest('.ms')) {
      formExtraOpen = false;
      const w = $('#form-extra'); if (w) w.innerHTML = formExtraHtml((($('#f-assignee') || {}).value) || null);
    }
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

      case 'nav': state.view = val; state.armedTaskId = null; resetTaskPaging(); haptic(6); renderApp(); break;

      case 'scope': state.scope = val; state.armedTaskId = null; resetTaskPaging(); renderView(); break;
      case 'filter': {
        state.armedTaskId = null; resetTaskPaging();
        if (val === 'all') state.statuses = [];
        else if (val === 'starred') state.starredOnly = !state.starredOnly;
        else if (val === 'overdue') state.overdueOnly = !state.overdueOnly;
        else {
          const i = state.statuses.indexOf(val);
          if (i >= 0) state.statuses.splice(i, 1); else state.statuses.push(val);
        }
        renderView();
        break;
      }
      case 'search:clear': state.search = ''; resetTaskPaging(); renderView(); break;
      case 'task:loadmore': state.taskLimit += PAGE_SIZE; haptic(6); renderTaskList(); break;
      case 'home:goto': {
        haptic(6); resetTaskPaging();
        state.statuses = []; state.starredOnly = false; state.overdueOnly = false;
        state.dateFrom = null; state.dateTo = null;
        if (!hasFullAccess()) state.scope = 'mine'; else { state.scope = 'all'; state.assignee = 'all'; }
        if (val === 'overdue') state.overdueOnly = true;
        else if (val === 'today') { const d = todayStr(); state.dateFrom = d; state.dateTo = d; }
        else if (val === 'doneweek') state.statuses = ['completed'];
        state.view = 'tasks'; renderApp();
        break;
      }
      case 'home:member': {
        haptic(6); resetTaskPaging();
        state.scope = 'all'; state.assignee = id; state.statuses = []; state.overdueOnly = false; state.starredOnly = false;
        state.dateFrom = null; state.dateTo = null; state.view = 'tasks'; renderApp();
        break;
      }
      case 'chat:retry': { const b = $('#chat-box'); if (b) b.innerHTML = chatSkeleton(); loadComments(id); break; }
      case 'retry': onSignedIn(); break;
      case 'group:toggle': {
        const collapsed = !state.collapsed[val];
        state.collapsed[val] = collapsed;
        const body = $('.group-body[data-group="' + val + '"]');
        if (body) body.classList.toggle('collapsed', collapsed);
        el.classList.toggle('collapsed', collapsed);
        break;
      }

      case 'cal:prev': { const c = state.calMonth || startOfMonth(new Date()); state.calMonth = new Date(c.getFullYear(), c.getMonth() - 1, 1); renderView(); break; }
      case 'cal:next': { const c = state.calMonth || startOfMonth(new Date()); state.calMonth = new Date(c.getFullYear(), c.getMonth() + 1, 1); renderView(); break; }
      case 'cal:today': state.calMonth = startOfMonth(new Date()); state.calSelected = todayISO(); state.armedTaskId = null; renderView(); break;
      case 'cal:day': state.calSelected = val; state.calMonth = startOfMonth(parseISO(val)); state.armedTaskId = null; renderView(); break;

      case 'datefilter:open': openDateFilter(); break;
      case 'df:close': modalRoot().innerHTML = ''; break;
      case 'df:bg': if (e.target.classList.contains('overlay')) modalRoot().innerHTML = ''; break;
      case 'df:preset': applyDatePreset(val); break;
      case 'df:apply': {
        let f = (($('#df-from') || {}).value) || null;
        let to = (($('#df-to') || {}).value) || null;
        if (f && to && f > to) { const tmp = f; f = to; to = tmp; }
        state.dateFrom = f; state.dateTo = to; state.armedTaskId = null; resetTaskPaging();
        modalRoot().innerHTML = ''; renderView();
        break;
      }
      case 'df:clear': state.dateFrom = null; state.dateTo = null; resetTaskPaging(); modalRoot().innerHTML = ''; renderView(); break;

      case 'task:new': openTaskForm(null, state.view === 'calendar' ? { due_date: state.calSelected } : null); break;
      case 'task:click': handleTaskClick(id); break;
      case 'task:check': e.stopPropagation(); toggleComplete(id); break;
      case 'task:star': e.stopPropagation(); toggleStar(id); break;
      case 'task:edit': openTaskForm(id); break;
      case 'task:save': saveTask(id || null, el); break;
      case 'task:delete': deleteTask(id); break;

      case 'sheet:close': closeSheet(); break;
      case 'sheet:bg': if (e.target.classList.contains('overlay')) closeSheet(); break;
      case 'form:close': modalRoot().innerHTML = ''; break;
      case 'form:bg': if (e.target.classList.contains('overlay')) modalRoot().innerHTML = ''; break;
      case 'form:toggle-assignee': {
        if (formExtraAssignees.has(id)) formExtraAssignees.delete(id); else formExtraAssignees.add(id);
        const pid = ($('#f-assignee') || {}).value || null;
        const wrap = $('#form-extra'); if (wrap) wrap.innerHTML = formExtraHtml(pid);
        break;
      }
      case 'form:extra-toggle': {
        formExtraOpen = !formExtraOpen;
        const pid = ($('#f-assignee') || {}).value || null;
        const wrap = $('#form-extra'); if (wrap) wrap.innerHTML = formExtraHtml(pid);
        break;
      }

      case 'chat:send': sendComment(id); break;
      case 'chat:mention': { const p = $('#mention-pop'); if (p) p.classList.toggle('hidden'); break; }
      case 'mention:add': {
        const name = el.getAttribute('data-name') || '';
        chatMentions[id] = name;
        const ta = $('#chat-text');
        if (ta) { const sep = (ta.value && !/\s$/.test(ta.value)) ? ' ' : ''; ta.value = ta.value + sep + '@' + name + ' '; chatDraft = ta.value; ta.focus(); }
        const p = $('#mention-pop'); if (p) p.classList.add('hidden');
        break;
      }

      case 'sub:toggle': toggleSubtask(id, el.getAttribute('data-task')); break;
      case 'sub:del': deleteSubtask(id, el.getAttribute('data-task')); break;
      case 'sub:add': addSubtask(el.getAttribute('data-task')); break;

      case 'notif:open': openNotification(id, el.getAttribute('data-task') || null); break;
      case 'notif:readall': markAllRead(); break;
      case 'notif:perm': requestNotifPermission(); break;

      case 'profile:save': saveName(); break;
      case 'member:remove': removeMember(id, el.getAttribute('data-name')); break;
      case 'acct:email': changeEmail(); break;
      case 'acct:password': changePassword(); break;
      case 'acct:delete': deleteMyAccount(); break;
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
      case 'assignee': state.assignee = el.value; state.armedTaskId = null; resetTaskPaging(); renderView(); break;
      case 'sort': state.sort = el.value; resetTaskPaging(); renderView(); break;
      case 'notify:toggle': toggleNotify(el.checked); break;
      case 'member:role': setMemberRole(id, el.value); break;
      case 'member:cancreate': setMemberCanCreate(id, el.checked); break;
      case 'form:primary': {
        const pid = el.value || null;
        if (pid) formExtraAssignees.delete(pid);
        const wrap = $('#form-extra'); if (wrap) wrap.innerHTML = formExtraHtml(pid);
        break;
      }
    }
  });

  document.addEventListener('input', (e) => {
    const el = e.target.closest('[data-input]');
    if (!el) return;
    if (el.getAttribute('data-input') === 'search') {
      state.search = el.value; resetTaskPaging(); renderTaskList();
      const clr = $('.search-clear'); if (clr) clr.style.display = el.value ? '' : 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { if (openTaskId) closeSheet(); else if (modalRoot().innerHTML) modalRoot().innerHTML = ''; return; }
    if (e.key === 'Enter' && e.target && e.target.id === 'subt-new') { e.preventDefault(); addSubtask(e.target.getAttribute('data-task')); return; }
    if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.classList && e.target.classList.contains('task')) {
      e.preventDefault(); handleTaskClick(e.target.getAttribute('data-id'));
    }
  });

  /* ============================================================
     BOOT
     ============================================================ */
  async function afterOrgReady() {
    state.view = 'home';
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
        '<button class="btn btn-primary btn-block mt-8" data-act="retry">' + esc(t('retry')) + '</button>' +
        '<button class="btn btn-block" data-act="signout">' + esc(t('signOut')) + '</button></div></div></div>';
    }
  }

  async function boot() {
    const tr = document.getElementById('toast-root');
    if (tr) { tr.setAttribute('aria-live', 'polite'); tr.setAttribute('aria-atomic', 'true'); }
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
      taskListHtml, renderTaskList, matchesSearch, norm, chatSkeleton,
      filteredTasks, appendMessage, msgHtml, renderChat,
      taskCheckboxShown, handleTaskClick, toggleComplete, setStatus,
      viewCalendar, applyDatePreset, openDateFilter,
      taskAssigneeIds, isAssignee, buildAssigneeMap, formExtraHtml,
      setExtraOpen: (v) => { formExtraOpen = v; },
      hasFullAccess, isOwner, canCreateTasks, canManageTask,
      viewHome, subtaskProgress, subtasksFor, isOverdue, dueLabel, dueAt, fmtTime, recurLabel,
      checklistItemsHtml, checklistSectionHtml, isUnread, unreadCount, buildSubtaskMap, todayStr
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
