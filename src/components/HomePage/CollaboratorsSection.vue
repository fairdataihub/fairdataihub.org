<template>
  <div class="container px-6 pt-4 pb-0 md:p-10 max-w-screen-xl mx-auto">
    <div class="flex flex-col items-center mb-4">
      <p
        class="
          mt-2
          leading-8
          font-extrabold
          tracking-tight
          text-black
          dark:text-white
          text-4xl
          sm:text-4xl
          text-center
        "
      >
        Collaborators
      </p>
      <p
        class="
          mt-4
          w-full
          max-w-2xl
          text-xl text-black
          dark:text-white
          text-center
        "
      >
        Some of the amazing organizations and institutions where our products
        make a difference
      </p>
    </div>
    <div
      class="
        w-full
        grid grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        gap-4
        lg:flex lg:flex-row lg:justify-evenly
      "
    >
      <img
        v-for="logo in logoList"
        :key="logo"
        :src="logo"
        class="h-28 sm:h-36 md:h-40 m-2 justify-self-center"
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
