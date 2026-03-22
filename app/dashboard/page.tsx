import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black text-slate-950">لوحة التحكم</h1>
        <p className="mt-3 text-lg text-slate-500">
          من هنا يمكنك إدارة ملفك المهني، وتحليل الوظائف، وإنشاء سير ذاتية مخصصة.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Link
            href="/dashboard/profile"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-slate-900">الملف الشخصي</h2>
            <p className="mt-2 text-slate-500">
              أدخل معلوماتك الأساسية، خبراتك، مهاراتك، ومرفقاتك.
            </p>
          </Link>

          <Link
            href="/dashboard/job-optimizer"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-slate-900">تحليل الوظيفة</h2>
            <p className="mt-2 text-slate-500">
              الصق الوصف الوظيفي، ثم أنشئ سيرة ذاتية ورسالة تحفيزية مخصصة.
            </p>
          </Link>

          <Link
            href="/dashboard/clients"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-slate-900">إدارة المترشحين</h2>
            <p className="mt-2 text-slate-500">
              هذه الصفحة مهمة بشكل خاص لخطة الشريك لإدارة عدة ملفات شخصية.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
