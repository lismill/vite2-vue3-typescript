<template>
  <l-form :config="deepConfig">
    <template #slot="{data, item}">我是自定义插槽 - {{ data[item.name] }}</template>
  </l-form>
</template>
<script setup lang="ts">
import {ref} from "vue";
import config from "./config";

const deepConfig: any = ref(config);
setTimeout(() => {
  deepConfig.value.form.data = {
    text: "展示文本信息，支持 <b style='color: #ff4d4f;'>HTML</b>",
    slot: 1,
    switch: false,
  };
}, 800);
</script>

<style lang="scss" scoped></style>
