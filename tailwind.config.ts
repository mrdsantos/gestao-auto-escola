import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF5724",
        "primary-darker": "#F93A00",
        "primary-lighter": "#FF7B53",
        "complementary": "#00B3FF",
        "complementary-darker": "#0097EE",
        "complementary-lighter": "#B1E4FF",
        "secondary": "#FF245E",
        "secondary-darker": "#D81859",
        "secondary-lighter": "#FF93B0",
        "accent": "#FF245E",
        "accent-darker": "#D81859",
        "accent-lighter": "#FF93B0",
        "background": "#F5F5F5",
        "surface": "#EBEBEB",
      },
      backgroundImage: {
        "gradient-circle": "url(/img/background-gradient-circle-1280-480.png)",
        "gradient-square": "url(/img/background-gradient-squared-1300-400.png)"
      },
      screens: {
        'sm': '639.98px',
        // => @media (min-width: 640px) { ... }

        'md': '767.98px',
        // => @media (min-width: 768px) { ... }

        'lg': '1023.98px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1279.98px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1535.98px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
};

export default config;
