<template>
  <div>
    <base-docs-title :title="`Issues regarding hidden files or folders`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        There are some issues related to hidden files and folders that SODA
        users have experienced. If you get any errors caused by hidden file(s)
        or folder(s) and do not know how to find them, it is very likely that
        such file(s) or folder(s) are hidden on your computer.
      </p>
    </div>

    <base-docs-subtitle> Solution </base-docs-subtitle>

    <div class="my-4">
      <p>
        To learn about how to show hidden files and folders, please visit the
        link below for your Operating system:
      </p>
    </div>

    <ul class="list-outside bg-rose-200 list-disc ml-4 mb-2">
      <li>Windows users</li>
      <li>macOS users</li>
      <li>Ubuntu users</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IssuesHiddenFilesFolders",
};
</script>

<style></style>
