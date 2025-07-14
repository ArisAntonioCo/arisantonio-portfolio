"use client";

import { useState } from "react";
import { CaseStudy } from "@/types/case-study";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyContent from "@/components/sections/CaseStudyContent";
import CaseStudyGallery from "@/components/sections/CaseStudyGallery";

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
}

export type FontSize = 'xs' | 'xs-sm' | 'sm' | 'sm-md' | 'md' | 'md-lg' | 'lg' | 'lg-xl' | 'xl';

export const CaseStudyView = ({ caseStudy }: CaseStudyViewProps) => {
  const [fontSizeIndex, setFontSizeIndex] = useState(4); // Default to 'md' (index 4)
  const fontSizes: FontSize[] = ['xs', 'xs-sm', 'sm', 'sm-md', 'md', 'md-lg', 'lg', 'lg-xl', 'xl'];
  const currentFontSize = fontSizes[fontSizeIndex];

  return (
    <div className="flex flex-col gap-1.5">
      <CaseStudyHero 
        caseStudy={caseStudy} 
        fontSizeIndex={fontSizeIndex}
        onFontSizeChange={setFontSizeIndex}
      />
      <CaseStudyContent 
        caseStudy={caseStudy} 
        fontSize={currentFontSize}
      />
      <CaseStudyGallery caseStudy={caseStudy} />
    </div>
  );
};