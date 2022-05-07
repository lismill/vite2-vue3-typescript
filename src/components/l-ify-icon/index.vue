<template>
  <span :class="`iconify ${className}`" :data-icon="name" :data-width="size" :data-height="size" :style="style"></span>
</template>

<script lang="ts">
export default {
  name: "LIfyIcon",
};
</script>
<script setup lang="ts">
withDefaults(
  defineProps<{
    className?: string;
    style?: {[key: string]: string};
    name?: any;
    size?: string | number;
  }>(),
  {
    className: "",
    style: undefined,
    name: "tabler:error-404",
    size: "14",
  },
);
</script>
