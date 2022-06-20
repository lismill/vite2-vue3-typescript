<template>
  <div class="bg-ffffff p-16">
    <p v-pre>{{ useEnv() }}</p>
    :
    <p>{{ useEnvValue() }}</p>
  </div>
</template>

<script setup lang="ts">
import {useEnvValue} from "@/hooks/useEnvValue";
</script>

<style lang="scss" scoped></style>
