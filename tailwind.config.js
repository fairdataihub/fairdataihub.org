const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    "./node_modules/vueperslides/dist/vueperslides.css",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        fsans: ["Lato"],
        inter: ["Inter"],
      },
      screens: {
        print: { raw: "print" },
      },
    },
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#0077b6",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#E76F51",
      "dark-primary": "#00b4d8",
      "light-background": "#F5F5F5",
      "dark-background": "#1F1E28",
      "dark-background-2": "#2a2937",
    }),
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      display: ["dark"],
    },
  },
  plugins: [],
};
