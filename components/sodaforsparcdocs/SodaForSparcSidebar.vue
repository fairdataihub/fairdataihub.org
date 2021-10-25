<template>
  <div class="relative bg-light-background dark:bg-dark-background">
    <div class="hidden sm:flex flex-col sm:flex-row sm:justify-around">
      <div class="sm:w-52 md:w-56 lg:w-60">
        <nav class="mt-4 px-6 lg:px-3">
          <div v-for="section in sidebarList" :key="section.title" class="pb-3">
            <p
              class="
                text-black
                dark:text-white
                w-full
                border-b-2
                pb-2
                border-gray-200
                text-md
                 font-normal
              "
            >
              {{ section.title }}
            </p>
            <div
              v-for="subsection in section.subsections"
              :key="subsection.subtitle"
            >
              <router-link
                :to="subsection.href"
                class="
                  hover:text-gray-800
                  font-thin
                  text-black
                  dark:text-white
                  hover:bg-gray-200
                  dark:hover:bg-gray-600
                  flex
                  items-center
                  p-1
                  my-1
                  transition-all
                  duration-200
                  justify-start
                  rounded-lg
                "
              >
                <span class="font-asap font-normal mx-1 text-sm">
                  {{ subsection.subtitle }}
                </span>
              </router-link>
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
