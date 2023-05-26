const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./content/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			},

			boxShadow: {
				"layers-white":
					"#0f172a 0px 0px 0px 2px inset, #f8fafc 10px -10px 0px -3px, #1e293b 10px -10px, #f8fafc 20px -20px 0px -3px, #334155 20px -20px, #f8fafc 30px -30px 0px -3px, #475569 30px -30px, #f8fafc 40px -40px 0px -3px, #64748b 40px -40px",
				"9xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
				"layers-black":
					"#f8fafc 0px 0px 0px 2px inset, #1e293b 10px -10px 0px -3px, #f8fafc 10px -10px, #1e293b 20px -20px 0px -3px, #f8fafc 20px -20px, #1e293b 30px -30px 0px -3px, #f8fafc 30px -30px, #1e293b 40px -40px 0px -3px, #f8fafc 40px -40px",
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
			keyframes: {
				slideDownAndFade: {
					from: {opacity: 0, transform: "translateY(-2px)"},
					to: {opacity: 1, transform: "translateY(0)"},
				},
				slideLeftAndFade: {
					from: {opacity: 0, transform: "translateX(2px)"},
					to: {opacity: 1, transform: "translateX(0)"},
				},
				slideUpAndFade: {
					from: {opacity: 0, transform: "translateY(2px)"},
					to: {opacity: 1, transform: "translateY(0)"},
				},
				slideRightAndFade: {
					from: {opacity: 0, transform: "translateX(-2px)"},
					to: {opacity: 1, transform: "translateX(0)"},
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
