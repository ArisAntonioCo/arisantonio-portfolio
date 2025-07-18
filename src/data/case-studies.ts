import { CaseStudy } from '@/types/case-study';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'dashboard-analytics',
    name: 'Dashboard Analytics',
    roles: ['UI/UX', 'Frontend'],
    description: 'Designed and developed a comprehensive analytics dashboard for real-time data visualization and business intelligence.',
    overview: 'Created an intuitive interface that transforms complex data into actionable insights for business decision-makers.',
    problem: 'The client struggled with disparate data sources and lacked a unified view of their business metrics, leading to delayed decision-making and missed opportunities.',
    solution: 'Developed a real-time dashboard that aggregates data from multiple sources, presenting key metrics through interactive visualizations and customizable widgets.',
    thumbnail: '/videos/Enhancedmd.mp4',
    media: ['/videos/Enhancedmd.mp4', '/videos/FillerVideo.mp4', '/videos/FillerVideo1.mp4'],
    variant: 'wide',
    category: 'Frontend',
  },
  {
    id: '2',
    slug: 'e-commerce-platform',
    name: 'E-Commerce Platform',
    roles: ['UI/UX', 'Design Lead'],
    description: 'Redesigned a major e-commerce platform focusing on user experience optimization.',
    overview: 'Led the complete redesign of an e-commerce platform, implementing a design system that increased sales by 35%.',
    problem: 'High cart abandonment rates and poor mobile experience were significantly impacting revenue and customer satisfaction.',
    solution: 'Created a streamlined checkout process, improved mobile responsiveness, and implemented a cohesive design system that enhanced user trust and engagement.',
    thumbnail: 'https://via.placeholder.com/1920x1080/F5F5F5/666666?text=E-Commerce+Platform',
    media: ['/videos/HeroVideo.mp4', '/videos/FillerVideo.mp4'],
    variant: 'square',
    category: 'UI/UX',
  },
  {
    id: '3',
    slug: 'mobile-banking-app',
    name: 'Mobile Banking App',
    roles: ['Product Design', 'Frontend'],
    description: 'Created a secure and user-friendly mobile banking application with biometric authentication.',
    overview: 'Designed a mobile banking app focused on security, accessibility, and trust-building design elements.',
    problem: 'Users found existing banking apps complex and intimidating, with security concerns preventing adoption of digital banking services.',
    solution: 'Implemented intuitive biometric authentication, simplified navigation, and clear visual feedback for all transactions, making digital banking accessible to all user demographics.',
    thumbnail: 'https://via.placeholder.com/1920x1080/F5F5F5/666666?text=Mobile+Banking+App',
    media: ['/videos/FillerVideo1.mp4', '/videos/Enhancedmd.mp4', '/videos/HeroVideo.mp4', '/videos/FillerVideo.mp4'],
    variant: 'standard',
    category: 'Frontend',
  },
  {
    id: '4',
    slug: 'real-estate-portal',
    name: 'Real Estate Portal',
    roles: ['UI/UX'],
    description: 'Developed a modern real estate platform with advanced search capabilities.',
    overview: 'Built a comprehensive real estate portal featuring virtual tours and AI-powered property recommendations.',
    problem: 'Property seekers spent hours browsing through irrelevant listings, while agents struggled to match clients with suitable properties efficiently.',
    solution: 'Integrated AI-powered recommendations, advanced filtering options, and immersive virtual tours, reducing average search time by 60%.',
    thumbnail: 'https://via.placeholder.com/1920x1080/F5F5F5/666666?text=Real+Estate+Portal',
    media: ['/videos/FillerVideo.mp4', '/videos/FillerVideo1.mp4'],
    variant: 'standard',
    category: 'UI/UX',
  }
];