<template>
  <a-card title="Lodash" size="small" hoverable>
    <a-space>
      <a-button type="primary" @click="debounce">防抖函数</a-button>
      <a-button type="primary" class="success" @click="throttle">节流函数</a-button>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import _ from "lodash";
import {message} from "ant-design-vue";

// 防抖函数
const debounce = _.debounce(() => message.success("防抖函数"), 600);
// 节流函数
const throttle = _.throttle(() => message.success("节流函数"), 600);
</script>

<style lang="scss" scoped></style>
