import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Dashboard Analytics',
    slug: 'dashboard-analytics',
    roles: ['UI/UX', 'Frontend'],
    description: 'Designed and developed a comprehensive analytics dashboard for real-time data visualization and business intelligence. Created an intuitive interface that transforms complex data into actionable insights.',
    image: '/images/project1.jpg',
    images: ['/images/project1-1.jpg', '/images/project1-2.jpg', '/images/project1-3.jpg'],
    variant: 'wide',
    category: 'Frontend',
    link: '/case-studies/dashboard-analytics'
  },
  {
    id: '2',
    name: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    roles: ['UI/UX', 'Design Lead'],
    description: 'Redesigned a major e-commerce platform focusing on user experience optimization and conversion rate improvement. Implemented a design system that increased sales by 35%.',
    image: '/images/project2.jpg',
    images: ['/images/project2-1.jpg', '/images/project2-2.jpg'],
    variant: 'square',
    category: 'UI/UX',
    link: '/case-studies/e-commerce-platform'
  },
  {
    id: '3',
    name: 'Mobile Banking App',
    slug: 'mobile-banking-app',
    roles: ['Product Design', 'Frontend'],
    description: 'Created a secure and user-friendly mobile banking application with biometric authentication and real-time transaction processing. Focused on accessibility and trust-building design elements.',
    image: '/images/project3.jpg',
    images: ['/images/project3-1.jpg', '/images/project3-2.jpg', '/images/project3-3.jpg', '/images/project3-4.jpg'],
    variant: 'standard',
    category: 'Frontend',
    link: '/case-studies/mobile-banking-app'
  },
  {
    id: '4',
    name: 'Real Estate Portal',
    slug: 'real-estate-portal',
    roles: ['UI/UX'],
    description: 'Developed a modern real estate platform with advanced search filters, virtual tours, and AI-powered property recommendations. Streamlined the property discovery process for thousands of users.',
    image: '/images/project4.jpg',
    images: ['/images/project4-1.jpg', '/images/project4-2.jpg'],
    variant: 'standard',
    category: 'UI/UX',
    link: '/case-studies/real-estate-portal'
  },
  {
    id: '5',
    name: 'Social Media Campaign',
    slug: 'social-media-campaign',
    roles: ['Brand Design', 'Creative Direction'],
    description: 'Led the creative direction for a viral social media campaign that reached over 10 million users. Developed cohesive visual identity and interactive content strategies across multiple platforms.',
    image: '/images/project5.jpg',
    images: ['/images/project5-1.jpg', '/images/project5-2.jpg', '/images/project5-3.jpg'],
    variant: 'wide',
    category: 'Brand Design',
    link: '/case-studies/social-media-campaign'
  },
  {
    id: '6',
    name: 'Brand Identity Design',
    slug: 'brand-identity-design',
    roles: ['Brand Design'],
    description: 'Crafted a complete brand identity system for a tech startup, including logo design, color palette, typography, and brand guidelines. Established a distinctive visual language that resonates with the target audience.',
    image: '/images/project6.jpg',
    images: [],
    variant: 'square',
    category: 'Brand Design',
    link: '/case-studies/brand-identity-design'
  }
];