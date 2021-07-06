<template>
  <div>
    <base-docs-title :title="`The Pennsieve agent is already running`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Issue Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        "The Pennsieve agent is already running" issue happens when SODA tries
        to initiate an upload, but an existing pennsieve_agent process is
        already running in the background. This oftentimes is the result of an
        interrupted and unfinished Pennsieve upload from a previous session.
      </p>
    </div>

    <base-docs-subtitle> Solution </base-docs-subtitle>
    <div class="my-4">
      <p>
        A general solution for this issue is to end the pennsieve.exe process
        that is still running. Click the below to learn about how to end a
        task/process for your Operating system.
      </p>
    </div>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>Windows</li>
      <li>MAC</li>
      <li>Ubuntu</li>
    </ul>

    <div class="flex justify-start mx-8 my-4 shadow-xl">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Common-errors/blackfynn-agent-running-error.gif"
        alt="A GIF illustrating how to kill a process in Windows."
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PennsieveAgentAlreadyRunning",
};
</script>

<style></style>
