import Link from "next/link";
import { Plan } from "@/app/lib/plans";

type Props = {
  plan: Plan;
};

export default function PricingCard({ plan }: Props) {
  return (
    <div
      className={`rounded-[28px] border bg-white p-8 shadow-sm transition ${
        plan.highlighted
          ? "border-emerald-400 shadow-lg"
          : "border-slate-200"
      }`}
    >
      {plan.highlighted && (
        <div className="mb-4 inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold text-white">
          الأكثر استخدامًا
        </div>
      )}

      <h3 className="text-3xl font-extrabold text-slate-900">{plan.name}</h3>
      <p className="mt-2 text-base text-slate-500">{plan.subtitle}</p>

      <div className="mt-8">
        <div className="text-5xl font-black text-slate-950">{plan.price}</div>
        <div className="mt-2 text-lg text-slate-500">{plan.period}</div>
      </div>

      <ul className="mt-8 space-y-4 text-lg text-slate-700">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl bg-emerald-50 px-4 py-4 text-center text-sm font-semibold text-emerald-800">
        {plan.note}
      </div>

      <Link
        href={plan.checkoutHref}
        className={`mt-8 flex min-h-[56px] w-full items-center justify-center rounded-full px-6 text-lg font-bold transition ${
          plan.highlighted
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
