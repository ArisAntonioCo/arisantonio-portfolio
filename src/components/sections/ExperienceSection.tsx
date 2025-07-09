"use client";

import { WorkExperienceCard } from "@/components/ui/WorkExperienceCard";
import { useEffect } from "react";

const workExperiences = [
  {
    title: "Senior UI/UX Designer",
    company: "Tech Company Inc.",
    location: "San Francisco, CA",
    description: "Led design initiatives for enterprise SaaS products, collaborating with cross-functional teams to deliver user-centered solutions.",
    skills: ["Design Systems", "Figma", "User Research", "Prototyping"],
    timespan: "Jan 2022 - Present",
    workType: "full-time",
    companyLogo: undefined
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    description: "Developed responsive web applications for Fortune 500 clients, focusing on performance optimization and accessibility.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    timespan: "Mar 2020 - Dec 2022",
    workType: "remote",
    companyLogo: undefined
  },
  {
    title: "UI/UX Design Intern",
    company: "Startup Hub",
    location: "Austin, TX",
    description: "Assisted in creating user interfaces for mobile applications, conducting user research and usability testing.",
    skills: ["Sketch", "Adobe XD", "Wireframing", "User Testing"],
    timespan: "Jun 2019 - Feb 2020",
    workType: "intern",
    companyLogo: undefined
  },
  {
    title: "Product Designer",
    company: "Innovation Labs",
    location: "Seattle, WA",
    description: "Designed end-to-end experiences for consumer products, from concept to launch, working closely with product managers.",
    skills: ["Product Strategy", "Interaction Design", "Motion Design", "Analytics"],
    timespan: "Aug 2018 - May 2019",
    workType: "contractual",
    companyLogo: undefined
  },
  {
    title: "Visual Designer",
    company: "Creative Studio",
    location: "Los Angeles, CA",
    description: "Created visual identities and marketing materials for diverse clients across entertainment and tech industries.",
    skills: ["Branding", "Illustration", "Photography", "Video Editing"],
    timespan: "Jan 2017 - Jul 2018",
    workType: "part-time",
    companyLogo: undefined
  },
  {
    title: "Junior Developer",
    company: "Code Academy",
    location: "Boston, MA",
    description: "Built and maintained educational web platforms, contributing to frontend development and bug fixes.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    timespan: "Jun 2016 - Dec 2016",
    workType: "intern",
    companyLogo: undefined
  }
];

export const ExperienceSection = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .custom-thick-scrollbar {
        overflow-y: scroll !important;
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
      .custom-thick-scrollbar::-webkit-scrollbar {
        display: none !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="overflow-hidden px-4 sm:px-5 lg:px-6">
      <div className="grid lg:grid-cols-2 h-[90vh] gap-4">
        {/* Left Side - Orange with Intro Headline */}
        <div className="bg-[#ff4d12] rounded-2xl sm:rounded-3xl flex flex-col justify-between px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6">
          <h2 className="text-sm font-normal">
            <span className="text-black">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-black max-w-2xl" style={{ fontFamily: 'NeuePixelGrotesk, monospace' }}>
            Crafting digital experiences through thoughtful design and clean code. Transforming complex ideas into intuitive interfaces that users love. Building the future, one pixel at a time.
          </p>
        </div>

        {/* Right Side - Work Info Cards Container */}
        <div className="h-full overflow-y-scroll custom-thick-scrollbar space-y-4">
          {workExperiences.map((experience, index) => (
            <div key={index} className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl">
              <WorkExperienceCard
                title={experience.title}
                company={experience.company}
                location={experience.location}
                description={experience.description}
                skills={experience.skills}
                timespan={experience.timespan}
                workType={experience.workType}
                companyLogo={experience.companyLogo}
                isLast={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};