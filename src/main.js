import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

import HomePage from "./components/HomePage/HomePage.vue";
import TheTeam from "./components/TheTeam/TheTeam.vue";
import BaseSection from "./components/UI/BaseSection.vue";
import TheErrorPage from "./components/TheErrorPage/TheErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "root", redirect: "/home" },
    { path: "/home", components: { mainContent: HomePage }, name: "home" },
    { path: "/team", components: { mainContent: TheTeam }, name: "theTeam" },
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
