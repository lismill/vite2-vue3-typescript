<template>
  <div class="bg-ffffff p-16">
    <div class="m-b16">
      <p>绑定的html: {{ content }}</p>
    </div>
    <l-editor :content="content" :height="500" @change="(v) => (content = v)"></l-editor>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const content = ref("<p>Hello, </p>");
</script>

<style lang="scss" scoped></style>
