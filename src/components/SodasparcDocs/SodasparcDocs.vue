<template>
  <base-section class="pt-16">
    <div
      class="
        w-full
        max-w-screen-xl
        gap-4
        mb-8
        md:mb-0
        p-0
        mx-auto
        flex flex-col
        sm:flex-row
        items-center
        sm:justify-center
        relative
      "
    >
      <div class="hidden sm:block top-16 sm:w-4/12 md:w-3/12 lg:w-1/5">
        <div class="top-0 absolute bottom-0" style="overflow-y: scroll">
          <sodasparc-sidebar> </sodasparc-sidebar>
        </div>
      </div>
      <div class="w-full sm:hidden flex justify-center bg-gray-50 p-2 z-0">
        <mobilesodasparc-sidebar> </mobilesodasparc-sidebar>
      </div>
      <div class="top-16 w-full sm:w-8/12 md:w-9/12 lg:w-4/5">
        <div class="sm:top-0 sm:bottom-0 sm:right-0 sm:overflow-auto test">
          <base-docs-content>
            <router-view></router-view>
          </base-docs-content>
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
import SodasparcSidebar from "./SodasparcSidebar.vue";
import MobilesodasparcSidebar from "./MobilesodasparcSidebar.vue";

export default {
  components: { SodasparcSidebar, MobilesodasparcSidebar },
  name: "SodasparcDocs",
};
</script>

<style scoped>
.test {
  height: calc(100vh - 4em);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* button */
::-webkit-scrollbar-button {
  background: rgba(220, 222, 224, 0.849);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(155, 152, 152);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(115, 117, 117);
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(220, 222, 224, 0.849);
}

/* The track NOT covered by the handle. */
::-webkit-scrollbar-track-piece {
  background: rgba(220, 222, 224, 0.849);
}

/* Corner */
::-webkit-scrollbar-corner {
  background: rgba(220, 222, 224, 0.849);
}

/* Resizer */
::-webkit-resizer {
  background: rgba(220, 222, 224, 0.849);
}
</style>
