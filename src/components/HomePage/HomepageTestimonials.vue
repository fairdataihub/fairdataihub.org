<template>
  <div
    class="
      w-full
      flex flex-col
      md:flex-row
      gap-4
      mb-8
      md:mb-0
      justify-between
      items-center
      p-8
      max-w-screen-xl
      mx-auto
    "
  >
    <div
      class="
        bg-white
        dark:bg-gray-600
        md:w-64
        lg:w-72
        shadow-lg
        mx-auto
        rounded-xl
        p-8
        my-4
        md:p-4
      "
      v-for="item in testimonialsList"
      :key="item.name"
    >
      <p class="text-gray-600 dark:text-white">
        <span class="font-bold text-indigo-500 text-lg"> “ </span>
        <span class="text-black dark:text-gray-50 text-lg sm:text-base">
          {{ item.content }}
        </span>
        <span class="font-bold text-indigo-500 text-lg"> ” </span>
      </p>
      <div class="flex items-center mt-4">
        <a href="#" class="block relative">
          <img
            alt="profile"
            :src="item.img"
            class="mx-auto object-cover rounded-full h-16 sm:h-10 w-16 sm:w-10"
          />
        </a>
        <div class="flex flex-col ml-2 justify-between">
          <span
            class="
              font-semibold
              text-indigo-600
              dark:text-indigo-400
              text-xl
              sm:text-sm
            "
          >
            {{ item.name }}
          </span>
          <span
            class="
              text-black
              dark:text-gray-50
              text-base
              sm:text-xs
              flex
              items-center
            "
          >
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepageTestimonials",
  data() {
    return {
      testimonialsList: [
        {
          name: "Sarah Dayan",
          title: "Staff Engineer, Algolia",
          img: "https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
          content:
            "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        },
        {
          name: "Sarah Dayan",
          title: "Staff Engineer, Algolia",
          img: "https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
          content:
            "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        },
        {
          name: "Sarah Dayan",
          title: "Staff Engineer, Algolia",
          img: "https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
          content:
            "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        },
      ],
    };
  },
};
</script>

<style></style>
