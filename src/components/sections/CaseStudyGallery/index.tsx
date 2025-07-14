"use client";

import { motion, Variants } from "framer-motion";
import { CaseStudy } from "@/types/case-study";
import { SectionContainer } from "@/components/ui";

interface CaseStudyGalleryProps {
  caseStudy: CaseStudy;
}

const CaseStudyGallery = ({ caseStudy }: CaseStudyGalleryProps) => {
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

  if (!caseStudy.media || caseStudy.media.length === 0) {
    return null;
  }

  return (
    <SectionContainer animate={false}>
      <motion.div 
        className="space-y-1.5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {caseStudy.media.map((media, index) => {
          const isVideo = media.endsWith('.mp4');
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-container rounded-xl aspect-video overflow-hidden"
            >
              {isVideo ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={media} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${media})` }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
};

export default CaseStudyGallery;