/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["OpenSans", "sans-serif"],
    },
    extend: {
      colors: {
        // theme main background color
        primary: "#171F28",
        secondary: "#151A24",

        // text colors
        light: "#CFD1D4",
        grey: "#575B62",

        // link, button active/hover
        active: "#7E0FE1",
      },
    },
  },
  plugins: [],
};
