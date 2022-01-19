<template>
  <main class="relative h-screen overflow-hidden bg-white">
    <div
      class="container z-10 flex items-center justify-between w-full h-screen px-3 pt-32 mx-auto md:pt-0"
    >
      <div
        class="container flex flex-col items-center justify-end px-6 mx-auto"
      >
        <div class="block w-full max-w-md mx-auto mb-16 md:mt-0 lg:max-w-2xl">
          <ClientOnly>
            <LottieComponentVue :animationData="ErrorData" />
          </ClientOnly>
        </div>
        <div
          class="flex flex-col items-center w-full text-center md:mb-8 lg:text-left"
        >
          <h1
            class="my-10 mt-12 font-sans text-4xl font-light text-center text-gray-700 lg:text-5xl md:mt-0"
          >
            This page isn't available
          </h1>
          <NuxtLink to="/">
            <button
              type="button"
              class="px-6 py-4 text-base font-semibold text-center text-white transition duration-200 ease-in-out bg-black rounded-md w-max-content ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
            >
              Go back home
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LottieComponentVue from "~~/components/lottie/LottieComponent.vue";

import ErrorData from "../assets/lotties/error.json";

export default {
  components: {
    LottieComponentVue,
  },
  data() {
    return {
      ErrorData,
    };
  },
};
</script>

<style></style>
