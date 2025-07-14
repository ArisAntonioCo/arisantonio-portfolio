"use client";

import { Slider, Label } from "@/components/ui";
import { cn } from "@/lib/utils";

interface FontSizeControlProps {
  value: number;
  onChange: (value: number) => void;
}

const fontSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const max = 8; // 0-8 gives us 9 positions (5 main sizes + 4 half sizes)
const skipInterval = 2; // Show labels every 2 ticks (main sizes only)

export const FontSizeControl = ({ value, onChange }: FontSizeControlProps) => {
  const handleValueChange = (values: number[]) => {
    onChange(values[0]);
  };

  const ticks = [...Array(max + 1)].map((_, i) => i);

  return (
    <div className="flex flex-col gap-2 bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border">
      <Label className="text-xs whitespace-nowrap">Font Size</Label>
      <div className="w-48">
        <div>
          <Slider
            value={[value]}
            onValueChange={handleValueChange}
            max={max}
            step={1}
            className="w-full"
            aria-label="Font size"
          />
          <span
            className="mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium text-muted-foreground"
            aria-hidden="true"
          >
            {ticks.map((_, i) => (
              <span key={i} className="flex w-0 flex-col items-center justify-center gap-2">
                <span
                  className={cn(
                    "h-1 w-px bg-muted-foreground/70",
                    i % skipInterval !== 0 && "h-0.5"
                  )}
                />
                <span className={cn(
                  i % skipInterval !== 0 && "opacity-0",
                  i === value && "text-foreground font-semibold"
                )}>
                  {fontSizes[Math.floor(i / skipInterval)]}
                </span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};