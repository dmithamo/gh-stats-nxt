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
        waves: "url('/images/wavy-lines-cln.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
