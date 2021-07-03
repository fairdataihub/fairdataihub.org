<template>
  <base-section class="pt-16">
    <div class="w-full gap-4 mb-8 md:mb-0 p-0 mx-auto flex relative">
      <div
        class="top-16 bottom-0 fixed sm:w-5/12 md:w-4/12 lg:w-1/5"
        style="overflow-y: scroll"
      >
        <sodasparc-sidebar> </sodasparc-sidebar>
      </div>
      <div
        class="
          sm:w-7/12
          md:w-8/12
          lg:w-4/5
          absolute
          top-0
          bottom-0
          right-0
          overflow-auto
          test
        "
      >
        <base-docs-content>
          <router-view></router-view>
        </base-docs-content>
      </div>
    </div>
  </base-section>
</template>

<script>
import SodasparcSidebar from "./SodasparcSidebar.vue";
export default {
  components: { SodasparcSidebar },
  name: "SodasparcDocs",
};
</script>

<style scoped>
.test {
  height: calc(100vh - 4em);
}
</style>
