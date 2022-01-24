<template>
  <div
    class="mx-auto mt-40 flex max-w-screen-xl flex-col items-center justify-center"
  >
    <div class="mx-auto py-10">
      <ClientOnly>
        <Vue3Lottie :animationData="RedirectData" :width="560" :height="160" />
      </ClientOnly>
    </div>

    <h2 class="pt-10 text-center text-3xl font-semibold">
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
        class="rounded bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:ml-4"
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
        "https://docs.sodaforsparc.io/docs/prepare-dataset/step-6",
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
