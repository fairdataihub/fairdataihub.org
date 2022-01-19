<template>
  <div
    class="container max-w-screen-lg px-6 py-0 mx-auto sm:pt-6 sm:pb-4"
    :id="id"
  >
    <div class="items-center justify-center sm:flex">
      <div
        class="flex items-center justify-center w-full p-8 mt-6 lg:mt-0 lg:w-1/2"
      >
        <LottieComponentVue :animationData="TeamData" />
      </div>

      <div class="w-full h-full p-2 lg:w-1/2">
        <h1
          class="w-full py-4 pt-6 text-4xl subpixel-antialiased font-black text-left md:py-3 sm:text-3xl md:text-3xl lg:text-4xl sm:text-center"
        >
          About Us
        </h1>

        <p
          class="w-full mt-2 mb-6 text-xl text-left text-black md:my-2 font-asap sm:text-center sm:text-base md:text-lg lg:text-xl"
        >
          FAIR Data Innovations Hub is a division of the California Medical
          Innovations Institute (CalMI<sup>2</sup>), a non profit biomedical
          research organization located in San Diego, California. We have a
          multidisciplinary team of enthusiasts about FAIR Data practices and
          software development.
        </p>

        <div class="flex justify-center w-full py-5">
          <NuxtLink to="/team">
            <button
              type="button"
              class="px-6 py-4 text-base font-semibold text-center text-white transition duration-200 ease-in-out bg-black rounded-md w-max-content ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
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
import LottieComponentVue from "../lottie/LottieComponent.vue";

import TeamData from "../../assets/lotties/team.json";

export default {
  name: "AboutUs",
  props: ["id"],
  components: {
    LottieComponentVue,
  },
  data() {
    return {
      TeamData,
    };
  },
};
</script>

<style></style>
