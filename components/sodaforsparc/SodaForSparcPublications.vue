<template>
  <section class="max-w-screen-lg mx-auto px-10 py-3">
    <div class="w-full flex flex-col">
      <h2
        class="
          font-bold
          text-2xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          py-2
          dark:text-gray-50
        "
      >
        Publications
      </h2>
    </div>

    <div class="dark:text-gray-50 flex flex-col divide-y divide-gray-200">
      <div
        class="flex flex-col mb-4 font-sans py-4"
        v-for="item in publicationsList"
        :key="item.doi"
      >
        <a :href="item.doi" target="_blank" class="my-2" rel="noopener">
          <p class="font-semibold text-xl">
            {{ item.title }}
          </p>
        </a>

        <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 m2-3 relative">
          <p class="font-lato text-xs text-gray-600">Citation</p>
          <p
            class="font-asap text-black text-base dark:text-white"
            v-html="item.citation"
          ></p>
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
            <span class="hover:underline text-blue-600 dark:text-blue-400 break-words">
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
            <span class="hover:underline text-blue-600 dark:text-blue-400 break-words">
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
