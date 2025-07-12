"use client";

import { WorkExperienceCard } from "@/components/ui/WorkExperienceCard";
import { useEffect } from "react";

const workExperiences = [
  {
    title: "Software Developer & UI/UX Designer",
    company: "Zaigo Labs",
    location: "New York City, USA",
    description: "",
    skills: ["Prompt Engineering", "Agentic Coding", "Frontend Development", "Backend Development", "Meta Ads Manager", "SEO", "User Research", "Copywriting", "Marketing", "Media Generation", "User Interface Design", "User Experience", "AI Automation", "Generative AI", "UI/UX Design"],
    timespan: "Jun 2025 - Present",
    workType: "full-time",
    companyLogo: "/zaigologo.png"
  },
  {
    title: "Product Development",
    company: "Calibr8 Systems, Inc.",
    location: "Metro Manila, PH",
    description: "",
    skills: ["User Interface Design", "User Experience", "User Research", "Fullstack Development", "Product Design", "Wireframing", "Prototyping"],
    timespan: "Feb 2025 - April 2025",
    workType: "internship",
    companyLogo: "/c8logo.png"
  },
  {
    title: "Information Technology Student",
    company: "Silliman University",
    location: "Dumaguete City, PH",
    description: "",
    skills: ["Software Development", "Capstone", "Game Development", "UI/UX Design", "Networking", "Data Structures"],
    timespan: "Aug 2021 - April 2025",
    workType: "student",
    companyLogo: "/sillimanlogo.png"
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
        scroll-behavior: smooth !important;
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
    <section className="overflow-hidden px-3 sm:px-4 lg:px-5">
      <div className="grid lg:grid-cols-2 lg:h-[87vh] gap-1.5 sm:gap-2 lg:gap-3">
        {/* Left Side - Orange with Intro Headline */}
        <div className="bg-[#ff4d12] rounded-xl sm:rounded-2xl flex flex-col justify-between px-3 sm:px-4 lg:px-5 py-3 sm:py-4 lg:py-5 min-h-[250px] lg:h-full">
          <h2 className="text-sm font-normal">
            <span className="text-black">Experience</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-black max-w-2xl" style={{ fontFamily: 'NeuePixelGrotesk, monospace' }}>
            Crafting digital experiences through thoughtful design and clean code. Transforming complex ideas into intuitive interfaces that users love. Building the future, one pixel at a time.
          </p>
        </div>

        {/* Right Side - Work Info Cards Container */}
        <div className="h-[400px] lg:h-full overflow-y-scroll custom-thick-scrollbar space-y-1.5 sm:space-y-2 lg:space-y-3 rounded-xl sm:rounded-2xl">
          {workExperiences.map((experience, index) => (
            <div key={index} className="bg-[#FAFAFA] rounded-xl sm:rounded-2xl">
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