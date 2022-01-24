<template>
  <section class="mx-auto max-w-screen-lg px-10 py-3">
    <div class="flex w-full flex-col">
      <h2
        class="py-2 font-inter text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
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
  name: "SodaForCovidPublications",
  components: {},
  data() {
    return {
      publicationsList: [
        {
          title: "Coming soon...",
          doi: "Coming soon...",
          citation: "Coming soon...",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style></style>
