<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section
      data-aos="fade-in"
      class="pt-16 bg-white dark:bg-dark-background py-10"
    >
      <SodaForCovidHerosection></SodaForCovidHerosection>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AboutSodaForCovid></AboutSodaForCovid>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SodaForCovidImpact></SodaForCovidImpact>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <SodaForCovidDevApproachFundingTeam></SodaForCovidDevApproachFundingTeam>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SodaForCovidTimeline></SodaForCovidTimeline>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SodaForCovidPublications></SodaForCovidPublications>
    </base-section>
  </div>
</template>

<script>
import SodaForCovidDevApproachFundingTeam from "./SodaForCovidDevApproachFundingTeam.vue";
import AboutSodaForCovid from "./AboutSodaForCovid.vue";
import SodaForCovidImpact from "./SodaForCovidImpact.vue";
import SodaForCovidHerosection from "./SodaForCovidHerosection.vue";
import SodaForCovidTimeline from "./SodaForCovidTimeline.vue";
import SodaForCovidPublications from "./SodaForCovidPublications.vue";

export default {
  components: {
    SodaForCovidHerosection,
    SodaForCovidTimeline,
    SodaForCovidDevApproachFundingTeam,
    AboutSodaForCovid,
    SodaForCovidImpact,
    SodaForCovidPublications,
  },
  name: "SodaForCovid",
};
</script>

<style></style>
