<template>
  <div class="container max-w-screen-lg px-6 py-8 mx-auto">
    <div class="items-center justify-center md:flex">
      <div class="w-full p-2 lg:w-1/2">
        <h1
          class="w-full text-4xl font-black text-left md:py-3 sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Making FAIR
          <span class="text-accent"> data </span>
          practices more accessible
        </h1>

        <p
          class="w-full mt-2 text-xl font-normal text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl"
        >
          <span class="font-medium">F</span>indable,
          <span class="font-medium">A</span>ccessible,
          <span class="font-medium">I</span>nteroperable, and
          <span class="font-medium">R</span>eusable (FAIR) data practices are
          taking the biomedical research world by storm. We build open source
          tools to help researchers navigate through them.
        </p>

        <NuxtLink to="/contact-us">
          <button
            type="button"
            class="p-3 my-3 text-base font-semibold text-center text-black transition-all bg-transparent border-2 border-black rounded-lg hover:border-light-accent hover:text-accent"
          >
            Contact us
          </button>
        </NuxtLink>
      </div>

      <div
        class="flex items-center justify-center w-full p-5 mt-6 lg:w-1/2 lg:mt-0 lg:p-2"
      >
        <LottieComponentVue :animationData="HeroData" />
      </div>
    </div>
  </div>
</template>

<script>
import LottieComponentVue from "../lottie/LottieComponent.vue";

import HeroData from "../../assets/lotties/hero.json";

export default {
  name: "HeroSection",
  components: {
    LottieComponentVue,
  },
  data() {
    return {
      HeroData,
    };
  },
};
</script>
