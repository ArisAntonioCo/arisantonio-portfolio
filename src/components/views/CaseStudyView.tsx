"use client";

import { CaseStudy } from "@/types/case-study";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyContent from "@/components/sections/CaseStudyContent";

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
}

export const CaseStudyView = ({ caseStudy }: CaseStudyViewProps) => {
  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyContent caseStudy={caseStudy} />
    </>
  );
};