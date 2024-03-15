import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blog-title-bg-light": "url('/bg/curve-dark.svg')",
        "blog-title-bg-dark": "url('/bg/curve-white.svg')",
      },
      colors: {
        gray: colors.zinc,
        primary: colors.blue,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
