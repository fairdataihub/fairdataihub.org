<template>
  <h1 class="text-xl lg:text-3xl text-black print:hidden">
    {{ title }}
  </h1>

  <div class="w-full border-b-2 border-grey-500 mb-4 print:hidden"></div>
</template>

<script>
export default {
  name: "BaseDocsTitle",
  props: ["title"],
};
</script>

<style></style>
