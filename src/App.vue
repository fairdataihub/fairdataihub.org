<template>
  <AppNavbar class="print:hidden"></AppNavbar>

  <!-- <router-view v-slot="{ Component }">
    <transition name="route-view" mode="out-in">
      <component :is="Component" />
    </transition> 
  </router-view> -->
  <router-view></router-view>

  <AppFooter></AppFooter>
  
</template>

<script>
import AppNavbar from "./components/UI/AppNavbar.vue";
import AppFooter from "./components/UI/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
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
