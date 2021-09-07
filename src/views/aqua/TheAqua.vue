<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section
      data-aos="fade-in"
      class="pt-16 bg-white dark:bg-dark-background py-10"
    >
      <AquaHerosection></AquaHerosection>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AboutAqua></AboutAqua>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <AquaStats></AquaStats>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AquaDevApproachFundingTeam></AquaDevApproachFundingTeam>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AquaTimeline></AquaTimeline>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <AquaPublications></AquaPublications>
    </base-section>
  </div>
</template>

<script>
import AquaDevApproachFundingTeam from "./AquaDevApproachFundingTeam.vue";
import AboutAqua from "./AboutAqua.vue";
import AquaStats from "./AquaStats.vue";
import AquaHerosection from "./AquaHerosection.vue";
import AquaTimeline from "./AquaTimeline.vue";
import AquaPublications from "./AquaPublications.vue";

export default {
  components: {
    // TheFaq,
    AquaHerosection,
    AquaTimeline,
    AquaDevApproachFundingTeam,
    AboutAqua,
    AquaStats,
    AquaPublications,
  },
  name: "TheAqua",
};
</script>

<style></style>
