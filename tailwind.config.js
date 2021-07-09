module.exports = {
  purge: [
    "./public/**/*.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    "./node_modules/vueperslides/dist/vueperslides.css",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        udMedicalResearch: "url('./assets/udMedicalResearch.svg')",
        udScience: "url('./assets/udScience.svg')",
        udEnvironmentalStudy: "url('./assets/udEnvironmentalStudy.svg')",
        udDesignInspiration: "url('./assets/udDesignInspiration.svg')",
        udCompleteTask: "url('./assets/udCompleteTask.svg')",
      }),
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        bitter: ["Bitter", "sans-serif"],
      },
      screens: {
        print: { raw: "print" },
        // => @media print { ... }
      },
    },
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#4507dc",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#E76F51",
      "dark-primary": "#00b4d8",
      "light-background": "#F5F5F5",
      "dark-background": "#1F1E28",
      "dark-background-2": "#2a2937",
    }),
  },
  variants: {
    extend: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      display: ["dark"],
    },
  },
  plugins: [],
};
