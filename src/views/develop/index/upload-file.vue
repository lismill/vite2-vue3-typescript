<template>
  <a-card title="上传文件" size="small" hoverable>
    <l-upload-file :config="config"></l-upload-file>
  </a-card>
</template>
<script setup lang="ts">
const config = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  maxLength: 4,
  fileList: [{name: "1.file"}, {name: "2.file"}],
};
</script>
