import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "./index.css";

import VLazyImage from "v-lazy-image";
import Notifications from "@kyvg/vue3-notification";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseSection from "./components/UI/BaseSection.vue";
import BaseDocsContent from "./components/UI/BaseDocsContent.vue";
import BaseDocsTitle from "./components/UI/BaseDocsTitle.vue";
import BaseDocsSubtitle from "./components/UI/BaseDocsSubtitle.vue";
import BaseDocsHeading from "./components/UI/BaseDocsHeading.vue";

const app = createApp(App);

app.component("base-section", BaseSection);
app.component("base-docs-content", BaseDocsContent);
app.component("base-docs-title", BaseDocsTitle);
app.component("base-docs-subtitle", BaseDocsSubtitle);
app.component("base-docs-heading", BaseDocsHeading);

app.component("v-lazy-image", VLazyImage);

app.use(router);
app.use(Notifications);
app.use({
  install: () => {
    AOS.init({ duration: 500, anchorPlacement: "top-center" });
  },
});

app.mount("#app");
