import { WorkExperienceCard } from "@/components/ui/WorkExperienceCard";

const workExperiences = [
  {
    title: "Senior UI/UX Designer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description: "Led design initiatives for multiple product lines, focusing on user research, prototyping, and implementing design systems that improved user engagement by 40%.",
    skills: ["Design Systems", "Figma", "User Research"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description: "Developed responsive web applications using React and Next.js. Collaborated with design teams to implement pixel-perfect interfaces and optimize performance.",
    skills: ["React", "Next.js", "TypeScript"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="grid lg:grid-cols-2 h-screen">
        {/* Left Side - Orange with Intro Headline */}
        <div className="bg-[#ff4d12] flex flex-col justify-between px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6">
          <h2 className="text-sm font-normal">
            <span className="text-black">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-black max-w-2xl" style={{ fontFamily: 'NeuePixelGrotesk, monospace' }}>
            Crafting digital experiences through thoughtful design and clean code. Transforming complex ideas into intuitive interfaces that users love. Building the future, one pixel at a time.
          </p>
        </div>

        {/* Right Side - Off-white with Work Info */}
        <div className="bg-[#FAFAFA] flex flex-col h-full">
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              skills={experience.skills}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};