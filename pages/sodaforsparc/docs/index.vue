<template>
  Our docs have moved. Please wait while we redirect you to the appropriate
  page.
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      Object.assign(document.createElement("a"), {
        href: "https://docs.sodaforsparc.io",
      }).click();
    }, 2000);
  },
};
</script>
