"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "subtle";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center font-medium rounded-md transition-colors";
  
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  };
  
  const variantStyles = {
    default: "bg-foreground/10 text-foreground",
    outline: "bg-transparent text-text-secondary border border-foreground/10",
    subtle: "bg-container text-text-secondary",
  };
  
  return (
    <span
      className={twMerge(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};