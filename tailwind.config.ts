import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        // New light theme colors
        background: "#E6E6E6",
        container: "#F5F5F5",
        foreground: "#000000",
        "text-secondary": "#666666",
        
        // Legacy colors (for compatibility)
        dark: "#0F0F0F",
        light: "#FFFFFF",
        muted: "#8C8C8C",
        
        accent: {
          DEFAULT: "#4800FF",
          hover: "#3600CC",
          light: "#6B2FFF",
          muted: "#4800FF33",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;