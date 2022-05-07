import Layout from "@/views/_layout/index.vue";

export default {
  path: "/",
  component: Layout,
  redirect: "/dashboard",
  children: [
    {
      path: "login",
      name: "login",
      component: () => import("@/views/_login/index.vue"),
      meta: {
        title: "login",
      },
    },
  ],
};
