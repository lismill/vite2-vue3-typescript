import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "@/App.vue";
import router from "@/router";
import components from "@/components/index";
import "virtual:svg-icons-register";
import "@purge-icons/generated";
import "ant-design-vue/dist/antd.less";
import "@/assets/styles";

console.log(import.meta.env);

const app = createApp(App);

// pinia
const pinia = createPinia();

// component
components.forEach((component) => app.component(component.name, component.component));

app.use(router).use(pinia).mount("#app");
