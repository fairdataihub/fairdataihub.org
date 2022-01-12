<template>
  <div class="divide-y divide-gray-50">
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
        <Title>SODA for SPARC - Fair Data Innovations Hub</Title>
      </Head>
    </Html>

    <base-section data-aos="fade-in" class="py-10 pt-16 bg-white">
      <SodaForSparcHerosection />
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-gray-50">
      <AboutSodaForSparc></AboutSodaForSparc>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
      <SodaForSparcImpact></SodaForSparcImpact>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-gray-50">
      <SodaForSparcDevApproachFundingTeam></SodaForSparcDevApproachFundingTeam>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
      <SodaForSparcTimeline></SodaForSparcTimeline>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
      <SodaForSparcPublications></SodaForSparcPublications>
    </base-section>
  </div>
</template>

<script>
import BaseSection from "~~/components/Base/BaseSection.vue";
import SodaForSparcHerosection from "~~/components/sodaforsparc/SodaForSparcHerosection.vue";
import AboutSodaForSparc from "~~/components/sodaforsparc/AboutSodaForSparc.vue";
import SodaForSparcImpact from "~~/components/sodaforsparc/SodaForSparcImpact.vue";
import SodaForSparcDevApproachFundingTeam from "~~/components/sodaforsparc/SodaForSparcDevApproachFundingTeam.vue";
import SodaForSparcTimeline from "~~/components/sodaforsparc/SodaForSparcTimeline.vue";
import SodaForSparcPublications from "~~/components/sodaforsparc/SodaForSparcPublications.vue";

export default {
  components: {
    BaseSection,
    SodaForSparcHerosection,
    AboutSodaForSparc,
    SodaForSparcImpact,
    SodaForSparcDevApproachFundingTeam,
    SodaForSparcTimeline,
    SodaForSparcPublications,
  },

  layout: "default",
  scrollToTop: true,
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
