"use client";

import { ReactNode } from "react";
import { COLORS, RADII } from "@/lib/constants/design-tokens";

interface CardContainerProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  style?: React.CSSProperties;
}

export const CardContainer = ({
  children,
  className = "",
  backgroundColor = COLORS.container,
  borderRadius = RADII.xl,
  padding = "32px",
  style = {},
}: CardContainerProps) => {
  return (
    <div
      className={`${className}`}
      style={{
        backgroundColor,
        borderRadius,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};