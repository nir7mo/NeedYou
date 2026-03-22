"use client";

import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function LoginPage() {
  const { t } = useLanguage();

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="logo">need<span>you</span></div>
        <h1>{t.auth.login.title}</h1>
        <p>{t.auth.login.description}</p>
        <form className="auth-form">
          <label>
            {t.auth.login.email}
            <input type="email" placeholder="email@domain.com" />
          </label>
          <label>
            {t.auth.login.password}
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            {t.auth.login.cta}
          </button>
        </form>
        <Link href="/signup" className="auth-link">
          {t.auth.login.hint}
        </Link>
      </div>
    </main>
  );
}
