import Framework from "@/views/_layout/framework.vue";
import Layout from "@/views/_layout/index.vue";

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
      path: "table-create",
      name: "/develop/table-create",
      component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/table-create/index.vue"),
      meta: {
        title: "新建基础表格",
        keepAlive: "DevelopComponentsTableCreate",
        hidden: true,
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
      path: "others",
      name: "/develop/others/jsx",
      redirect: "",
      meta: {
        title: "其他组件",
      },
      component: Layout,
      children: [
        {
          path: "jsx",
          name: "/develop/others/jsx",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/others/tsx"),
          meta: {
            title: "JSX",
          },
        },
        {
          path: "iframe",
          name: "/develop/others/iframe",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/others/iframe/index.vue"),
          meta: {
            title: "iframe",
          },
        },
        {
          path: "vuedraggable",
          name: "/develop/others/vuedraggable",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/others/vuedraggable/index.vue"),
          meta: {
            title: "vuedraggable",
          },
        },
        {
          path: "qrcode",
          name: "/develop/others/qrcode",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/others/qrcode/index.vue"),
          meta: {
            title: "QRCode",
          },
        },
        {
          path: "editor",
          name: "/develop/others/editor",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/others/editor/index.vue"),
          meta: {
            title: "富文本编辑器",
          },
        },
      ],
    },
    {
      path: "charts",
      name: "/charts",
      redirect: "/develop/charts/echarts",
      meta: {
        title: "图表组件",
      },
      component: Layout,
      children: [
        {
          path: "echarts",
          name: "/develop/charts/echarts",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/charts/echarts/index.vue"),
          meta: {
            title: "ECharts",
          },
        },
        {
          path: "amap",
          name: "/develop/charts/amap",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/charts/amap/index.vue"),
          meta: {
            title: "高德地图",
          },
        },
      ],
    },
    {
      path: "directive",
      name: "/directive",
      redirect: "/develop/directive/modal-drag",
      meta: {
        title: "自定义指令",
      },
      component: Layout,
      children: [
        {
          path: "modal-drag",
          name: "/develop/directive/modal-drag",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/directive/modal-drag/index.vue"),
          meta: {
            title: "拖拽弹出框",
          },
        },
        {
          path: "permission",
          name: "/develop/directive/permission",
          component: () => import(/* webpackChunkName: "develop" */ "@/views/develop/directive/permission/index.vue"),
          meta: {
            title: "标签权限",
          },
        },
      ],
    },
  ],
};
