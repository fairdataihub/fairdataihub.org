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
import AQUAToolsUsed from "./AQUAToolsUsed.vue";
import AboutAqua from "./AboutAqua.vue";
import AquaDevApproachFundingTeam from "./AquaDevApproachFundingTeam.vue";
import AquaHerosection from "./AquaHerosection.vue";
import AquaPublications from "./AquaPublications.vue";

export default {
  components: {
    // TheFaq,
    AquaHerosection,
    AquaDevApproachFundingTeam,
    AQUAToolsUsed,
    AboutAqua,
    AquaPublications,
  },
  name: "TheAqua",
};
</script>

<style></style>
