<template>
  <div
    class="container px-6 py-0 sm:pt-6 sm:pb-4 max-w-screen-xl mx-auto"
    :id="id"
  >
    <div class="items-center sm:flex">
      <div
        class="
          flex
          items-center
          justify-center
          w-full
          mt-6
          lg:mt-0 lg:w-1/2
          p-2
        "
      >
        <img
          class="w-full h-full lg:max-w-2xl"
          src="../../assets/udDesignInspiration.svg"
          alt="Catalogue-pana.svg"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:max-w-2xl h-full p-2">
        <h1
          class="
            pt-6
            md:py-3
            w-full
            font-sans font-black
            text-black
            dark:text-white
            text-4xl
            sm:text-3xl
            md:text-3xl
            lg:text-4xl
            subpixel-antialiased
            text-left
            sm:text-center
          "
        >
          About Us
        </h1>

        <p
          class="
            my-2
            w-full
            font-sans
            text-left
            sm:text-center
            text-xl
            sm:text-base
            md:text-lg
            lg:text-xl
            text-black
            dark:text-white
          "
        >
          We are a team of researchers from the Caliornia Medical Innovations
          Institute who believe that all scientific research data should be
          curated and shared according to applicable standards on the FAIR Data
          Principles. We also believe that doing so should be easy for the
          researchers collecting that data.
        </p>
        <div class="flex w-full justify-center py-5">
          <router-link to="/team">
            <button
              type="button"
              class="
                py-4
                px-6
                bg-primary
                hover:bg-blue-600
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
                rounded-lg
              "
            >
              Meet the team
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "AboutUs", props: ["id"] };
</script>

<style></style>
