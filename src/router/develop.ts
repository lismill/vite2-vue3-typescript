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
        keepAlive: "DevelopIndex",
        // icon: "bx:camera-home",
      },
    },
    {
      path: "table",
      name: "/develop/table",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/table/index.vue"),
      meta: {
        title: "基础表格",
        keepAlive: "DevelopComponentsTable",
        // icon: "bx:table",
      },
    },
    {
      path: "table-edit",
      name: "/develop/table-edit",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/table-edit/index.vue"),
      meta: {
        title: "编辑表格",
        keepAlive: "DevelopComponentsTableEdit",
        // icon: "bx:table",
      },
    },
    {
      path: "table-choose",
      name: "/develop/table-choose",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/table-choose/index.vue"),
      meta: {
        title: "选择表格",
        // icon: "bx:table",
      },
    },
    {
      path: "form",
      name: "/develop/form",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/form/index.vue"),
      meta: {
        title: "表单组件",
      },
    },
    {
      path: "jsx",
      name: "/develop/jsx",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/tsx/index.vue"),
      meta: {
        title: "JSX",
      },
    },
    {
      path: "iframe",
      name: "/develop/iframe",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/iframe/index.vue"),
      meta: {
        title: "iframe",
      },
    },
    {
      path: "vuedraggable",
      name: "/develop/vuedraggable",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/vuedraggable/index.vue"),
      meta: {
        title: "vuedraggable",
      },
    },
    {
      path: "echarts",
      name: "/develop/echarts",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/echarts/index.vue"),
      meta: {
        title: "ECharts",
      },
    },
    {
      path: "qrcode",
      name: "/develop/qrcode",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/qrcode/index.vue"),
      meta: {
        title: "QRCode",
      },
    },
    {
      path: "editor",
      name: "/develop/editor",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/editor/index.vue"),
      meta: {
        title: "富文本编辑器",
      },
    },
    {
      path: "amap",
      name: "/develop/amap",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/amap/index.vue"),
      meta: {
        title: "高德地图",
      },
    },
  ],
};
