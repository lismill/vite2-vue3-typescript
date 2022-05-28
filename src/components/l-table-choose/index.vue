<template>
  <div class="l-table-choose">
    <a-modal
      :visible="deepConfig?.visible ?? false"
      title="选择数据"
      :width="'1100px'"
      :keyboard="false"
      :mask-closable="false"
      :destroy-on-close="true"
      v-bind="deepConfig.modal"
      @cancel="ok"
      @ok="ok"
    >
      <l-table :config="deepConfig" @update:config="updateConfig"></l-table>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import {ref, onBeforeMount} from "vue";

const props = defineProps<{config: any}>();
const emit = defineEmits(["update:table:choose"]);
const deepConfig = ref(props.config);
const ok = () => {
  deepConfig.value.visible = false;
  emit("update:table:choose", deepConfig.value);
};
const updateConfig = (v: any) => (deepConfig.value = v);
onBeforeMount(() => (deepConfig.value.visible = false));
</script>

<style scoped></style>
