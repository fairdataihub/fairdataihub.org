<template>
  <div
    class="flex flex-col items-center justify-center max-w-screen-xl mx-auto mt-40"
  >
    <div class="py-10 mx-auto">
      <ClientOnly>
        <Vue3Lottie :animationData="RedirectData" :width="560" :height="160" />
      </ClientOnly>
    </div>

    <h2 class="pt-10 text-3xl font-semibold text-center">
      Our documentation has been moved!
    </h2>

    <h3 class="pt-6 text-center">
      This page should automatically redirect in a few seconds.
    </h3>
    <h3 class="pb-6 text-center">
      If nothing happens please use the continue button below.
    </h3>

    <a
      :href="redirectLocation"
      target="_blank"
      aria-label="SODA for SPARC Documentation"
      rel="noopener"
    >
      <button
        class="px-6 py-2 text-lg text-white transition-all bg-black rounded sm:ml-4 focus:outline-none ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
      >
        Continue
      </button>
    </a>
  </div>
</template>

<script>
import Vue3Lottie from "vue3-lottie";
import RedirectData from "../../../../assets/lotties/redirect.json";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      RedirectData,
      redirectLocation:
        "https://docs.sodaforsparc.io/docs/how-to/how-to-structure-the-dataset-description-metadata-file",
    };
  },
  mounted() {
    setTimeout(() => {
      Object.assign(document.createElement("a"), {
        href: this.redirectLocation,
      }).click();
    }, 3000);
  },
};
</script>
