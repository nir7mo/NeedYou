"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how" className="how">
      <div className="container">
        <div className="section-head">
          <h2>{t.how.title}</h2>
          <p>{t.how.description}</p>
        </div>
        <div className="steps">
          {t.how.steps.map((step, index) => (
            <div className="step" key={step.title}>
              <div className="step-num">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
