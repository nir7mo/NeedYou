import Link from "next/link";
import { getPlanByKey } from "@/app/lib/plans";

type Props = {
  searchParams: Promise<{ plan?: string }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const params = await searchParams;
  const plan = getPlanByKey(params.plan ?? null);
  const featuredBenefits = plan.features.slice(0, 6);
  const quickReasons = plan.features.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="nav">
        <div className="container nav-inner">
          <Link href="/" className="logo">
            need<span>you</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="tag">{plan.name}</span>
            <Link href="/pricing" className="btn btn-light">
              العودة إلى الأسعار
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.12),transparent_30%),linear-gradient(180deg,#f8fbfb_0%,#f8fafc_100%)]" />

        <div className="container relative">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_380px]">
            <section className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-emerald-500 via-teal-600 to-slate-900" />

              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-extrabold text-emerald-800">
                تأكيد الاشتراك
              </span>

              <div className="mt-5 max-w-3xl">
                <h1 className="text-2xl font-black leading-[1.2] text-slate-950 sm:text-4xl lg:text-[3.3rem]">
                  فعّل خطة {plan.name} وابدأ التقديم بصورة أكثر احترافية
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  راجع تفاصيل الخطة والفوترة وأهم المزايا قبل الانتقال إلى صفحة
                  الدفع، حتى تكمل العملية وأنت مطمئن وواضح أمامك كل ما ستحصل عليه.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-bold text-slate-500">نوع الخطة</div>
                  <div className="mt-2 text-xl font-black text-slate-950">{plan.name}</div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-bold text-slate-500">الفوترة</div>
                  <div className="mt-2 text-xl font-black text-slate-950">{plan.period}</div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:col-span-2 xl:col-span-1">
                  <div className="text-sm font-bold text-slate-500">الاستخدام</div>
                  <div className="mt-2 text-base font-extrabold leading-7 text-slate-950 sm:text-lg">
                    {plan.subtitle}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
                      ما الذي ستحصل عليه
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      مزايا عملية تساعدك على بناء ملف أقوى لكل وظيفة.
                    </p>
                  </div>
                  {plan.highlighted && (
                    <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
                      الأكثر استخدامًا
                    </span>
                  )}
                </div>

                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {featuredBenefits.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-[22px] border border-white bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
                        ✓
                      </span>
                      <span className="text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-black text-slate-900">ملاحظة مهمة</div>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  {plan.note}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/checkout/success" className="btn btn-primary w-full sm:w-auto">
                  متابعة إلى الدفع
                </Link>
                <Link href="/pricing" className="btn btn-light w-full sm:w-auto">
                  العودة إلى الأسعار
                </Link>
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-500">
                يمكنك العودة ومراجعة جميع الخطط قبل إتمام العملية.
              </p>
            </section>

            <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
              <section className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#0b1320_0%,#0f172a_48%,#0f766e_100%)] p-6 text-white shadow-[0_26px_70px_rgba(15,23,42,0.2)] sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.22),transparent_38%)]" />

                <div className="relative">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-emerald-100 backdrop-blur">
                    ملخص الفاتورة
                  </div>

                  <div className="mt-5 rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <div className="text-sm font-bold text-emerald-100">الخطة المختارة</div>
                    <div className="mt-3 text-2xl font-black sm:text-3xl">{plan.name}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-200">{plan.subtitle}</div>

                    <div className="mt-6 rounded-[22px] border border-white/10 bg-slate-950/20 p-4">
                      <div className="text-sm font-bold text-emerald-100">السعر</div>
                      <div className="mt-2 flex items-end justify-between gap-4">
                        <div className="text-3xl font-black sm:text-4xl">{plan.price}</div>
                        <div className="text-sm font-semibold text-slate-200">{plan.period}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 rounded-[24px] border border-white/10 bg-slate-950/25 p-5">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-300">إجمالي اليوم</span>
                      <span className="text-lg font-black text-white sm:text-xl">{plan.price}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-300">نوع الفوترة</span>
                      <span className="font-bold text-emerald-100">{plan.period}</span>
                    </div>
                  </div>

                  <Link href="/checkout/success" className="btn btn-primary btn-block mt-6">
                    تأكيد ومتابعة
                  </Link>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                <h3 className="text-xl font-black text-slate-950">لماذا هذه الخطة مناسبة؟</h3>
                <ul className="mt-5 space-y-3">
                  {quickReasons.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                      <span className="text-sm font-semibold leading-7 text-slate-600 sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
