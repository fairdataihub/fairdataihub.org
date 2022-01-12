<template>
  <div
    class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-4 p-8 mx-auto mb-8 md:mb-0"
  >
    <div class="flex flex-col items-center mb-4">
      <p
        class="w-full my-2 text-4xl font-extrabold tracking-tight text-center sm:text-4xl"
      >
        Testimonials
      </p>
      <p class="w-full max-w-2xl text-xl text-center font-asap">
        See what people who use our products have to say about us.
      </p>
    </div>
    <div class="flex flex-col w-full md:flex-row">
      <div
        class="p-8 mx-auto my-4 bg-white shadow-lg md:w-64 lg:w-72 rounded-xl md:p-4"
        v-for="item in testimonialsList"
        :key="item.name"
      >
        <p>
          <span class="text-lg font-bold text-accent"> “ </span>
          <span class="text-lg text-black font-asap sm:text-base">
            {{ item.content }}
          </span>
          <span class="text-lg font-bold text-accent"> ” </span>
        </p>
        <div class="flex items-center mt-4">
          <a href="#" class="relative block">
            <img
              alt="profile"
              :src="item.img"
              class="object-cover w-16 h-16 mx-auto rounded-full sm:h-10 sm:w-10"
            />
          </a>
          <div class="flex flex-col justify-between ml-2">
            <span class="text-xl font-semibold sm:text-sm text-accent">
              {{ item.name }}
            </span>
            <span
              class="flex items-center text-base font-semibold text-black sm:text-xs"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepageTestimonials",
  props: ["textColor"],
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
