module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-toastify/dist/ReactToastify.css',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
        inter: ['Inter'],
        asap: ['Asap'],
      },
      screens: {
        print: { raw: 'print' },
        '3xl': '2400px',
      },
      backgroundImage: {
        haikeiWavy: "url('/backgrounds/wavy-background.svg')",
        haikeiCircleScatter: "url('/backgrounds/circle-scatter-haikei.svg')",
        patternRandomized: "url('/backgrounds/pattern-randomized.svg')",
      },
    },

    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#CD329F',
      accent: '#CB128D',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'light-accent': '#CD329F',
      'light-vision': '#000',
      'light-background': '#F5F5F5',
      'button-light-background': '#000',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      'light-accent': '#CD329F',
    }),
  },
  plugins: [require('tailwindcss-debug-screens')],
  corePlugins: {
    divideStyle: true,
  },
};
