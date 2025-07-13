"use client";

import { IconButton } from "@/components/ui/IconButton";
import { ArrowUpRightIcon } from "@/components/icons";
import { COLORS, SPACING, RADII, TYPOGRAPHY } from "@/lib/constants/design-tokens";

const HeroSection = () => {
  return (
    <section 
      className="h-[calc(100vh-200px)] overflow-hidden flex items-start"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Desktop Layout */}
      <div className="hidden sm:block w-full h-full">
        <div 
          className="h-full w-full grid grid-cols-2 grid-rows-2 gap-8"
          style={{ 
            backgroundColor: COLORS.container,
            borderRadius: RADII.xl,
            padding: SPACING.section,
          }}
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
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block sm:hidden w-full h-full">
        <div 
          className="h-full w-full grid grid-cols-1 grid-rows-2 gap-8"
          style={{ 
            backgroundColor: COLORS.container,
            borderRadius: RADII.xl,
            padding: SPACING.section,
          }}
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
              style={{ fontSize: TYPOGRAPHY.fontSize.headline }}
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;