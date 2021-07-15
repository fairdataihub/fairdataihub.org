<template>
  <the-navbar class="print:hidden"></the-navbar>
  <router-view></router-view>
  <the-footer class="print:hidden"></the-footer>
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
h1 {
  color: #2c3e50;
}
</style>
