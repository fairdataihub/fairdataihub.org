<template>
  <div>
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

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet, see
          <router-link
            to="/sodasparc/docs/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </router-link
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
  name: "ShareSPARCConsortium",
};
</script>
