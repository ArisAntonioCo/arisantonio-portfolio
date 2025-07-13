"use client";

import { motion } from "framer-motion";
import { IconButton } from "@/components/ui/IconButton";
import { ArrowUpRightIcon } from "@/components/icons";
import { COLORS, SPACING, RADII, TYPOGRAPHY } from "@/lib/constants/design-tokens";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.section 
      className="w-full overflow-hidden flex items-start"
      style={{ backgroundColor: COLORS.background }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Desktop Layout */}
      <div className="hidden sm:block w-full">
        <motion.div 
          className="w-full grid grid-cols-2 grid-rows-2 gap-8"
          style={{ 
            height: "500px",
            backgroundColor: COLORS.container,
            borderRadius: RADII.xl,
            padding: "24px",
          }}
          variants={itemVariants}
        >
          {/* Top Section - CTA */}
          <div className="col-span-2">
            <a 
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 transition-colors"
              style={{ color: COLORS.foreground }}
              onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent.default}
              onMouseLeave={(e) => e.currentTarget.style.color = COLORS.foreground}
            >
              <span className="text-sm sm:text-base">Let&apos;s Talk</span>
              <ArrowUpRightIcon size={16} className="sm:w-5 sm:h-5" />
            </a>
          </div>
          
          {/* Bottom Left - Headline */}
          <div className="flex items-end">
            <h1 
              className="font-normal leading-tight"
              style={{ fontSize: TYPOGRAPHY.fontSize.headline }}
            >
              <span style={{ color: COLORS.foreground }}>I am the bridge between concept and creation, designing user-centric solutions and building them with precision. My passion lies in transforming visions into tangible, impactful digital products.</span>
            </h1>
          </div>
          
          {/* Bottom Right - Action Button */}
          <div className="flex items-end justify-end">
            <IconButton
              icon={<ArrowUpRightIcon className="text-white" />}
              ariaLabel="View work"
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="block sm:hidden w-full">
        <motion.div 
          className="w-full grid grid-cols-1 grid-rows-2 gap-8"
          style={{ 
            height: "400px", 
            backgroundColor: COLORS.container,
            borderRadius: RADII.lg,
            padding: "20px",
          }}
          variants={itemVariants}
        >
          {/* Top Section - CTA */}
          <div>
            <a 
              href="#contact"
              className="inline-flex items-center gap-1.5 transition-colors"
              style={{ color: COLORS.foreground }}
            >
              <span className="text-sm">Let&apos;s Talk</span>
              <ArrowUpRightIcon size={14} />
            </a>
          </div>
          
          {/* Bottom Section - Headline with Button */}
          <div className="flex items-end justify-between">
            <h1 
              className="font-normal leading-tight flex-1"
              style={{ fontSize: "20px" }}
            >
              <span style={{ color: COLORS.foreground }}>I am the bridge between concept and creation, designing user-centric solutions and building them with precision. My passion lies in transforming visions into tangible, impactful digital products.</span>
            </h1>
            <IconButton
              icon={<ArrowUpRightIcon className="text-white" />}
              ariaLabel="View work"
              onClick={() => console.log("Button clicked")}
              className="ml-4 flex-shrink-0"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;