"use client";

type Props = {
  strengths: string[];
  missing: string[];
  suggestions: string[];
  labels: {
    title: string;
    strengths: string;
    missing: string;
    suggestions: string;
  };
};

export default function JobMatch({ strengths, missing, suggestions, labels }: Props) {
  return (
    <section className="card">
      <h3 className="text-lg font-bold mb-4">{labels.title}</h3>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <h4 className="font-semibold">{labels.strengths}</h4>
          <ul className="list-disc pl-5">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">{labels.missing}</h4>
          <ul className="list-disc pl-5">
            {missing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">{labels.suggestions}</h4>
          <ul className="list-disc pl-5">
            {suggestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
