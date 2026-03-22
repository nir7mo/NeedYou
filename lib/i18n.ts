export type Language = "ar" | "fr" | "en";

export type Translations = {
  nav: {
    how: string;
    features: string;
    pricing: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    language: string;
    langLabels: { ar: string; fr: string; en: string };
  };
  how: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  features: {
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    description: string;
    plans: {
      name: string;
      subtitle?: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
      popular?: string;
      note?: string;
      tone?: "secondary" | "primary" | "business";
    }[];
  };
  faq: {
    title: string;
    description: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    rights: string;
  };
  auth: {
    login: {
      title: string;
      description: string;
      email: string;
      password: string;
      cta: string;
      hint: string;
    };
    signup: {
      title: string;
      description: string;
      name: string;
      email: string;
      password: string;
      cta: string;
      hint: string;
    };
    verify: {
      title: string;
      description: string;
      code: string;
      cta: string;
    };
  };
  profile: {
    title: string;
    description: string;
    sections: {
      basic: string;
      experience: string;
      skills: string;
      education: string;
      projects: string;
      languages: string;
      achievements: string;
      uploads: string;
    };
    placeholders: {
      fullName: string;
      title: string;
      email: string;
      phone: string;
      location: string;
      summary: string;
      list: string;
    };
    uploads: {
      cv: string;
      certificates: string;
      portfolio: string;
    };
    save: string;
    preview: string;
  };
  job: {
    title: string;
    description: string;
    form: {
      title: string;
      description: string;
      link: string;
      company: string;
      recruiter: string;
      analyze: string;
    };
    analysis: {
      title: string;
      skills: string;
      experience: string;
      keywords: string;
    };
    match: {
      title: string;
      strengths: string;
      missing: string;
      suggestions: string;
    };
    template: {
      title: string;
    };
    cv: {
      title: string;
      highlights: string;
      experience: string;
    };
    cover: {
      title: string;
    };
  };
};

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      how: "كيف يعمل",
      features: "المزايا",
      pricing: "الأسعار",
      faq: "الأسئلة الشائعة",
      cta: "ابدأ الآن",
    },
    hero: {
      badge: "مساعدك الذكي في التوظيف",
      title: "أنشئ سيرة ذاتية احترافية مخصصة لكل وظيفة وزد فرصك في القبول",
      description:
        "NeedYou منصة ذكية تساعدك على إنشاء سير ذاتية مخصصة لكل وظيفة وتحليل فرصك وكتابة الرسائل التحفيزية بكل سهولة.",
      primaryCta: "جرّب المنصة الآن",
      secondaryCta: "اكتشف كيف تعمل",
      language: "اللغة",
      langLabels: { ar: "العربية", fr: "Français", en: "English" },
    },
    how: {
      title: "خطوات واضحة لإنشاء ملف مهني جاهز للتقديم",
      description: "أربع مراحل بسيطة تبني بها ملفك، ثم تخصصه بسرعة لأي وظيفة.",
      steps: [
        {
          title: "سجل حسابك",
          description: "ابدأ بإيميل احترافي لاستخدامه في مراسلات التوظيف.",
        },
        {
          title: "املأ ملفك المهني",
          description: "تعليم، خبرات، مهارات، ومشاريع بشكل منظم.",
        },
        {
          title: "أدخل وصف الوظيفة",
          description: "نحلل المتطلبات ونخصص السيرة تلقائيا.",
        },
        {
          title: "حمّل وشارك",
          description: "احصل على CV ورسالة تحفيزية جاهزين للتقديم.",
        },
      ],
    },
    features: {
      title: "مزايا أساسية تقودك لنتائج أفضل",
      description: "منصة واحدة تجمع إنشاء السيرة والتحليل والرسائل التحفيزية.",
      items: [
        {
          title: "سيرة ذاتية مخصصة",
          description: "إنشاء سيرة لكل وظيفة حسب متطلباتها.",
        },
        {
          title: "تحليل فرص القبول",
          description: "تقييم نقاط القوة ونواقص الكلمات المفتاحية.",
        },
        {
          title: "رسائل تحفيزية جاهزة",
          description: "رسائل مخصصة بصياغة احترافية.",
        },
        {
          title: "تحسين ATS",
          description: "تنسيق ذكي يزيد فرص اجتياز أنظمة التوظيف.",
        },
        {
          title: "قوالب احترافية",
          description: "تصاميم حديثة واضحة وسهلة القراءة.",
        },
      ],
    },
    pricing: {
      title: "اختر الخطة المناسبة لك",
      description: "خطط واضحة ومحددة للاستخدام الشخصي أو التجاري مع فروق شفافة.",
      plans: [
        {
          name: "مجاني",
          subtitle: "للبدء وتجربة المنصة",
          price: "0 دج",
          period: "",
          features: [
            "سيرة ذاتية واحدة فقط",
            "تحليل أساسي",
            "قالب أساسي واحد",
            "تحميل واحد أسبوعيا",
            "محاولة واحدة كل أسبوع",
          ],
          note: "خطة مجانية محدودة للاستخدام الشخصي الأساسي",
          cta: "ابدأ مجانا",
          tone: "secondary",
        },
        {
          name: "احترافي",
          subtitle: "لمستخدم شخصي واحد",
          price: "1000 دج",
          period: "شهريًا",
          features: [
            "إنشاء سير ذاتية غير محدودة",
            "تحليل ذكي بالذكاء الاصطناعي",
            "إنشاء رسالة تحفيزية مخصصة",
            "تحسين التوافق مع أنظمة ATS",
            "تحليل الوظائف ومتطلبات المنصب",
            "مقارنة متطلبات الوظيفة مع مهارات المترشح",
            "اقتراح أفضل نموذج سيرة ذاتية لكل وظيفة",
            "الاستفادة الكاملة من أدوات التقديم",
          ],
          note: "هذه الخطة مخصصة لشخص واحد فقط، ولا يمكن استخدامها لعدة مترشحين",
          cta: "اشترك الآن",
          popular: "الأكثر استخداما",
          tone: "primary",
        },
        {
          name: "الشريك",
          subtitle: "للاستخدام التجاري وإدارة عدة مترشحين",
          price: "3000 دج",
          period: "شهريًا",
          features: [
            "استخدام غير محدود",
            "إدارة عدة ملفات شخصية",
            "إنشاء سير ذاتية لعدة مترشحين",
            "تحليل وظائف غير محدود",
            "إنشاء رسائل تحفيزية بدون قيود",
            "استخدام تجاري كامل",
            "تصدير ملفات العملاء",
            "العمل كمستقل أو مقدم خدمة",
            "الوصول الكامل إلى جميع مزايا المنصة",
          ],
          note: "هذه الخطة مناسبة للمستقلين، مكاتب الخدمات، ومستشاري التوظيف",
          cta: "انضم كشريك",
          tone: "business",
        },
      ],
    },
    faq: {
      title: "أسئلة شائعة",
      description: "أجوبة واضحة تساعدك على اتخاذ القرار.",
      items: [
        {
          q: "هل يمكنني إنشاء أكثر من سيرة؟",
          a: "نعم في الخطة الاحترافية يمكنك إنشاء عدد غير محدود.",
        },
        {
          q: "هل يدعم النظام تحسين ATS؟",
          a: "نعم عبر تنسيق ذكي واقتراح كلمات مفتاحية.",
        },
        {
          q: "هل يمكنني إنشاء رسالة تحفيزية؟",
          a: "نعم يتم توليد رسالة مخصصة لكل وظيفة.",
        },
        {
          q: "هل يوجد اشتراك سنوي؟",
          a: "نعم خطط احترافية وسنوية بسعر مخفض.",
        },
        {
          q: "هل يمكنني إدارة عملاء؟",
          a: "ذلك متاح في خطة الأعمال للمستقلين.",
        },
      ],
    },
    footer: {
      tagline: "NeedYou منصة توظيف احترافية",
      rights: "جميع الحقوق محفوظة",
    },
    auth: {
      login: {
        title: "تسجيل الدخول",
        description: "ادخل بياناتك للوصول إلى حسابك.",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        cta: "تسجيل الدخول",
        hint: "ليس لديك حساب؟ أنشئ حسابا جديدا",
      },
      signup: {
        title: "إنشاء حساب",
        description: "ابدأ حسابك المهني خلال دقائق.",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        cta: "إنشاء الحساب",
        hint: "لديك حساب؟ سجل الدخول",
      },
      verify: {
        title: "تأكيد البريد",
        description: "أدخل رمز التحقق المرسل إلى بريدك الإلكتروني.",
        code: "رمز التحقق",
        cta: "تأكيد البريد",
      },
    },
    profile: {
      title: "ملف المرشح",
      description: "ادخل بياناتك مرة واحدة لاستخدامها في أي وظيفة.",
      sections: {
        basic: "المعلومات الأساسية",
        experience: "الخبرات",
        skills: "المهارات",
        education: "التعليم",
        projects: "المشاريع",
        languages: "اللغات",
        achievements: "الإنجازات",
        uploads: "رفع الملفات",
      },
      placeholders: {
        fullName: "الاسم الكامل",
        title: "المسمى الوظيفي",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        location: "المدينة",
        summary: "نبذة مختصرة",
        list: "أضف العناصر سطرا سطرا",
      },
      uploads: {
        cv: "سيرة قديمة PDF",
        certificates: "شهادات",
        portfolio: "بورتفوليو",
      },
      save: "حفظ الملف",
      preview: "معاينة السيرة العامة",
    },
    job: {
      title: "تحسين السيرة حسب الوظيفة",
      description: "خصص سيرتك لكل فرصة مع تحليل نقاط القوة والضعف.",
      form: {
        title: "تفاصيل الوظيفة",
        description: "وصف الوظيفة",
        link: "رابط الوظيفة (اختياري)",
        company: "اسم الشركة",
        recruiter: "اسم المسؤول (اختياري)",
        analyze: "حلل الوظيفة",
      },
      analysis: {
        title: "التحليل",
        skills: "المهارات المستخرجة",
        experience: "الخبرة المطلوبة",
        keywords: "الكلمات المفتاحية",
      },
      match: {
        title: "الملاءمة",
        strengths: "نقاط القوة",
        missing: "النواقص",
        suggestions: "اقتراحات",
      },
      template: {
        title: "القوالب",
      },
      cv: {
        title: "معاينة السيرة المخصصة",
        highlights: "أبرز النقاط",
        experience: "خبرة محسنة",
      },
      cover: {
        title: "الرسالة التحفيزية",
      },
    },
  },
  fr: {
    nav: {
      how: "Comment ça marche",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      faq: "FAQ",
      cta: "Commencer",
    },
    hero: {
      badge: "Votre assistant intelligent de recrutement",
      title:
        "Créez un CV professionnel adapté à chaque poste et augmentez vos chances d’acceptation",
      description:
        "NeedYou est une plateforme intelligente qui vous aide à créer des CV sur mesure, analyser vos chances et rédiger des lettres de motivation facilement.",
      primaryCta: "Essayer la plateforme",
      secondaryCta: "Voir le fonctionnement",
      language: "Langue",
      langLabels: { ar: "العربية", fr: "Français", en: "English" },
    },
    how: {
      title: "Des étapes simples pour un dossier prêt à postuler",
      description:
        "Quatre étapes pour construire votre profil et le personnaliser rapidement.",
      steps: [
        {
          title: "Créez votre compte",
          description: "Utilisez un email professionnel pour vos candidatures.",
        },
        {
          title: "Complétez votre profil",
          description: "Études, expériences, compétences et projets.",
        },
        {
          title: "Ajoutez l’offre",
          description: "Analyse automatique et CV personnalisé.",
        },
        {
          title: "Téléchargez et partagez",
          description: "CV et lettre prêts à envoyer.",
        },
      ],
    },
    features: {
      title: "Des fonctionnalités qui améliorent vos résultats",
      description: "Une plateforme unique pour CV, analyse et lettres.",
      items: [
        {
          title: "CV personnalisé",
          description: "Un CV pour chaque poste avec ses exigences.",
        },
        {
          title: "Analyse de compatibilité",
          description: "Forces, faiblesses et mots clés manquants.",
        },
        {
          title: "Lettres de motivation",
          description: "Lettres sur mesure avec rédaction professionnelle.",
        },
        {
          title: "Optimisation ATS",
          description: "Format et structure adaptés aux ATS.",
        },
        {
          title: "Modèles professionnels",
          description: "Design moderne et lisible.",
        },
      ],
    },
    pricing: {
      title: "Choisissez le plan idéal",
      description: "Des offres claires avec limites et usage précis.",
      plans: [
        {
          name: "Gratuit",
          subtitle: "Pour commencer",
          price: "0 دج",
          period: "",
          features: [
            "Un seul CV",
            "Analyse basique",
            "Un modèle de base",
            "Un téléchargement par semaine",
            "Une tentative par semaine",
          ],
          note: "Offre gratuite limitée pour usage personnel",
          cta: "Commencer",
          tone: "secondary",
        },
        {
          name: "Professionnel",
          subtitle: "Pour un utilisateur personnel",
          price: "1000 دج",
          period: "par mois",
          features: [
            "CV illimités",
            "Analyse IA avancée",
            "Lettre de motivation personnalisée",
            "Optimisation ATS",
            "Analyse des offres et exigences",
            "Comparaison profil et poste",
            "Suggestion du meilleur modèle par poste",
            "Accès complet aux outils de candidature",
          ],
          note:
            "Cette offre est limitée à une seule identité et ne peut pas être utilisée pour plusieurs candidats",
          cta: "S’abonner",
          popular: "Le plus utilisé",
          tone: "primary",
        },
        {
          name: "Partenaire",
          subtitle: "Pour usage commercial et multi clients",
          price: "3000 دج",
          period: "par mois",
          features: [
            "Utilisation illimitée",
            "Gestion de plusieurs profils",
            "CV pour plusieurs candidats",
            "Analyse d’offres illimitée",
            "Lettres illimitées",
            "Usage commercial complet",
            "Export des fichiers clients",
            "Travail en freelance ou service",
            "Accès complet sans limites",
          ],
          note: "Offre dédiée aux freelances et cabinets",
          cta: "Devenir partenaire",
          tone: "business",
        },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      description: "Des réponses claires avant de commencer.",
      items: [
        {
          q: "Puis-je créer plusieurs CV ?",
          a: "Oui avec l’offre Pro, sans limite.",
        },
        {
          q: "L’ATS est-il pris en charge ?",
          a: "Oui via un format optimisé et des mots clés.",
        },
        {
          q: "Puis-je générer une lettre ?",
          a: "Oui, une lettre dédiée à chaque poste.",
        },
        {
          q: "Existe-t-il un plan annuel ?",
          a: "Oui avec réduction.",
        },
        {
          q: "Puis-je gérer des clients ?",
          a: "Oui avec le plan Business.",
        },
      ],
    },
    footer: {
      tagline: "NeedYou plateforme de recrutement professionnelle",
      rights: "Tous droits réservés",
    },
    auth: {
      login: {
        title: "Connexion",
        description: "Accédez à votre compte.",
        email: "Email",
        password: "Mot de passe",
        cta: "Se connecter",
        hint: "Pas de compte ? Créez-en un",
      },
      signup: {
        title: "Créer un compte",
        description: "Commencez en quelques minutes.",
        name: "Nom complet",
        email: "Email",
        password: "Mot de passe",
        cta: "Créer le compte",
        hint: "Déjà un compte ? Se connecter",
      },
      verify: {
        title: "Vérifier l’email",
        description: "Entrez le code reçu par email.",
        code: "Code de vérification",
        cta: "Vérifier",
      },
    },
    profile: {
      title: "Profil candidat",
      description: "Saisissez vos données une fois pour toutes.",
      sections: {
        basic: "Infos de base",
        experience: "Expérience",
        skills: "Compétences",
        education: "Éducation",
        projects: "Projets",
        languages: "Langues",
        achievements: "Réalisations",
        uploads: "Fichiers",
      },
      placeholders: {
        fullName: "Nom complet",
        title: "Intitulé du poste",
        email: "Email",
        phone: "Téléphone",
        location: "Ville",
        summary: "Résumé",
        list: "Ajoutez chaque élément sur une ligne",
      },
      uploads: {
        cv: "Ancien CV PDF",
        certificates: "Certificats",
        portfolio: "Portfolio",
      },
      save: "Enregistrer",
      preview: "Aperçu CV général",
    },
    job: {
      title: "Optimisation du CV par poste",
      description: "Personnalisez votre CV pour chaque opportunité.",
      form: {
        title: "Détails du poste",
        description: "Description du poste",
        link: "Lien du poste (optionnel)",
        company: "Nom de l’entreprise",
        recruiter: "Nom du recruteur (optionnel)",
        analyze: "Analyser",
      },
      analysis: {
        title: "Analyse",
        skills: "Compétences extraites",
        experience: "Expérience requise",
        keywords: "Mots clés",
      },
      match: {
        title: "Correspondance",
        strengths: "Points forts",
        missing: "Manques",
        suggestions: "Suggestions",
      },
      template: {
        title: "Modèles",
      },
      cv: {
        title: "Aperçu CV personnalisé",
        highlights: "Points clés",
        experience: "Expérience optimisée",
      },
      cover: {
        title: "Lettre de motivation",
      },
    },
  },
  en: {
    nav: {
      how: "How It Works",
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Get Started",
    },
    hero: {
      badge: "Your smart hiring assistant",
      title:
        "Create a professional resume tailored to each job and increase your chances of acceptance",
      description:
        "NeedYou is an intelligent platform that helps you create tailored resumes, analyze your chances, and write cover letters with ease.",
      primaryCta: "Try the platform",
      secondaryCta: "See how it works",
      language: "Language",
      langLabels: { ar: "العربية", fr: "Français", en: "English" },
    },
    how: {
      title: "Simple steps to a ready to apply profile",
      description: "Four steps to build your profile and tailor it fast.",
      steps: [
        {
          title: "Create your account",
          description: "Use a professional email for hiring messages.",
        },
        {
          title: "Complete your profile",
          description: "Education, experience, skills, and projects.",
        },
        {
          title: "Add the job description",
          description: "Automatic analysis and tailored CV.",
        },
        {
          title: "Download and share",
          description: "CV and cover letter ready to send.",
        },
      ],
    },
    features: {
      title: "Core features that boost outcomes",
      description: "One platform for resumes, analysis, and letters.",
      items: [
        {
          title: "Tailored resumes",
          description: "A unique CV for every job.",
        },
        {
          title: "Fit analysis",
          description: "Strengths, gaps, and keywords.",
        },
        {
          title: "Cover letters",
          description: "Professional letters for each role.",
        },
        {
          title: "ATS optimization",
          description: "ATS friendly formatting and structure.",
        },
        {
          title: "Professional templates",
          description: "Modern, clean and readable designs.",
        },
      ],
    },
    pricing: {
      title: "Choose the right plan",
      description: "Clear plans with firm limits and usage rules.",
      plans: [
        {
          name: "Free",
          subtitle: "Get started",
          price: "0 دج",
          period: "",
          features: [
            "One CV only",
            "Basic analysis",
            "One basic template",
            "One download per week",
            "One attempt per week",
          ],
          note: "Limited free plan for personal use",
          cta: "Start Free",
          tone: "secondary",
        },
        {
          name: "Professional",
          subtitle: "For one personal user",
          price: "1000 دج",
          period: "per month",
          features: [
            "Unlimited CV creation",
            "AI powered analysis",
            "Personalized cover letter",
            "ATS compatibility optimization",
            "Job and requirement analysis",
            "Compare job needs to candidate skills",
            "Recommend the best CV template per role",
            "Full access to application tools",
          ],
          note:
            "This plan is limited to one personal identity and cannot be used for multiple candidates",
          cta: "Subscribe Now",
          popular: "Most Popular",
          tone: "primary",
        },
        {
          name: "Partner",
          subtitle: "For commercial and multi client use",
          price: "3000 دج",
          period: "per month",
          features: [
            "Unlimited usage",
            "Manage multiple profiles",
            "Create CVs for multiple candidates",
            "Unlimited job analysis",
            "Unlimited cover letters",
            "Full commercial use",
            "Export client files",
            "Work as freelancer or service provider",
            "Full access to all platform features",
          ],
          note: "Built for freelancers and recruitment partners",
          cta: "Become a Partner",
          tone: "business",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      description: "Clear answers before you start.",
      items: [
        {
          q: "Can I create multiple resumes?",
          a: "Yes on the Pro plan with no limits.",
        },
        {
          q: "Is ATS optimization included?",
          a: "Yes with optimized formatting and keywords.",
        },
        {
          q: "Can I generate a cover letter?",
          a: "Yes, one tailored per role.",
        },
        {
          q: "Do you offer yearly plans?",
          a: "Yes with a discounted rate.",
        },
        {
          q: "Can I manage clients?",
          a: "Yes with the Business plan.",
        },
      ],
    },
    footer: {
      tagline: "NeedYou professional hiring platform",
      rights: "All rights reserved",
    },
    auth: {
      login: {
        title: "Login",
        description: "Access your account.",
        email: "Email",
        password: "Password",
        cta: "Login",
        hint: "No account? Create one",
      },
      signup: {
        title: "Create account",
        description: "Get started in minutes.",
        name: "Full name",
        email: "Email",
        password: "Password",
        cta: "Create account",
        hint: "Already have an account? Login",
      },
      verify: {
        title: "Verify email",
        description: "Enter the code sent to your email.",
        code: "Verification code",
        cta: "Verify",
      },
    },
    profile: {
      title: "Candidate Profile",
      description: "Enter your data once and reuse it for any job.",
      sections: {
        basic: "Basic Info",
        experience: "Experience",
        skills: "Skills",
        education: "Education",
        projects: "Projects",
        languages: "Languages",
        achievements: "Achievements",
        uploads: "File Uploads",
      },
      placeholders: {
        fullName: "Full name",
        title: "Job title",
        email: "Email",
        phone: "Phone",
        location: "Location",
        summary: "Summary",
        list: "List items one per line",
      },
      uploads: {
        cv: "Old CV PDF",
        certificates: "Certificates",
        portfolio: "Portfolio",
      },
      save: "Save profile",
      preview: "General CV preview",
    },
    job: {
      title: "Job Specific CV Optimizer",
      description: "Tailor your CV for each opportunity.",
      form: {
        title: "Job details",
        description: "Job description",
        link: "Job link (optional)",
        company: "Company name",
        recruiter: "Recruiter name (optional)",
        analyze: "Analyze job",
      },
      analysis: {
        title: "Analysis",
        skills: "Extracted skills",
        experience: "Required experience",
        keywords: "Keywords",
      },
      match: {
        title: "Matching summary",
        strengths: "Strengths",
        missing: "Missing skills",
        suggestions: "Suggestions",
      },
      template: {
        title: "Template",
      },
      cv: {
        title: "Tailored CV preview",
        highlights: "Highlights",
        experience: "Optimized experience",
      },
      cover: {
        title: "Cover letter",
      },
    },
  },
};
