<template>
  <div>
    <base-docs-title :title="`Sending log files to SODA Team`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          The SODA app saves all errors in several log files on your computer.
          In order to solve user issues, the SODA Team usually needs to take a
          look at those log files.
        </p>
      </div>

      <base-docs-subtitle> How to obtain the log files </base-docs-subtitle>

      <base-docs-heading>
        Send us all the files located here (you can zip that logs folder and
        simply email/Slack it to us
      </base-docs-heading>

      <ul class="docs-ul list-outside list-decimal">
        <li>Windows: C:\Users\_your_username_\AppData\Roaming\SODA\logs</li>
        <li>macOS: ~/_your_username_/Library/Logs/SODA</li>
        <li>Ubuntu: /home/_your_username_/.config/SODA/logs</li>
      </ul>

      <base-docs-subtitle>
        Common issues regarding the log files
      </base-docs-subtitle>

      <base-docs-heading>
        Unable to find the AppData (Windows), .config (Ubuntu), or Library
        (macOS) folder
      </base-docs-heading>

      <div class="p-parent-div">
        <p>
          <strong>Solution</strong>: It is very likely that the folder is hidden
          on your computer. To learn about how to show hidden files and folders,
          please visit
          <NuxtLink
            to="/sodaforsparc/docs/common-errors/Issues-regarding-hidden-files-or-folders"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </NuxtLink
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
};
</script>
