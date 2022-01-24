<template>
  <main class="relative h-screen overflow-hidden bg-white">
    <div
      class="container z-10 mx-auto flex h-screen w-full items-center justify-between px-3 pt-32 md:pt-0"
    >
      <div
        class="container mx-auto flex flex-col items-center justify-end px-6"
      >
        <div class="mx-auto mb-16 block w-full max-w-md md:mt-0 lg:max-w-2xl">
          <ClientOnly>
            <!-- <LottieComponentVue :animationData="ErrorData" /> -->
            <Vue3Lottie :animationData="ErrorData" />
          </ClientOnly>
        </div>
        <div
          class="flex w-full flex-col items-center text-center md:mb-8 lg:text-left"
        >
          <h1
            class="my-10 mt-12 text-center font-sans text-4xl font-light text-gray-700 md:mt-0 lg:text-5xl"
          >
            This page isn't available
          </h1>
          <NuxtLink to="/">
            <button
              type="button"
              class="w-max-content rounded-md bg-black px-6 py-4 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
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
// import LottieComponentVue from "~~/components/lottie/LottieComponent.vue";
import Vue3Lottie from "vue3-lottie";

import ErrorData from "../assets/lotties/error.json";

export default {
  components: {
    // LottieComponentVue,
    Vue3Lottie,
  },
  data() {
    return {
      ErrorData,
    };
  },
};
</script>

<style></style>
