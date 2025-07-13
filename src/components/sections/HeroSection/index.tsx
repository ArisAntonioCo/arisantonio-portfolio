"use client";

import { motion, Variants } from "framer-motion";
import { COLORS, RADII, TYPOGRAPHY } from "@/lib/constants/design-tokens";
import { 
  SectionContainer, 
  CardContainer, 
  Headline,
} from "@/components/ui";
import {
  Clock,
  Greeting,
  Navigation,
} from "@/components/custom";

const HeroSection = () => {
  const navigationItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Hobbies", href: "#hobbies" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
        ease: "easeInOut"
      }
    }
  };

  return (
    <SectionContainer 
      className="flex items-start"
      animate={true}
    >
      {/* Desktop Layout */}
      <div className="hidden sm:block w-full">
        <motion.div 
          className="w-full flex gap-1.5"
          style={{ 
            height: "500px",
          }}
          variants={itemVariants}
        >
          {/* Main Content - 70% */}
          <CardContainer 
            className="flex-[7] grid grid-cols-2 grid-rows-2 gap-8"
          >
            {/* Top Left - Greeting */}
            <div className="flex items-start">
              <Greeting 
                name="Aris"
                textSize="36px"
                emojiSize={36}
              />
            </div>
            
            {/* Top Right - Clock */}
            <div className="flex justify-end items-start">
              <Clock 
                inline={true}
                showTimezone={true}
                textSize="20px"
                timezoneSize="14px"
              />
            </div>
            
            {/* Bottom - Headline with more space */}
            <div className="col-span-2 grid grid-cols-[1.5fr_0.5fr] gap-8">
              <div className="flex items-end">
                <Headline>
                  I am the bridge between concept and creation, designing user-centric solutions and building them with precision. My passion lies in transforming visions into tangible, impactful digital products.
                </Headline>
              </div>
              
              {/* Bottom Right - Space for future content */}
              <div className="flex items-end justify-end">
                {/* Space reserved for additional content */}
              </div>
            </div>
          </CardContainer>
          
          {/* Navigation Sidebar - 30% */}
          <CardContainer
            className="flex-[3] flex flex-col justify-start"
            backgroundColor={COLORS.accent.default as string}
          >
            <Navigation 
              items={navigationItems}
              orientation="vertical"
              showDividers={true}
              textColor="white"
              fontSize="18px"
            />
          </CardContainer>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="block sm:hidden w-full">
        <motion.div 
          className="w-full"
          variants={itemVariants}
        >
          <CardContainer
            className="flex flex-col"
            borderRadius={RADII.lg}
            padding="24px"
            style={{ height: "calc(100vh - 100px)" }}
          >
            {/* Mobile Header - Greeting and Clock */}
            <div className="flex flex-col space-y-4 mb-8">
              <Greeting 
                name="Aris"
                textSize="24px"
                emojiSize={24}
              />
              
              <Clock 
                inline={true}
                showTimezone={true}
                textSize="16px"
                timezoneSize="12px"
              />
            </div>
            
            {/* Mobile Headline */}
            <div className="flex-1 flex items-center">
              <Headline size="sm" className="font-normal leading-relaxed">
                I am the bridge between concept and creation, designing user-centric solutions and building them with precision. My passion lies in transforming visions into tangible, impactful digital products.
              </Headline>
            </div>
            
            {/* Mobile Navigation */}
            <div className="mt-8">
              <Navigation 
                items={navigationItems}
                orientation="horizontal"
                showDividers={false}
                textColor={COLORS.foreground}
                fontSize="16px"
                className="opacity-60"
              />
            </div>
          </CardContainer>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;