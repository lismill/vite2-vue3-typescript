<template>
  <a-config-provider :locale="locale">
    <div v-if="loading" id="frameword-loading">
      <div>
        <l-ify-icon name="eos-icons:loading" size="40"></l-ify-icon>
        <p>加载中...</p>
      </div>
    </div>
    <RouterView v-else></RouterView>
  </a-config-provider>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref} from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

const locale = zhCN;

const loading = ref(true);
setTimeout(() => (loading.value = false), 600);
</script>
