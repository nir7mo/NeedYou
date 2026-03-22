"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>{t.pricing.title}</h2>
          <p>{t.pricing.description}</p>
        </div>
        <div className="pricing-cards">
          {t.pricing.plans.map((plan) => {
            const popular = "popular" in plan ? plan.popular : undefined;
            return (
            <div className={`price-card ${popular ? "featured" : ""}`} key={plan.name}>
              {popular && <div className="popular">{popular}</div>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <div className="period">{plan.period}</div>
              <ul>
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button className="btn btn-light btn-block">{plan.cta}</button>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
