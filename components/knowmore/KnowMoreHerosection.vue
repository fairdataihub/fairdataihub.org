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
            class="mb-1 w-full text-center font-inter text-3xl font-black sm:text-4xl"
          >
            KnowMore
          </h1>
          <h2
            class="mb-2 w-full text-center font-inter text-2xl font-medium sm:text-2xl"
          >
            Say "no more" to manual discovery
          </h2>
          <p
            class="mb-8 w-full text-center font-asap text-base leading-relaxed text-black"
          >
            Automated Knowledge Discovery Tool for SPARC Datasets
            <br />
            <i> </i>
          </p>
          <div class="flex w-full justify-center">
            <a
              href="https://sparc-know-more.herokuapp.com/sparc-app/"
              target="_blank"
              rel="noopener"
            >
              <button
                class="flex items-center justify-center rounded border-0 bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600"
              >
                Test KnowMore
              </button>
            </a>
            <a
              href="https://github.com/SPARC-FAIR-Codeathon/KnowMore"
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
        <!-- image div -->
        <div class="relative z-10 py-2 sm:py-0 lg:max-w-2xl">
          <div
            class="absolute left-0 bottom-1 z-0 w-40 opacity-60 sm:bottom-0 lg:hidden"
          >
            <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
          </div>
          <img
            data-aos="fade-in"
            class="pointer-events-none relative z-10 mx-auto rounded shadow-xl"
            alt="Knowmore gif"
            src="https://github.com/fairdataihub/KnowMore/raw/main/docs/knowmore-website.gif"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "KnowMoreHerosection",
  methods: {},
};
</script>

<style lang="postcss" scoped></style>
