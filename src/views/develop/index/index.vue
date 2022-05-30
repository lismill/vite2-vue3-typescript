<template>
  <div class="demo">
    <demo-svg-icon></demo-svg-icon>
    <demo-ify-icon></demo-ify-icon>
    <a-card title="按钮" size="small" hoverable>
      <demo-button></demo-button>
    </a-card>
    <a-card title="自定义指令 - 标签权限" size="small" hoverable>
      <div v-permission="['all']">
        权限判断: {{`
        <div v-permission="['all']">权限判断</div>
        `}}
      </div>
    </a-card>
    <a-card title="自定义指令 - 可拖拽弹出框" size="small" hoverable>
      <modal-drag></modal-drag>
    </a-card>
    <demo-local-storage></demo-local-storage>
    <demo-open-target-window></demo-open-target-window>
    <demo-download-file></demo-download-file>
    <demo-upload-file></demo-upload-file>
    <a-card title="编辑表格" size="small" hoverable>
      <demo-table-edit></demo-table-edit>
    </a-card>
    <a-card title="选择数据" size="small" hoverable>
      <demo-table-choose></demo-table-choose>
    </a-card>
    <demo-dayjs></demo-dayjs>
    <a-card title="vuedraggable" size="small" hoverable>
      <vuedraggable></vuedraggable>
    </a-card>
    <demo-empty></demo-empty>
  </div>
</template>
<script setup lang="ts">
import DemoSvgIcon from "./svg-icon.vue";
import DemoIfyIcon from "./ify-icon.vue";
import DemoButton from "./button.vue";
import DemoLocalStorage from "./local-storage.vue";
import DemoDayjs from "./dayjs.vue";
import DemoOpenTargetWindow from "./open-target-window.vue";
import DemoDownloadFile from "./download-file.vue";
import DemoUploadFile from "./upload-file.vue";
import DemoEmpty from "./empty.vue";
import DemoTableEdit from "../table-edit/index.vue";
import DemoTableChoose from "../table-choose/index.vue";
import Vuedraggable from "../vuedraggable/index.vue";
import ModalDrag from "../modal-drag/index.vue";
</script>

<style lang="scss" scoped>
.ant-card {
  margin-bottom: 16px;
}
</style>
