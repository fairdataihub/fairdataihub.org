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
      <AQUAToolsUsed></AQUAToolsUsed>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AquaDevApproachFundingTeam></AquaDevApproachFundingTeam>
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
import AquaHerosection from "~~/components/aqua/AquaHerosection.vue";
import AboutAqua from "~~/components/aqua/AboutAqua.vue";
import AQUAToolsUsed from "~~/components/aqua/AQUAToolsUsed.vue";
import AquaDevApproachFundingTeam from "~~/components/aqua/AquaDevApproachFundingTeam.vue";
import AquaPublications from "~~/components/aqua/AquaPublications.vue";

export default {
  layout: "default",
  components: {
    AquaHerosection,
    AboutAqua,
    AQUAToolsUsed,
    AquaDevApproachFundingTeam,
    AquaPublications,
  },
};
</script>

<style></style>
