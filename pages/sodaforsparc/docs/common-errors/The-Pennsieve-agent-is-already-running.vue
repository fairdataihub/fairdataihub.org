<template>
  <div>
    <Html>
      <Head>
        <Title>
          The Pennsieve agent is already running - SODA for SPARC
        </Title>
      </Head>
    </Html>

    <base-docs-title :title="`The Pennsieve agent is already running`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Issue Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          "The Pennsieve agent is already running" issue happens when SODA tries
          to initiate an upload, but an existing pennsieve_agent process is
          already running in the background. This oftentimes is the result of an
          interrupted and unfinished Pennsieve upload from a previous session.
        </p>
      </div>

      <base-docs-subtitle> Solution </base-docs-subtitle>
      <div class="p-parent-div">
        <p>
          A general solution for this issue is to end the pennsieve.exe process
          that is still running. Click the below to learn about how to end a
          task/process for your Operating system.
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          <a
            href="https://winaero.com/kill-process-windows-10/"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            Windows</a
          >
        </li>
        <li>
          <a
            href="https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            MAC</a
          >
        </li>
        <li>
          <a
            href="https://www.cyberciti.biz/faq/stop-process-ubuntu-linux-command/"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            Ubuntu</a
          >
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Common-errors/blackfynn-agent-running-error.gif?raw=true"
          alt="A GIF illustrating how to kill a process in Windows."
        />
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
