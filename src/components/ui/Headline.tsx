"use client";

import { ReactNode } from "react";

interface HeadlineProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "headline";
  className?: string;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  headline: "text-[26px]",
};

export const Headline = ({
  children,
  size = "headline",
  className = "",
}: HeadlineProps) => {
  return (
    <h1
      className={`font-normal leading-tight text-foreground ${sizeClasses[size]} ${className}`}
    >
      {children}
    </h1>
  );
};