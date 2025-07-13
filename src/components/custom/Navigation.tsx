"use client";

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
  isLight?: boolean;
}

export const Navigation = ({
  items,
  orientation = "vertical",
  showDividers = true,
  className = "",
  linkClassName = "",
  isLight = false,
}: NavigationProps) => {
  if (orientation === "horizontal") {
    return (
      <nav className={`flex flex-wrap gap-4 ${className}`}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`hover:opacity-100 transition-opacity text-lg ${isLight ? 'text-white' : 'text-foreground'} ${linkClassName}`}
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
            className={`block hover:opacity-80 transition-opacity py-3 text-lg ${isLight ? 'text-white' : 'text-foreground'} ${linkClassName}`}
          >
            {item.label}
          </a>
          {showDividers && index < items.length - 1 && (
            <div
              className={`w-full h-px ${isLight ? 'bg-white/20' : 'bg-foreground/20'}`}
            />
          )}
        </div>
      ))}
    </nav>
  );
};