import Link from "next/link";
import { getPlanByKey } from "@/app/lib/plans";

type Props = {
  searchParams: Promise<{ plan?: string }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const params = await searchParams;
  const plan = getPlanByKey(params.plan ?? null);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white p-5 text-right shadow-sm sm:p-8">
        <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          تأكيد الاشتراك
        </h1>
        <p className="mt-3 text-base leading-8 text-slate-500 sm:text-lg">
          راجع تفاصيل الخطة قبل الانتقال إلى صفحة الدفع.
        </p>

        <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 sm:mt-10 sm:p-6">
          <div className="text-xl font-extrabold text-slate-900 sm:text-2xl">{plan.name}</div>
          <div className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{plan.subtitle}</div>
          <div className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:mt-6 sm:text-4xl">
            {plan.price}
          </div>
          <div className="mt-2 text-sm text-slate-500 sm:text-base">{plan.period}</div>
        </div>

        <ul className="mt-8 list-disc space-y-3 pe-5 text-base leading-8 text-slate-700 marker:text-emerald-600 sm:text-lg">
          {plan.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl bg-slate-100 p-4 text-sm font-semibold leading-7 text-slate-700">
          {plan.note}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/checkout/success"
            className="flex min-h-[56px] items-center justify-center rounded-full bg-emerald-600 px-6 text-center text-base font-bold text-white transition hover:bg-emerald-700 sm:text-lg"
          >
            متابعة إلى الدفع
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
