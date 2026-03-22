"use client";

import { useEffect, useState } from "react";
import ProfileForm from "@/components/profile/ProfileForm";
import ProfilePreview from "@/components/profile/ProfilePreview";
import type { ProfileData } from "@/types/profile";
import { useLanguage } from "@/components/layout/LanguageProvider";

const emptyProfile: ProfileData = {
  basic: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experience: "",
  skills: "",
  education: "",
  projects: "",
  languages: "",
  achievements: "",
  files: {},
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileData>(emptyProfile);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const stored = window.localStorage.getItem("needyou-profile");
    if (stored) {
      try {
        setProfile({ ...emptyProfile, ...JSON.parse(stored), files: {} });
      } catch {
        setProfile(emptyProfile);
      }
    }
  }, []);

  const handleSubmit = () => {
    window.localStorage.setItem(
      "needyou-profile",
      JSON.stringify({ ...profile, files: {} })
    );
    setSubmitted(true);
  };

  return (
    <main className="page">
      <div className="container page-head">
        <h1>{t.profile.title}</h1>
        <p>{t.profile.description}</p>
      </div>
      <div className="container grid gap-8">
        <ProfileForm
          data={profile}
          onChange={setProfile}
          onSubmit={handleSubmit}
          labels={{
            sections: t.profile.sections,
            placeholders: t.profile.placeholders,
            uploads: t.profile.uploads,
            save: t.profile.save,
          }}
        />
        {submitted && <ProfilePreview data={profile} title={t.profile.preview} />}
      </div>
    </main>
  );
}
