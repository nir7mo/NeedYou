"use client";

type Props = {
  letter: string;
  title: string;
};

export default function CoverLetter({ letter, title }: Props) {
  return (
    <section className="card">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-sm text-muted leading-7">{letter}</p>
    </section>
  );
}
