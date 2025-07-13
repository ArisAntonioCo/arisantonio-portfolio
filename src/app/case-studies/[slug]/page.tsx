import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-dark">
      {/* Header Section */}
      <header className="px-3 sm:px-4 lg:px-5 pt-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Title Section */}
          <div className="md:flex-shrink-0">
            <p className="text-xs text-[#8C8C8C] mb-2 font-mono">Project</p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
              {project.name}
            </h1>
          </div>
          
          {/* Roles Section */}
          <div className="md:flex-shrink-0">
            <p className="text-xs text-[#8C8C8C] mb-2 font-mono">Role</p>
            <div className="flex flex-wrap gap-2">
              {project.roles.map((role, index) => (
                <span
                  key={index}
                  className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white font-normal"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          
          {/* Description Section */}
          <div className="md:flex-1 md:max-w-2xl">
            <p className="text-xs text-[#8C8C8C] mb-2 font-mono">Description</p>
            <p className="text-sm sm:text-base text-white font-normal">
              {project.description}
            </p>
          </div>
        </div>
      </header>

      {/* Image Gallery Section */}
      <section className="px-3 sm:px-4 lg:px-5 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16">
        <div>
          {project.images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative bg-[#1A1A1A] rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9]"
                >
                  {/* Image will be added here */}
                </div>
              ))}
            </div>
          ) : (
            /* Fallback background when no images */
            <div className="relative bg-dark/50 rounded-xl sm:rounded-2xl overflow-hidden h-[60vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-bottom"
              >
                <source src="/videos/HeroVideo.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}