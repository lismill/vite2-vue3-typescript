<template>
  <a-card title="新窗口访问 GET 请求" size="small" hoverable>
    <a-button type="primary" @click="() => openTargetWindow({extends: {target: '_blank'}})">打开</a-button>
  </a-card>
</template>
<script setup lang="ts">
import {openTargetWindow} from "@/api/develop";
</script>
