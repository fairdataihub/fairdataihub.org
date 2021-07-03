<template>
  <base-section class="pt-16">
    <div class="w-full gap-4 mb-8 md:mb-0 p-0 max-w-screen-2xl mx-auto flex">
      <div class="overflow-auto">
        <sodasparc-sidebar> </sodasparc-sidebar>
      </div>
      <div class="w-10/12 bg-gray-200">
        content
        <router-view></router-view>
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

<style></style>
