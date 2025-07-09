"use client";

import { WorkExperienceCard } from "@/components/ui/WorkExperienceCard";
import { useEffect } from "react";

const workExperiences = [
  {
    title: "Senior UI/UX Designer",
    company: "Tech Company Inc.",
    location: "San Francisco, CA",
    skills: ["Design Systems", "Figma", "User Research", "Prototyping"],
    timespan: "Jan 2022 - Present",
    workType: "full-time",
    companyLogo: undefined
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    timespan: "Mar 2020 - Dec 2022",
    workType: "remote",
    companyLogo: undefined
  },
  {
    title: "UI/UX Design Intern",
    company: "Startup Hub",
    location: "Austin, TX",
    skills: ["Sketch", "Adobe XD", "Wireframing", "User Testing"],
    timespan: "Jun 2019 - Feb 2020",
    workType: "intern",
    companyLogo: undefined
  },
  {
    title: "Product Designer",
    company: "Innovation Labs",
    location: "Seattle, WA",
    skills: ["Product Strategy", "Interaction Design", "Motion Design", "Analytics"],
    timespan: "Aug 2018 - May 2019",
    workType: "contractual",
    companyLogo: undefined
  },
  {
    title: "Visual Designer",
    company: "Creative Studio",
    location: "Los Angeles, CA",
    skills: ["Branding", "Illustration", "Photography", "Video Editing"],
    timespan: "Jan 2017 - Jul 2018",
    workType: "part-time",
    companyLogo: undefined
  },
  {
    title: "Junior Developer",
    company: "Code Academy",
    location: "Boston, MA",
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
      }
      .custom-thick-scrollbar::-webkit-scrollbar {
        width: 40px !important;
      }
      .custom-thick-scrollbar::-webkit-scrollbar-track {
        background: #0DFF6E !important;
        border-radius: 0 !important;
        border: 4px solid #0DFF6E !important;
        background-clip: content-box !important;
      }
      .custom-thick-scrollbar::-webkit-scrollbar-thumb {
        background: #000000 !important;
        border-radius: 0 !important;
        min-height: 20px !important;
        border: 4px solid transparent !important;
        background-clip: content-box !important;
      }
      .custom-thick-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #333333 !important;
        background-clip: content-box !important;
      }
      .custom-thick-scrollbar::-webkit-scrollbar-button {
        display: none !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="grid lg:grid-cols-2 h-[90vh]">
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
        <div 
          className="bg-[#FAFAFA] flex flex-col h-full custom-thick-scrollbar"
        >
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              skills={experience.skills}
              timespan={experience.timespan}
              workType={experience.workType}
              companyLogo={experience.companyLogo}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};