"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Case Studies" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    // Initialize time on client side
    setCurrentTime(new Date());

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      setShowColon(prev => !prev);

      // Convert to Philippines timezone (UTC+8)
      const phTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
      const hours = phTime.getHours();
      
      // Available from 10:00 AM to 5:00 PM (17:00)
      setIsAvailable(hours >= 10 && hours < 17);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date | null) => {
    if (!date) return "";
    const timeString = date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    
    // Replace colon with span for blinking effect
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':');
    return { hours, minutes, period };
  };

  return (
    <nav className="relative z-50 px-3 sm:px-4 lg:px-5 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="text-light font-normal text-base sm:text-lg hover:text-accent transition-colors">
          Aris Antonio
        </Link>

        {/* Right side container */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Time and Status */}
          {currentTime && (
            <div className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-full px-2 sm:px-3 md:px-4 py-1 flex items-center gap-1 sm:gap-2">
              <div className={cn(
                "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity duration-100",
                isAvailable ? "bg-green-500" : "bg-[#FF5500]",
                showColon ? "opacity-100" : "opacity-0"
              )} />
              <span className="text-light text-xs sm:text-sm" style={{ fontFamily: 'NeuePixelGrotesk, monospace' }}>
                {currentTime && (() => {
                  const time = formatTime(currentTime);
                  if (typeof time === 'string') return time;
                  return (
                    <>
                      {time.hours}
                      <span className={cn(
                        "transition-opacity duration-100",
                        showColon ? "opacity-100" : "opacity-0"
                      )}>:</span>
                      {time.minutes} {time.period}
                      <span className="hidden sm:inline"> (GMT+8)</span>
                    </>
                  );
                })()}
              </span>
              <span className={cn(
                "text-xs sm:text-sm",
                isAvailable ? "text-green-400" : "text-[#FF5500]"
              )} style={{ fontFamily: 'NeuePixelGrotesk, monospace' }}>
                {isAvailable ? "Available" : "Unavailable"}
              </span>
            </div>
          )}

          {/* Menu Icon with Glass Container */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-full px-3 py-1 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-light"
            >
              <circle cx="5" cy="12" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="19" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute right-4 sm:right-6 md:right-8 lg:right-12 top-full mt-2 sm:mt-4 bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 min-w-[180px] sm:min-w-[200px]",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-[#8C8C8C] hover:text-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};