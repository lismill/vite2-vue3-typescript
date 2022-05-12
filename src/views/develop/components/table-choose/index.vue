<template>
  <div class="bg-ffffff p-16">
    <a-button
      type="primary"
      @click="
        () => {
          deepConfig.table.selectedType = 'radio';
          deepConfig.visible = true;
        }
      "
      >单选数据</a-button
    >
    <a-button
      class="success m-l8"
      type="primary"
      @click="
        () => {
          deepConfig.table.selectedType = 'checkbox';
          deepConfig.visible = true;
        }
      "
      >多选数据</a-button
    >
    <p class="m-tb16">已选数据：</p>
    {{ deepConfig.table.selectedRows }}
  </div>
  <l-table-choose :config="deepConfig" @update:table:choose="(v) => (deepConfig = v)"></l-table-choose>
</template>

<script setup lang="ts">
import {ref} from "vue";
import config from "./config";

const deepConfig = ref(config);
</script>
