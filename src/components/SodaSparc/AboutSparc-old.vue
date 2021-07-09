<template>
  <section>
    <div
      class="
        container
        px-5
        py-6
        sm:py-12
        flex flex-wrap
        max-w-screen-lg
        mx-auto
      "
    >
      <h2
        class="
          text-3xl
          sm:text-3xl
          font-bold font-sans
          text-black
          mb-2
          md:w-2/5
          dark:text-white
        "
      >
        About NIH-SPARC
      </h2>
      <div class="md:w-3/5 md:pl-6">
        <p
          class="
            leading-relaxed
            font-sans
            text-lg
            sm:text-base
            text-black
            dark:text-white
          "
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <div class="flex mt-2 md:mt-1">
          <a
            href="https://sparc.science"
            target="_blank"
            class="
              text-indigo-600
              dark:text-indigo-400
              inline-flex
              items-center
              text-lg
              sm:text-base
            "
          >
            Learn more about the SPARC program
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSparc",
};
</script>

<style></style>
