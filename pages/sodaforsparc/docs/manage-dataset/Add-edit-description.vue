<template>
  <div>
    <base-docs-title :title="`Add edit description`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          All SPARC datasets must have the following metadata on Pennsieve:
          subtitle, description, banner image, license, and tags. This interface
          allows you to easily add a description to your dataset. This
          description will be highly visible on the SPARC data portal once your
          dataset is published.
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
        <li>
          Fill in or edit your descriptive text in the Study Purpose, Data
          Collection, and Primary Conclusion sections. You can see published
          datasets on
          <a
            href="https://sparc.science/"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
            >sparc.science</a
          >
          for inspiration.
        </li>
        <li>
          Click on "Add description".
          <ul class="docs-ul list-outside list-disc">
            <li>
              If editing an existing description you will be presented with an
              'Edit description' button to click.
            </li>
          </ul>
        </li>
      </ul>

      <base-docs-subtitle> Note </base-docs-subtitle>

      <ul class="docs-ul list-outside list-disc">
        <li>
          SODA only allows you to edit the three required description sections:
          Study Purpose, Data Collection, and Primary Conclusion. If you have
          any nonstandard sections they will not be read into SODA for editing.
        </li>
        <li>
          If text is found in your description that does not belong to any
          required or user defined section it will be considered invalid and
          placed in the Study Purpose textbox for you to reorganize.
        </li>
        <li>
          SODA will notify you if one of your required sections is longer than a
          single paragraph.
        </li>
        <li>
          SODA will notify you if you are missing a required section before
          finalizing your description.
        </li>
        <li>
          SODA will never stop you from creating a description that does not
          conform to SPARC guidelines.
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
