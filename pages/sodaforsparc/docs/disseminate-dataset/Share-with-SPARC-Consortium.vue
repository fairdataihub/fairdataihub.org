<template>
  <div>
    <Html>
      <Head>
        <Title> Share with SPARC Consortium - SODA for SPARC </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Share with SPARC Consortium`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Once your dataset is approved by the Curation Team, it is ready to be
          shared with the SPARC Consortium as embargoed dataset. Sharing will
          give "viewer" permissions to any SPARC investigator who has signed the
          SPARC Non-disclosure form and will allow them to see your data. They
          will then be able to view and download your dataset from Pennsieve.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="list-decimal list-outside docs-ul">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet,
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="text-blue-600 hover:underline"
          >
            <span>use the instructions available here</span> </NuxtLink
          >.
        </li>
        <li>
          Click on 'Share now' to share your dataset with the SPARC Consortium.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
};
</script>
