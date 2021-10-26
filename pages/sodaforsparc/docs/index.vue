<template></template>

<script>
export default {
  middleware: [
    function ({ redirect }) {
      console.log("redirect");
      return redirect("/sodaforsparc/docs/getting-started/User-Interface");
    },
  ],
  mounted() {
    this.$router.push("/sodaforsparc/docs/getting-started/User-Interface");
  }
};
</script>
