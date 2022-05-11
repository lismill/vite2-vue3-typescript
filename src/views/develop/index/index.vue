<template>
  <div class="demo">
    <demo-svg-icon></demo-svg-icon>
    <demo-ify-icon></demo-ify-icon>
    <demo-open-target-window></demo-open-target-window>
    <demo-download-file></demo-download-file>
    <demo-dayjs></demo-dayjs>
    <demo-local-storage></demo-local-storage>
    <demo-upload-file></demo-upload-file>
  </div>
</template>
<script setup lang="ts">
import DemoSvgIcon from "./svg-icon.vue";
import DemoIfyIcon from "./ify-icon.vue";
import DemoLocalStorage from "./local-storage.vue";
import DemoDayjs from "./dayjs.vue";
import DemoOpenTargetWindow from "./open-target-window.vue";
import DemoDownloadFile from "./download-file.vue";
import DemoUploadFile from "./upload-file.vue";
</script>

<style lang="scss" scoped>
.ant-card {
  margin-bottom: 16px;
}
</style>
