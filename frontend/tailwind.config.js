/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors:{
        light_orange: "#FFD686"
      }
    },
  },
  plugins: [require("daisyui")],
}

