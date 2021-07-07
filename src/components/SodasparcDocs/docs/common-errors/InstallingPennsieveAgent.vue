<template>
  <div>
    <base-docs-title :title="`Installing the Pennsieve agent`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Issue Background </base-docs-subtitle>

    <div class="p-parent-div">
      <p>
        <i> "Name 'AgentInstallationError'" </i>
        issue happens when SODA detects that you have not installed the
        Pennsieve agent. The Pennsieve agent is necessary for the dataset upload
        process.
      </p>
    </div>

    <base-docs-subtitle> Solution </base-docs-subtitle>
    <div class="p-parent-div">
      <p>
        You can follow the instructions provided
        <a
          href="https://docs.pennsieve.io/docs/the-pennsieve-agent"
          target="_blank"
          rel="nofollow"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          here</a
        >
        to install the Pennsieve agent. For any other questions, please visit
        the dedicated
        <a
          href="https://docs.pennsieve.io/docs"
          target="_blank"
          rel="nofollow"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          Pennsieve Documentation page</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstallingPennsieveAgent",
};
</script>
