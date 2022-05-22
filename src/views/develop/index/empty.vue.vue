<template>
  <a-card title="空状态" size="small" hoverable>
    <l-empty>
      <slot>
        <p class="m-b10">我想是不是您请求数据的姿势不对呢？</p>
        <a-space :size="16">
          <a-button type="primary" class="success">重新加载</a-button>
          <a-button type="primary">返回首页</a-button>
        </a-space>
      </slot>
    </l-empty>
  </a-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
