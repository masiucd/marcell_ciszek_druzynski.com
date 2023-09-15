// const colors = require("tailwindcss/colors");

import {type Config} from "tailwindcss";
import colors from "tailwindcss/colors";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./content/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
				primary: colors.blue,
			},
			boxShadow: {
				"layers-white":
					"#0f172a 0px 0px 0px 2px inset, #f8fafc 10px -10px 0px -3px, #1e293b 10px -10px, #f8fafc 20px -20px 0px -3px, #334155 20px -20px, #f8fafc 30px -30px 0px -3px, #475569 30px -30px, #f8fafc 40px -40px 0px -3px, #64748b 40px -40px",
				"9xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
				"layers-black":
					"#f8fafc 0px 0px 0px 2px inset, #1e293b 10px -10px 0px -3px, #f8fafc 10px -10px, #1e293b 20px -20px 0px -3px, #f8fafc 20px -20px, #1e293b 30px -30px 0px -3px, #f8fafc 30px -30px, #1e293b 40px -40px 0px -3px, #f8fafc 40px -40px",
			},
			fontFamily: {
				// sans: ["var(--font-sans)", ...fontFamily.sans],
				mono: ["var(--font-mono)", ...fontFamily.mono],
			},
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": {content: "none"},
						"blockquote p:first-of-type::after": {content: "none"},
					},
				},
			},

			animation: {
				slideDownAndFade:
					"slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade:
					"slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade:
					"slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/container-queries"),
	],
};

export default config;
