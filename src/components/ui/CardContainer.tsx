"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardContainerProps {
  children: ReactNode;
  className?: string;
}

export const CardContainer = ({
  children,
  className = "",
}: CardContainerProps) => {
  return (
    <div
      className={twMerge("bg-container rounded-xl p-8", className)}
    >
      {children}
    </div>
  );
};