/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2761EF",
        white: "#fafafa",
        lightblue: "#608CF7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
