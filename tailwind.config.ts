import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "12px",
      },
      colors: {
        accent: "rgb(var(--accent-rgb))",
        back: "rgb(var(--background-rgb))",
        fore: "rgb(var(--foreground-rgb))",
      },
      backgroundImage: {
        digital: "url('/images/digital-lines.jpg')",
        stats: "url('/images/stats-bg.svg')",
        waves: "url('/images/wavy-lines.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
