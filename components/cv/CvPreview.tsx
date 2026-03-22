"use client";

type Props = {
  headline: string;
  summary: string;
  highlights: string[];
  experience: string;
  title: string;
  highlightsLabel: string;
  experienceLabel: string;
};

export default function CvPreview({
  headline,
  summary,
  highlights,
  experience,
  title,
  highlightsLabel,
  experienceLabel,
}: Props) {
  return (
    <section className="card">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="space-y-3 text-sm">
        <div className="font-semibold">{headline}</div>
        <p>{summary}</p>
        <div>
          <h4 className="font-semibold">{highlightsLabel}</h4>
          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{experienceLabel}</h4>
          <p className="text-muted whitespace-pre-line">{experience}</p>
        </div>
      </div>
    </section>
  );
}
