<template>
  <div>
    <Html>
      <Head>
        <Title> Make PI owner of dataset - SODA for SPARC </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Make PI owner of dataset`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          There are four permission privileges available for a dataset on
          Pennsieve: owner, manager, editor, and viewer. Each of them provides
          different permissions for making changes to a dataset. These
          permissions are summarized the
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Add-edit-permissions"
            class="text-blue-600 hover:underline"
          >
            <span>table here</span> </NuxtLink
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
  layout: "docs",
  scrollToTop: true,
};
</script>
