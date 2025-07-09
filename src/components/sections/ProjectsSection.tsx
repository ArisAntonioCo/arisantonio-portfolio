type ProjectVariant = 'square' | 'standard' | 'wide';

interface Project {
  id: string;
  name: string;
  image: string;
  variant: ProjectVariant;
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Dashboard Analytics',
    image: '/images/project1.jpg',
    variant: 'wide',
    category: 'Frontend',
    link: '#'
  },
  {
    id: '2',
    name: 'E-Commerce Platform',
    image: '/images/project2.jpg',
    variant: 'square',
    category: 'UI/UX',
    link: '#'
  },
  {
    id: '3',
    name: 'Mobile Banking App',
    image: '/images/project3.jpg',
    variant: 'standard',
    category: 'Frontend',
    link: '#'
  },
  {
    id: '4',
    name: 'Real Estate Portal',
    image: '/images/project4.jpg',
    variant: 'standard',
    category: 'UI/UX',
    link: '#'
  },
  {
    id: '5',
    name: 'Social Media Campaign',
    image: '/images/project5.jpg',
    variant: 'wide',
    category: 'Brand Design',
    link: '#'
  },
  {
    id: '6',
    name: 'Brand Identity Design',
    image: '/images/project6.jpg',
    variant: 'square',
    category: 'Brand Design',
    link: '#'
  }
];

const getCardClasses = (variant: ProjectVariant) => {
  switch (variant) {
    case 'square':
      return 'aspect-square';
    case 'standard':
      return 'aspect-[4/3]';
    case 'wide':
      return 'aspect-[16/9]';
    default:
      return 'aspect-square';
  }
};

export const ProjectsSection = () => {
  return (
    <section className="bg-dark overflow-hidden">
      <div className="px-4 sm:px-5 lg:px-6 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-white">
            Projects
          </h2>
          <a 
            href="#"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FF5500] hover:bg-[#E64D00] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors"
          >
            <span className="text-xs sm:text-sm font-medium">See more</span>
            <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group">
              {/* Project Card */}
              <a href={project.link} className="block">
                <div className={`relative bg-white rounded-xl sm:rounded-2xl overflow-hidden ${getCardClasses(project.variant)}`}>
                  {/* Image will be added here later */}
                </div>
              </a>
              
              {/* Project Info */}
              <div className="mt-3 sm:mt-4 flex items-center justify-between gap-2">
                <h3 className="text-sm sm:text-base text-white font-normal">
                  {project.name}
                </h3>
                <span className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white font-normal">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};