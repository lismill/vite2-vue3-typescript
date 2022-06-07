<template>
  <div class="bg-ffffff p-16">
    <a-button type="primary" @click="visible = true">打开弹出框</a-button>
    <a-modal
      v-model:visible="visible"
      :title="config.form?.dialog?.title ?? '创建表单'"
      width="900px"
      :footer="null"
      :destroy-on-close="true"
      @cancel="form.resetForm()"
    >
      <div v-modal-drag>
        <l-form ref="form" :config="config" @on-finish="onFinish"></l-form>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import config from "./config";

const visible = ref(false);
const form: any = ref(null);

const onFinish = (data: any): void => {
  console.log("finish", data);
  visible.value = false;
};
</script>
