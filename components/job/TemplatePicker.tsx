"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
  title: string;
};

const templates = [
  { id: "clean", name: "Clean" },
  { id: "modern", name: "Modern" },
  { id: "classic", name: "Classic" },
];

export default function TemplatePicker({ value, onChange, title }: Props) {
  return (
    <section className="card">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="flex gap-3 flex-wrap">
        {templates.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`pill ${value === item.id ? "pill-active" : ""}`}
            onClick={() => onChange(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
