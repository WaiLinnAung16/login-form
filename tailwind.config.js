/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#0369a1",
        seclight: "#4cc9f0",
        secdark: "#075985",
      },
      fontFamily: {
        primaryFf: ["Rokkitt"],
      },
    },
  },
  plugins: [],
};
