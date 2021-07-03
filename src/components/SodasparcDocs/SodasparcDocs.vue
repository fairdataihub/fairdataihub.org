<template>
  <base-section class="pt-16">
    <div class="w-full gap-4 mb-8 md:mb-0 p-0 max-w-screen-2xl mx-auto flex">
      <div class="top-16 bottom-0 fixed w-2/12" style="overflow-y: scroll">
        <sodasparc-sidebar> </sodasparc-sidebar>
      </div>
      <div
        class="
          w-4/5
          fixed
          top-16
          mx-auto
          bottom-0
          right-0
          h-screen
          overflow-auto
        "
      >
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
