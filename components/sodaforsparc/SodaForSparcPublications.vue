<template>
  <section class="mx-auto max-w-screen-lg px-10 py-3">
    <div class="flex w-full flex-col">
      <h2 class="py-2 text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
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
          <p class="text-xl font-semibold">
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
  name: "SodaForSparcPublications",
  components: {},
  data() {
    return {
      supportsCB: false,
      publicationsList: [
        {
          title:
            "SPARC Data Structure: Rationale and Design of a FAIR Standard for Biomedical Research Data",
          doi: "https://doi.org/10.1101/2021.02.10.430563",
          citation: `Bandrowski, Anita, Jeffrey S. Grethe, Anna Pilko, Thomas H. Gillespie, Gabi Pine, Bhavesh Patel, Monique Surles-Zeiglera, and Maryann E. Martone. "Sparc data structure: Rationale and design of a fair standard for biomedical research data."
          <i>
            bioRxiv
          </i> (2021).
          <a href="https://doi.org/10.1101/2021.02.10.430563" target="_blank" rel="noopener">
            <span class="text-blue-600 break-words hover:underline">
              doi.org/10.1101/2021.02.10.430563
            </span>
          </a>`,
        },
        {
          title:
            "SPARC: SODA, an interactive software for curating SPARC datasets",
          doi: "https://doi.org/10.1096/fasebj.2020.34.s1.02483",
          citation: `Patel, Bhavesh, Harshit Srivastava, Parya Aghasafari, and Karl Helmer. "SPARC: SODA, an interactive software for curating SPARC datasets."
          <i>
            The FASEB Journal
          </i> 34, no. S1 (2020): 1-1. 
          <a href="https://doi.org/10.1096/fasebj.2020.34.s1.02483" target="_blank" rel="noopener">
            <span class="text-blue-600 break-words hover:underline">
              doi.org/10.1096/fasebj.2020.34.s1.02483
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
