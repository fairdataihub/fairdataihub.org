<template>
  <div class="pb-4 sm:pt-10 px-6 mx-auto">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row">
      <h1
        class="
          md:mr-8 md:w-1/3
          py-5
          md:py-0
          font-sans font-black
          text-black
          dark:text-white
          text-4xl
          sm:text-4xl
          md:text-5xl
          lg:text-5xl
          subpixel-antialiased
          text-left
        "
      >
        Frequently-asked questions
      </h1>
      <dl class="w-full md:w-2/3">
        <div v-for="item in questionsList" :key="item.question">
          <dt class="mb-2 sm:mb-4">
            <h3
              class="
                text-2xl
                sm:text-xl
                font-sans font-bold
                text-black
                dark:text-white
              "
            >
              {{ item.question }}
            </h3>
          </dt>
          <dd class="mb-10 sm:mb-10 w-full">
            <p
              class="
                w-full
                text-lg
                sm:text-base
                font-sans
                text-black
                dark:text-white
              "
            >
              {{ item.answer }}
            </p>
          </dd>
        </div>
      </dl>
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
          question: "Question 1?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut adipisci? Consequatur ea commodi voluptatum magnam voluptatem alias odit, cupiditate accusantium quod. Non amet possimus illo quo ducimus assumenda dolore.",
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
