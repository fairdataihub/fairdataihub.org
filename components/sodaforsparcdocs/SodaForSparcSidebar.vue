<template>
  <div class="bg-light-background relative">
    <div class="hidden flex-col sm:flex sm:flex-row sm:justify-around">
      <div class="sm:w-52 md:w-56 lg:w-60">
        <nav class="mt-4 px-6 lg:px-3">
          <div v-for="section in sidebarList" :key="section.title" class="pb-3">
            <p
              class="text-md w-full border-b-2 border-gray-200 pb-2 font-normal text-black"
            >
              {{ section.title }}
            </p>
            <div
              v-for="subsection in section.subsections"
              :key="subsection.subtitle"
            >
              <NuxtLink
                :to="subsection.href"
                class="my-1 flex items-center justify-start rounded-lg p-1 font-thin text-black transition-all duration-200 hover:bg-gray-200 hover:text-gray-800"
              >
                <span class="font-asap mx-1 text-sm font-normal">
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
