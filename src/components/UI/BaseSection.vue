<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseSection",
  props: {
    height: {
      required: false,
      type: String,
      default: "h-10",
    },
    bgImage: {
      required: false,
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped language="postcss"></style>
