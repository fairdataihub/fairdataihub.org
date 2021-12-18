<template>
  <div class="divide-y divide-gray-50">
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
      </Head>
      <Title>KnowMore - Fair Data Innovations Hub</Title>
    </Html>

    <base-section data-aos="fade-in" class="pt-16 bg-white py-10">
      <KnowMoreHerosection></KnowMoreHerosection>
    </base-section>

    <base-section data-aos="fade-in" class="bg-grey-50 py-10">
      <AboutKnowMore></AboutKnowMore>
    </base-section>

    <base-section data-aos="fade-in" class="bg-grey-50 py-10">
      <KnowMoreDevApproachFundingTeam></KnowMoreDevApproachFundingTeam>
    </base-section>

    <base-section data-aos="fade-in" class="bg-white py-10">
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
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
