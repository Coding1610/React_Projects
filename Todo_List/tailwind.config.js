/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "mainBgClr" : '#0d1117',
        "mainColumnBgClr": '#161C22',
      }
    },
  },
  plugins: [],
}