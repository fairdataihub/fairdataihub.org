<template>
  <div>
    <base-docs-title :title="`Create a new dataset`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        You can create a new dataset on Pennsieve through this feature of SODA.
        The name of the dataset will be displayed as the title of the dataset
        when the dataset becomes public. It is thus advised to make sure that
        your dataset title is different than your other dataset titles and that
        it is relatively informative.
      </p>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        Select/confirm your Pennsieve account. If you have not connected your
        Pennsieve account with SODA yet, see here.
      </li>
      <li>Enter the desired name for the dataset.</li>
      <li>Click "Create dataset".</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CreateDataset",
};
</script>

<style></style>
