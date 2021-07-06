<template>
  <div>
    <base-docs-title :title="`Make PI owner of dataset`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        There are four permission privileges available for a dataset on
        Pennsieve: owner, manager, editor, and viewer. Each of them provides
        different permissions for making changes to a dataset. These permissions
        are summarized in the table available here.
      </p>
      <p>
        When you create a dataset, you have 'owner' permissions on the dataset.
        As per SPARC rules, the PI of the SPARC award must be made owner of the
        dataset. This is because only the owner can submit a dataset for
        publishing and SPARC requires the PI to do so.
      </p>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        Select/confirm your Pennsieve account and dataset. If you have not
        connected your Pennsieve account with SODA yet, see here.
      </li>
      <li>Select your SPARC award's PI's name in the drop-down list.</li>
      <li>
        Click on 'Make PI owner' (you will automatically be assigned 'manager'
        permissions).
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MakePIDatasetOwner",
};
</script>

<style></style>
