"use client";

import { motion, Variants } from "framer-motion";
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
          className="w-full flex gap-1.5 h-[500px]"
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
              />
            </div>
            
            {/* Top Right - Clock */}
            <div className="flex justify-end items-start">
              <Clock 
                inline={true}
                showTimezone={true}
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
            className="flex-[3] flex flex-col justify-start bg-accent"
          >
            <Navigation 
              items={navigationItems}
              orientation="vertical"
              showDividers={true}
              isLight={true}
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
            className="flex flex-col h-[calc(100vh-100px)]"
          >
            {/* Mobile Header - Greeting and Clock */}
            <div className="flex flex-col space-y-4 mb-8">
              <Greeting 
                name="Aris"
              />
              
              <Clock 
                inline={true}
                showTimezone={true}
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