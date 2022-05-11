<template>
  <div class="l-upload-file">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      :action="action"
      :data="data"
      :headers="headers"
      :with-credentials="true"
      v-bind="config"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < config.maxLength">
        <l-ify-icon name="carbon:add" size="36" color="#999999" style="position: relative; top: 3px"></l-ify-icon>
      </div>
    </a-upload>
    <a-modal :visible="visible" :title="title" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="image" />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{config: any}>();
const emit = defineEmits(["file:change"]);

/**
 * 默认数据
 */
const action = import.meta.env.VITE_FILE_UPLOAD_PATH;
const data = {};
const headers = {};

/**
 * 文件上传
 */
const fileList = ref(props.config?.fileList ?? []);
const visible = ref(false);
const image = ref("");
const title = ref("");
const handleCancel = () => {
  visible.value = false;
  title.value = "";
};
const handlePreview = (file: any) => {
  visible.value = true;
  image.value = file.response.url;
  title.value = file.response.name;
};
const handleChange = ({fileList}: any) => {
  const FILE_LIST = fileList.filter((item: any) => !item.status || item.status === "done");
  emit("file:change", FILE_LIST);
};
</script>
