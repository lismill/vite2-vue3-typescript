import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "@/App.vue";
import router from "@/router";
import {setupComponents} from "@/components/index";
import {setupDirectives} from "./utils/directives";
import "virtual:svg-icons-register";
import "@purge-icons/generated";
import "ant-design-vue/dist/antd.less";
import "@/assets/styles";

console.log(import.meta.env);

// app
const app = createApp(App);

// pinia
const pinia = createPinia();

// Setup component
setupComponents(app);

// Setup directive
setupDirectives(app);

app.use(router).use(pinia).mount("#app");
