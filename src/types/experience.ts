export type WorkType = 'full-time' | 'internship' | 'student' | 'freelance' | 'contract';

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  description?: string;
  skills: string[];
  timespan: string;
  workType: string;
  companyLogo?: string;
}

export interface WorkExperienceCardProps extends WorkExperience {
  isLast?: boolean;
}