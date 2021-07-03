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
    },
  },
  variants: {
    extend: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
