<template>
  <div
    class="container mx-auto max-w-screen-lg px-6 py-0 sm:pt-6 sm:pb-4"
    :id="id"
  >
    <div class="items-center justify-center sm:flex">
      <div
        class="mt-6 flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2"
      >
        <ClientOnly>
          <!-- <LottieComponentVue :animationData="TeamData" /> -->
          <Vue3Lottie :animationData="TeamData" />
        </ClientOnly>
      </div>

      <div class="h-full w-full p-2 lg:w-1/2">
        <h1
          class="w-full py-4 pt-6 text-center text-4xl font-black subpixel-antialiased sm:text-3xl md:py-3 md:text-3xl lg:text-4xl"
        >
          About Us
        </h1>

        <p
          class="font-asap mt-2 mb-6 w-full text-center text-xl text-black sm:text-base md:my-2 md:text-lg lg:text-xl"
        >
          FAIR Data Innovations Hub is a division of the California Medical
          Innovations Institute (CalMI<sup>2</sup>), a non profit biomedical
          research organization located in San Diego, California. We have a
          multidisciplinary team of enthusiasts about FAIR Data practices and
          software development.
        </p>

        <div class="flex w-full justify-center py-5">
          <NuxtLink to="/team">
            <button
              type="button"
              class="w-max-content rounded-md bg-black px-6 py-4 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
            >
              Meet our team
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LottieComponentVue from "../lottie/LottieComponent.vue";
import Vue3Lottie from "vue3-lottie";

import TeamData from "../../assets/lotties/team.json";

export default {
  name: "AboutUs",
  props: ["id"],
  components: {
    // LottieComponentVue,
    Vue3Lottie,
  },
  data() {
    return {
      TeamData,
    };
  },
};
</script>

<style></style>
