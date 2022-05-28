<template>
  <div class="bg-ffffff p-16">
    <p>可以缓存的创建页面</p>
    <div class="m-t16">
      <a-input v-model="name" style="width: 200px" placeholder="请输入表单" :allow-clear="true"></a-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const name = ref("");
</script>
<script lang="ts">
export default {
  name: "DevelopComponentsTableCreate",
};
</script>
