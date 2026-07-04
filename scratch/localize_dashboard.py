import os

base_path = '/home/ameen/ameen/projects/grad/Haze_clue_website'

replacements = {
    'app/pages/dashboard/reports.vue': [
        ('My Reports', "{{ $t('dashboard.reports.myReports') }}"),
        ('>Refresh<', ">{{ $t('dashboard.reports.refresh') }}<"),
        ('>Download<', ">{{ $t('dashboard.reports.download') }}<")
    ],
    'app/pages/dashboard/profile.vue': [
        ('Admin / Teacher', "{{ $t('dashboard.profile.role') }}"),
        ('Email Address', "{{ $t('dashboard.profile.email') }}"),
        ('Phone Number', "{{ $t('dashboard.profile.phone') }}"),
        ('Joined At', "{{ $t('dashboard.profile.joinedAt') }}"),
        ('>Edit Profile<', ">{{ $t('dashboard.profile.edit') }}<")
    ],
    'app/pages/dashboard/live-session.vue': [
        ('Connect EEG Headset', "{{ $t('dashboard.liveSession.connectEeg') }}"),
        ('Disconnect', "{{ $t('dashboard.liveSession.disconnect') }}")
    ],
    'app/components/dashboard/NotificationDropdown.vue': [
        ('>Notifications<', ">{{ $t('dashboard.notifications.title') }}<"),
        ('Mark all read', "{{ $t('dashboard.notifications.markAllRead') }}"),
        ('Loading notifications...', "{{ $t('dashboard.notifications.loading') }}"),
        ('All caught up!', "{{ $t('dashboard.notifications.allCaughtUp') }}"),
        ('You have no new notifications right now.', "{{ $t('dashboard.notifications.noNew') }}"),
        ('View all notifications', "{{ $t('dashboard.notifications.viewAll') }}")
    ],
    'app/components/dashboard/live/LiveSessionInfo.vue': [
        ('Math Class - Grade 10', "{{ $t('dashboard.liveSessionInfo.mathClass') }}"),
        ('Mathematics', "{{ $t('dashboard.liveSessionInfo.subject') }}")
    ],
    'app/components/dashboard/live/LiveSessionPanels.vue': [
        ('2 sec ago', "{{ $t('dashboard.liveSessionPanels.2secAgo') }}")
    ],
    'app/components/dashboard/sessions/SessionList.vue': [
        ('>Draft<', ">{{ $t('dashboard.sessions.draft') }}<"),
        ('>Active<', ">{{ $t('dashboard.sessions.active') }}<"),
        ('>Completed<', ">{{ $t('dashboard.sessions.completed') }}<"),
        ('Loading sessions...', "{{ $t('dashboard.sessions.loading') }}"),
        ('>Start<', ">{{ $t('dashboard.sessions.start') }}<"),
        ('>End<', ">{{ $t('dashboard.sessions.end') }}<")
    ],
    'app/components/dashboard/sessions/CreateSessionDetails.vue': [
        ('Duration (minutes)', "{{ $t('dashboard.createSession.duration') }}"),
        ('Number of Students', "{{ $t('dashboard.createSession.studentsCount') }}")
    ]
}

total_replaced = 0
for rel_path, reps in replacements.items():
    file_path = os.path.join(base_path, rel_path)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old, new in reps:
            content = content.replace(old, new)
            if old in original_content:
                print(f"Replaced '{old}' in {rel_path}")
                total_replaced += 1
            else:
                print(f"WARNING: Could not find '{old}' in {rel_path}")
                
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    else:
        print(f"File not found: {file_path}")

print(f"Done! Replaced {total_replaced} strings.")
