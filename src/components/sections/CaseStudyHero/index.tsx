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
        <Card className="flex flex-col gap-8 h-full">
          {/* Title and Category */}
          <div className="flex flex-col gap-2">
            <span className="text-text-secondary text-sm">{caseStudy.category}</span>
            <Headline size="headline" className="max-w-3xl">
              {caseStudy.name}
            </Headline>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-2">
            <h2 className="text-foreground text-lg font-semibold">Overview</h2>
            <p className="text-foreground text-base leading-relaxed max-w-3xl">
              {caseStudy.overview}
            </p>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2">
            <h3 className="text-text-secondary text-sm">Role</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.roles.map((role, index) => (
                <Badge key={index} variant="default" size="md">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </SectionContainer>
  );
};

export default CaseStudyHero;