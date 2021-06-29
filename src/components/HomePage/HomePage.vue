<template>
  <base-section class="pt-12 sm:pt-16">
    <div
      class="
        bg-udCompleteTask bg-right
        svg-div
        w-99vw
        justify-start
        h-40vh
        sm:h-99vh
      "
    >
      <card-content :textAlign="`text-right`">
        <template #title>
          Scientific Data Curation and Sharing Made Easy
        </template>
        <template #default>
          Making all biomedical research data Findable, Accessible,
          Interoperable, amd Reusable (FAIR) is crucial to enhance the pace of
          discovery for improving human health. We develop tools so that it is
          easy, rapid and fun for researchers to achieve that.
        </template>
      </card-content>
    </div>
  </base-section>
  <base-section>
    <div
      class="
        bg-udDesignInspiration bg-left
        w-99vw
        h-40vh
        sm:h-99vh
        svg-div
        justify-end
      "
    >
      <card-content :textAlign="`text-left`">
        <template #title> Our Vision </template>
        <template #default>
          SODA (Software to Organize Data Automatically) for SPARC is a desktop
          software intended to facilitate the data organization and submission
          process for SPARC investigators and thus promote the FAIR Data
          Principles.
        </template>
      </card-content>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "../UI/BaseSection.vue";
import CardContent from "./CardContent.vue";
export default {
  name: "HomePage",
  components: { BaseSection, CardContent },
};
</script>

CardContent
<style scoped language="postcss">
.svg-div {
  @apply bg-no-repeat bg-contain flex items-center mx-auto;
}
</style>
