export default {
  sidebar: {
    brand: 'هيز كلو',
    tagline: 'نظام المراقبة',
    links: {
      dashboard: 'لوحة التحكم',
      liveMonitoring: 'المراقبة المباشرة',
      reports: 'التقارير',
      sessions: 'إدارة الجلسات',
      devices: 'إدارة الأجهزة',
      settings: 'الإعدادات',
      help: 'المساعدة والدعم'
    },
    user: {
      profile: 'الملف الشخصي',
      logout: 'تسجيل الخروج'
    }
  },
  welcome: {
    title: 'مرحباً بك في هيز كلو! 👋',
    subtitle: 'ابدأ بإعداد أول جلسة مراقبة',
    createSession: 'إنشاء أول جلسة',
    viewGuide: 'عرض الدليل'
  },
  stats: {
    connectedDevices: 'الأجهزة المتصلة',
    activeSessions: 'الجلسات النشطة',
    avgAttention: 'متوسط الانتباه',
    reportsGenerated: 'التقارير المُنشأة',
    noDevices: 'لا توجد أجهزة متصلة بعد',
    startSession: 'ابدأ جلستك الأولى',
    dataNotAvailable: 'البيانات غير متوفرة',
    noReports: 'لا توجد تقارير بعد'
  },
  charts: {
    attentionTrends: 'اتجاهات انتباه الفصل',
    attentionTrendsSubtitle: 'مراقبة مستويات الانتباه بمرور الوقت',
    attentionDistribution: 'توزيع الانتباه',
    attentionDistributionSubtitle: 'تحليل مستوى انتباه الطلاب',
    noData: 'لا توجد بيانات',
    startToSeeTrends: 'ابدأ جلسة لرؤية الاتجاهات',
    startToSeeDistribution: 'ابدأ المراقبة لرؤية التوزيع'
  },
  quickActions: {
    title: 'إجراءات سريعة',
    createSession: {
      title: 'إنشاء جلسة',
      description: 'إعداد جلسة مراقبة جديدة لفصلك',
      link: 'ابدأ الآن'
    },
    addDevices: {
      title: 'إضافة أجهزة',
      description: 'قم بتوصيل أجهزة EEG لبدء المراقبة',
      link: 'إضافة جهاز'
    },
    viewTutorial: {
      title: 'عرض الشرح',
      description: 'تعلم كيفية استخدام نظام المراقبة',
      link: 'اعرف المزيد'
    }
  },
  recentActivity: {
    title: 'النشاط الأخير',
    subtitle: 'آخر الجلسات والتقارير',
    empty: 'لا يوجد نشاط بعد',
    emptyHint: 'ستظهر جلساتك وتقاريرك هنا'
  },
  liveMonitoring: {
    pageTitle: 'المراقبة المباشرة | هيز كلو',
    noSession: {
      title: 'لا توجد جلسة نشطة',
      description: 'ابدأ أول جلسة مراقبة لتتبع مستويات انتباه الفصل ومقاييس المشاركة في الوقت الفعلي.',
      startNew: 'بدء جلسة جديدة',
      setupDevices: 'إعداد الأجهزة أولاً'
    },
    quickSetup: {
      title: 'إعداد سريع للجلسة',
      subtitle: 'إنشاء جلسة مراقبة جديدة',
      className: 'اسم الفصل',
      classPlaceholder: 'مثال: فصل الرياضيات - الصف العاشر',
      subject: 'المادة',
      subjectPlaceholder: 'اختر المادة',
      duration: 'المدة (دقيقة)',
      durationPlaceholder: '45',
      students: 'الطلاب',
      studentsPlaceholder: '24',
      startSession: 'بدء الجلسة'
    },
    deviceStatus: {
      title: 'حالة الأجهزة',
      subtitle: 'نظرة عامة على أجهزة EEG المتصلة',
      noDevices: 'لا توجد أجهزة متصلة',
      noDevicesHint: 'قم بتوصيل أجهزة EEG لبدء المراقبة',
      addDevice: 'إضافة جهاز'
    },
    preview: {
      title: 'معاينة لوحة المراقبة',
      subtitle: 'هذا ما ستراه أثناء الجلسة النشطة',
      classAvg: 'متوسط انتباه الفصل',
      activeDevices: 'الأجهزة النشطة',
      sessionDuration: 'مدة الجلسة',
      engagementLevel: 'مستوى المشاركة',
      noData: 'لا توجد بيانات',
      outOfRegistered: 'من 0 مسجل',
      notStarted: 'لم تبدأ',
      noInteractions: 'لا توجد تفاعلات',
      chartTitle: 'رسم بياني للانتباه في الوقت الفعلي',
      chartHint: 'سيظهر الرسم البياني هنا أثناء المراقبة النشطة'
    },
    readyBanner: {
      title: 'مستعد لبدء المراقبة؟',
      subtitle: 'اتبع هذه الخطوات البسيطة لبدء جلستك الأولى:',
      step1: 'قم بتوصيل أجهزة EEG',
      step2: 'أنشئ جلسة جديدة',
      step3: 'ابدأ المراقبة في الوقت الفعلي',
      setupDevices: 'إعداد الأجهزة',
      viewTutorial: 'عرض الشرح'
    }
  },
  reports: {
    pageTitle: 'التقارير | هيز كلو',
    noReports: {
      title: 'لا توجد تقارير بعد',
      description: 'ابدأ مراقبة أول جلسة دراسية لإنشاء تقارير انتباه مفصلة وتحليلات',
      createSession: 'إنشاء أول جلسة',
      learnMore: 'اعرف المزيد'
    },
    features: {
      analytics: {
        title: 'تحليلات مفصلة',
        description: 'احصل على رؤى شاملة حول أنماط انتباه الفصل ومستويات المشاركة'
      },
      export: {
        title: 'تصدير التقارير',
        description: 'قم بتحميل التقارير بصيغة PDF لمشاركتها مع الإداريين وأولياء الأمور'
      },
      historical: {
        title: 'البيانات التاريخية',
        description: 'تتبع اتجاهات الانتباه مع مرور الوقت وقارن أداء الجلسات'
      }
    },
    gettingStarted: {
      title: 'البدء مع التقارير',
      subtitle: 'اتبع هذه الخطوات البسيطة لبدء إنشاء تقارير مفيدة لفصولك',
      step1: {
        title: 'قم بتوصيل أجهزتك',
        description: 'أضف وقم بتهيئة أجهزة EEG لطلابك'
      },
      step2: {
        title: 'ابدأ جلسة مراقبة',
        description: 'أنشئ وابدأ جلسة مراقبة مباشرة للفصل'
      },
      step3: {
        title: 'أنشئ التقارير',
        description: 'اعرض التحليلات وقم بتحميل تقارير PDF مفصلة'
      }
    },
    whatYouGet: {
      title: 'ما ستحصل عليه',
      attentionTrends: {
        title: 'اتجاهات الانتباه',
        description: 'تصور كيف يتقلب انتباه الفصل خلال الجلسة مع رسوم بيانية تفاعلية'
      },
      studentPerformance: {
        title: 'أداء الطلاب',
        description: 'تتبع مقاييس الانتباه الفردية والجماعية مع تحليلات مفصلة'
      },
      insights: {
        title: 'رؤى وتوصيات',
        description: 'احصل على اقتراحات مدعومة بالذكاء الاصطناعي لتحسين المشاركة وأداء الفصل'
      },
      sessionTimeline: {
        title: 'الجدول الزمني للجلسة',
        description: 'راجع الجدول الزمني المفصل لمستويات الانتباه واللحظات الرئيسية أثناء الحصة'
      }
    }
  },
  sessions: {
    pageTitle: 'إدارة الجلسات | هيز كلو',
    headerTitle: 'إدارة الجلسات',
    headerSubtitle: 'إنشاء وإدارة جلسات المراقبة الخاصة بك',
    hero: {
      title: 'مستعد لبدء المراقبة؟ 🎯',
      subtitle: 'أنشئ جلستك الأولى لبدء تتبع مستويات انتباه الفصل',
      createNew: 'إنشاء جلسة جديدة'
    },
    createNew: {
      title: 'إنشاء جلسة جديدة',
      subtitle: 'إعداد جلسة مراقبة لفصلك',
      createBtn: 'إنشاء جلسة',
      step1: {
        title: 'أدخل تفاصيل الفصل',
        description: 'أضف اسم المادة والمرحلة الدراسية ومدة الجلسة'
      },
      step2: {
        title: 'توصيل الأجهزة',
        description: 'تأكد من توصيل أجهزة EEG وجاهزيتها'
      }
    },
    templates: {
      title: 'قوالب الجلسات',
      subtitle: 'بداية سريعة بأنواع جلسات مُعدة مسبقاً',
      useTemplate: 'استخدم القالب ←',
      math: {
        title: 'حصة الرياضيات',
        description: 'مراقبة معيارية لدرس الرياضيات مع تتبع التركيز',
        duration: '45 دقيقة'
      },
      science: {
        title: 'معمل العلوم',
        description: 'جلسة معملية مع مراقبة الأنشطة العملية',
        duration: '60 دقيقة'
      },
      literature: {
        title: 'الأدب',
        description: 'مراقبة الفهم القرائي والمناقشة',
        duration: '50 دقيقة'
      }
    },
    yourSessions: {
      title: 'جلساتك',
      subtitle: 'إدارة الجلسات التي أنشأتها',
      filter: 'جميع الجلسات',
      emptyTitle: 'لا توجد جلسات بعد',
      emptyDesc: 'لم تنشئ أي جلسات مراقبة بعد. ابدأ بإنشاء جلستك الأولى لمراقبة انتباه الفصل.',
      createFirst: 'أنشئ جلستك الأولى'
    },
    tips: {
      title: 'نصائح للبدء',
      tip1: 'ابدأ بقالب جلسة يتناسب مع مادتك',
      tip2: 'تأكد من توصيل جميع أجهزة EEG قبل البدء',
      tip3: 'راقب مستويات الانتباه في الوقت الفعلي أثناء جلستك',
      viewGuide: 'عرض دليل الإعداد الكامل ←'
    }
  }
}
