"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { TechnicalStackSection } from "@/components/sections/TechnicalStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export const HomePageView = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "start -50%"]
  });
  
  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Transform for the next section to slide up
  const nextSectionY = useTransform(smoothProgress, [0, 1], ["100%", "0%"]);
  
  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      
      <motion.div
        style={{ y: nextSectionY }}
        className="relative z-10 bg-dark"
      >
        <TechnicalStackSection />
        <PhilosophySection />
        <ExperienceSection />
        <ProjectsSection />
      </motion.div>
    </>
  );
};