import { HeroSection } from "@/components/sections/HeroSection";
// import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { TechnicalStackSection } from "@/components/sections/TechnicalStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const HomePageView = () => {
  return (
    <>
      <HeroSection />
      <TechnicalStackSection />
      <ProjectsSection />
      {/* <PhilosophySection /> */}
    </>
  );
};