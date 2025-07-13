"use client";

import { ReactNode } from "react";
import { COLORS, TYPOGRAPHY } from "@/lib/constants/design-tokens";

interface HeadlineProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "headline";
  color?: string;
  className?: string;
  maxWidth?: string;
  style?: React.CSSProperties;
}

const sizeMap = {
  sm: "18px",
  md: "20px",
  lg: "24px",
  headline: TYPOGRAPHY.fontSize.headline,
};

export const Headline = ({
  children,
  size = "headline",
  color = COLORS.foreground,
  className = "font-normal leading-tight",
  maxWidth,
  style = {},
}: HeadlineProps) => {
  return (
    <h1
      className={className}
      style={{
        fontSize: sizeMap[size],
        color,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </h1>
  );
};