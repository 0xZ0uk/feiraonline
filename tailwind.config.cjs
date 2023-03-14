const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["var(--font-poppins)", ...fontFamily.sans],
        base: ["var(--font-opensans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = config;
