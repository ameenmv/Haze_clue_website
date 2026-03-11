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
  },
  devices: {
    pageTitle: 'إدارة الأجهزة | هيز كلو',
    noDevices: {
      title: 'لا توجد أجهزة متصلة',
      description: 'قم بتوصيل أول جهاز EEG لبدء مراقبة انتباه الفصل',
      addFirst: 'أضف جهازك الأول'
    },
    howToConnect: {
      title: 'كيفية توصيل جهازك',
      step1: {
        title: 'التشغيل',
        description: 'شغّل جهاز EEG وتأكد من شحنه'
      },
      step2: {
        title: 'إقران الجهاز',
        description: 'فعّل البلوتوث وقم بالإقران مع الكمبيوتر'
      },
      step3: {
        title: 'الإضافة للنظام',
        description: 'اضغط "إضافة جهاز" واتبع معالج الإعداد'
      },
      step4: {
        title: 'بدء المراقبة',
        description: 'ابدأ أول جلسة مراقبة'
      }
    },
    setupGuide: {
      title: 'دليل الإعداد',
      description: 'تعليمات مفصلة لتوصيل وتهيئة أجهزتك',
      link: 'عرض الدليل'
    },
    needHelp: {
      title: 'تحتاج مساعدة؟',
      description: 'تواصل مع فريق الدعم للمساعدة في إعداد الأجهزة',
      link: 'تواصل مع الدعم'
    }
  },
  help: {
    pageTitle: 'المساعدة والدعم | هيز كلو',
    headerTitle: 'تواصل مع الدعم',
    headerSubtitle: 'احصل على مساعدة في إعداد الأجهزة والنظام',
    contact: {
      email: {
        title: 'الدعم عبر البريد',
        description: 'أرسل لنا بريدًا إلكترونيًا وسنرد خلال 24 ساعة',
        value: 'support@attentionai.com'
      },
      phone: {
        title: 'الدعم الهاتفي',
        description: 'اتصل بنا من الإثنين إلى الجمعة، 9 ص - 6 م',
        value: '+1 (555) 123-4567'
      },
      chat: {
        title: 'المحادثة المباشرة',
        description: 'تحدث مع فريق الدعم في الوقت الفعلي',
        value: 'ابدأ المحادثة'
      }
    },
    form: {
      title: 'أرسل لنا رسالة',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'أدخل اسمك',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'your.email@example.com',
      subject: 'الموضوع',
      subjectDefault: 'مساعدة في إعداد الأجهزة',
      message: 'الرسالة',
      messagePlaceholder: 'صف مشكلتك أو سؤالك...',
      agree: 'أوافق على تلقي إشعارات بالبريد الإلكتروني حول طلب الدعم الخاص بي',
      submit: 'إرسال الرسالة'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      q1: 'كيف أوصل أجهزة EEG؟',
      q2: 'ماذا لو لم تتصل الأجهزة؟',
      q3: 'كيف أبدأ جلسة مراقبة؟',
      q4: 'هل يمكنني تصدير بيانات الجلسة؟',
      q5: 'ما هي متطلبات النظام؟'
    },
    resources: {
      title: 'موارد مفيدة',
      userGuide: 'دليل المستخدم',
      videoTutorials: 'فيديوهات تعليمية',
      documentation: 'التوثيق',
      communityForum: 'منتدى المجتمع'
    },
    hours: {
      title: 'ساعات الدعم',
      weekdays: 'الإثنين - الجمعة: 9:00 ص - 6:00 م',
      saturday: 'السبت: 10:00 ص - 4:00 م',
      sunday: 'الأحد: مغلق',
      emergency: 'دعم طوارئ متاح 24/7 للمشاكل الحرجة'
    }
  },
  settings: {
    pageTitle: 'إعدادات الملف الشخصي | هيز كلو',
    headerTitle: 'إعدادات الملف الشخصي',
    headerSubtitle: 'إدارة معلومات حسابك وتفضيلاتك',
    cancel: 'إلغاء',
    saveChanges: 'حفظ التغييرات',
    personal: {
      title: 'المعلومات الشخصية',
      profilePhoto: 'صورة الملف الشخصي',
      photoHint: 'JPG أو GIF أو PNG. الحجم الأقصى 800K',
      uploadNew: 'رفع صورة جديدة',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      bio: 'نبذة',
      bioPlaceholder: 'أخبرنا عن نفسك...'
    },
    account: {
      title: 'إعدادات الحساب',
      twoFactor: 'المصادقة الثنائية',
      twoFactorDesc: 'أضف طبقة أمان إضافية لحسابك',
      emailNotifications: 'إشعارات البريد الإلكتروني',
      emailNotificationsDesc: 'تلقي تحديثات بالبريد الإلكتروني حول حسابك',
      marketing: 'الاتصالات التسويقية',
      marketingDesc: 'تلقي تحديثات حول الميزات والعروض الجديدة'
    },
    password: {
      title: 'كلمة المرور والأمان',
      current: 'كلمة المرور الحالية',
      currentPlaceholder: 'أدخل كلمة المرور الحالية',
      new: 'كلمة المرور الجديدة',
      newPlaceholder: 'أدخل كلمة المرور الجديدة',
      confirm: 'تأكيد كلمة المرور الجديدة',
      confirmPlaceholder: 'أكد كلمة المرور الجديدة',
      update: 'تحديث كلمة المرور'
    },
    danger: {
      title: 'منطقة الخطر',
      deleteAccount: 'حذف الحساب',
      deleteWarning: 'بمجرد حذف حسابك، لا يمكن التراجع. يرجى التأكد.',
      deleteBtn: 'حذف الحساب'
    }
  }
}
