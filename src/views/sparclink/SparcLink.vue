<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section
      data-aos="fade-in"
      class="pt-16 bg-white dark:bg-dark-background py-10"
    >
      <SparclinkHerosection></SparclinkHerosection>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AboutSparclink></AboutSparclink>
    </base-section>

    <!-- <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SparclinkStats></SparclinkStats>
    </base-section> -->

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <SparcLinkDevApproachFundingTeam></SparcLinkDevApproachFundingTeam>
    </base-section>

    <!-- <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <SparclinkTimeline></SparclinkTimeline>
    </base-section> -->

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <SparclinkPublications></SparclinkPublications>
    </base-section>

    <!-- <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <the-faq> </the-faq>
    </base-section> -->
  </div>
</template>

<script>
import SparcLinkDevApproachFundingTeam from "./SparcLinkDevApproachFundingTeam.vue";
import AboutSparclink from "./AboutSparclink.vue";
// import SparclinkStats from "./SparclinkStats.vue";
import SparclinkHerosection from "./SparclinkHerosection.vue";
// import SparclinkTimeline from "./SparclinkTimeline.vue";
// import TheFaq from "./TheFaq.vue";
import SparclinkPublications from "./SparclinkPublications.vue";

export default {
  components: {
    // TheFaq,
    SparclinkHerosection,
    // SparclinkTimeline,
    SparcLinkDevApproachFundingTeam,
    AboutSparclink,
    // SparclinkStats,
    SparclinkPublications,
  },
  name: "SparcLink",
};
</script>

<style></style>
