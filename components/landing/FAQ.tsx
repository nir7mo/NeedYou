"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head">
          <h2>{t.faq.title}</h2>
          <p>{t.faq.description}</p>
        </div>
        <div className="faq-grid">
          {t.faq.items.map((item) => (
            <div className="faq" key={item.q}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
