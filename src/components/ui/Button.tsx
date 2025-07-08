import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-sans font-normal transition-all duration-300 rounded-full inline-flex items-center justify-center",
          {
            // Size variants
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            // Style variants
            "bg-accent text-light hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,85,0,0.3)]":
              variant === "solid",
            "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-light hover:-translate-y-0.5":
              variant === "outline",
            "bg-white/5 text-light border border-white/10 backdrop-blur-[10px] hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]":
              variant === "glass",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";