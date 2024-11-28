/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        active: "#2C36F2",
        inactive: "#707C87",
        background: "#F6F7FF",
      },
    },
  },
  plugins: [],
};
