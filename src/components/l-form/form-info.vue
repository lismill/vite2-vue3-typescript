<template>
  <div class="m-t4 color-999999 font-13">{{ info }}</div>
</template>
<script setup lang="ts">
defineProps<{
  info: string;
}>();
</script>
