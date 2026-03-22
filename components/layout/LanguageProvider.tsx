"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language, Translations } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "rtl" | "ltr";
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem("needyou-lang");
    if (stored === "ar" || stored === "fr" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("needyou-lang", language);
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.body.classList.toggle("rtl", dir === "rtl");
    document.body.classList.toggle("ltr", dir === "ltr");
  }, [language]);

  const value = useMemo(() => {
    const dir: "rtl" | "ltr" = language === "ar" ? "rtl" : "ltr";
    return { language, setLanguage, t: translations[language], dir };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
