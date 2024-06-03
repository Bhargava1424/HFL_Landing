/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors:{
        light_orange: "#FFD686",
        Custom_color: "#FBF8F",
      }
    },
  },
  plugins: [require("daisyui")],
}

