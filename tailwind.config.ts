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
        lightgreen: "#49A569",
        mediumgreen: "#2B5F44",
        darkgreen: "#243831",
        softGrey: "#939494",
        mediumGrey: "#4a4a4a",
        darkBlue: "#101828"
      },
      fontFamily: {
        sans: ['Castoro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
