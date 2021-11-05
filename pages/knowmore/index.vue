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
      class="bg-grey-50 dark:bg-dark-background py-10"
    >
      <KnowMoreDevApproachFundingTeam></KnowMoreDevApproachFundingTeam>
    </base-section>

    <base-section
      data-aos="fade-in"
      class="bg-white dark:bg-dark-background py-10"
    >
      <KnowMorePublications></KnowMorePublications>
    </base-section>
  </div>
</template>

<script>
import KnowMoreHerosection from "~~/components/knowmore/KnowMoreHerosection.vue";
import AboutKnowMore from "~~/components/knowmore/AboutKnowMore.vue";
import KnowMoreDevApproachFundingTeam from "~~/components/knowmore/KnowMoreDevApproachFundingTeam.vue";
import KnowMorePublications from "~~/components/knowmore/KnowMorePublications.vue";

export default {
  layout: "default",
  scrollToTop: true,
  components: {
    KnowMoreHerosection,
    AboutKnowMore,
    KnowMoreDevApproachFundingTeam,
    KnowMorePublications,
  },
  mounted() {
    window.scrollTo(0, 0)
  },
};
</script>

<style></style>
