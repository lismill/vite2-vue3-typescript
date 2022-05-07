import Layout from "@/views/_layout/index.vue";
import Framework from "@/views/_layout/framework.vue";

export default {
  path: "/develop",
  name: "/develop",
  redirect: "/develop/index",
  meta: {
    title: "开发者工具",
    icon: "mdi:dev-to",
  },
  component: Framework,
  children: [
    {
      path: "index",
      name: "/develop/index",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/index/index.vue"),
      meta: {
        title: "示例展示",
        keepAlive: true,
        // icon: "bx:camera-home",
      },
    },
    {
      path: "components",
      name: "/develop/components",
      component: Layout,
      meta: {
        title: "基础组件",
        // icon: "tabler:components",
      },
      redirect: "/develop/components/table",
      children: [
        {
          path: "table",
          name: "/develop/components/table",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/components/table/index.vue"),
          meta: {
            title: "表格组件",
            // icon: "bx:table",
          },
        },
        {
          path: "form",
          name: "/develop/components/form",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/components/form/index.vue"),
          meta: {
            title: "表单组件",
          },
        },
      ],
    },
  ],
};
