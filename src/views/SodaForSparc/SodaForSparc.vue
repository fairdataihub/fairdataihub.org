<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section
      data-aos="fade-in"
      class="pt-16 bg-white dark:bg-dark-background py-10"
    >
      <SodaForSparcHerosection></SodaForSparcHerosection>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AboutSodaForSparc></AboutSodaForSparc>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SodaForSparcImpact></SodaForSparcImpact>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <SodaForSparcDevApproachFundingTeam></SodaForSparcDevApproachFundingTeam>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SodaForSparcTimeline></SodaForSparcTimeline>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SodaForSparcPublications></SodaForSparcPublications>
    </base-section>
  </div>
</template>

<script>
import SodaForSparcDevApproachFundingTeam from "./SodaForSparcDevApproachFundingTeam.vue";
import AboutSodaForSparc from "./AboutSodaForSparc.vue";
import SodaForSparcImpact from "./SodaForSparcImpact.vue";
import SodaForSparcHerosection from "./SodaForSparcHerosection.vue";
import SodaForSparcTimeline from "./SodaForSparcTimeline.vue";
import SodaForSparcPublications from "./SodaForSparcPublications.vue";

export default {
  components: {
    SodaForSparcHerosection,
    SodaForSparcTimeline,
    SodaForSparcDevApproachFundingTeam,
    AboutSodaForSparc,
    SodaForSparcImpact,
    SodaForSparcPublications,
  },
  name: "SodaForSparc",
};
</script>

<style></style>
