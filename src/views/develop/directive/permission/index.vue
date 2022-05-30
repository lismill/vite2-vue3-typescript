<template>
  <a-card title="自定义指令 - 标签权限" size="small" hoverable>
    <div v-permission="['all']">
      权限判断: {{`
      <div v-permission="['all']">权限判断</div>
      `}}
    </div>
  </a-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
