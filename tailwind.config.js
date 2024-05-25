/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saintecolombe': ['"saintecolombe"', ...defaultTheme.fontFamily.sans],
        'obviously': ['"obviously"', ...defaultTheme.fontFamily.sans],
        'balto': ['"balto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}