export default {
  sidebar: {
    brand: 'HazeClue',
    tagline: 'Monitoring System',
    links: {
      dashboard: 'Dashboard',
      liveMonitoring: 'Live Monitoring',
      reports: 'Reports',
      sessions: 'Session Management',
      devices: 'Device Management',
      settings: 'Settings',
      help: 'Help & Support'
    },
    user: {
      profile: 'Profile',
      logout: 'Logout'
    }
  },
  welcome: {
    title: 'Welcome to HazeClue! 👋',
    subtitle: 'Get started by setting up your first monitoring session',
    createSession: 'Create First Session',
    viewGuide: 'View Guide'
  },
  stats: {
    connectedDevices: 'Connected Devices',
    activeSessions: 'Active Sessions',
    avgAttention: 'Avg Attention',
    reportsGenerated: 'Reports Generated',
    noDevices: 'No devices connected yet',
    startSession: 'Start your first session',
    dataNotAvailable: 'Data not available',
    noReports: 'No reports yet'
  },
  charts: {
    attentionTrends: 'Class Attention Trends',
    attentionTrendsSubtitle: 'Monitor attention levels over time',
    attentionDistribution: 'Attention Distribution',
    attentionDistributionSubtitle: 'Student attention level breakdown',
    noData: 'No data available',
    startToSeeTrends: 'Start a session to see trends',
    startToSeeDistribution: 'Start monitoring to see distribution'
  },
  quickActions: {
    title: 'Quick Actions',
    createSession: {
      title: 'Create Session',
      description: 'Set up a new monitoring session for your class',
      link: 'Get Started'
    },
    addDevices: {
      title: 'Add Devices',
      description: 'Connect EEG devices to start monitoring',
      link: 'Add Device'
    },
    viewTutorial: {
      title: 'View Tutorial',
      description: 'Learn how to use the monitoring system',
      link: 'Learn More'
    }
  },
  recentActivity: {
    title: 'Recent Activity',
    subtitle: 'Your latest sessions and reports',
    empty: 'No activity yet',
    emptyHint: 'Your sessions and reports will appear here'
  },
  liveMonitoring: {
    pageTitle: 'Live Monitoring | Haze Clue',
    noSession: {
      title: 'No Active Session',
      description: 'Start your first monitoring session to track real-time class attention levels and engagement metrics.',
      startNew: 'Start New Session',
      setupDevices: 'Setup Devices First'
    },
    quickSetup: {
      title: 'Quick Session Setup',
      subtitle: 'Create a new monitoring session',
      className: 'Class Name',
      classPlaceholder: 'e.g., Math Class - Grade 10',
      subject: 'Subject',
      subjectPlaceholder: 'Select Subject',
      duration: 'Duration (min)',
      durationPlaceholder: '45',
      students: 'Students',
      studentsPlaceholder: '24',
      startSession: 'Start Session'
    },
    deviceStatus: {
      title: 'Device Status',
      subtitle: 'Connected EEG devices overview',
      noDevices: 'No Devices Connected',
      noDevicesHint: 'Connect EEG devices to start monitoring',
      addDevice: 'Add Device'
    },
    preview: {
      title: 'Monitoring Dashboard Preview',
      subtitle: 'This is what you\'ll see during an active session',
      classAvg: 'Class Average Attention',
      activeDevices: 'Active Devices',
      sessionDuration: 'Session Duration',
      engagementLevel: 'Engagement Level',
      noData: 'No data available',
      outOfRegistered: 'out of 0 registered',
      notStarted: 'Not started',
      noInteractions: 'No interactions',
      chartTitle: 'Real-time Attention Chart',
      chartHint: 'Chart will appear here during active monitoring'
    },
    readyBanner: {
      title: 'Ready to Start Monitoring?',
      subtitle: 'Follow these simple steps to begin your first session:',
      step1: 'Connect your EEG devices',
      step2: 'Create a new session',
      step3: 'Start monitoring in real-time',
      setupDevices: 'Setup Devices',
      viewTutorial: 'View Tutorial'
    }
  },
  reports: {
    pageTitle: 'Reports | Haze Clue',
    noReports: {
      title: 'No Reports Yet',
      description: 'Start monitoring your first class session to generate detailed attention reports and analytics',
      createSession: 'Create First Session',
      learnMore: 'Learn More'
    },
    features: {
      analytics: {
        title: 'Detailed Analytics',
        description: 'Get comprehensive insights into class attention patterns and engagement levels'
      },
      export: {
        title: 'Export Reports',
        description: 'Download reports in PDF format to share with administrators and parents'
      },
      historical: {
        title: 'Historical Data',
        description: 'Track attention trends over time and compare session performance'
      }
    },
    gettingStarted: {
      title: 'Getting Started with Reports',
      subtitle: 'Follow these simple steps to start generating insightful reports for your classes',
      step1: {
        title: 'Connect Your Devices',
        description: 'Add and configure EEG devices for your students'
      },
      step2: {
        title: 'Start a Monitoring Session',
        description: 'Create and launch a live class monitoring session'
      },
      step3: {
        title: 'Generate Reports',
        description: 'View analytics and download detailed PDF reports'
      }
    },
    whatYouGet: {
      title: "What You'll Get",
      attentionTrends: {
        title: 'Attention Trends',
        description: 'Visualize how class attention fluctuates throughout the session with interactive charts'
      },
      studentPerformance: {
        title: 'Student Performance',
        description: 'Track individual and group attention metrics with detailed breakdowns'
      },
      insights: {
        title: 'Insights & Recommendations',
        description: 'Get AI-powered suggestions to improve engagement and class performance'
      },
      sessionTimeline: {
        title: 'Session Timeline',
        description: 'Review detailed timeline of attention levels and key moments during class'
      }
    }
  },
  sessions: {
    pageTitle: 'Session Management | Haze Clue',
    headerTitle: 'Session Management',
    headerSubtitle: 'Create and manage your monitoring sessions',
    hero: {
      title: 'Ready to Start Monitoring? 🎯',
      subtitle: 'Create your first session to begin tracking class attention levels',
      createNew: 'Create New Session'
    },
    createNew: {
      title: 'Create New Session',
      subtitle: 'Set up a monitoring session for your class',
      createBtn: 'Create Session',
      step1: {
        title: 'Enter Class Details',
        description: 'Add subject name, grade level, and session duration'
      },
      step2: {
        title: 'Connect Devices',
        description: 'Ensure EEG devices are connected and ready'
      }
    },
    templates: {
      title: 'Session Templates',
      subtitle: 'Quick start with pre-configured session types',
      useTemplate: 'Use Template →',
      math: {
        title: 'Math Class',
        description: 'Standard mathematics lesson monitoring with focus tracking',
        duration: '45 minutes'
      },
      science: {
        title: 'Science Lab',
        description: 'Laboratory session with hands-on activity monitoring',
        duration: '60 minutes'
      },
      literature: {
        title: 'Literature',
        description: 'Reading comprehension and discussion monitoring',
        duration: '50 minutes'
      }
    },
    yourSessions: {
      title: 'Your Sessions',
      subtitle: 'Manage your created sessions',
      filter: 'All Sessions',
      emptyTitle: 'No sessions yet',
      emptyDesc: "You haven't created any monitoring sessions yet. Start by creating your first session to monitor class attention.",
      createFirst: 'Create Your First Session'
    },
    tips: {
      title: 'Getting Started Tips',
      tip1: 'Start with a session template that matches your subject',
      tip2: 'Ensure all EEG devices are connected before starting',
      tip3: 'Monitor real-time attention levels during your session',
      viewGuide: 'View Complete Setup Guide →'
    }
  },
  devices: {
    pageTitle: 'Device Management | Haze Clue',
    noDevices: {
      title: 'No Devices Connected',
      description: 'Connect your first EEG device to start monitoring classroom attention',
      addFirst: 'Add Your First Device'
    },
    howToConnect: {
      title: 'How to Connect Your Device',
      step1: {
        title: 'Power On',
        description: "Turn on your EEG device and ensure it's charged"
      },
      step2: {
        title: 'Pair Device',
        description: 'Enable Bluetooth and pair with your computer'
      },
      step3: {
        title: 'Add to System',
        description: 'Click "Add Device" and follow the setup wizard'
      },
      step4: {
        title: 'Start Monitoring',
        description: 'Begin your first monitoring session'
      }
    },
    setupGuide: {
      title: 'Setup Guide',
      description: 'Detailed instructions for connecting and configuring your devices',
      link: 'View Guide'
    },
    needHelp: {
      title: 'Need Help?',
      description: 'Contact our support team for assistance with device setup',
      link: 'Contact Support'
    }
  },
  help: {
    pageTitle: 'Help & Support | Haze Clue',
    headerTitle: 'Contact Support',
    headerSubtitle: 'Get help with device setup and system assistance',
    contact: {
      email: {
        title: 'Email Support',
        description: "Send us an email and we'll respond within 24 hours",
        value: 'support@attentionai.com'
      },
      phone: {
        title: 'Phone Support',
        description: 'Call us Monday to Friday, 9 AM - 6 PM EST',
        value: '+1 (555) 123-4567'
      },
      chat: {
        title: 'Live Chat',
        description: 'Chat with our support team in real-time',
        value: 'Start Chat'
      }
    },
    form: {
      title: 'Send Us a Message',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your name',
      email: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      subject: 'Subject',
      subjectDefault: 'Device Setup Assistance',
      message: 'Message',
      messagePlaceholder: 'Describe your issue or question...',
      agree: 'I agree to receive email notifications about my support request',
      submit: 'Send Message'
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How do I connect EEG devices?',
      q2: "What if devices won't connect?",
      q3: 'How do I start a monitoring session?',
      q4: 'Can I export session data?',
      q5: 'What are the system requirements?'
    },
    resources: {
      title: 'Helpful Resources',
      userGuide: 'User Guide',
      videoTutorials: 'Video Tutorials',
      documentation: 'Documentation',
      communityForum: 'Community Forum'
    },
    hours: {
      title: 'Support Hours',
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      saturday: 'Saturday: 10:00 AM - 4:00 PM EST',
      sunday: 'Sunday: Closed',
      emergency: 'Emergency support available 24/7 for critical issues'
    }
  },
  settings: {
    pageTitle: 'Profile Settings | Haze Clue',
    headerTitle: 'Profile Settings',
    headerSubtitle: 'Manage your account information and preferences',
    cancel: 'Cancel',
    saveChanges: 'Save Changes',
    personal: {
      title: 'Personal Information',
      profilePhoto: 'Profile Photo',
      photoHint: 'JPG, GIF or PNG. Max size of 800K',
      uploadNew: 'Upload new photo',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      bio: 'Bio',
      bioPlaceholder: 'Tell us about yourself...'
    },
    account: {
      title: 'Account Settings',
      twoFactor: 'Two-Factor Authentication',
      twoFactorDesc: 'Add an extra layer of security to your account',
      emailNotifications: 'Email Notifications',
      emailNotificationsDesc: 'Receive email updates about your account',
      marketing: 'Marketing Communications',
      marketingDesc: 'Receive updates about new features and offers'
    },
    password: {
      title: 'Password & Security',
      current: 'Current Password',
      currentPlaceholder: 'Enter current password',
      new: 'New Password',
      newPlaceholder: 'Enter new password',
      confirm: 'Confirm New Password',
      confirmPlaceholder: 'Confirm new password',
      update: 'Update Password'
    },
    danger: {
      title: 'Danger Zone',
      deleteAccount: 'Delete Account',
      deleteWarning: 'Once you delete your account, there is no going back. Please be certain.',
      deleteBtn: 'Delete Account'
    }
  },
  createSession: {
    pageTitle: 'Create New Session | Haze Clue',
    headerTitle: 'Create New Session',
    headerSubtitle: 'Set up a new monitoring session for your class',
    details: {
      title: 'Session Details',
      subtitle: 'Fill in the information below to create your monitoring session',
      sessionName: 'Session Name',
      sessionNamePlaceholder: 'e.g., Math Class - Grade 10',
      subject: 'Subject',
      subjectPlaceholder: 'Select Subject',
      gradeLevel: 'Grade Level',
      gradePlaceholder: 'Select Grade'
    },
    monitoring: {
      title: 'Monitoring Settings',
      realTimeAlerts: 'Real-time Alerts',
      realTimeAlertsDesc: 'Get notified when attention levels drop below threshold',
      autoSave: 'Auto-save Data',
      autoSaveDesc: 'Automatically save session data every 5 minutes',
      generateReport: 'Generate Report',
      generateReportDesc: 'Automatically generate report at session end'
    },
    devices: {
      title: 'Device Assignment',
      noDevices: 'No devices connected',
      noDevicesDesc: 'You need to connect EEG devices before starting a session. You can add devices after creating this session.',
      addDevices: 'Add Devices Now'
    },
    notes: {
      label: 'Additional Notes',
      placeholder: 'Add any additional information about this session...'
    },
    actions: {
      saveDraft: 'Save as Draft',
      cancel: 'Cancel',
      create: 'Create Session'
    }
  },
  liveSession: {
    pageTitle: 'Live Session | Haze Clue',
    sessionInfo: {
      live: 'LIVE',
      endSession: 'End Session'
    },
    stats: {
      attention: 'Class Average Attention',
      attentionChange: '+5% from last 5 minutes',
      devices: 'Active Devices',
      devicesOf: 'out of 24 registered devices',
      duration: 'Session Duration',
      remaining: 'remaining: 19:30',
      engagement: 'Engagement Level',
      engagementDetail: '12 interactions in last minute'
    },
    meter: {
      title: 'Class Attention Meter',
      status: 'Status: Excellent',
      classAverage: 'Class Average',
      description: 'Real-time class attention level based on all connected devices'
    },
    actions: {
      title: 'Session Actions',
      addMarker: 'Add Session Marker',
      pauseMonitoring: 'Pause Monitoring',
      sendAlert: 'Send Class Alert'
    },
    status: {
      title: 'Session Status',
      connectedDevices: 'Connected Devices:',
      dataQuality: 'Data Quality:',
      lastUpdate: 'Last Update:',
      signalStrength: 'Signal Strength:',
      excellent: 'Excellent',
      strong: 'Strong'
    },
    timeline: {
      title: 'Class Attention Timeline',
      subtitle: 'Chart shows collective class attention average over time',
      last30: 'Last 30 minutes',
      exportData: 'Export Data'
    }
  }
}
