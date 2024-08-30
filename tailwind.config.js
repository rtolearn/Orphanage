/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindcssPrimeui from "tailwindcss-primeui";

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				"gray-50": "#F4F4F4",
				"gray-400": "#989898",
				"gray-700": "#525252",
			},
		},
	},
	plugins: [daisyui, tailwindcssPrimeui],
};
