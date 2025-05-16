import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; // Corrected import

const config = {
  darkMode: "class", // Corrected darkMode value
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Include if using pages dir for anything
  ],
  prefix: "", // No prefix for shadcn/ui
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans], // Used defaultTheme
        heading: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans], // Used defaultTheme
      },
      colors: {
        // Mapping CSS variables to Tailwind color names
        // These allow using classes like bg-background, text-primary, etc.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Clavis palette direct access (optional, as CSS vars are primary)
        'clavis-bg-deep-dark': "var(--clavis-bg-deep-dark)",
        'clavis-bg-panel-dark': "var(--clavis-bg-panel-dark)",
        'clavis-text-primary': "var(--clavis-text-primary)",
        'clavis-text-secondary': "var(--clavis-text-secondary)",
        'clavis-text-tertiary': "var(--clavis-text-tertiary)",
        'clavis-accent-1': "var(--clavis-accent-1)",
        'clavis-accent-2': "var(--clavis-accent-2)",
        'clavis-accent-3': "var(--clavis-accent-3)",
        'clavis-accent-4': "var(--clavis-accent-4)",
        'clavis-accent-blue-light': "var(--clavis-accent-blue-light)",
        'clavis-accent-blue-deep': "var(--clavis-accent-blue-deep)",
        'clavis-accent-pink-soft': "var(--clavis-accent-pink-soft)",
        'clavis-accent-pink-vivid': "var(--clavis-accent-pink-vivid)",
        'clavis-glass-bg': "var(--clavis-glass-bg)",
        'clavis-glass-border': "var(--clavis-glass-border)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shine": { // As defined in globals.css
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shine": "gradient-shine 5s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // For shadcn/ui animations
} satisfies Config;

export default config;
