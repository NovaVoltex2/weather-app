/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}",
		"./src/components/**/*.{html,js,jsx}",
		"./src/pages/**/*.{html,js,jsx}",
],
  theme: {
    extend: {
		  keyframes: {
			  wiggle: {
				  '0%, 100%': { transform: 'rotate(-3deg)' },
				  '50%': { transform: 'rotate(3deg)' },
			  }
		  }
	},
  },
  plugins: [],
}

