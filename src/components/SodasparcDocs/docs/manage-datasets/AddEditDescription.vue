<template>
  <div>
    <base-docs-title :title="`Add edit description`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        All SPARC datasets must have the following metadata on Pennsieve:
        subtitle, description, banner image, and license. This interface allows
        you to easily add a description to your dataset. This description will
        be highly visible on the SPARC data portal once your dataset is
        published.
      </p>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        Select/confirm your Pennsieve account and dataset. If you have not
        connected your Pennsieve account with SODA yet, see here.
      </li>
      <li>
        In the textbox, provide a detailed description of your dataset. It is
        typically recommended to include three sections: Study Purpose, Data
        Collected, and Primary Conclusion. You can see published datasets on
        sparc.science for inspiration.
      </li>
      <li>Click on "Add description".</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AddEditDescription",
};
</script>

<style></style>
