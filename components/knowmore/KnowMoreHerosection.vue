<template>
  <div class="flex flex-col items-center justify-center">
    <section class="relative py-5 mx-auto max-w-screen-2xl">
      <div class="absolute right-0 z-0 w-40 top-1 sm:top-10 opacity-60">
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="absolute z-0 hidden w-40 lg:block bottom-1 sm:bottom-12 right-5 opacity-60"
      >
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="container flex flex-col-reverse items-center w-full px-1 py-2 mx-auto sm:py-4 md:py-10 lg:flex-row"
      >
        <!-- text div -->
        <div
          class="flex flex-col items-center pt-5 mb-2 text-center lg:flex-grow sm:pt-0 lg:pr-24 md:pr-0 md:items-start md:text-left sm:mb-16 md:mb-0"
        >
          <h1
            class="w-full mb-1 text-3xl font-black text-center font-inter sm:text-4xl"
          >
            KnowMore
          </h1>
          <h2
            class="w-full mb-2 text-2xl font-medium text-center font-inter sm:text-2xl"
          >
            Say "no more" to manual discovery
          </h2>
          <p
            class="w-full mb-8 text-base leading-relaxed text-center text-black font-asap"
          >
            Automated Knowledge Discovery Tool for SPARC Datasets
            <br />
            <i> </i>
          </p>
          <div class="flex justify-center w-full">
            <a
              href="https://sparc-know-more.herokuapp.com/sparc-app/"
              target="_blank"
              rel="noopener"
            >
              <button
                class="flex items-center justify-center px-6 py-2 text-lg text-white transition-all bg-black border-0 rounded focus:outline-none ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
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
                class="px-6 py-2 ml-4 text-lg text-white transition-all bg-black rounded focus:outline-none ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
              >
                Documentation
              </button>
            </a>
          </div>
        </div>
        <!-- image div -->
        <div class="relative z-10 py-2 lg:max-w-2xl sm:py-0">
          <div
            class="absolute left-0 z-0 w-40 lg:hidden bottom-1 sm:bottom-0 opacity-60"
          >
            <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
          </div>
          <img
            data-aos="fade-in"
            class="relative z-10 mx-auto rounded shadow-xl pointer-events-none"
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
