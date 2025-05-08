import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": {
        max: "1200px",
      },
      xl: {
        max: "992px",
      },
      lg: {
        max: "768px",
      },
      md: {
        max: "576px",
      },
      sm: {
        max: "458px",
      },
    },
    extend: {
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
        6000: "6000ms",
        7000: "7000ms",
        8000: "8000ms",
        9000: "9000ms",
        10000: "10000ms",
      },
      colors: {
        primary: "#e9dbbc",
        secondary: "#051A07",
        darkYellow: "#322821",
        secondBg: "#1d1d1d",
        tertioary: "#3c373271",
        lightPrimary: "#e6d0b531",
        lightGreen: "#A8D5BA",
        darkOrange: "#D4A276",
        // darkYellow: "#FFE464",
        purple: "#29274e",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
