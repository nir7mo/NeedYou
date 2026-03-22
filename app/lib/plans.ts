export type PlanKey = "free" | "professional" | "partner";

export type Plan = {
  key: PlanKey;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  note: string;
  cta: string;
  checkoutHref: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    key: "free",
    name: "مجاني",
    subtitle: "للبدء وتجربة المنصة",
    price: "0 دج",
    period: "محدود",
    features: [
      "سيرة ذاتية واحدة فقط",
      "تحليل أساسي",
      "قالب أساسي واحد",
      "تحميل واحد أسبوعيًا",
      "محاولة واحدة كل أسبوع",
    ],
    note: "خطة مجانية محدودة للاستخدام الشخصي الأساسي",
    cta: "ابدأ مجانًا",
    checkoutHref: "/checkout?plan=free",
  },
  {
    key: "professional",
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
    checkoutHref: "/checkout?plan=professional",
    highlighted: true,
  },
  {
    key: "partner",
    name: "الشريك",
    subtitle: "للاستخدام التجاري وإدارة عدة مترشحين",
    price: "4900 دج",
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
    checkoutHref: "/checkout?plan=partner",
  },
];

export function getPlanByKey(key: string | null) {
  return plans.find((plan) => plan.key === key) ?? plans[0];
}
