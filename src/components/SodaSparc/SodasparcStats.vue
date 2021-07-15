<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="w-full flex flex-col">
      <h2
        class="
          font-bold
          text-2xl
          font-inter
          sm:text-2xl
          md:text-3xl
          lg:text-5xl
          text-center
          py-1
          dark:text-gray-50
        "
      >
        Impact of SODA for SPARC
      </h2>

      <h3
        class="
          font-inter
          text-lg
          md:text-xl
          lg:text-2xl
          text-center
          dark:text-gray-50
        "
      >
        Trusted by researchers all over the world
      </h3>
    </div>

    <div class="p-6 dark:text-gray-50 flex flex-col sm:flex-row justify-around">
      <div
        class="flex flex-col m-2 lg:m-6 items-center justify-center mb-5"
        v-for="item in statsList"
        :key="item.name"
      >
        <p
          class="
            my-1
            font-fsans font-bold
            text-5xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            text-center
          "
        >
          {{ item.value }}
        </p>
        <p
          class="
            text-xl
            font-fsans
            sm:text-lg
            md:text-xl
            lg:text-2xl
            text-center text-black
          "
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SodasparcStats",
  data() {
    return {
      statsList: [
        { name: "Files touched", value: "7800+" },
        { name: "Datasets modified", value: "60+" },
        { name: "Data uploaded", value: "1.8TB+" },
      ],
    };
  },
  mounted() {},
};
</script>

<style></style>
