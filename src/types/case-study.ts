export type CaseStudyVariant = 'square' | 'standard' | 'wide';

export interface CaseStudy {
  id: string;
  name: string;
  roles: string[];
  description: string;
  overview: string;
  problem: string;
  solution: string;
  thumbnail: string;
  media: string[];
  variant: CaseStudyVariant;
  category: string;
}