import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { TechnicalStackSection } from "@/components/sections/TechnicalStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const HomePageView = () => {
  return (
    <>
      <HeroSection />
      <TechnicalStackSection />
      <PhilosophySection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
};