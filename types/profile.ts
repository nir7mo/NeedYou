export type ProfileData = {
  basic: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: string;
  skills: string;
  education: string;
  projects: string;
  languages: string;
  achievements: string;
  files: {
    cv?: File;
    certificates?: File;
    portfolio?: File;
  };
};
