<template>
  <div>
    <AppHeader />

    <br />
    <slot />

    footer
  </div>
</template>

<script>
import AppHeader from "~~/components/UI/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style></style>
