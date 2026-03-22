"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features">
      <div className="container">
        <div className="section-head">
          <h2>{t.features.title}</h2>
          <p>{t.features.description}</p>
        </div>
        <div className="grid-3">
          {t.features.items.map((item) => (
            <div className="card" key={item.title}>
              <div className="icon-box">★</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
