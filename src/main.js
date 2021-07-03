import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

import HomePage from "./components/HomePage/HomePage.vue";
import TheTeam from "./components/TheTeam/TheTeam.vue";
import BaseSection from "./components/UI/BaseSection.vue";
import TheErrorPage from "./components/TheErrorPage/TheErrorPage.vue";
import SodaSparc from "./components/SodaSparc/SodaSparc.vue";
import SodasparcDocs from "./components/SodasparcDocs/SodasparcDocs.vue";
import SodaUI from "./components/SodasparcDocs/docs/getting-started/SodaUI.vue";
import OrganizeSubmit from "./components/SodasparcDocs/docs/getting-started/OrganizeSubmit.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    if (from == savedPosition) {
      console.log(from, savedPosition);
    }
    if (savedPosition) {
      console.log("moving to saved position");
      return savedPosition;
    }
    if (to.hash) {
      console.log("moving to element");
      return { el: to.hash, behavior: "smooth" };
    } else {
      console.log("moving to top of the page");
      return { x: 0, y: 0 };
    }
  },
  routes: [
    { path: "/", name: "root", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/team", component: TheTeam },
    { path: "/sodasparc", component: SodaSparc },
    {
      path: "/sodasparc/docs",
      component: SodasparcDocs,
      children: [
        {
          path: "user-interface",
          component: SodaUI,
        },
        {
          path: "Organize-and-submit-SPARC-datasets-with-SODA",
          component: OrganizeSubmit,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      components: { mainContent: TheErrorPage },
    },
  ],
});

const app = createApp(App);

app.component("base-section", BaseSection);

app.use(router);

app.mount("#app");
