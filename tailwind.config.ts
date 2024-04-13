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
      boxShadow: {
        "rainbow-frame-light": `5px 5px 0 0 ${colors.zinc[900]}, 10px 10px 0 0 ${colors.zinc[800]}, 15px 15px 0 0 ${colors.zinc[700]}, 20px 20px 0 0 ${colors.zinc[600]}, 25px 25px 0 0 ${colors.zinc[500]}`,
        "rainbow-frame-dark": `5px 5px 0 0 ${colors.zinc[100]}, 10px 10px 0 0 ${colors.zinc[200]}, 15px 15px 0 0 ${colors.zinc[300]}, 20px 20px 0 0 ${colors.zinc[400]}, 25px 25px 0 0 ${colors.zinc[500]}`,
      },
      backgroundImage: {
        "blog-title-bg-light": "url('/bg/curve-dark.svg')",
        "blog-title-bg-dark": "url('/bg/curve-white.svg')",
      },
      colors: {
        gray: colors.stone,
        primary: colors.blue,
        "heading-light": colors.stone["950"],
        "heading-dark": colors.stone["50"],
        "text-light": colors.stone["800"],
        "text-dark": colors.stone["100"],
        "bg-light": colors.stone["50"],
        "bg-dark": colors.stone["950"],
        "border-light": colors.stone["200"],
        "border-dark": colors.stone["700"],
        "link-light": colors.blue["500"],
        "link-dark": colors.blue["300"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
