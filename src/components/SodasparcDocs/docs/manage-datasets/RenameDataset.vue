<template>
  <div>
    <base-docs-title :title="`Rename an existing dataset`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        You can rename an existing dataset on Pennsieve through this feature of
        SODA. The name of the dataset will be displayed as the title of the
        dataset when the dataset becomes public. It is thus advised to make sure
        that your dataset title is different than your other dataset titles and
        that it is relatively informative.
      </p>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        Select/confirm your Pennsieve account and the dataset that you wish to
        rename. If you have not connected your Pennsieve account with SODA yet,
        see here.
      </li>
      <li>Enter a new name and click "Rename".</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RenameDataset",
};
</script>

<style></style>
