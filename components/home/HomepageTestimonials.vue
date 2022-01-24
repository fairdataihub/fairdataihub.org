<template>
  <div
    class="mx-auto mb-8 flex w-full max-w-screen-lg flex-col items-center justify-between gap-4 p-8 md:mb-0"
  >
    <div class="mb-4 flex flex-col items-center">
      <p
        class="my-2 w-full text-center text-4xl font-extrabold tracking-tight sm:text-4xl"
      >
        Testimonials
      </p>
      <p class="font-asap w-full max-w-2xl text-center text-xl">
        See what people who use our products have to say about us.
      </p>
    </div>
    <div class="flex w-full flex-col md:flex-row">
      <div
        class="mx-auto my-4 rounded-xl bg-white p-8 shadow-lg md:w-64 md:p-4 lg:w-72"
        v-for="item in testimonialsList"
        :key="item.name"
      >
        <p>
          <span class="text-accent text-lg font-bold"> “ </span>
          <span class="font-asap text-lg text-black sm:text-base">
            {{ item.content }}
          </span>
          <span class="text-accent text-lg font-bold"> ” </span>
        </p>
        <div class="mt-4 flex items-center">
          <a href="#" class="relative block">
            <img
              alt="profile"
              :src="item.img"
              class="mx-auto h-16 w-16 rounded-full object-cover sm:h-10 sm:w-10"
            />
          </a>
          <div class="ml-2 flex flex-col justify-between">
            <span class="text-accent text-xl font-semibold sm:text-sm">
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
