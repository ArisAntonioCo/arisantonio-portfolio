"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

interface CustomCursorProps {
  isInHero: boolean;
}

export const CustomCursor = ({ isInHero }: CustomCursorProps) => {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [magnetTarget, setMagnetTarget] = useState<DOMRect | null>(null);
  const [isCursorReady, setIsCursorReady] = useState(false);

  // Spring animations for smooth cursor movement
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  // Initialize cursor position on mount
  useEffect(() => {
    const initializeCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsCursorReady(true);
      window.removeEventListener("mousemove", initializeCursor);
    };
    window.addEventListener("mousemove", initializeCursor);
    
    return () => {
      window.removeEventListener("mousemove", initializeCursor);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    // Offset to align custom cursor with system cursor
    const CURSOR_OFFSET = { x: 0, y: 0 };
    
    const findNearestInteractive = (x: number, y: number): { element: Element; distance: number; rect: DOMRect } | null => {
      const interactiveSelectors = [
        'a[href]',
        'button',
        '[role="button"]',
        '[onclick]',
        '.cursor-pointer'
      ];
      
      const interactiveElements = document.querySelectorAll(interactiveSelectors.join(', '));
      let nearest: { element: Element; distance: number; rect: DOMRect } | null = null;
      const magnetRadius = 50; // Magnet effect radius in pixels

      interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

        if (distance < magnetRadius && (!nearest || distance < nearest.distance)) {
          nearest = { element, distance, rect };
        }
      });

      return nearest;
    };

    const updateMousePosition = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Find nearest interactive element for magnet effect
      const nearest = findNearestInteractive(x, y);
      
      if (nearest) {
        // Apply magnet effect
        const rect = nearest.rect;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Interpolate position based on distance
        const magnetStrength = 1 - (nearest.distance / 50); // 0 to 1
        const magnetX = x + (centerX - x) * magnetStrength * 0.3;
        const magnetY = y + (centerY - y) * magnetStrength * 0.3;
        
        cursorX.set(magnetX + CURSOR_OFFSET.x);
        cursorY.set(magnetY + CURSOR_OFFSET.y);
        setIsHovering(true);
        setMagnetTarget(rect);
      } else {
        // No magnet effect, follow mouse directly
        cursorX.set(x + CURSOR_OFFSET.x);
        cursorY.set(y + CURSOR_OFFSET.y);
        setIsHovering(false);
        setMagnetTarget(null);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleClick = (e: MouseEvent) => {
      if (!isInHero) return;
      
      // Check if clicking on interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], [onclick], .cursor-pointer');
      
      // Only scroll if not clicking on interactive element and in hero section
      if (!isInteractive && !isHovering) {
        e.preventDefault();
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("click", handleClick, true); // Capture phase

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("click", handleClick, true);
    };
  }, [cursorX, cursorY, isInHero, isHovering]);

  return (
    <>
      <AnimatePresence>
        {isInHero && isCursorReady && (
          <motion.div
            className="fixed pointer-events-none z-50 mix-blend-difference custom-cursor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              left: 0,
              top: 0,
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%"
            }}
          >
          <motion.div
            animate={{
              scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
            }}
            transition={{ duration: 0.1 }}
            className="relative"
          >
            {/* Cursor circle */}
            <motion.div 
              className="bg-white rounded-full flex items-center justify-center"
              animate={{
                width: isHovering ? 40 : 48,
                height: isHovering ? 40 : 48,
              }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
            >
              {isHovering ? (
                // Pointer state for hovering
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="relative"
                >
                  <div className="w-3 h-3 bg-black rounded-full" />
                  {magnetTarget && (
                    <motion.div
                      className="absolute inset-0 w-3 h-3 bg-black/20 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  )}
                </motion.div>
              ) : (
                // Arrow down icon for default state
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  animate={{
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path
                    d="M12 5V19M12 19L5 12M12 19L19 12"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </motion.div>
            
            {/* Text - only show when not hovering */}
            {!isHovering && (
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white text-xs font-medium">Scroll Down</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};