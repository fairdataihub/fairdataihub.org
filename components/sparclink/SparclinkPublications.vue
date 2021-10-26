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
  name: "SparclinkPublications",
  components: {},
  data() {
    return {
      supportsCB: false,
      publicationsList: [
        {
          title:
            "SPARClink: an interactive tool to visualize the impact of the SPARC program",
          doi: "https://doi.org/10.1101/2021.10.22.465507",
          citation: `Soundarajan, Sanjay , Sachira Kuruppu, Ashutosh Singh, Jongchan Kim and Monalisa Achalla. "SPARClink: an interactive tool to visualize the impact of the SPARC program."
          <i>
            bioRxiv
          </i> (2021).
          <a href="https://doi.org/10.1101/2021.10.22.465507" target="_blank">
            <span class="hover:underline text-blue-600 dark:text-blue-400 break-words">
              doi.org/10.1101/2021.10.22.465507
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
