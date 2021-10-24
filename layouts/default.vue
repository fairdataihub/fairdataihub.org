<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "~~/components/App/AppHeader.vue";
import AppFooter from "~~/components/App/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style></style>
