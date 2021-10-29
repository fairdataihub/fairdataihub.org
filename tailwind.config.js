module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/vue3-carousel/dist/carousel.css",
  ],
  darkMode: false, // or 'media' or 'class'
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
      "dark-accent": "#00b4d8",
      "light-vision": "#000",
      "dark-vision": "#fff",
      "light-background": "#F5F5F5",
      "button-light-background": "#000",
      "button-dark-background": "#000",
      "dark-background": "#1F1E28",
      "dark-background-2": "#2a2937",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      "light-accent": "#CD329F",
    }),
  },
  variants: {
    extend: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      display: ["dark"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
