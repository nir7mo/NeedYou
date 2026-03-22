"use client";

import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function SignupPage() {
  const { t } = useLanguage();

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="logo">need<span>you</span></div>
        <h1>{t.auth.signup.title}</h1>
        <p>{t.auth.signup.description}</p>
        <form className="auth-form">
          <label>
            {t.auth.signup.name}
            <input type="text" placeholder={t.auth.signup.name} />
          </label>
          <label>
            {t.auth.signup.email}
            <input type="email" placeholder="email@domain.com" />
          </label>
          <label>
            {t.auth.signup.password}
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            {t.auth.signup.cta}
          </button>
        </form>
        <Link href="/login" className="auth-link">
          {t.auth.signup.hint}
        </Link>
      </div>
    </main>
  );
}
