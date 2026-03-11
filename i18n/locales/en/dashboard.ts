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
  }
}
