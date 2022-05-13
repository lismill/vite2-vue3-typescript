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
            title: "基础表格",
            keepAlive: true,
            // icon: "bx:table",
          },
        },
        {
          path: "table-edit",
          name: "/develop/components/table-edit",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/components/table-edit/index.vue"),
          meta: {
            title: "编辑表格",
            keepAlive: true,
            // icon: "bx:table",
          },
        },
        {
          path: "table-choose",
          name: "/develop/components/table-choose",
          component: () =>
            import(/* webpackChunkName: "develop" */ "@/views/develop/components/table-choose/index.vue"),
          meta: {
            title: "选择表格",
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
        {
          path: "jsx",
          name: "/develop/components/jsx",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/components/tsx"),
          meta: {
            title: "JSX",
          },
        },
        {
          path: "iframe",
          name: "/develop/components/iframe",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/components/iframe/index.vue"),
          meta: {
            title: "iframe",
          },
        },
        {
          path: "vuedraggable",
          name: "/develop/components/vuedraggable",
          component: () =>
            import(/* webpackChunkName: "develop" */ "@/views/develop/components/vuedraggable/index.vue"),
          meta: {
            title: "vuedraggable",
          },
        },
      ],
    },
  ],
};
