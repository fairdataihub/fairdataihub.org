<template>
  <h1 class="text-xl text-black lg:text-3xl print:hidden">
    {{ title }}
  </h1>

  <div class="border-grey-500 mb-4 w-full border-b-2 print:hidden"></div>
</template>

<script>
export default {
  name: "BaseDocsTitle",
  props: ["title"],
};
</script>

<style></style>
