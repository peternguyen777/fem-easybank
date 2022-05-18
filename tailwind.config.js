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
        secondary: "#9597A5",
        primary: "#2D314D",
        hover: "#30C88F",
      },
    },
  },
  plugins: [],
};
