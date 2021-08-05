<template>
  <AppNavbar class="print:hidden"></AppNavbar>

  <router-view v-slot="{ Component }">
    <transition name="route-view" appear mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

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

.route-view-enter-active,
.route-view-leave-active {
  transition: all 0.4s ease-in-out;
}
.route-view-enter,
.route-view-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
