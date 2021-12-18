<template>
  <div>
    <base-docs-title
      :title="`Assign a license
`"
    >
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          All SPARC datasets must have the following metadata: subtitle,
          description, banner image, and license. This interface allows you to
          easily assign the Creative Commons Attribution (CC-BY) License to your
          dataset, which is mandatory for all SPARC datasets.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet,
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600"
          >
            <span>use the instructions available here</span> </NuxtLink
          >.
        </li>
        <li>Click on "Assign Creative Commons Attribution (CC-BY) license".</li>
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
