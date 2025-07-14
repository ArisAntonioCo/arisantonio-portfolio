"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({
  children,
  className = "",
}: CardProps) => {
  return (
    <div
      className={twMerge("bg-container rounded-xl p-8", className)}
    >
      {children}
    </div>
  );
};