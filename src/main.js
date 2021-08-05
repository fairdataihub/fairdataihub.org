import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "./index.css";

import BaseSection from "./components/UI/BaseSection.vue";
import BaseDocscontent from "./components/UI/BaseDocscontent.vue";
import BaseDocstitle from "./components/UI/BaseDocstitle.vue";
import BaseDocssubtitle from "./components/UI/BaseDocssubtitle.vue";
import BaseDocsheading from "./components/UI/BaseDocsheading.vue";

const app = createApp(App);

app.component("base-section", BaseSection);
app.component("base-docs-content", BaseDocscontent);
app.component("base-docs-title", BaseDocstitle);
app.component("base-docs-subtitle", BaseDocssubtitle);
app.component("base-docs-heading", BaseDocsheading);

app.use(router);

app.mount("#app");
