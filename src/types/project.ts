export type ProjectVariant = 'square' | 'standard' | 'wide';

export interface Project {
  id: string;
  name: string;
  slug: string;
  roles: string[];
  description: string;
  image: string;
  images: string[];
  variant: ProjectVariant;
  category: string;
  link: string;
}