import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "@/App.vue";
import router from "@/router";
import components from "@/components/index";
import directives from "@/utils/directives";
import "virtual:svg-icons-register";
import "@purge-icons/generated";
import "ant-design-vue/dist/antd.less";
import "@/assets/styles";

console.log(import.meta.env);

// app
const app = createApp(App);

// pinia
const pinia = createPinia();

// component
components.forEach((component) => component.name && app.component(component.name, component.component));

// directive
directives.forEach((directive) => directive.name && app.directive(directive.name, directive));

app.use(router).use(pinia).mount("#app");
