"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import LanguageSwitcher from "@/components/landing/LanguageSwitcher";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="badge">{t.hero.badge}</div>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">
              {t.hero.primaryCta}
            </a>
            <a href="#how" className="btn btn-soft">
              {t.hero.secondaryCta}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
        <div className="hero-card">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="NeedYou preview"
          />
        </div>
      </div>
    </section>
  );
}
