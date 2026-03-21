// Type definitions

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
}

export interface CV {
  id: string;
  userId: string;
  jobId?: string;
  content: string;
  createdAt: Date;
}