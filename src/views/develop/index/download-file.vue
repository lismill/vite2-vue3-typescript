<template>
  <a-card title="下载文件" size="small" hoverable>
    <a-popconfirm title="确认要下载文件么?" ok-text="确认" cancel-text="取消" placement="topLeft" @confirm="download">
      <a-button type="primary" :loading="loading">下载</a-button>
    </a-popconfirm>
  </a-card>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {downloadFile} from "@/api/common/download";

const loading = ref(false);
const download = async () => {
  loading.value = true;
  await downloadFile("https://i.postimg.cc/Lsw8GQv5/icon.jpg", "logo.jpg");
  loading.value = false;
};
</script>
