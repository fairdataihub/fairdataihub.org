import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

import HomePage from "./components/HomePage/HomePage.vue";
import TheTeam from "./components/TheTeam/TheTeam.vue";
import BaseSection from "./components/UI/BaseSection.vue";
import TheErrorPage from "./components/TheErrorPage/TheErrorPage.vue";
import SodaSparc from "./components/SodaSparc/SodaSparc.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    console.log(from, savedPosition);
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    { path: "/", name: "root", redirect: "/home" },
    { path: "/home", components: { mainContent: HomePage }, name: "home" },
    { path: "/team", components: { mainContent: TheTeam }, name: "theTeam" },
    {
      path: "/sodasparc",
      components: { mainContent: SodaSparc },
      name: "SodaSparc",
    },
    {
      path: "/:pathMatch(.*)*",
      components: { mainContent: TheErrorPage },
      name: "TheErrorPage",
    },
  ],
});

const app = createApp(App);

app.component("base-section", BaseSection);

app.use(router);

app.mount("#app");
