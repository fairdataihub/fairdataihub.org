<template>
  <base-section class="pt-16">
    <soda-herosection></soda-herosection>
  </base-section>
  <base-section>
    <about-sparc></about-sparc>
  </base-section>
  <base-section>
    <soda-timeline></soda-timeline>
  </base-section>
  <base-section>
    <the-faq> </the-faq>
  </base-section>
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
