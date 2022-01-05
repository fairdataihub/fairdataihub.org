import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ["gsap"],
  },
  modules: ["@nuxtjs/dotenv"],
  publicRuntimeConfig: {
    USER_ID: process.env.VUE_APP_USER_ID,
    TEMPLATE_ID: process.env.VUE_APP_TEMPLATE_ID,
    SERVICE_ID: process.env.VUE_APP_SERVICE_ID,
    ACCESS_TOKEN: process.env.VUE_APP_ACCESS_TOKEN,
  },
});
