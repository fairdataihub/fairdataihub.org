<template>
  <section class="max-w-screen-lg px-10 py-3 mx-auto">
    <div class="flex flex-col w-full">
      <h2
        class="py-2 text-2xl font-bold font-inter sm:text-2xl md:text-3xl lg:text-4xl"
      >
        Publications
      </h2>
    </div>

    <div class="flex flex-col divide-y divide-gray-200">
      <div
        class="flex flex-col py-4 mb-4 font-sans"
        v-for="item in publicationsList"
        :key="item.doi"
      >
        <a :href="item.doi" target="_blank" class="my-2" rel="noopener">
          <p class="text-xl font-semibold font-inter">
            {{ item.title }}
          </p>
        </a>

        <div class="relative p-3 bg-gray-100 rounded m2-3">
          <p class="text-xs text-gray-600 font-lato">Citation</p>
          <p class="text-base text-black font-asap" v-html="item.citation"></p>
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
            <span class="text-blue-600 break-words hover:underline">
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
