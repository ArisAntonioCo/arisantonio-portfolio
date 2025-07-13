"use client";

import { useState, useEffect } from "react";
import { COLORS, TYPOGRAPHY } from "@/lib/constants/design-tokens";

interface ClockProps {
  timezone?: string;
  format?: "12h" | "24h";
  showTimezone?: boolean;
  showSeconds?: boolean;
  className?: string;
  textSize?: string;
  timezoneSize?: string;
  color?: string;
  inline?: boolean;
}

export const Clock = ({
  timezone = "Asia/Manila",
  format = "12h",
  showTimezone = true,
  showSeconds = true,
  className = "",
  textSize = "20px",
  timezoneSize = "14px",
  color = COLORS.foreground,
  inline = false,
}: ClockProps) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        ...(showSeconds && { second: "2-digit" }),
        hour12: format === "12h",
      };
      const formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone, format, showSeconds]);

  const getTimezoneAbbr = () => {
    switch (timezone) {
      case "Asia/Manila":
        return "PHT";
      case "America/New_York":
        return "EST";
      case "America/Los_Angeles":
        return "PST";
      case "Europe/London":
        return "GMT";
      default:
        return "UTC";
    }
  };

  if (inline) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {showTimezone && (
          <span style={{ fontSize: timezoneSize, color, opacity: 0.6 }}>
            {getTimezoneAbbr()}
          </span>
        )}
        <span style={{ fontSize: textSize, color, fontWeight: "500" }}>
          {time}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {showTimezone && (
        <span style={{ fontSize: timezoneSize, color, opacity: 0.6 }}>
          {getTimezoneAbbr()}
        </span>
      )}
      <span style={{ fontSize: textSize, color, fontWeight: "600" }}>
        {time}
      </span>
    </div>
  );
};