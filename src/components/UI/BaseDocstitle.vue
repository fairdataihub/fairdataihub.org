<template>
  <h1 class="text-bold text-xl lg:text-2xl text-black dark:text-white">
    {{ title }}
  </h1>

  <div class="w-full border-b-2 border-grey-500 mb-4"></div>
</template>

<script>
export default {
  name: "BaseDocstitle",
  props: ["title"],
};
</script>

<style></style>
