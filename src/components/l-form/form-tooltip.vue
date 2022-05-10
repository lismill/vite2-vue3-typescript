<template>
  <span>
    {{ label }}
    <a-tooltip v-if="tooltip" placement="right">
      <template #title>
        <span class="font-13" v-html="tooltip"></span>
      </template>
      <span class="tooltip"><l-ify-icon name="ant-design:question-circle-filled" color="#666666"></l-ify-icon></span>
    </a-tooltip>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  tooltip?: string;
}>();
</script>

<style scoped lang="scss">
.tooltip {
  cursor: pointer;
}
</style>
