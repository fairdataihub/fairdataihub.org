<template>
  <div class="divide-y divide-gray-50">
    <base-section data-aos="fade-in" class="pt-16 bg-white py-10">
      <SodaForCovidHerosection></SodaForCovidHerosection>
    </base-section>

    <base-section data-aos="fade-in" class="bg-gray-50 py-10">
      <AboutSodaForCovid></AboutSodaForCovid>
    </base-section>

    <base-section data-aos="fade-in" class="bg-white py-10">
      <SodaForCovidImpact></SodaForCovidImpact>
    </base-section>

    <base-section data-aos="fade-in" class="bg-gray-50 py-10">
      <SodaForCovidDevApproachFundingTeam></SodaForCovidDevApproachFundingTeam>
    </base-section>

    <base-section data-aos="fade-in" class="bg-white py-10">
      <SodaForCovidTimeline></SodaForCovidTimeline>
    </base-section>

    <base-section data-aos="fade-in" class="bg-white py-10">
      <SodaForCovidPublications></SodaForCovidPublications>
    </base-section>
  </div>
</template>

<script>
import SodaForCovidHerosection from "~~/components/sodaforcovid/SodaForCovidHerosection.vue";
import AboutSodaForCovid from "~~/components/sodaforcovid/AboutSodaForCovid.vue";
import SodaForCovidImpact from "~~/components/sodaforcovid/SodaForCovidImpact.vue";
import SodaForCovidDevApproachFundingTeam from "~~/components/sodaforcovid/SodaForCovidDevApproachFundingTeam.vue";
import SodaForCovidTimeline from "~~/components/sodaforcovid/SodaForCovidTimeline.vue";
import SodaForCovidPublications from "~~/components/sodaforcovid/SodaForCovidPublications.vue";
export default {
  layout: "default",
  scrollToTop: true,
  components: {
    SodaForCovidHerosection,
    AboutSodaForCovid,
    SodaForCovidImpact,
    SodaForCovidDevApproachFundingTeam,
    SodaForCovidTimeline,
    SodaForCovidPublications,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
