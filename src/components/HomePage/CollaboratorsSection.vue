<template>
  <div class="container px-6 pt-4 pb-0 lg:px-4 max-w-screen-xl mx-auto">
    <div>
      <p
        class="
          mt-2
          text-3xl
          leading-8
          font-extrabold
          tracking-tight
          text-gray-900
          dark:text-white
          sm:text-4xl
          text-center
        "
      >
        Collaborators
      </p>
      <p
        class="
          mt-4
          max-w-2xl
          text-xl text-gray-500
          dark:text-gray-50
          lg:mx-auto
          text-center
        "
      >
        Some of the amazing organizations and institutions where our products
        make a difference
      </p>
    </div>
    <div class="w-full flex flex-col sm:flex-row sm:justify-evenly">
      <img
        v-for="logo in logoList"
        :key="logo"
        :src="logo"
        class="h-28 sm:h-24 md:h-40"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CollaboratorsSection",
  data() {
    return {
      logoList: [
        "https://cdn.worldvectorlogo.com/logos/spectra-physics-telecom.svg",
        "https://cdn.worldvectorlogo.com/logos/albena.svg",
        "https://cdn.worldvectorlogo.com/logos/ultimatte.svg",
        "https://cdn.worldvectorlogo.com/logos/c-health.svg",
        "https://cdn.worldvectorlogo.com/logos/first-health.svg",
      ],
    };
  },
};
</script>

<style></style>
