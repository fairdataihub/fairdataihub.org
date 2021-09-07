<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section
      data-aos="fade-in"
      class="pt-16 bg-white dark:bg-dark-background py-10"
    >
      <KnowMoreHerosection></KnowMoreHerosection>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <AboutKnowMore></AboutKnowMore>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <KnowMoreStats></KnowMoreStats>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <KnowMoreDevApproachFundingTeam></KnowMoreDevApproachFundingTeam>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <KnowMoreTimeline></KnowMoreTimeline>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <KnowMorePublications></KnowMorePublications>
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
import KnowMoreDevApproachFundingTeam from "./KnowMoreDevApproachFundingTeam.vue";
import AboutKnowMore from "./AboutKnowMore.vue";
import KnowMoreStats from "./KnowMoreStats.vue";
import KnowMoreHerosection from "./KnowMoreHerosection.vue";
import KnowMoreTimeline from "./KnowMoreTimeline.vue";
// import TheFaq from "./TheFaq.vue";
import KnowMorePublications from "./KnowMorePublications.vue";

export default {
  components: {
    // TheFaq,
    KnowMoreHerosection,
    KnowMoreTimeline,
    KnowMoreDevApproachFundingTeam,
    AboutKnowMore,
    KnowMoreStats,
    KnowMorePublications,
  },
  name: "KnowMore",
};
</script>

<style></style>
