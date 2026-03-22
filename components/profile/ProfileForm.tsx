"use client";

import type { ProfileData } from "@/types/profile";

type Props = {
  data: ProfileData;
  onChange: (next: ProfileData) => void;
  onSubmit: () => void;
  labels: {
    sections: {
      basic: string;
      experience: string;
      skills: string;
      education: string;
      projects: string;
      languages: string;
      achievements: string;
      uploads: string;
    };
    placeholders: {
      fullName: string;
      title: string;
      email: string;
      phone: string;
      location: string;
      summary: string;
      list: string;
    };
    uploads: {
      cv: string;
      certificates: string;
      portfolio: string;
    };
    save: string;
  };
};

export default function ProfileForm({ data, onChange, onSubmit, labels }: Props) {
  return (
    <form
      className="grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <section className="card">
        <h3 className="text-lg font-bold mb-4">{labels.sections.basic}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="input"
            placeholder={labels.placeholders.fullName}
            value={data.basic.fullName}
            onChange={(e) => onChange({ ...data, basic: { ...data.basic, fullName: e.target.value } })}
          />
          <input
            className="input"
            placeholder={labels.placeholders.title}
            value={data.basic.title}
            onChange={(e) => onChange({ ...data, basic: { ...data.basic, title: e.target.value } })}
          />
          <input
            className="input"
            placeholder={labels.placeholders.email}
            value={data.basic.email}
            onChange={(e) => onChange({ ...data, basic: { ...data.basic, email: e.target.value } })}
          />
          <input
            className="input"
            placeholder={labels.placeholders.phone}
            value={data.basic.phone}
            onChange={(e) => onChange({ ...data, basic: { ...data.basic, phone: e.target.value } })}
          />
          <input
            className="input"
            placeholder={labels.placeholders.location}
            value={data.basic.location}
            onChange={(e) => onChange({ ...data, basic: { ...data.basic, location: e.target.value } })}
          />
          <textarea
            className="input md:col-span-2"
            placeholder={labels.placeholders.summary}
            rows={4}
            value={data.basic.summary}
            onChange={(e) => onChange({ ...data, basic: { ...data.basic, summary: e.target.value } })}
          />
        </div>
      </section>

      {[
        [labels.sections.experience, "experience"],
        [labels.sections.skills, "skills"],
        [labels.sections.education, "education"],
        [labels.sections.projects, "projects"],
        [labels.sections.languages, "languages"],
        [labels.sections.achievements, "achievements"],
      ].map(([label, key]) => (
        <section className="card" key={key}>
          <h3 className="text-lg font-bold mb-4">{label}</h3>
          <textarea
            className="input"
            rows={4}
            placeholder={labels.placeholders.list}
            value={data[key as keyof ProfileData] as string}
            onChange={(e) => onChange({ ...data, [key]: e.target.value })}
          />
        </section>
      ))}

      <section className="card">
        <h3 className="text-lg font-bold mb-4">{labels.sections.uploads}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            className="input"
            type="file"
            accept=".pdf"
            aria-label={labels.uploads.cv}
            onChange={(e) =>
              onChange({ ...data, files: { ...data.files, cv: e.target.files?.[0] } })
            }
          />
          <input
            className="input"
            type="file"
            aria-label={labels.uploads.certificates}
            onChange={(e) =>
              onChange({ ...data, files: { ...data.files, certificates: e.target.files?.[0] } })
            }
          />
          <input
            className="input"
            type="file"
            aria-label={labels.uploads.portfolio}
            onChange={(e) =>
              onChange({ ...data, files: { ...data.files, portfolio: e.target.files?.[0] } })
            }
          />
        </div>
      </section>

      <button className="btn btn-primary" type="submit">
        {labels.save}
      </button>
    </form>
  );
}
