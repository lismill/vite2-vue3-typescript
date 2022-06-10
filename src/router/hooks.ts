import Framework from "@/views/_layout/framework.vue";

export default {
  path: "/hooks",
  component: Framework,
  redirect: "/hooks/index",
  meta: {title: "Hooks", icon: "mdi:dev-to"},
  children: [
    {
      path: "index",
      name: "/hooks/index",
      component: () => import("@/views/hooks/index.vue"),
      meta: {title: "Hooks"},
    },
    {
      path: "use-env",
      name: "/hooks/use-env",
      component: () => import("@/views/hooks/use-env/index.vue"),
      meta: {title: "当前环境"},
    },
  ],
};
