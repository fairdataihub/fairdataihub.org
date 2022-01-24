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
