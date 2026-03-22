import PricingCard from "@/app/components/pricing/PricingCard";
import { plans } from "@/app/lib/plans";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-black text-slate-950 md:text-6xl">
            اختر الخطة المناسبة لك
          </h1>
          <p className="mt-4 text-lg text-slate-500 md:text-xl">
            خطط واضحة تناسب المترشح الفردي، والمستخدم الاحترافي، والشريك التجاري.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.key} plan={plan} />
          ))}
        </div>
      </div>
    </main>
  );
}
