<template>
  <div class="container max-w-screen-lg px-6 py-8 mx-auto">
    <div class="items-center justify-center md:flex">
      <div class="w-full p-2 lg:w-1/2">
        <h1
          class="w-full py-3 text-5xl font-black text-center md:text-left md:py-3"
        >
          Making FAIR
          <span class="text-accent"> data </span>
          practices more accessible
        </h1>

        <p
          class="w-full pb-4 mt-2 text-2xl font-normal text-center text-black md:text-left sm:mt-0 md:text-xl"
        >
          <span class="font-semibold">F</span>indable,
          <span class="font-semibold">A</span>ccessible,
          <span class="font-semibold">I</span>nteroperable, and
          <span class="font-semibold">R</span>eusable (FAIR) data practices are
          taking the biomedical research world by storm. We build open source
          tools to help researchers navigate through them.
        </p>

        <div class="flex flex-row items-center justify-center md:justify-start">
          <NuxtLink to="/contact-us">
            <button
              type="button"
              class="p-3 my-3 text-base font-semibold text-center text-black transition-all bg-transparent border-2 border-black rounded-lg hover:border-light-accent hover:text-accent"
            >
              Contact us
            </button>
          </NuxtLink>
        </div>
      </div>

      <div
        class="flex items-center justify-center w-full p-5 mt-6 lg:w-1/2 lg:mt-0 lg:p-2"
      >
        <ClientOnly>
          <!-- <LottieComponentVue :animationData="HeroData" /> -->
          <Vue3Lottie :animationData="HeroData" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script>
// import LottieComponentVue from "../lottie/LottieComponent.vue";
import Vue3Lottie from "vue3-lottie";

import HeroData from "../../assets/lotties/hero.json";

export default {
  name: "HeroSection",
  components: {
    // LottieComponentVue,
    Vue3Lottie,
  },
  data() {
    return {
      HeroData,
    };
  },
};
</script>
