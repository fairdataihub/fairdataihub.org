<template>
  <div class="pb-4 sm:pt-10 px-6 mx-auto dark:bg-gray-700">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row">
      <h2
        class="
          mr-8
          w-full
          md:w-1/3
          text-3xl
          font-extrabold
          leading-9
          pb-6
          sm:pb-0
          text-black
          dark:text-white
        "
      >
        Frequently-asked questions
      </h2>
      <dl class="w-full md:w-2/3">
        <div v-for="item in questionsList" :key="item.question">
          <dt class="mb-4">
            <h3 class="text-xl font-sans font-bold text-black dark:text-white">
              {{ item.question }}
            </h3>
          </dt>
          <dd class="mb-8 sm:mb-10 w-full">
            <p class="w-full font-sans text-black dark:text-white">
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
