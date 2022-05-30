<template>
  <a-empty class="a-empty" :image="image" :style="{padding: padding}">
    <template #description>
      <div class="desc m-t6 m-b16">{{ desc }}</div>
      <slot></slot>
    </template>
  </a-empty>
</template>

<script setup lang="ts">
import {Empty} from "ant-design-vue";

withDefaults(
  defineProps<{
    image?: any;
    desc?: string;
    padding?: string;
  }>(),
  {
    image: Empty.PRESENTED_IMAGE_DEFAULT,
    desc: "暂无数据",
    padding: "80px 0",
  },
);
</script>

<style lang="scss" scoped>
.a-empty {
  .desc {
    color: #999999;
  }
}
</style>
