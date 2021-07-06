<template>
  <div>
    <base-docs-title
      :title="`Assign a license
`"
    >
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        All SPARC datasets must have the following metadata: subtitle,
        description, banner image, and license. This interface allows you to
        easily assign the Creative Commons Attribution (CC-BY) License to your
        dataset, which is mandatory for all SPARC datasets.
      </p>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        Select/confirm your Pennsieve account and dataset. If you have not
        connected your Pennsieve account with SODA yet, see here.
      </li>
      <li>Click on "Assign Creative Commons Attribution (CC-BY) license".</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AssignLicense",
};
</script>

<style></style>
