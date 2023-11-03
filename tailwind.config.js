module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        parisienne: ["Parisienne", "cursive"],
      },
    },
  },
  plugins: [],
};
