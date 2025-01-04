module.exports = {
  content: [
    "./src/components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000C90",
        accent: "#05AEEE",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "3xl": "3.875rem",
      },
    },
  },
  plugins: [],
};
