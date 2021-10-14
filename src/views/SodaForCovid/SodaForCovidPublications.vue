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
          <p class="font-lato text-xs text-gray-400">Citation</p>
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
  name: "SodaForCovidPublications",
  components: {},
  data() {
    return {
      supportsCB: false,
      publicationsList: [
        {
          title: "Coming soon",
          // doi: "https://doi.org/10.1101/2021.02.10.430563",
          // citation: `Bandrowski, Anita, Jeffrey S. Grethe, Anna Pilko, Thomas H. Gillespie, Gabi Pine, Bhavesh Patel, Monique Surles-Zeiglera, and Maryann E. Martone. "Sparc data structure: Rationale and design of a fair standard for biomedical research data."
          // <i>
          //   bioRxiv
          // </i> (2021).
          // <a href="https://doi.org/10.1101/2021.02.10.430563" target="_blank">
          //   <span class="hover:underline text-blue-600 dark:text-blue-400 break-words">
          //     doi.org/10.1101/2021.02.10.430563
          //   </span>
          // </a>`,
        },
      ],
    };
  },

  methods: {},
};
</script>

<style></style>
