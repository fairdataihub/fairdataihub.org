<template>
  <div class="pb-4 sm:pt-10 px-6 mx-auto">
    <div
      class="
        max-w-screen-xl
        mx-auto
        container
        flex flex-col
        justify-center
        items-center
      "
    >
      <h2
        class="
          mb-10
          w-full
          text-4xl
          font-inter font-bold
          text-left
          md:text-center
          sm:text-5xl
          dark:text-gray-50
        "
      >
        Frequently Asked Questions
      </h2>
      <div class="grid gap-4 md:gap-8 md:grid-cols-2 lg:px-12 xl:px-32">
        <div>
          <h3 class="font-inter font-semibold text-xl dark:text-gray-50">
            What is SPARC?
          </h3>

          <p
            class="
              w-full
              text-lg
              sm:text-base
              font-asap
              text-black
              dark:text-gray-50
            "
          >
            The SPARC program is supported by the NIH Common Fund to accelerate
            development of therapeutic devices and identification of neural
            targets for bioelectronic medicine modulating electrical activity in
            nerves to help treat diseases and conditions, such as hypertension
            and gastrointestinal disorders, by precisely adjusting organ
            function.
          </p>
          <div class="flex mt-2 md:mt-1">
            <a href="https://sparc.science" target="_blank" rel="noopener">
              <text
                class="text-accent items-center text-xl font-asap sm:text-base"
              >
                Learn more about the SPARC program <span>&#8594;</span>
              </text>
            </a>
          </div>
        </div>
        <div v-for="item in questionsList" :key="item.question">
          <h3 class="font-inter font-semibold text-xl dark:text-gray-50 ">
            {{ item.question }}
          </h3>
          <p
            class="
              w-full
              text-lg
              sm:text-base
              font-asap
              text-black
              dark:text-gray-50
            "
          >
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFaq",
  data() {
    return {
      questionsList: [
        {
          question: "What is SPARC?",
          answer:
            "The SPARC program is supported by the NIH Common Fund to accelerate development of therapeutic devices and identification of neural targets for bioelectronic medicine—modulating electrical activity in nerves to help treat diseases and conditions, such as hypertension and gastrointestinal disorders, by precisely adjusting organ function.",
        },
        {
          question: "Question 2?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut adipisci? Consequatur ea commodi voluptatum magnam voluptatem alias odit, cupiditate accusantium quod. Non amet possimus illo quo ducimus assumenda dolore.",
        },
        {
          question: "Question 3?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut adipisci? Consequatur ea commodi voluptatum magnam voluptatem alias odit, cupiditate accusantium quod. Non amet possimus illo quo ducimus assumenda dolore.",
        },
      ],
    };
  },
};
</script>

<style></style>
