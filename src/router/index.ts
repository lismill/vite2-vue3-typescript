import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

// 自动导入当前目录下的路由配置
const modules = import.meta.globEager("./*.ts");
const ROUTES = Object.values(modules).map((routes) => routes.default);

// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
  /**
   * 自动导入路由配置
   */
  ...ROUTES,
  /**
   * 登录页面
   */
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/_login/index.vue"),
    meta: {
      title: "login",
    },
  },
  /**
   * 404 页面
   */
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import(/* webpackChunkName: "not-found" */ "@/views/_not-found/index.vue"),
  },
];

const router = createRouter({
  /**
   * 路由模式
   * createWebHashHistory || createWebHistory
   */
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    const CONTENT = document.querySelector(".ant-layout-content");
    CONTENT?.scrollTo(0, 0);
  },
});

router.beforeEach((to, from, next) => {
  to.meta.title
    ? (document.title = `${import.meta.env.VITE_NAME} | ${to.meta.title}`)
    : (document.title = `${import.meta.env.VITE_NAME}`);
  next();
});

// 左侧菜单
export const SIDER_ROUTES = (() => {
  const FILTER_PATH = ["/", "/login", "/:catchAll(.*)"];
  return router.options.routes.filter((item) => !FILTER_PATH.includes(item.path));
})();

// 缓存的菜单
export const KEEPALIVE_ROUTES = (() => {
  const KEEPALIVES: Array<string> = ["Layout"];
  function reduceKeepAlive(routes: any) {
    routes.forEach((item: any) => {
      item?.meta?.keepAlive && KEEPALIVES.push(item.meta.keepAlive);
      item?.children?.length && reduceKeepAlive(item.children ?? []);
    });
  }
  reduceKeepAlive(router.options.routes);
  return KEEPALIVES;
})();

export default router;
