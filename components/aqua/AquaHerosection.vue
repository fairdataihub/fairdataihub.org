<template>
  <div class="flex flex-col items-center justify-center">
    <section class="relative mx-auto max-w-screen-2xl py-5">
      <div class="absolute right-0 top-1 z-0 w-40 opacity-60 sm:top-10">
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="absolute bottom-1 right-5 z-0 hidden w-40 opacity-60 sm:bottom-12 lg:block"
      >
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="container mx-auto flex w-full flex-col-reverse items-center px-1 py-2 sm:py-4 md:py-10 lg:flex-row"
      >
        <!-- text div -->
        <div
          class="mb-2 flex flex-col items-center pt-5 text-center sm:mb-16 sm:pt-0 md:mb-0 md:items-start md:pr-0 md:text-left lg:flex-grow lg:pr-24"
        >
          <h1
            class="font-inter mb-1 w-full text-center text-3xl font-black sm:text-4xl"
          >
            AQUA
          </h1>
          <h2
            class="font-inter mb-2 w-full text-center text-2xl font-medium sm:text-2xl"
          >
            Advanced Query Architecture for the SPARC Portal
          </h2>
          <p
            class="font-asap mb-8 w-full text-center text-base leading-relaxed text-black"
          >
            Level up your SPARC search with AQUA.
          </p>
          <div class="flex w-full justify-center">
            <a
              href="https://github.com/SPARC-FAIR-Codeathon/aqua"
              target="_blank"
              rel="noopener"
            >
              <button
                class="flex items-center justify-center rounded border-0 bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600"
              >
                Explore AQUA
              </button>
            </a>
            <a
              href="https://github.com/SPARC-FAIR-Codeathon/aqua/blob/main/Documentation/Documentation.md"
              target="_blank"
              rel="noopener"
            >
              <button
                class="ml-4 rounded bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600"
              >
                Documentation
              </button>
            </a>
          </div>
        </div>
        <div class="relative z-10 py-2 sm:py-0 lg:max-w-2xl">
          <img
            style="width: 80%"
            class="relative z-10 mx-auto rounded"
            :data-blink-uuid="`e5c4a022-9a55-49b2-8af5-d5d4d8a74057`"
            alt="aqua logo"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AquaHerosection",
  methods: {},
};
</script>

<style lang="postcss" scoped></style>
