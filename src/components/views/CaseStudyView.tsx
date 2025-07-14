"use client";

import { CaseStudy } from "@/types/case-study";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyContent from "@/components/sections/CaseStudyContent";
import CaseStudyGallery from "@/components/sections/CaseStudyGallery";

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
}

export const CaseStudyView = ({ caseStudy }: CaseStudyViewProps) => {
  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyContent caseStudy={caseStudy} />
      <CaseStudyGallery caseStudy={caseStudy} />
    </>
  );
};