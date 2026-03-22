"use client";

type Props = {
  jobDescription: string;
  jobLink: string;
  company: string;
  recruiter: string;
  labels: {
    title: string;
    description: string;
    link: string;
    company: string;
    recruiter: string;
    analyze: string;
  };
  onChange: (payload: Partial<{
    jobDescription: string;
    jobLink: string;
    company: string;
    recruiter: string;
  }>) => void;
  onAnalyze: () => void;
};

export default function JobForm({
  jobDescription,
  jobLink,
  company,
  recruiter,
  labels,
  onChange,
  onAnalyze,
}: Props) {
  return (
    <section className="card">
      <h3 className="text-lg font-bold mb-4">{labels.title}</h3>
      <div className="grid gap-4">
        <textarea
          className="input"
          rows={6}
          placeholder={labels.description}
          value={jobDescription}
          onChange={(e) => onChange({ jobDescription: e.target.value })}
        />
        <input
          className="input"
          placeholder={labels.link}
          value={jobLink}
          onChange={(e) => onChange({ jobLink: e.target.value })}
        />
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="input"
            placeholder={labels.company}
            value={company}
            onChange={(e) => onChange({ company: e.target.value })}
          />
          <input
            className="input"
            placeholder={labels.recruiter}
            value={recruiter}
            onChange={(e) => onChange({ recruiter: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={onAnalyze}>
          {labels.analyze}
        </button>
      </div>
    </section>
  );
}
