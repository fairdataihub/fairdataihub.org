<template>
  <the-navbar></the-navbar>
  <router-view name="mainContent"></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheNavbar from "./components/UI/TheNavbar.vue";
import TheFooter from "./components/UI/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  },
  mounted() {
    if (!("theme" in localStorage)) {
      //..
    } else if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
