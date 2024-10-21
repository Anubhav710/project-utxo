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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "xxs-xs": { min: "318px", max: "480px" }, // Custom range from 320px to 480px
        "xxs-md": { min: "480px", max: "767px" }, // Custom range from 320px to 480px
        "tablet-md": { min: "767px", max: "991px" }, // Custom range from 320px to 480px
        "laptop-md": { min: "991px", max: "1023px" }, // Custom range from 320px to 480px
        "desktop-lg": { min: "1023px", max: "1199px" }, // Custom range from 320px to 480px
        "large-screen": { min: "1199px", max: "1699px" }, // Custom range from 320px to 480px
        "extra-large": { min: "1699px" }, // Custom range from 320px to 480px
      },
    },
  },
  plugins: [],
};
export default config;
