"use client";

import { useEffect, useState } from "react";
import type { ProfileData } from "@/types/profile";
import { analyzeJob, generateCoverLetter, generateTailoredCv, matchProfile } from "@/lib/ai/mock";
import JobForm from "@/components/job/JobForm";
import JobAnalysis from "@/components/job/JobAnalysis";
import JobMatch from "@/components/job/JobMatch";
import TemplatePicker from "@/components/job/TemplatePicker";
import CoverLetter from "@/components/job/CoverLetter";
import CvPreview from "@/components/cv/CvPreview";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function JobPage() {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [company, setCompany] = useState("");
  const [recruiter, setRecruiter] = useState("");
  const [analysis, setAnalysis] = useState<ReturnType<typeof analyzeJob> | null>(null);
  const [match, setMatch] = useState<{ strengths: string[]; missing: string[]; suggestions: string[] } | null>(null);
  const [template, setTemplate] = useState("clean");
  const [cv, setCv] = useState<ReturnType<typeof generateTailoredCv> | null>(null);
  const [letter, setLetter] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("needyou-profile");
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {
        setProfile(null);
      }
    }
  }, []);

  const handleAnalyze = () => {
    if (!profile) return;
    const result = analyzeJob(jobDescription);
    setAnalysis(result);
    const matched = matchProfile(profile, result);
    setMatch(matched);
    setCv(generateTailoredCv(profile, result));
    setLetter(generateCoverLetter(company || "الشركة", recruiter || undefined));
  };

  return (
    <main className="page">
      <div className="container page-head">
        <h1>{t.job.title}</h1>
        <p>{t.job.description}</p>
      </div>

      <div className="container grid gap-8">
        <JobForm
          jobDescription={jobDescription}
          jobLink={jobLink}
          company={company}
          recruiter={recruiter}
          labels={t.job.form}
          onChange={(payload) => {
            if (payload.jobDescription !== undefined) setJobDescription(payload.jobDescription);
            if (payload.jobLink !== undefined) setJobLink(payload.jobLink);
            if (payload.company !== undefined) setCompany(payload.company);
            if (payload.recruiter !== undefined) setRecruiter(payload.recruiter);
          }}
          onAnalyze={handleAnalyze}
        />
        <JobAnalysis analysis={analysis} labels={t.job.analysis} />
        {match && (
          <JobMatch
            strengths={match.strengths}
            missing={match.missing}
            suggestions={match.suggestions}
            labels={t.job.match}
          />
        )}
        <TemplatePicker value={template} onChange={setTemplate} title={t.job.template.title} />
        {cv && (
          <CvPreview
            headline={`${cv.headline} · ${template}`}
            summary={cv.summary}
            highlights={cv.highlights}
            experience={cv.experience}
            title={t.job.cv.title}
            highlightsLabel={t.job.cv.highlights}
            experienceLabel={t.job.cv.experience}
          />
        )}
        {letter && <CoverLetter letter={letter} title={t.job.cover.title} />}
      </div>
    </main>
  );
}
