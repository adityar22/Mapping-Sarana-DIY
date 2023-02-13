/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2761EF",
        white: "#fafafa",
        gray: "#CCD0D7",
        lightblue: "#608CF7",
        lightorange: "E89A50",
        orange: "#E86C2E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
