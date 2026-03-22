import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="nav">
        <div className="container nav-inner">
          <Link href="/" className="logo">
            need<span>you</span>
          </Link>
          <Link href="/pricing" className="btn btn-light">
            العودة إلى الأسعار
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden py-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.12),transparent_30%),linear-gradient(180deg,#f8fbfb_0%,#f8fafc_100%)]" />

        <div className="container relative">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-[34px] border border-white/70 bg-white/90 p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-10">
            <div className="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-4xl font-black text-emerald-700 shadow-[0_14px_32px_rgba(16,185,129,0.18)]">
              ✓
            </div>

            <div className="mt-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-extrabold text-emerald-800">
              تم التفعيل
            </div>

            <h1 className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              تم تفعيل اشتراكك بنجاح
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              أصبح بإمكانك الآن الانتقال إلى لوحة التحكم والبدء في استخدام
              مزايا المنصة لإنشاء ملفات أقوى وتحسين فرصك في القبول.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-bold text-slate-500">الحالة</div>
                <div className="mt-2 text-lg font-black text-slate-950">نشطة الآن</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-bold text-slate-500">الوصول</div>
                <div className="mt-2 text-lg font-black text-slate-950">كامل للخطة</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-bold text-slate-500">الخطوة التالية</div>
                <div className="mt-2 text-lg font-black text-slate-950">ابدأ من اللوحة</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/dashboard" className="btn btn-primary w-full sm:w-auto">
                الذهاب إلى لوحة التحكم
              </Link>
              <Link href="/pricing" className="btn btn-light w-full sm:w-auto">
                العودة إلى الأسعار
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
