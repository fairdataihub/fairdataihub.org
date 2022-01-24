<template>
  <section class="mx-auto max-w-screen-lg px-10 py-3">
    <div class="flex w-full flex-col">
      <h2
        class="font-inter py-2 text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
      >
        Publications
      </h2>
    </div>

    <div class="flex flex-col divide-y divide-gray-200">
      <div
        class="mb-4 flex flex-col py-4 font-sans"
        v-for="item in publicationsList"
        :key="item.doi"
      >
        <a :href="item.doi" target="_blank" class="my-2" rel="noopener">
          <p class="font-inter text-xl font-semibold">
            {{ item.title }}
          </p>
        </a>

        <div class="m2-3 relative rounded bg-gray-100 p-3">
          <p class="font-lato text-xs text-gray-600">Citation</p>
          <p class="font-asap text-base text-black" v-html="item.citation"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "KnowMorePublications",
  components: {},
  data() {
    return {
      supportsCB: false,
      publicationsList: [
        {
          title:
            "KnowMore: An Automated Knowledge Discovery Tool for the FAIR SPARC Datasets",
          doi: "https://doi.org/10.1101/2021.08.08.455581",
          citation: `Quey, Ryan, Matthew A. Schiefer, Anmol Kiran, and Bhavesh Patel. "KnowMore: An Automated Knowledge Discovery Tool for the FAIR SPARC Datasets."
          <i>
            bioRxiv
          </i> (2021).
          <a href="https://doi.org/10.1101/2021.08.08.455581" target="_blank rel="noopener"">
            <span class="text-blue-600 break-words hover:underline">
              doi.org/10.1101/2021.08.08.455581
            </span>
          </a>`,
        },
      ],
    };
  },

  methods: {},
};
</script>

<style></style>
