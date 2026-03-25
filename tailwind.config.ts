import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: '#131313',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#abc7ff',
					foreground: '#002f65'
				},
				secondary: {
					DEFAULT: '#ecffe3',
					foreground: '#003907'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				"on-secondary-container": "#007117",
				"on-error": "#690005",
				"inverse-on-surface": "#313030",
				"surface-bright": "#393939",
				"on-primary-container": "#002959",
				"tertiary": "#ffba3f",
				"surface-variant": "#353534",
				"outline": "#8b919f",
				"on-surface-variant": "#c1c6d5",
				"on-secondary": "#003907",
				"surface-container-high": "#2a2a2a",
				"on-tertiary-container": "#3b2600",
				"on-primary-fixed-variant": "#00458e",
				"surface-dim": "#131313",
				"secondary-container": "#13ff43",
				"surface-container-highest": "#353534",
				"on-secondary-fixed-variant": "#00530e",
				"on-primary": "#002f65",
				"inverse-primary": "#005cba",
				"surface-tint": "#abc7ff",
				"surface-container": "#201f1f",
				"tertiary-fixed-dim": "#ffba3f",
				"on-surface": "#e5e2e1",
				"surface-container-lowest": "#0e0e0e",
				"surface": "#131313",
				"primary-fixed-dim": "#abc7ff",
				"outline-variant": "#414753",
				"on-error-container": "#ffdad6",
				"primary-container": "#448ffd",
				"error": "#ffb4ab",
				"tertiary-container": "#c18500",
				"on-tertiary-fixed": "#281800",
				"surface-container-low": "#1c1b1b",
				"on-secondary-fixed": "#002203",
				"on-primary-fixed": "#001b3f",
				"tertiary-fixed": "#ffdeae",
				"on-tertiary-fixed-variant": "#604100",
				"secondary-fixed-dim": "#00e639",
				"primary-fixed": "#d7e3ff",
				"error-container": "#93000a",
				"secondary-fixed": "#72ff70",
				"on-background": "#e5e2e1",
				"inverse-surface": "#e5e2e1",
				"on-tertiary": "#432c00"
			},
			borderRadius: {
				DEFAULT: "0.125rem",
				lg: "0.25rem",
				xl: "0.5rem",
				full: "0.75rem",
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				"headline": ["var(--font-space-grotesk)"],
				"body": ["var(--font-inter)"],
				"label": ["var(--font-fira-code)", "monospace"],
				"mono": ["var(--font-fira-code)", "monospace"]
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
