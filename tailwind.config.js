/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "540px",
			md: "720px",
			lg: "960px",
			xl: "1140px",
			"2xl": "1320px",
		},
		container: {
			padding: "1rem",
			center: true,
		},
		extend: {},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require("@tailwindcss/forms")({
			// strategy: "base", // only generate global styles
			strategy: "class", // only generate classes
		}),
	],
};
