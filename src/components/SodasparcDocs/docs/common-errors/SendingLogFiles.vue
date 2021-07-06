<template>
  <div>
    <base-docs-title :title="`Sending log files to SODA Team`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        The SODA app saves all errors in several log files on your computer. In
        order to solve user issues, the SODA Team usually needs to take a look
        at those log files.
      </p>
    </div>

    <base-docs-subtitle> How to obtain the log files </base-docs-subtitle>

    <base-docs-heading>
      Send us all the files located here (you can zip that logs folder and
      simply email/Slack it to us
    </base-docs-heading>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>Windows: C:\Users\_your_username_\AppData\Roaming\SODA\logs</li>
      <li>macOS: ~/_your_username_/Library/Logs/SODA</li>
      <li>Ubuntu: /home/_your_username_/.config/SODA/logs</li>
    </ul>

    <base-docs-subtitle>
      Common issues regarding the log files
    </base-docs-subtitle>

    <base-docs-heading>
      Unable to find the AppData (Windows), .config (Ubuntu), or Library (macOS)
      folder
    </base-docs-heading>

    <div class="my-4">
      <p>
        <strong>Solution</strong>: It is very likely that the folder is hidden
        on your computer. To learn about how to show hidden files and folders,
        please visit here.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendingLogFiles",
};
</script>

<style></style>
