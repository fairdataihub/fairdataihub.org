<template>
  <section class="max-w-screen-lg mx-auto px-10 py-3">
    <div class="w-full flex flex-col">
      <h2
        class="
          font-inter font-bold
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
        <a :href="item.doi" target="_blank" class="my-2">
          <p class="font-inter font-semibold text-xl">
            {{ item.title }}
          </p>
        </a>

        <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 m2-3 relative">
          <p class="font-fsans text-xs text-gray-400">Citation</p>
          <p
            class="font-fsans text-black text-base dark:text-white"
            v-html="item.citation"
          ></p>
        </div>
        <!-- <button
            class="
              hidden
              absolute
              rounded-lg
              bottom-2
              right-2
              bg-gray-100
              hover:bg-gray-200
              p-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SodasparcPublications",
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
          <a href="https://doi.org/10.1101/2021.02.10.430563" target="_blank">
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
          </i> 34, no. S1 (2020): 1-1. <a href="https://doi.org/10.1096/fasebj.2020.34.s1.02483" target="_blank"><span class="hover:underline text-blue-600 dark:text-blue-400 break-words">
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
