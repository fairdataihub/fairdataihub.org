<template>
  <div>
    <base-docs-title :title="`Make PI owner of dataset`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          There are four permission privileges available for a dataset on
          Pennsieve: owner, manager, editor, and viewer. Each of them provides
          different permissions for making changes to a dataset. These
          permissions are summarized in the table available
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Add-edit-permissions"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </NuxtLink
          >.
        </p>
        <p>
          When you create a dataset, you have 'owner' permissions on the
          dataset. As per SPARC rules, the PI of the SPARC award must be made
          owner of the dataset. This is because only the owner can submit a
          dataset for publishing and SPARC requires the PI to do so.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet, see
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </NuxtLink
          >.
        </li>
        <li>Select your SPARC award's PI's name in the drop-down list.</li>
        <li>
          Click on 'Make PI owner' (you will automatically be assigned 'manager'
          permissions).
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",scrollToTop: true,
};
</script>