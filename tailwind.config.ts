import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          darker: "hsl(var(--color-primary-darker) / <alpha-value>)",
          lighter: "hsl(var(--color-primary-lighter) / <alpha-value>)",
        },
        complementary: {
          DEFAULT: "hsl(var(--color-complementary) / <alpha-value>)",
          darker: "hsl(var(--color-complementary-darker) / <alpha-value>)",
          lighter: "hsl(var(--color-complementary-lighter) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
          darker: "hsl(var(--color-accent-darker) / <alpha-value>)",
          lighter: "hsl(var(--color-accent-lighter) / <alpha-value>)",
        },
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        custom: {
          content: "hsl(var(--color-custom-neutral-content) / <alpha-value>)",
        },
        background: "#F5F5F5",
      },
      backgroundImage: {
        "gradient-circle": "url(/img/background-gradient-circle-1280-480.png)",
        "gradient-square": "url(/img/background-gradient-squared-1300-400.png)"
      },
      screens: {
        'sm': '639.98px',
        'md': '767.98px',
        'lg': '1023.98px',
        'xl': '1279.98px',
        '2xl': '1535.98px',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark"],

  },
};

export default config;