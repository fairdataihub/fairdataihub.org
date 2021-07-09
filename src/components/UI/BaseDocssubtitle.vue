<template>
  <h3
    :id="id"
    class="
      font-sans font-semibold
      text-lg text-black
      dark:text-white
      mb-1
      print:dark:text-black
    "
  >
    <slot></slot>
  </h3>

  <div class="w-full border-b border-grey-500 mb-2"></div>
</template>

<script>
export default {
  name: "BaseDocssubtitle",
  props: {
    id: {
      required: false,
      type: String,
      default: Math.random().toString(36).substring(15),
    },
  },
};
</script>

<style></style>
