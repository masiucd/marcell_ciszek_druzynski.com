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
      background: {},
      colors: {
        gray: colors.stone,
        primary: colors.blue,
        linen: {
          "50": "hsl(30, 79%, 95%)",
          "100": "hsl(29, 80%, 92%)",
          "200": "hsl(28, 77%, 83%)",
          "300": "hsl(27, 76%, 72%)",
          "400": "hsl(24, 76%, 61%)",
          "500": "hsl(21, 75%, 53%)",
          "600": "hsl(17, 71%, 48%)",
          "700": "hsl(14, 70%, 40%)",
          "800": "hsl(11, 62%, 34%)",
          "900": "hsl(12, 59%, 28%)",
          "950": "hsl(10, 65%, 15%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
