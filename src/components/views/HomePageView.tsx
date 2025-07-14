"use client";

import HeroSection from "@/components/sections/HeroSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

export const HomePageView = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <HeroSection />
      <CaseStudiesSection />
    </div>
  );
};