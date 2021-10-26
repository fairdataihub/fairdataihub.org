<template>
  <div>
    <base-docs-title :title="`Add edit description`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          All SPARC datasets must have the following metadata on Pennsieve:
          subtitle, description, banner image, and license. This interface
          allows you to easily add a description to your dataset. This
          description will be highly visible on the SPARC data portal once your
          dataset is published.
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
        <li>
          In the textbox, provide a detailed description of your dataset. It is
          typically recommended to include three sections: Study Purpose, Data
          Collected, and Primary Conclusion. You can see published datasets on
          <a
            href="https://sparc.science/"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 dark:text-blue-400"
            >sparc.science</a
          >
          for inspiration.
        </li>
        <li>Click on "Add description".</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",scrollToTop: true,
};
</script>
