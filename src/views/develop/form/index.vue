<template>
  <div class="bg-ffffff p-16">
    <l-form :config="deepConfig" @on-finish="onFinish">
      <template #tableEdit="{form, item}">
        <p class="m-b8">我是自定义插槽 - 编辑表格 - {{ form.data[item.name] }}</p>
        <l-table-edit
          :config="{
            ...deepTableEditConfig,
            readOnly: form.disabled,
          }"
          @update:table:edit="updateTableEdit"
        ></l-table-edit>
      </template>
      <template #tableChoose="{form, item}">
        <p class="m-b8">我是自定义插槽 - 选择表格 - {{ form.data[item.name] }}</p>
        <div v-if="!form.disabled" class="bg-ffffff">
          <a-button
            type="primary"
            @click="
              () => {
                deepTableChooseConfig.table.selectedType = 'radio';
                deepTableChooseConfig.visible = true;
              }
            "
            >单选数据</a-button
          >
          <a-button
            class="success m-l8"
            type="primary"
            @click="
              () => {
                deepTableChooseConfig.table.selectedType = 'checkbox';
                deepTableChooseConfig.visible = true;
              }
            "
            >多选数据</a-button
          >
          <p class="m-tb16">已选数据：</p>
          {{ deepTableChooseConfig.table.selectedRows }}
        </div>
        <l-table-choose :config="deepTableChooseConfig" @update:table:choose="updateTableChoose"></l-table-choose>
      </template>
    </l-form>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {notification} from "ant-design-vue";
import config from "./config";
import tableEditConfig from "../table-edit/config";
import tableChooseConfig from "../table-choose/config";

const deepConfig: any = ref(config);
deepConfig.value.form.data = {
  text: "展示文本信息，支持 <b style='color: #ff4d4f;'>HTML</b>",
  slot: 1,
  switch: false,
  upload: [
    {
      name: "xx.png",
      status: "done",
      response: {
        status: true,
      },
    },
  ],
  tableChoose: [{a: 1}],
};

const deepTableEditConfig = ref(tableEditConfig);
const deepTableChooseConfig = ref(tableChooseConfig);

/**
 * 测试详情/编辑页面
 */
if (Math.random() * 2 > 1) {
  deepConfig.value = {...deepConfig.value, form: {...deepConfig.value.form, disabled: true}};
}

/**
 * 可编辑表格插槽
 */
const updateTableEdit = (data: any) => {
  notification.success({
    message: "操作提示",
    description: JSON.stringify(data),
  });
};
/**
 * 可选择表格插槽
 */
const updateTableChoose = (data: any) => {
  deepTableChooseConfig.value = data;
  notification.success({
    message: "操作提示",
    description: JSON.stringify(data.table.selectedRows),
  });
};

/**
 * 提交表单
 */
const onFinish = (data: any): void => {
  console.log("finish", data);
};
</script>
<style lang="scss" scoped></style>
