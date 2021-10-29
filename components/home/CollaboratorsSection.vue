<template>
  <div class="container px-6 pt-4 pb-0 md:p-10 max-w-screen-lg mx-auto">
    <div class="flex flex-col items-center mb-4 w-full">
      <p
        class="
          my-2
          font-extrabold
          tracking-tight
          text-4xl
          sm:text-4xl
          text-center
        "
      >
        Where do our tools make a difference?
      </p>
    </div>
    <div class="block">
      <Vue3Marquee :options="marqueeOptions">
        <img
          :src="img.url"
          :alt="img.alt"
          v-for="img in logoImages"
          :key="img.alt"
          width="200"
          class="mx-4 py-2"
        />
      </Vue3Marquee>
    </div>
    <span class="text-xs text-gray-400">
      Disclaimer: All logos are used with adequate permissions. Opinions,
      interpretations, conclusions and recommendations are those of the FAIR
      Data Innovations Hub and are not necessarily endorsed by the other
      organizations mentioned on this website.
    </span>
  </div>
</template>

<script>
import Vue3Marquee from "vue3-marquee";

export default {
  name: "CollaboratorsSection",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      marqueeOptions: {
        duration: 40,
        gradient: true,
        gradientColor: [249, 250, 251],
        gradientWidth: 125,
        clone: true,
      },
      logoImages: [
        {
          url: "/assets/logos/ucsf-logo.png",
          alt: "UCSF logo",
        },
        {
          url: "https://sparc.science/_nuxt/img/logo-sparc-wave-primary.8ed83a5.svg",
          alt: "NIH SPARC logo",
        },
        {
          url: "/assets/logos/fdilab-inverted-logo.png",
          alt: "FDI Lab logo",
        },
        {
          url: "/assets/logos/calmi-logo.png",
          alt: "California Medical Innovations Institute logo",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped></style>
