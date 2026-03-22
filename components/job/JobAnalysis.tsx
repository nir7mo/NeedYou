"use client";

import type { JobAnalysisResult } from "@/lib/ai/mock";

type Props = {
  analysis: JobAnalysisResult | null;
  labels: {
    title: string;
    skills: string;
    experience: string;
    keywords: string;
  };
};

export default function JobAnalysis({ analysis, labels }: Props) {
  if (!analysis) {
    return null;
  }

  return (
    <section className="card">
      <h3 className="text-lg font-bold mb-4">{labels.title}</h3>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <h4 className="font-semibold">{labels.skills}</h4>
          <ul className="list-disc pl-5">
            {analysis.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">{labels.experience}</h4>
          <ul className="list-disc pl-5">
            {analysis.experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">{labels.keywords}</h4>
          <div className="flex flex-wrap gap-2">
            {analysis.keywords.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
