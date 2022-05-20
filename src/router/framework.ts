import Framework from "@/views/_layout/framework.vue";

export default {
  path: "/framework",
  name: "/framework",
  redirect: "/framework/redirect",
  component: Framework,
  meta: {
    hidden: true,
  },
  children: [
    {
      path: "redirect",
      name: "/framework/redirect",
      component: () => import(/* webpackChunkName: "redirect" */ "@/views/_redirect/index.vue"),
      meta: {
        hidden: true,
      },
    },
  ],
};
