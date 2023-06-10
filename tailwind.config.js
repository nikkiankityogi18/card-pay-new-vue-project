/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["SpaceGrotesk", "Arial", "sans-serif"],
      },
      colors: {
        error: "#FF5252",
        active: "#6617B0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
