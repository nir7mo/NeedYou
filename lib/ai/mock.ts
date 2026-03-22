import type { ProfileData } from "@/types/profile";

export type JobAnalysisResult = {
  skills: string[];
  experience: string[];
  keywords: string[];
};

export function analyzeJob(description: string): JobAnalysisResult {
  const tokens = description
    .split(/[,.\n]+/g)
    .map((item) => item.trim())
    .filter(Boolean);
  return {
    skills: tokens.slice(0, 5),
    experience: tokens.slice(5, 8),
    keywords: tokens.slice(8, 12),
  };
}

export function matchProfile(profile: ProfileData, analysis: JobAnalysisResult) {
  const skills = profile.skills
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const strengths = analysis.skills.filter((s) =>
    skills.some((item) => item.toLowerCase().includes(s.toLowerCase()))
  );
  const missing = analysis.skills.filter((s) => !strengths.includes(s));
  return {
    strengths,
    missing,
    suggestions: missing.map((item) => `أضف مهارة ${item} ضمن خبراتك`),
  };
}

export function generateTailoredCv(profile: ProfileData, analysis: JobAnalysisResult) {
  return {
    headline: profile.basic.title,
    summary: profile.basic.summary,
    highlights: analysis.skills.slice(0, 3),
    experience: profile.experience,
  };
}

export function generateCoverLetter(company: string, recruiter: string | undefined) {
  const to = recruiter ? `السيد ${recruiter}` : "فريق التوظيف";
  return `مرحباً ${to}، يسعدني التقدم لهذه الفرصة في ${company}. أمتلك خبرة مرتبطة بالمهام المطلوبة وأرى أن مهاراتي يمكن أن تضيف قيمة مباشرة للفريق. أتطلع لفرصة مناقشة كيف يمكنني المساهمة في نجاحكم.`;
}
