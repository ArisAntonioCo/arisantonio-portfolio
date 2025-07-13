// Design System Constants
// Following industry best practices for design token management

export const COLORS = {
  background: "#E6E6E6",
  container: "#F5F5F5",
  foreground: "#000000",
  textSecondary: "#666666",
  accent: {
    default: "#4800FF",
    hover: "#3600CC",
    light: "#6B2FFF",
    muted: "#4800FF33",
  },
  // Legacy colors (to be deprecated)
  legacy: {
    dark: "#0F0F0F",
    light: "#FFFFFF",
    muted: "#8C8C8C",
  },
} as const;

export const SPACING = {
  xs: "0.75rem",   // 12px
  sm: "1rem",      // 16px
  md: "1.25rem",   // 20px
  lg: "1.5rem",    // 24px
  xl: "2rem",      // 32px
  "2xl": "3rem",   // 48px
  "3xl": "4rem",   // 64px
  layout: "100px", // Global layout padding
  section: "35px", // Section padding
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    primary: "'DM Sans', system-ui, -apple-system, sans-serif",
  },
  fontSize: {
    xs: "0.75rem",   // 12px
    sm: "0.875rem",  // 14px
    base: "1rem",    // 16px
    lg: "1.125rem",  // 18px
    xl: "1.25rem",   // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    headline: "26px", // Custom headline size
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
} as const;

export const BREAKPOINTS = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const RADII = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "18px",
  full: "9999px",
} as const;

export const TRANSITIONS = {
  fast: "150ms ease",
  base: "200ms ease",
  slow: "300ms ease",
} as const;