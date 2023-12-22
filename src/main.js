import "./assets/css/main.scss";

import { createApp } from "vue";

// import { createPinia } from "vue";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark.css"; // Change the file name if needed

import "highlight.js/lib/common";

import csharp from "highlight.js/lib/languages/csharp";
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage("csharp", csharp);

import App from "./App.vue";
import router from "./router";
const app = createApp(App);
// const pinia = createPinia();
// app.use(pinia);
app.use(router);
app.use(hljsVuePlugin);

app.mount("#app");
