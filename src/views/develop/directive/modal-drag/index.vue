<template>
  <a-card title="自定义指令 - 可拖拽弹出框" size="small" hoverable>
    <a-button type="primary" @click="visible = true">可拖拽弹出框</a-button>
    <a-modal
      v-model:visible="visible"
      title="可拖拽弹出框"
      :destroy-on-close="true"
      @ok="visible = false"
      @cancel="visible = false"
    >
      <!-- 使用方法 -->
      <!-- 1. a-modal 设置 destroy-on-close="true" （打开初始化默认位置） -->
      <!-- 2. 内容容器设置 v-modal-drag 指令 -->
      <div v-modal-drag>
        <p v-for="item in 6" :key="item">content...</p>
      </div>
    </a-modal>
  </a-card>
</template>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);
</script>
