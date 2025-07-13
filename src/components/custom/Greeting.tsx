"use client";

import { useState, useEffect } from "react";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import { COLORS } from "@/lib/constants/design-tokens";

interface GreetingProps {
  name: string;
  showEmoji?: boolean;
  emojiName?: string;
  emojiSize?: number;
  textSize?: string;
  color?: string;
  className?: string;
}

export const Greeting = ({
  name,
  showEmoji = true,
  emojiName = "waving-hand",
  emojiSize = 36,
  textSize = "36px",
  color = COLORS.foreground,
  className = "",
}: GreetingProps) => {
  // Lazy load emoji data to avoid Turbopack issues
  const [emojiData, setEmojiData] = useState<any>(null);
  
  useEffect(() => {
    import("react-apple-emojis/src/data.json").then((data) => {
      setEmojiData(data.default || data);
    });
  }, []);

  if (!emojiData) {
    // Return without emoji while loading
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span style={{ fontSize: textSize, color }}>
          Hello, I am {name}
        </span>
      </div>
    );
  }

  return (
    <EmojiProvider data={emojiData}>
      <div className={`flex items-center gap-3 ${className}`}>
        <span style={{ fontSize: textSize, color }}>
          Hello, I am {name}
        </span>
        {showEmoji && <Emoji name={emojiName} width={emojiSize} />}
      </div>
    </EmojiProvider>
  );
};