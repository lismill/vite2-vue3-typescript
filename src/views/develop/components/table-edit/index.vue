<template>
  <div class="bg-ffffff p-16">
    <l-table-edit :config="config" @update:table:edit="updateTableEdit"></l-table-edit>
  </div>
</template>

<script setup lang="ts">
import {notification} from "ant-design-vue";
import config from "./config";

const updateTableEdit = (data: any) => {
  notification.success({
    message: "操作提示",
    description: `${JSON.stringify(data)}`,
  });
};
</script>

<style scoped></style>
