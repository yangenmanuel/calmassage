/** @type {import('tailwindcss').Config} */
 export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#B89E6F",
				"secondary": "#EFE3B8",
			},

			fontFamily: {
				"title": "Lovelace",
				"text": "TTDrugs",
				"text-bold": "TTDrugs Bold",
			},

			maxWidth: {
				"container": "1260px",
			},

			minWidth: {
				"min-container": "calc(100vw - 16px)",
			}
		},

		animation: {
			"fade-in": "fadeIn 1s ease-in-out",
		},

		keyframes: {
			fadeIn: {
				"0%": {
					opacity: 0,
					transform: "translate3d(0, 40px, 0)"
				},

				"100": {
					transform: "translate3d(0, 0, 0)",
					opacity: 1,
				}
			}
		}
	},
	plugins: [],
}
