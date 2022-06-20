import Framework from "@/views/_layout/framework.vue";

export default {
  path: "/hooks",
  component: Framework,
  redirect: "/hooks/use-env",
  meta: {title: "Hooks", icon: "mdi:dev-to"},
  children: [
    {
      path: "use-env",
      name: "/hooks/use-env",
      component: () => import("@/views/hooks/use-env/index.vue"),
      meta: {title: "判单当前环境"},
    },
    {
      path: "use-env-value",
      name: "/hooks/use-env-value",
      component: () => import("@/views/hooks/use-env-value/index.vue"),
      meta: {title: "使用环境变量"},
    },
  ],
};
