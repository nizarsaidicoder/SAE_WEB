import "./assets/css/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark.css";
import "highlight.js/lib/common";
import csharp from "highlight.js/lib/languages/csharp";
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage("csharp", csharp);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(hljsVuePlugin);
app.mount("#app");
