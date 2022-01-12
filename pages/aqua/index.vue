<template>
  <div class="divide-y divide-gray-50">
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
        <Title>AQUA - Fair Data Innovations Hub</Title>
      </Head>
    </Html>

    <base-section data-aos="fade-in" class="py-10 pt-16 bg-white">
      <AquaHerosection></AquaHerosection>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-grey-50">
      <AboutAqua></AboutAqua>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
      <AQUAToolsUsed></AQUAToolsUsed>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-grey-50">
      <AquaDevApproachFundingTeam></AquaDevApproachFundingTeam>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
      <AquaPublications></AquaPublications>
    </base-section>
  </div>
</template>

<script>
import AquaHerosection from "~~/components/aqua/AquaHerosection.vue";
import AboutAqua from "~~/components/aqua/AboutAqua.vue";
import AQUAToolsUsed from "~~/components/aqua/AQUAToolsUsed.vue";
import AquaDevApproachFundingTeam from "~~/components/aqua/AquaDevApproachFundingTeam.vue";
import AquaPublications from "~~/components/aqua/AquaPublications.vue";

export default {
  layout: "default",
  scrollToTop: true,
  components: {
    AquaHerosection,
    AboutAqua,
    AQUAToolsUsed,
    AquaDevApproachFundingTeam,
    AquaPublications,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
