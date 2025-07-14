"use client";

import { motion, Variants } from "framer-motion";
import { CaseStudy } from "@/types/case-study";
import { SectionContainer, Card, Headline, Badge } from "@/components/ui";

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

const CaseStudyHero = ({ caseStudy }: CaseStudyHeroProps) => {
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <SectionContainer className="flex items-start" animate={true}>
      <motion.div 
        className="w-full h-[500px]"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <Card className="grid grid-cols-2 grid-rows-2 gap-8 h-full">
          {/* Top Left: Title and Role */}
          <div className="flex flex-col gap-4">
            <Headline size="headline" className="max-w-3xl">
              {caseStudy.name}
            </Headline>
            <div className="flex flex-wrap gap-2">
              {caseStudy.roles.map((role, index) => (
                <Badge key={index} variant="default" size="md">
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          {/* Top Right: Empty for now */}
          <div></div>

          {/* Bottom Left: Overview */}
          <div className="flex items-end">
            <Headline>
              {caseStudy.overview}
            </Headline>
          </div>

          {/* Bottom Right: Empty for now */}
          <div></div>
        </Card>
      </motion.div>
    </SectionContainer>
  );
};

export default CaseStudyHero;