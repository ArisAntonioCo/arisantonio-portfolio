"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  animationDelay?: number;
  fullHeight?: boolean;
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
  animate = true,
  animationDelay = 0,
  fullHeight = false,
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
      {...props}
    >
      {children}
    </Component>
  );
};