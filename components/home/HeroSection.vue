<template>
  <div class="container mx-auto max-w-screen-lg px-6 py-8">
    <div class="items-center justify-center md:flex">
      <div class="w-full p-2 lg:w-1/2">
        <h1
          class="w-full py-3 text-center text-5xl font-black md:py-3 md:text-left"
        >
          Making FAIR
          <span class="text-accent"> data </span>
          practices more accessible
        </h1>

        <p
          class="mt-2 w-full pb-4 text-center text-2xl font-normal text-black sm:mt-0 md:text-left md:text-xl"
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
              class="my-3 rounded-lg border-2 border-black bg-transparent p-3 text-center text-base font-semibold text-black transition-all hover:border-light-accent hover:text-accent"
            >
              Contact us
            </button>
          </NuxtLink>
        </div>
      </div>

      <div
        class="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/2 lg:p-2"
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
