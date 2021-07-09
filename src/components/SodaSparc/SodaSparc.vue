<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section class="pt-16 bg-white dark:bg-dark-background py-10">
      <soda-herosection></soda-herosection>
    </base-section>

    <base-section class="bg-white dark:bg-dark-background py-10">
      <about-sparc></about-sparc>
    </base-section>

    <base-section class="bg-white dark:bg-dark-background py-10">
      <soda-timeline></soda-timeline>
    </base-section>

    <base-section class="bg-white dark:bg-dark-background py-10">
      <the-faq> </the-faq>
    </base-section>
  </div>
</template>

<script>
import AboutSparc from "./AboutSparc.vue";
import SodaHerosection from "./SodaHerosection.vue";
import SodaTimeline from "./SodaTimeline.vue";
import TheFaq from "./TheFaq.vue";

export default {
  components: { TheFaq, SodaHerosection, SodaTimeline, AboutSparc },
  name: "SodaSparc",
};
</script>

<style></style>
