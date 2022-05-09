<template>
  <div class="flex left">
    <div class="trigger m-r6 p-lr12" @click="trigger">
      <div v-if="collapsed">
        <l-ify-icon name="gg:push-chevron-right-r" size="22"></l-ify-icon>
      </div>
      <div v-else>
        <l-ify-icon name="gg:push-chevron-left-r" size="22"></l-ify-icon>
      </div>
    </div>
    <div>
      <a-breadcrumb>
        <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="item.path">
          <router-link v-if="breadcrumb.length !== index + 1" :to="item.path">{{ item.name }}</router-link>
          <span v-else>{{ item.name }}</span>
          <template v-if="item.children?.length" #overlay>
            <a-menu>
              <a-menu-item v-for="children in item.children" :key="children.path">
                <router-link :to="{name: children.name}">{{ children.meta.title }}</router-link>
              </a-menu-item>
            </a-menu>
          </template>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
  <div class="flex right">
    <div class="m-r16">
      <a>Help</a>
    </div>
    <div
      class="full-screen m-r16"
      @click="
        () => {
          screenfull.toggle();
          isFullscreen = !isFullscreen;
        }
      "
    >
      <a-tooltip v-if="isFullscreen">
        <template #title>退出全屏</template>
        <span>
          <l-ify-icon name="gridicons:fullscreen-exit" size="22" style="position: relative; top: 6px"></l-ify-icon>
        </span>
      </a-tooltip>
      <a-tooltip v-else>
        <template #title>全屏</template>
        <span>
          <l-ify-icon name="gridicons:fullscreen" size="22" style="position: relative; top: 6px"></l-ify-icon>
        </span>
      </a-tooltip>
    </div>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        超级管理员
        <span>
          <l-ify-icon name="ant-design:down-outlined" size="13" style="position: relative; top: 2px"></l-ify-icon>
        </span>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">修改信息</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import screenfull from "screenfull";
import useStoreCommon from "@/stores/common";
import storage from "@/utils/local-storage";

const props = withDefaults(
  defineProps<{
    collapsed: boolean;
  }>(),
  {
    collapsed: false,
  },
);
const emit = defineEmits(["update:collapsed"]);
const route = useRoute();
const USE_STORE_COMMON = useStoreCommon();

// 面包屑
const breadcrumb = ref<Array<{name: string; path: string; children: Array<any>}>>([]);
const resetBreadcrumb = () => {
  const MATCHED: Array<{name: string; path: string; children: Array<any>}> = [];
  route.matched.forEach(
    (item) =>
      item.meta.title &&
      MATCHED.push({
        name: `${item.meta.title}`,
        path: item.redirect ? `${item.redirect}` : `${item.path}`,
        children: item.children ? item.children : [],
      }),
  );
  breadcrumb.value = [
    {
      name: "首页",
      path: "/dashboard/index",
      children: [],
    },
    ...MATCHED,
  ];
};

// 折叠菜单
const trigger = () => {
  USE_STORE_COMMON.changeCollapsed(!props.collapsed);
  storage.set(`${import.meta.env.VITE_LOCAL_STORAGE_PREFIX}_COLLAPSED`, !props.collapsed);
  emit("update:collapsed", !props.collapsed);
};

// 全屏切换
const isFullscreen = ref(false);

watch(
  () => route.path,
  () => resetBreadcrumb(),
);

onMounted(() => resetBreadcrumb());
</script>
