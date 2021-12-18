<template>
  <div>
    <base-docs-title :title="`Installing the Pennsieve agent`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Issue Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          <i> Name 'AgentInstallationError' </i>
          issue happens when SODA detects that you have not installed the
          Pennsieve agent. The Pennsieve agent is necessary for the dataset
          upload process.
        </p>
      </div>

      <base-docs-subtitle> Solution </base-docs-subtitle>
      <div class="p-parent-div">
        <p>
          You can follow the
          <a
            href="https://docs.pennsieve.io/docs/the-pennsieve-agent"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            instructions provided here
          </a>
          to install the Pennsieve agent. For any other questions, please visit
          the dedicated
          <a
            href="https://docs.pennsieve.io/docs"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            Pennsieve Documentation page</a
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
