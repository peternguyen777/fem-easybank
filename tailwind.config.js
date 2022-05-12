module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        publicsans: ["Public Sans", "sans-serif"],
      },
      screens: {
        lg: "1440px",
      },
      colors: {
        unfocussed: "#9597A5",
        focussed: "#2D314D",
      },
    },
  },
  plugins: [],
};
