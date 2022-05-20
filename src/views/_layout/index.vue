<template>
  <router-view v-slot="{Component}">
    <keep-alive :include="USE_STORE_KEEPALIVE.keepalives">
      <component :is="Component" :key="$route.path" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
import useStoreKeepalive from "@/stores/keepalive";

const USE_STORE_KEEPALIVE: any = useStoreKeepalive();
</script>
<script lang="ts">
export default {name: "Layout"};
</script>
