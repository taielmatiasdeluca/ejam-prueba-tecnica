/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'dark-blue':'#252F3D',
				'custom-green': "#85BF55",
				'custom-blue':'#2C7EF8',
				'light-gray':"#FAFAFA",
			}
		},
	},
	plugins: [],
}
