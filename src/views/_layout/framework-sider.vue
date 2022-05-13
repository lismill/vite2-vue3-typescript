<template>
  <div class="logo">
    <l-ify-icon name="ph:codesandbox-logo-fill" size="26" style="position: relative; top: 8px; left: -3px"></l-ify-icon>
    <span v-if="!collapsed"> | &nbsp;&nbsp;后台管理中心</span>
  </div>
  <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="jump">
    <template v-for="menu in SIDER_ROUTES">
      <!-- 一级菜单 - 无子菜单 -->
      <template v-if="menu.children?.length && menu.children?.length === 1">
        <a-menu-item :key="menu.children[0].name">
          <template v-if="menu.children[0].meta?.icon" #icon>
            <l-ify-icon :name="menu.children[0].meta?.icon" size="21"></l-ify-icon>
          </template>
          {{ menu.children[0].meta?.title }}
        </a-menu-item>
      </template>
      <!-- 一级菜单 - 有子菜单 -->
      <template v-else>
        <a-sub-menu :key="menu.name">
          <template v-if="menu.meta?.icon" #icon>
            <l-ify-icon :name="menu.meta?.icon" size="21"></l-ify-icon>
          </template>
          <template #title>{{ menu.meta?.title }}</template>
          <!-- 二级菜单 -->
          <template v-for="subMenu in menu.children">
            <!-- 二级菜单 - 无子菜单 -->
            <template v-if="!subMenu.children?.length">
              <a-menu-item :key="subMenu.name">
                <template v-if="subMenu.meta?.icon" #icon>
                  <l-ify-icon :name="subMenu.meta?.icon" size="21"></l-ify-icon>
                </template>
                {{ subMenu.meta?.title }}
              </a-menu-item>
            </template>

            <!-- 二级菜单 - 有子菜单 -->
            <template v-else>
              <a-sub-menu :key="subMenu.name">
                <template v-if="subMenu.meta?.icon" #icon>
                  <l-ify-icon :name="subMenu.meta?.icon" size="21"></l-ify-icon>
                </template>
                <template #title>{{ subMenu.meta?.title }}</template>
                <!-- 三级菜单 -->
                <a-menu-item v-for="subSubMenu in subMenu.children" :key="subSubMenu.name">
                  <template v-if="subSubMenu.meta?.icon" #icon>
                    <l-ify-icon :name="subSubMenu.meta?.icon" size="21"></l-ify-icon>
                  </template>
                  {{ subSubMenu.meta?.title }}
                </a-menu-item>
              </a-sub-menu>
            </template>
          </template>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>
<script setup lang="ts">
import {ref, onMounted, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {SIDER_ROUTES} from "@/router";

const props = defineProps<{
  collapsed: boolean;
}>();

const route = useRoute();
const router = useRouter();

// 展开的菜单
const openKeys = ref<Array<string>>([""]);
// 选中的菜单
const selectedKeys = ref([route.fullPath]);

// 初始化默认展开的菜单
const resetOpenKeys = () => {
  let KEYS: any = [];
  const FULL_PATHS = route.fullPath
    .split("/")
    .filter((item) => item)
    .map((item) => `/${item}`);
  switch (FULL_PATHS.length) {
    case 1:
      KEYS = [FULL_PATHS[0]];
      break;
    case 2:
      KEYS = [FULL_PATHS[0], `${FULL_PATHS[0]}${FULL_PATHS[1]}`];
      break;
    case 3:
      KEYS = [FULL_PATHS[0], `${FULL_PATHS[0]}${FULL_PATHS[1]}`, `${FULL_PATHS[0]}${FULL_PATHS[1]}${FULL_PATHS[2]}`];
      break;
    default:
      break;
  }
  // 默认展开的菜单
  !props.collapsed && (openKeys.value = KEYS);
};

// 路由跳转
const jump = ({key}: any) => {
  if (key === route.name) return;
  router.push({name: key});
};

// 监听路由
watch(
  () => route.path,
  (v) => (selectedKeys.value = [v]),
);

// 监听折叠菜单重置 openKeys
watch(
  () => props.collapsed,
  () => resetOpenKeys(),
);

onMounted(() => resetOpenKeys());
</script>
