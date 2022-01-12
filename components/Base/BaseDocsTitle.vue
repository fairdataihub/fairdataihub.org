<template>
  <h1 class="text-xl text-black lg:text-3xl print:hidden">
    {{ title }}
  </h1>

  <div class="w-full mb-4 border-b-2 border-grey-500 print:hidden"></div>
</template>

<script>
export default {
  name: "BaseDocsTitle",
  props: ["title"],
};
</script>

<style></style>
