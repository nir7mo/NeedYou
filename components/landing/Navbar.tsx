"use client";

import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="logo">need<span>you</span></div>
        <nav className="nav-links">
          <a href="#how">{t.nav.how}</a>
          <a href="#features">{t.nav.features}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
          <Link href="/signup" className="btn btn-primary">
            {t.nav.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
