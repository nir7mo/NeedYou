"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="langs">
      <span className="lang-label">{t.hero.language}</span>
      <button
        type="button"
        className={`lang-pill ${language === "ar" ? "active" : ""}`}
        onClick={() => setLanguage("ar")}
      >
        {t.hero.langLabels.ar}
      </button>
      <button
        type="button"
        className={`lang-pill ${language === "fr" ? "active" : ""}`}
        onClick={() => setLanguage("fr")}
      >
        {t.hero.langLabels.fr}
      </button>
      <button
        type="button"
        className={`lang-pill ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
      >
        {t.hero.langLabels.en}
      </button>
    </div>
  );
}
