<template>
  <a-card title="日期插件 - dayjs" size="small" hoverable>
    <a-space direction="vertical">
      <p>https://dayjs.fenxianglu.cn/category/</p>
      <p>{{ day }}</p>
      <p>{{ day.format("YYYY-MM-DD") }}</p>
      <p>{{ day.format("YYYY-MM-DD HH:MM:ss") }}</p>
    </a-space>
  </a-card>
</template>
<script setup lang="ts">
import dayjs from "dayjs";

const day = dayjs();
</script>
