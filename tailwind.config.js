/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "#0369a1",
        seclight: "#4cc9f0",
        secdark: "#075985",
        facebook: "#3b5998",
        igtop: "#8a3ab9",
        igmid: "#bc2a8d",
        igb: "#fbad50",
        twitter: "#00acee",
      },
      fontFamily: {
        primaryFf: ["Rokkitt"],
      },
    },
  },
  plugins: [],
};
