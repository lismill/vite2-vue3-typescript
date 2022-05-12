<template>
  <div class="dashboard">
    <template v-if="loading">
      <a-skeleton-button active block size="large" />
      <a-row type="flex" :gutter="16">
        <a-col flex="auto">
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
        </a-col>
        <a-col flex="0 1 460px">
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
        </a-col>
      </a-row>
    </template>
    <template v-else>
      <a-row class="bg-ffffff p-16">auto</a-row>
      <a-row type="flex" :gutter="16">
        <a-col flex="auto">
          <div class="m-t16 p-16 bg-ffffff">1</div>
          <div class="m-t16 p-16 bg-ffffff">1</div>
          <div class="m-t16 p-16 bg-ffffff">1</div>
        </a-col>
        <a-col flex="0 1 460px">
          <div class="m-t16 p-16 bg-ffffff">1</div>
          <div class="m-t16 p-16 bg-ffffff">1</div>
          <div class="m-t16 p-16 bg-ffffff">1</div>
        </a-col>
      </a-row>
    </template>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const loading = ref(true);
setTimeout(() => (loading.value = false), 600);
</script>

<style scoped>
.dashboard :deep .ant-skeleton-element .ant-skeleton-button {
  height: 56px;
}
</style>
