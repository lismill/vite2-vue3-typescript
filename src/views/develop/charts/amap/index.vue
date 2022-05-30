<template>
  <a-card title="简单方式使用" size="small" hoverable>
    <simple></simple>
  </a-card>
  <div class="m-t16">
    <a-card class="m-t16" title="复杂方式使用" size="small" hoverable>
      <complex></complex>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import Simple from "./simple.vue";
import Complex from "./complex.vue";
</script>
