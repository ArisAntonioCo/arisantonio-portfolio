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
        className="w-full h-[500px]"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <Card className="grid grid-cols-2 grid-rows-2 gap-8 h-full">
          {/* Top Left: Title and Role */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-[36px] font-normal leading-tight text-foreground max-w-3xl">
                {caseStudy.name}
              </h1>
              {emojiData && (
                <EmojiProvider data={emojiData}>
                  <Emoji name="memo" width={36} />
                </EmojiProvider>
              )}
            </div>
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

          {/* Bottom Right: Font Size Control */}
          <div className="flex items-end justify-end">
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