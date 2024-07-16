import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        gestao: {
          "primary": "#FF6600",
          "secondary": "#009AFF",
          "accent": "#7C3D9A",
          "neutral": "#E0E0E0",
          "background": "#F7F7F7",
        },

        gestaodark: {
          "primary": "#FF6600",
          "secondary": "#009AFF",
          "accent": "#7C3D9A",
          "neutral": "#333333",
        },
      },
    ],
    darkTheme: "gestaodark"
  },
};
export default config;
