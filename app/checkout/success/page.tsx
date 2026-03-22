import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl">
          ✓
        </div>

        <h1 className="mt-6 text-4xl font-black text-slate-950">
          تم تفعيل اشتراكك بنجاح
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          يمكنك الآن الانتقال إلى لوحة التحكم والبدء في استخدام مزايا الخطة.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/dashboard"
            className="flex min-h-[56px] items-center justify-center rounded-full bg-emerald-600 px-6 text-lg font-bold text-white hover:bg-emerald-700"
          >
            الذهاب إلى لوحة التحكم
          </Link>

          <Link
            href="/pricing"
            className="flex min-h-[56px] items-center justify-center rounded-full border border-slate-300 px-6 text-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            العودة إلى الأسعار
          </Link>
        </div>
      </div>
    </main>
  );
}
