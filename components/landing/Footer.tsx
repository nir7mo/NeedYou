"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">need<span>you</span></div>
        <p>{t.footer.tagline}</p>
        <p>© 2026 NeedYou. {t.footer.rights}.</p>
      </div>
    </footer>
  );
}
