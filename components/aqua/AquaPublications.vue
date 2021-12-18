<template>
  <section class="max-w-screen-lg mx-auto px-10 py-3">
    <div class="w-full flex flex-col">
      <h2
        class="font-inter font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl py-2"
      >
        Publications
      </h2>
    </div>

    <div class="flex flex-col divide-y divide-gray-200">
      <div
        class="flex flex-col mb-4 font-sans py-4"
        v-for="item in publicationsList"
        :key="item.doi"
      >
        <a :href="item.doi" target="_blank" class="my-2" rel="noopener">
          <p class="font-inter font-semibold text-xl">
            {{ item.title }}
          </p>
        </a>

        <div class="bg-gray-100 rounded p-3 m2-3 relative">
          <p class="font-lato text-xs text-gray-600">Citation</p>
          <p class="font-asap text-black text-base" v-html="item.citation"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AquaPublications",
  components: {},
  data() {
    return {
      supportsCB: false,
      publicationsList: [
        {
          title: "AQUA: an Advanced QUery Architecture for the SPARC Portal",
          doi: "https://doi.org/10.12688/f1000research.73018.1",
          citation: `Niloofar Shahidi, Xuanzhi Lin, Yuda Munarko, Laila Rasmy, Tram Ngo. "AQUA: an Advanced QUery Architecture for the SPARC Portal"
          <i>
            F1000Research 2021
          </i> (2021).
          <a href="https://f1000research.com/articles/10-930/v1" target="_blank" rel="noopener">
            <span class="hover:underline text-blue-600  break-words">
              doi.org/10.1101/2021.02.10.430563
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
