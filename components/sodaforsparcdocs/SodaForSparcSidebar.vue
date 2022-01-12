<template>
  <div class="relative bg-light-background">
    <div class="flex-col hidden sm:flex sm:flex-row sm:justify-around">
      <div class="sm:w-52 md:w-56 lg:w-60">
        <nav class="px-6 mt-4 lg:px-3">
          <div v-for="section in sidebarList" :key="section.title" class="pb-3">
            <p
              class="w-full pb-2 font-normal text-black border-b-2 border-gray-200 text-md"
            >
              {{ section.title }}
            </p>
            <div
              v-for="subsection in section.subsections"
              :key="subsection.subtitle"
            >
              <NuxtLink
                :to="subsection.href"
                class="flex items-center justify-start p-1 my-1 font-thin text-black transition-all duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-200"
              >
                <span class="mx-1 text-sm font-normal font-asap">
                  {{ subsection.subtitle }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
const scrollIntoView = () => {
  const element = document.querySelector(".router-link-exact-active");
  element.scrollIntoView(true);
};

export default {
  name: "SodaForSparcSidebar",
  props: {
    sidebarList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    scrollIntoView();
  },
};
</script>

<style lang="postcss" scoped>
.router-link-active {
  @apply bg-light-accent text-white;
}
</style>
