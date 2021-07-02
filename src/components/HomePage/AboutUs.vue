<template>
  <div class="container px-6 py-8 lg:px-4 mx-auto" :id="id">
    <div class="items-center lg:flex">
      <div
        class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
      >
        <img
          class="w-full h-full lg:max-w-2xl"
          src="../../assets/udDesignInspiration.svg"
          alt="Catalogue-pana.svg"
        />
      </div>

      <div class="w-full lg:w-1/2 h-full">
        <div class="lg:max-w-2xl h-full">
          <h1
            class="
              md:py-3
              w-full
              font-sans font-black
              text-black
              dark:text-white
              text-xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              subpixel-antialiased
              text-right
            "
          >
            About Us
          </h1>

          <p
            class="
              mt-2
              w-full
              font-sans
              text-right text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-black
              dark:text-white
            "
          >
            We are a team of researchers from the Caliornia Medical Innovation
            Instiute who believe that all scientific research data should be
            curated and shared according to applicable standards on the FAIR
            Data Principles. We also belive that doing so should be easy for the
            researchers collecting that data.
          </p>
          <div class="flex w-full justify-center py-5">
            <router-link to="/team">
              <button
                type="button"
                class="
                  py-4
                  px-6
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:ring-indigo-500 focus:ring-offset-indigo-200
                  text-white
                  w-max-content
                  transition
                  ease-in
                  duration-200
                  text-center text-base
                  font-semibold
                  shadow-md
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  rounded-full
                "
              >
                Meet the team
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "AboutUs", props: ["id"] };
</script>

<style></style>
