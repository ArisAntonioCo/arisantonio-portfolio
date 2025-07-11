"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { TechnicalStackSection } from "@/components/sections/TechnicalStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HomePageView = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isInHero, setIsInHero] = useState(true);
  
  // Track scroll progress for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Smooth spring animation for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Transform for the next section to slide up
  const nextSectionY = useTransform(smoothProgress, [0, 1], ["100%", "0%"]);
  
  // Track if cursor is in hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom || 0;
      setIsInHero(heroBottom > 100);
    };
    
    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Add/remove custom cursor class to body
  useEffect(() => {
    if (isInHero) {
      document.body.classList.add("custom-cursor-active");
    } else {
      document.body.classList.remove("custom-cursor-active");
    }
    
    return () => {
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isInHero]);
  
  return (
    <>
      <CustomCursor isInHero={isInHero} />
      
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