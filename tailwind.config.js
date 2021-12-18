module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/vue3-carousel/dist/carousel.css",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        inter: ["Inter"],
        asap: ["Asap"],
      },
      screens: {
        print: { raw: "print" },
        "3xl": "2400px",
      },
      backgroundImage: {
        haikeiWavy: "url('./assets/backgrounds/wavy-background.svg')",
        haikeiCircleScatter:
          "url('./assets/backgrounds/circle-scatter-haikei.svg')",
        patternRandomized: "url('./assets/backgrounds/pattern-randomized.svg')",
      },
    },
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#0077b6",
      accent: "#CB128D",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "light-accent": "#CD329F",
      "light-vision": "#000",
      "light-background": "#F5F5F5",
      "button-light-background": "#000",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      "light-accent": "#CD329F",
    }),
  },
  plugins: [require("tailwindcss-debug-screens")],
};
