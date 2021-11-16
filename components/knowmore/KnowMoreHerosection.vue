<template>
  <div class="flex flex-col justify-center items-center">
    <section class="max-w-screen-2xl mx-auto py-5 relative">
      <div class="absolute top-1 sm:top-10 right-0 z-0 opacity-60 w-40">
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="
          hidden
          lg:block
          absolute
          bottom-1
          sm:bottom-12
          right-5
          z-0
          opacity-60
          w-40
        "
      >
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="
          container
          mx-auto
          flex
          px-1
          py-2
          sm:py-4
          md:py-10
          w-full
          flex-col-reverse
          lg:flex-row
          items-center
        "
      >
        <!-- text div -->
        <div
          class="
            lg:flex-grow
            pt-5
            sm:pt-0
            lg:pr-24
            md:pr-0
            flex flex-col
            md:items-start md:text-left
            mb-2
            sm:mb-16
            md:mb-0
            items-center
            text-center
          "
        >
          <h1
            class="
              font-inter font-black
              text-3xl
              sm:text-4xl
              w-full
              mb-1
              text-center
              dark:text-gray-50
            "
          >
            KnowMore
          </h1>
          <h2
            class="
              font-inter
              w-full
              sm:text-2xl
              text-2xl
              mb-2
              font-medium
              dark:text-gray-50
              text-center
            "
          >
            Say "no more" to manual discovery
          </h2>
          <p
            class="
              mb-8
              leading-relaxed
              text-center text-base
              w-full
              font-asap
              text-black
              dark:text-white
            "
          >
            Automated Knowledge Discovery Tool for SPARC Datasets
            <br />
            <i> </i>
          </p>
          <div class="w-full flex justify-center">
            <a
              href="https://sparc-know-more.herokuapp.com/sparc-app/"
              target="_blank"
              rel="noopener"
            >
              <button
                class="
                  flex
                  justify-center
                  items-center
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  rounded
                  text-lg
                  transition-all
                  bg-black
                  dark:bg-pink-600
                  text-white
                  ring-2 ring-offset-2 ring-transparent
                  dark:ring-offset-transparent
                  hover:ring-pink-600
                  dark:hover:ring-offset-1 dark:hover:ring-white
                  focus:ring-pink-600
                "
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
                class="
                  ml-4
                  py-2
                  px-6
                  focus:outline-none
                  rounded
                  text-lg
                  transition-all
                  bg-black
                  dark:bg-pink-600
                  text-white
                  ring-2 ring-offset-2 ring-transparent
                  dark:ring-offset-transparent
                  hover:ring-pink-600
                  dark:hover:ring-offset-1 dark:hover:ring-white
                  focus:ring-pink-600
                "
              >
                Documentation
              </button>
            </a>
          </div>
        </div>
        <!-- image div -->
        <div class="lg:max-w-2xl py-2 sm:py-0 z-10 relative">
          <div
            class="
              lg:hidden
              absolute
              bottom-1
              sm:bottom-0
              left-0
              z-0
              opacity-60
              w-40
            "
          >
            <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
          </div>
          <img
            data-aos="fade-in"
            class="relative rounded mx-auto z-10 shadow-xl pointer-events-none"
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
