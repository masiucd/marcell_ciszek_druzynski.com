const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		// "./app/**/*.{ts,tsx}",
		// "./components/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./posts/**/*.mdx",
	],
	theme: {
		extend: {
			boxShadow: {
				"layers-white":
					"#0f172a 0px 0px 0px 2px inset, #fff 10px -10px 0px -3px, #1e293b 10px -10px, #fff 20px -20px 0px -3px, #334155 20px -20px, #fff 30px -30px 0px -3px, #475569 30px -30px, #fff 40px -40px 0px -3px, #64748b 40px -40px",
				"9xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
			fontFamily: {
				serif: ["var(--font-serif)", ...fontFamily.serif],
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
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [require("@tailwindcss/typography")],
}
