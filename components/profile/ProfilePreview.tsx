"use client";

import type { ProfileData } from "@/types/profile";
import { parseLines } from "@/lib/parser";

type Props = {
  data: ProfileData;
  title: string;
};

export default function ProfilePreview({ data, title }: Props) {
  return (
    <section className="card">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="space-y-3 text-sm">
        <div>
          <strong>{data.basic.fullName}</strong> · {data.basic.title}
          <div className="text-muted">{data.basic.email} · {data.basic.phone}</div>
          <div className="text-muted">{data.basic.location}</div>
        </div>
        <p>{data.basic.summary}</p>
        <div>
          <h4 className="font-semibold">Experience</h4>
          <ul className="list-disc pl-5">
            {parseLines(data.experience).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {parseLines(data.skills).map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
