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
        dark: "#0F0F0F",
        light: "#FFFFFF",
        muted: "#8C8C8C",
        accent: {
          DEFAULT: "#FF5500",
          hover: "#E64D00",
          light: "#FF6B1A",
          muted: "#FF550033",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Object Sans", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;