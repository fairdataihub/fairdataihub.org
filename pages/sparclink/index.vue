<template>
  <div class="divide-y divide-gray-50">
    <base-section data-aos="fade-in" class="pt-16 bg-white py-10">
      <SparclinkHerosection></SparclinkHerosection>
    </base-section>

    <base-section data-aos="fade-in" class="bg-grey-50 py-10">
      <AboutSparclink></AboutSparclink>
    </base-section>

    <base-section data-aos="fade-in" class="bg-grey-50 py-10">
      <SparcLinkDevApproachFundingTeam></SparcLinkDevApproachFundingTeam>
    </base-section>

    <base-section data-aos="fade-in" class="bg-white py-10">
      <SparclinkPublications></SparclinkPublications>
    </base-section>
  </div>
</template>

<script>
import SparclinkHerosection from "~~/components/sparclink/SparclinkHerosection.vue";
import AboutSparclink from "~~/components/sparclink/AboutSparclink.vue";
import SparcLinkDevApproachFundingTeam from "~~/components/sparclink/SparcLinkDevApproachFundingTeam.vue";
import SparclinkPublications from "~~/components/sparclink/SparclinkPublications.vue";

export default {
  layout: "default",
  scrollToTop: true,
  components: {
    SparclinkHerosection,
    AboutSparclink,
    SparcLinkDevApproachFundingTeam,
    SparclinkPublications,
  },
};
</script>

<style></style>
