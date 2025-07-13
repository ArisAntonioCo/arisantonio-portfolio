"use client";

import { COLORS } from "@/lib/constants/design-tokens";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  orientation?: "vertical" | "horizontal";
  showDividers?: boolean;
  className?: string;
  linkClassName?: string;
  dividerColor?: string;
  textColor?: string;
  fontSize?: string;
  spacing?: string;
}

export const Navigation = ({
  items,
  orientation = "vertical",
  showDividers = true,
  className = "",
  linkClassName = "",
  dividerColor = "rgba(255, 255, 255, 0.2)",
  textColor = "white",
  fontSize = "18px",
  spacing = orientation === "vertical" ? "py-3" : "px-4",
}: NavigationProps) => {
  if (orientation === "horizontal") {
    return (
      <nav className={`flex flex-wrap gap-4 ${className}`}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`hover:opacity-100 transition-opacity ${linkClassName}`}
            style={{ color: textColor, fontSize }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className={`flex flex-col ${className}`}>
      {items.map((item, index) => (
        <div key={item.label}>
          <a
            href={item.href}
            className={`block hover:opacity-80 transition-opacity ${spacing} ${linkClassName}`}
            style={{ color: textColor, fontSize }}
          >
            {item.label}
          </a>
          {showDividers && index < items.length - 1 && (
            <div
              className="w-full"
              style={{
                height: "1px",
                backgroundColor: dividerColor,
              }}
            />
          )}
        </div>
      ))}
    </nav>
  );
};