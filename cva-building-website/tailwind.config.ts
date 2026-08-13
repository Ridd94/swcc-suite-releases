import type { Config } from "tailwindcss";

/**
 * BRAND COLOURS
 * -------------
 * These are refined placeholder colours chosen to suit a premium building &
 * electrical company. To match CVA's real brand, change the hex values below
 * (especially `brand` = primary, `accent` = highlight/CTA). Everything on the
 * site references these tokens, so updating them here restyles the whole site.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CVA blue — primary brand colour (matches the logo & van signage)
        brand: {
          50: "#eff5ff",
          100: "#dbe8fe",
          200: "#bfd7fe",
          300: "#93bbfd",
          400: "#6098fa",
          500: "#3b78f6",
          600: "#2560ea",
          700: "#1c4ed8",
          800: "#1e40af",
          900: "#1c357f",
          950: "#152451",
        },
        // Warm amber/gold — accent, CTAs, highlights
        accent: {
          50: "#fff9eb",
          100: "#fef0c7",
          200: "#fde08a",
          300: "#fbca4d",
          400: "#f9b429",
          500: "#f39c12",
          600: "#d97e0a",
          700: "#b45c0c",
          800: "#924811",
          900: "#783c12",
          950: "#451e06",
        },
        // Neutral ink scale for text/surfaces
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d4d9e2",
          300: "#aeb7c7",
          400: "#8290a6",
          500: "#61708a",
          600: "#4c5871",
          700: "#3e485c",
          800: "#363e4e",
          900: "#303643",
          950: "#1c202a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.06), 0 8px 24px rgba(16,24,40,0.08)",
        lift: "0 12px 40px rgba(16,24,40,0.16)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
