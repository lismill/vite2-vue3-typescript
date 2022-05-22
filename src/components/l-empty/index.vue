<template>
  <a-empty class="a-empty" :image="image">
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
    image?: string;
    desc: string;
  }>(),
  {
    image: Empty.PRESENTED_IMAGE_DEFAULT as string,
    desc: "暂无数据",
  },
);
</script>

<style lang="scss" scoped>
.a-empty {
  padding: 100px 0;
  .desc {
    color: #999999;
  }
}
</style>
