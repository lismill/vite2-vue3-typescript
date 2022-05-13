<template>
  <div class="framework-tabs bg-ffffff p-l16">
    <a-tabs v-model:activeKey="activeKey" size="small" hide-add type="editable-card" @tab-click="tabClick" @edit="edit">
      <a-tab-pane
        v-for="(tab, index) in USE_STORE_TABS.tabs"
        :key="tab.path"
        :tab="tab.title"
        :closable="index !== 0"
      ></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStoreTabs from "@/stores/tabs";

const ROUTE = useRoute();
const ROUTER = useRouter();
const USE_STORE_TABS = useStoreTabs();
const activeKey = ref(USE_STORE_TABS.tabs[0].path);

const tabClick = (path: any) => ROUTER.push(path);
const edit = (path: any) => {
  USE_STORE_TABS.removeTabs(path);
  path === ROUTE.path && ROUTER.back();
};
const changeTabs = () => {
  USE_STORE_TABS.changeTabs({
    path: ROUTE.path,
    title: ROUTE.meta.title,
  });
  activeKey.value = ROUTE.path;
};

watch(
  () => ROUTE.path,
  () => changeTabs(),
);

onMounted(() => changeTabs());
</script>

<style lang="scss" scoped>
.framework-tabs :deep {
  .ant-tabs-top > .ant-tabs-nav,
  .ant-tabs-bottom > .ant-tabs-nav,
  .ant-tabs-top > div > .ant-tabs-nav,
  .ant-tabs-bottom > div > .ant-tabs-nav {
    margin: 2px 0 0 0;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 1px solid rgba(240, 242, 245, 1);
  }
  .ant-tabs-tab-remove {
    margin-left: 1px;
    font-size: 11px;
  }
}
</style>
