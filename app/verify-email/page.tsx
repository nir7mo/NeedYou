"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

export default function VerifyEmailPage() {
  const { t } = useLanguage();

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="logo">need<span>you</span></div>
        <h1>{t.auth.verify.title}</h1>
        <p>{t.auth.verify.description}</p>
        <form className="auth-form">
          <label>
            {t.auth.verify.code}
            <input type="text" placeholder="000000" />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            {t.auth.verify.cta}
          </button>
        </form>
      </div>
    </main>
  );
}
