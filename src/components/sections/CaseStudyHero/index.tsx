"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { CaseStudy } from "@/types/case-study";
import { SectionContainer, Card, Headline, Badge } from "@/components/ui";
import { FontSizeControl } from "@/components/custom";
import { EmojiProvider, Emoji, type EmojiData } from "react-apple-emojis";

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
  fontSizeIndex: number;
  onFontSizeChange: (value: number) => void;
}

const CaseStudyHero = ({ caseStudy, fontSizeIndex, onFontSizeChange }: CaseStudyHeroProps) => {
  const [emojiData, setEmojiData] = useState<EmojiData | null>(null);
  
  useEffect(() => {
    import("react-apple-emojis/src/data.json").then((data) => {
      setEmojiData((data.default || data) as EmojiData);
    });
  }, []);

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
        className="w-full h-auto sm:h-[500px]"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <Card className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-6 sm:gap-8 h-full p-4 sm:p-6 lg:p-8">
          {/* Mobile: Stack everything vertically */}
          {/* Desktop: Keep 2x2 grid */}
          
          {/* Title and Role */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <h1 className="text-[24px] sm:text-[36px] font-normal leading-tight text-foreground">
                {caseStudy.name}
              </h1>
              {emojiData && (
                <EmojiProvider data={emojiData}>
                  <Emoji name="memo" width={24} className="sm:w-9" />
                </EmojiProvider>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {caseStudy.roles.map((role, index) => (
                <Badge key={index} variant="default" size="sm" className="sm:text-base">
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          {/* Top Right: Empty on desktop, hidden on mobile */}
          <div className="hidden sm:block"></div>

          {/* Overview */}
          <div className="flex items-end">
            <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
              <h3 className="text-text-secondary text-xs sm:text-sm">Overview</h3>
              <Headline size="sm" className="sm:text-[26px]">
                {caseStudy.overview}
              </Headline>
            </div>
          </div>

          {/* Font Size Control */}
          <div className="flex items-end justify-start sm:justify-end">
            <FontSizeControl 
              value={fontSizeIndex}
              onChange={onFontSizeChange}
            />
          </div>
        </Card>
      </motion.div>
    </SectionContainer>
  );
};

export default CaseStudyHero;