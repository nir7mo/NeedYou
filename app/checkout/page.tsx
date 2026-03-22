import Link from "next/link";
import { getPlanByKey } from "@/app/lib/plans";

type Props = {
  searchParams: Promise<{ plan?: string }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const params = await searchParams;
  const plan = getPlanByKey(params.plan ?? null);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black text-slate-950">تأكيد الاشتراك</h1>
        <p className="mt-3 text-lg text-slate-500">
          راجع تفاصيل الخطة قبل الانتقال إلى صفحة الدفع.
        </p>

        <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
          <div className="text-2xl font-extrabold text-slate-900">{plan.name}</div>
          <div className="mt-2 text-slate-600">{plan.subtitle}</div>
          <div className="mt-6 text-4xl font-black text-slate-950">{plan.price}</div>
          <div className="mt-1 text-slate-500">{plan.period}</div>
        </div>

        <ul className="mt-8 space-y-3 text-lg text-slate-700">
          {plan.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl bg-slate-100 p-4 text-sm font-semibold text-slate-700">
          {plan.note}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/checkout/success"
            className="flex min-h-[56px] items-center justify-center rounded-full bg-emerald-600 px-6 text-lg font-bold text-white hover:bg-emerald-700"
          >
            متابعة إلى الدفع
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
