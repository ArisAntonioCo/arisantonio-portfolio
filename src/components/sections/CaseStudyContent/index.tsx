"use client";

import { motion, Variants } from "framer-motion";
import { CaseStudy } from "@/types/case-study";
import { SectionContainer, Card } from "@/components/ui";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

const CaseStudyContent = ({ caseStudy }: CaseStudyContentProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <SectionContainer animate={false}>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1.5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Problem Section */}
        <motion.div variants={itemVariants}>
          <Card className="h-full aspect-video flex flex-col justify-between p-3 sm:p-5">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-xs text-foreground">
                Problem
              </h3>
            </div>
            
            {/* Content */}
            <div className="flex items-end">
              <p className="font-normal text-sm sm:text-base text-foreground leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Solution Section */}
        <motion.div variants={itemVariants}>
          <Card className="h-full aspect-video flex flex-col justify-between p-3 sm:p-5">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-xs text-foreground">
                Solution
              </h3>
            </div>
            
            {/* Content */}
            <div className="flex items-end">
              <p className="font-normal text-sm sm:text-base text-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default CaseStudyContent;