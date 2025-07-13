"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { COLORS } from "@/lib/constants/design-tokens";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  animate?: boolean;
  animationDelay?: number;
  fullHeight?: boolean;
  style?: React.CSSProperties;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const SectionContainer = ({
  children,
  className = "",
  backgroundColor = COLORS.background,
  animate = true,
  animationDelay = 0,
  fullHeight = false,
  style = {},
}: SectionContainerProps) => {
  const Component = animate ? motion.section : "section";
  
  const props = animate ? {
    initial: "hidden",
    animate: "visible",
    variants: containerVariants,
    transition: { delay: animationDelay },
  } : {};

  return (
    <Component
      className={`w-full overflow-hidden ${fullHeight ? "min-h-screen" : ""} ${className}`}
      style={{ backgroundColor, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
};