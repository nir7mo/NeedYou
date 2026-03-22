import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          تم تفعيل اشتراكك بنجاح
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-500 sm:text-lg">
          يمكنك الآن الانتقال إلى لوحة التحكم والبدء في استخدام مزايا الخطة.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/dashboard"
            className="flex min-h-[56px] items-center justify-center rounded-full bg-emerald-600 px-6 text-center text-base font-bold text-white transition hover:bg-emerald-700 sm:text-lg"
          >
            الذهاب إلى لوحة التحكم
          </Link>

          <Link
            href="/pricing"
            className="flex min-h-[56px] items-center justify-center rounded-full border border-slate-300 px-6 text-center text-base font-bold text-slate-800 transition hover:bg-slate-50 sm:text-lg"
          >
            العودة إلى الأسعار
          </Link>
        </div>
      </div>
    </main>
  );
}
