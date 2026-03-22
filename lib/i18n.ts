export type Language = "ar" | "fr" | "en";

export const translations = {
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
      description: "خطط مرنة للباحثين عن العمل والمستقلين والشركات.",
      plans: [
        {
          name: "مجانا",
          price: "0€",
          period: "مدى الحياة",
          features: ["سيرة واحدة فقط", "تحليل أساسي", "قالب أساسي"],
          cta: "ابدأ مجانا",
        },
        {
          name: "احترافي",
          price: "9€",
          period: "شهريا أو 79€ سنويا",
          features: [
            "سير غير محدودة",
            "تحليل ذكاء اصطناعي",
            "إنشاء رسالة تحفيزية",
            "تحسين ATS",
          ],
          cta: "اشترك الآن",
          popular: "الأكثر اختيارا",
        },
        {
          name: "أعمال (مستقل)",
          price: "29€",
          period: "شهريا أو 199€ سنويا",
          features: [
            "إدارة عدة مستخدمين أو عملاء",
            "ملفات شخصية متعددة",
            "إنشاء سير لعملاء آخرين",
            "تصدير ملفات العملاء",
          ],
          cta: "تواصل معنا",
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
      description: "Des offres flexibles pour particuliers et freelances.",
      plans: [
        {
          name: "Gratuit",
          price: "0€",
          period: "à vie",
          features: ["1 CV uniquement", "Analyse basique", "Modèle de base"],
          cta: "Commencer",
        },
        {
          name: "Pro",
          price: "9€",
          period: "par mois ou 79€ par an",
          features: [
            "CV illimités",
            "Analyse IA",
            "Lettre de motivation",
            "Optimisation ATS",
          ],
          cta: "Souscrire",
          popular: "Le plus choisi",
        },
        {
          name: "Business (Freelance)",
          price: "29€",
          period: "par mois ou 199€ par an",
          features: [
            "Gérer plusieurs clients",
            "Profils multiples",
            "CV pour autres personnes",
            "Export des fichiers clients",
          ],
          cta: "Contactez-nous",
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
      description: "Flexible pricing for job seekers and freelancers.",
      plans: [
        {
          name: "Free",
          price: "0€",
          period: "lifetime",
          features: ["1 CV only", "Basic analysis", "Basic template"],
          cta: "Start free",
        },
        {
          name: "Pro",
          price: "9€",
          period: "per month or 79€ per year",
          features: [
            "Unlimited CVs",
            "AI analysis",
            "Cover letter generation",
            "ATS optimization",
          ],
          cta: "Subscribe",
          popular: "Most popular",
        },
        {
          name: "Business (Freelancer)",
          price: "29€",
          period: "per month or 199€ per year",
          features: [
            "Manage multiple clients",
            "Multiple profiles",
            "Generate CVs for others",
            "Export client files",
          ],
          cta: "Contact us",
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
} as const;

export type Translations = (typeof translations)[Language];
