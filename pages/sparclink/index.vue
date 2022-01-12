<template>
  <div class="divide-y divide-gray-50">
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
        <Title>SPARClink - Fair Data Innovations Hub</Title>
      </Head>
    </Html>

    <base-section data-aos="fade-in" class="py-10 pt-16 bg-white">
      <SparclinkHerosection></SparclinkHerosection>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-grey-50">
      <AboutSparclink></AboutSparclink>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-grey-50">
      <SparcLinkDevApproachFundingTeam></SparcLinkDevApproachFundingTeam>
    </base-section>

    <base-section data-aos="fade-in" class="py-10 bg-white">
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
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
