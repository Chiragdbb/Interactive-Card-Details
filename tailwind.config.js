/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				spaceGrotesk: "Space Grotesk",
			},
			gradientColorStops: {
				grad1: "hsl(249, 99%, 64%)",
				grad2: "hsl(278, 94%, 30%)",
			},
			colors: {
				red2: "hsl(0, 100%, 66%)",
				white2: "hsl(0, 0%, 100%)",
				lightGrayishViolet: "hsl(270, 3%, 87%)",
				darkGrayishViolet: "hsl(279, 6%, 55%)",
				veryDarkViolet: "hsl(278, 68%, 11%)",
			},
			fontSize: {
				bodyNormal: "18px",
			},
		},
	},
	plugins: [],
};
