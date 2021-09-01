<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section
      data-aos="fade-in"
      class="pt-16 bg-white dark:bg-dark-background py-10"
    >
      <soda-herosection></soda-herosection>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <about-soda-vision></about-soda-vision>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <funding-team></funding-team>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background pt-10"
    >
      <about-soda></about-soda>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <sodasparc-stats></sodasparc-stats>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <soda-timeline></soda-timeline>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <sodasparc-publications></sodasparc-publications>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10 hidden"
    >
      <the-faq> </the-faq>
    </base-section>
  </div>
</template>

<script>
import AboutSoda from "./AboutSoda.vue";
import FundingTeam from "./FundingTeam.vue";
import AboutSodaVision from "./AboutSodaVision.vue";
import SodasparcStats from "./SodasparcStats.vue";
import SodaHerosection from "./SodaHerosection.vue";
import SodaTimeline from "./SodaTimeline.vue";
import TheFaq from "./TheFaq.vue";
import SodasparcPublications from "./SodasparcPublications.vue";

export default {
  components: {
    TheFaq,
    SodaHerosection,
    SodaTimeline,
    AboutSoda,
    FundingTeam,
    AboutSodaVision,
    SodasparcStats,
    SodasparcPublications,
  },
  name: "SodaSparc",
};
</script>

<style></style>
