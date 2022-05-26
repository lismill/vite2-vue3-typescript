<template>
  <a-card title="上传文件" size="small" hoverable>
    <l-upload-file :config="config" @file:change="(fileList) => (fileLists = fileList)"></l-upload-file>
    <p>{{ fileLists }}</p>
  </a-card>
</template>
<script setup lang="ts">
import {ref} from "vue";

const config = {
  // antdv 组件参数
  maxCount: 2,
  fileList: [
    {
      name: "xx.png",
      status: "done",
      response: {
        status: true,
      },
    },
  ],
};
const fileLists = ref(config.fileList);
</script>
