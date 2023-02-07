/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			'background-image': {
				'principal': "url('/bg.png')",
			}
		},
	},
	plugins: [],
}
