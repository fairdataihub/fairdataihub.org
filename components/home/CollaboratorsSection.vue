<template>
  <div class="container max-w-screen-lg px-6 pt-4 pb-0 mx-auto md:p-10">
    <div class="flex flex-col items-center w-full mb-4">
      <p
        class="my-2 text-4xl font-extrabold tracking-tight text-center sm:text-4xl"
      >
        Where do our tools make a difference?
      </p>
    </div>
    <div class="block">
      <Vue3Marquee
        :duration="40"
        :gradient="true"
        :gradientColor="[255, 255, 255]"
        gradientWidth="125px"
        :clone="true"
      >
        <img
          src="https://ucarecdn.com/fb093e0f-5363-4710-b543-296553408fdb/"
          alt="UCSF logo"
          width="200"
          class="py-2 mx-4"
        />
        <img
          src="https://ucarecdn.com/a4d32fd6-1b0d-4dc7-b0f4-7807ce96f76d/"
          alt="NIH SPARC logo"
          width="200"
          class="py-2 mx-4"
        />
        <img
          src="https://ucarecdn.com/dd8fcd39-25dc-4460-a02c-402631a00c25/"
          alt="FDI Lab logo"
          width="200"
          class="py-2 mx-4"
        />
        <img
          src="https://ucarecdn.com/1ece10bc-75a1-4750-b9ac-395a17e6ca2f/"
          alt="California Medical Innovations Institute logo"
          width="200"
          class="py-2 mx-4"
        />
        <img
          src="https://ucarecdn.com/58385a01-96b0-4063-a066-f2c83b14e5d9/"
          alt="University College London"
          width="200"
          class="py-2 mx-4"
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
        gradientColor: [255, 255, 255],
        gradientWidth: 125,
        clone: true,
      },
      logoImages: [
        {
          url: "https://i.ibb.co/CKXDZzf/ucsf-logo.png",
          alt: "UCSF logo",
        },
        {
          url: "https://sparc.science/_nuxt/img/logo-sparc-wave-primary.8ed83a5.svg",
          alt: "NIH SPARC logo",
        },
        {
          url: "https://i.ibb.co/XLGBZvG/fdilab-inverted-logo.png",
          alt: "FDI Lab logo",
        },
        {
          url: "https://i.ibb.co/0r83YnL/calmi-logo.png",
          alt: "California Medical Innovations Institute logo",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped></style>
