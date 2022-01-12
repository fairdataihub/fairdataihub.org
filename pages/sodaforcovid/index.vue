<template>
  <div class="divide-y divide-gray-50">
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
        <Title>SODA for COVID-19 Research - Fair Data Innovations Hub</Title>
      </Head>
    </Html>

    <base-section data-aos="fade-in" class="py-10 pt-16 bg-white">
      <SodaForCovidHerosection></SodaForCovidHerosection>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-gray-50">
      <AboutSodaForCovid></AboutSodaForCovid>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
      <SodaForCovidImpact></SodaForCovidImpact>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-gray-50">
      <SodaForCovidDevApproachFundingTeam></SodaForCovidDevApproachFundingTeam>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
      <SodaForCovidTimeline></SodaForCovidTimeline>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
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
