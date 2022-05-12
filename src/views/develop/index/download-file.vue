<template>
  <a-card title="下载文件" size="small" hoverable>
    <a-popconfirm
      title="确认要下载文件么?"
      ok-text="确认"
      cancel-text="取消"
      placement="topLeft"
      @confirm="handleDownloadByUrl"
    >
      <a-button type="primary" :loading="loading">文件地址下载</a-button>
    </a-popconfirm>
    <a-popconfirm
      class="m-l8"
      title="确认要下载文件么?"
      ok-text="确认"
      cancel-text="取消"
      placement="topLeft"
      @confirm="handleDownByData"
    >
      <a-button type="primary" :loading="loading">文件流下载</a-button>
    </a-popconfirm>
  </a-card>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {downloadByUrl, downloadByData} from "@/api/common/download";

const loading = ref(false);

/**
 * 文件地址下载
 */
const handleDownloadByUrl = async () => {
  loading.value = true;
  await downloadByUrl("https://i.postimg.cc/Lsw8GQv5/icon.jpg", "logo.jpg");
  loading.value = false;
};

/**
 * 文件流下载
 */
const handleDownByData = async () => {
  loading.value = true;
  await downloadByData("content text", "text.txt");
  loading.value = false;
};
</script>
