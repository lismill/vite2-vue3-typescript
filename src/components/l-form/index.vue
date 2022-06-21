<template>
  <div
    v-if="deepConfig?.sections?.length > 0 && deepConfig?.form?.data"
    class="l-form"
    :class="{'p-b56': !deepConfig?.form?.dialog}"
    :style="{
      minHeight: deepConfig?.form?.dialog ? 'auto' : 'calc(100vh - 130px)',
    }"
  >
    <a-form
      ref="formRef"
      name="l-form"
      :model="deepConfig.form.data"
      @finish="onFinish"
      @finish-failed="onFinishFailed"
    >
      <div v-for="(section, index) in deepConfig.sections" :key="index">
        <div v-if="section.title" class="title m-b24">{{ section.title }}</div>
        <a-row class="p-r32">
          <a-col v-for="item in section.items" :key="item.name" :span="deepConfig?.form?.span ?? 24">
            <!-- text -->
            <a-form-item v-if="item.type === 'text'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <div class="l-h32" v-html="deepConfig.form.data[item.name]"></div>
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- switch -->
            <a-form-item v-if="item.type === 'switch'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-switch
                v-model:checked="deepConfig.form.data[item.name]"
                :disabled="config?.form?.disabled ?? false"
                v-bind="item.others"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- input -->
            <a-form-item v-if="item.type === 'input'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-input
                v-model:value="deepConfig.form.data[item.name]"
                :allow-clear="true"
                :placeholder="`请输入${item.label}`"
                :disabled="config?.form?.disabled ?? false"
                v-bind="item.others"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- textarea -->
            <a-form-item v-if="item.type === 'textarea'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-textarea
                v-model:value="deepConfig.form.data[item.name]"
                show-count
                :allow-clear="true"
                :placeholder="`请输入${item.label}`"
                :disabled="config?.form?.disabled ?? false"
                :rows="6"
                :maxlength="200"
                v-bind="item.others"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- number -->
            <a-form-item v-if="item.type === 'number'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-input-number
                v-model:value="deepConfig.form.data[item.name]"
                :placeholder="`请输入${item.label}`"
                :disabled="config?.form?.disabled ?? false"
                v-bind="item.others"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- select -->
            <a-form-item v-if="item.type === 'select'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-select
                v-model:value="deepConfig.form.data[item.name]"
                :allow-clear="true"
                :placeholder="`请选择${item.label}`"
                :disabled="config?.form?.disabled ?? false"
                v-bind="item.others"
              >
                <a-select-option v-for="option in item.options" :key="option.label" :value="option.value">
                  {{ option.label }}
                </a-select-option>
              </a-select>
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- cascader -->
            <a-form-item v-if="item.type === 'cascader'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-cascader
                v-model:value="deepConfig.form.data[item.name]"
                :allow-clear="true"
                :placeholder="`请选择${item.label}`"
                :disabled="config?.form?.disabled ?? false"
                :options="item.options"
                v-bind="item.others"
              >
              </a-cascader>
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- radio -->
            <a-form-item v-if="item.type === 'radio'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-radio-group
                v-model:value="deepConfig.form.data[item.name]"
                :disabled="config?.form?.disabled ?? false"
                :options="item.options"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- checkbox -->
            <a-form-item v-if="item.type === 'checkbox'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-checkbox-group
                v-model:value="deepConfig.form.data[item.name]"
                :disabled="config?.form?.disabled ?? false"
                :options="item.options"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- date -->
            <a-form-item v-if="item.type === 'date'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-date-picker
                v-model:value="deepConfig.form.data[item.name]"
                class="max-w-560"
                :placeholder="`请选择${item.label}`"
                :disabled="config?.form?.disabled ?? false"
                v-bind="item.others"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- time -->
            <a-form-item v-if="item.type === 'time'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-time-picker
                v-model:value="deepConfig.form.data[item.name]"
                class="max-w-560"
                :placeholder="`请选择${item.label}`"
                :disabled="config?.form?.disabled ?? false"
                v-bind="item.others"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- daterange -->
            <a-form-item v-if="item.type === 'daterange'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <a-range-picker
                v-model:value="deepConfig.form.data[item.name]"
                class="max-w-560"
                :placeholder="[`开始${item.label}`, `结束${item.label}`]"
                :disabled="config?.form?.disabled ?? false"
                v-bind="item.others"
              />
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- upload -->
            <a-form-item v-if="item.type === 'upload'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <l-upload-file
                :config="{
                  ...item.others,
                  disabled: config?.form?.disabled,
                  fileList: deepConfig.form.data[item.name],
                }"
                @file:change="(fileList) => (deepConfig.form.data[item.name] = fileList)"
              ></l-upload-file>
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- editor -->
            <a-form-item v-if="item.type === 'editor'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <l-editor
                v-bind="item.others"
                :content="deepConfig.form.data[item.name]"
                :disabled="config?.form?.disabled"
                @change="(html) => (deepConfig.form.data[item.name] = html)"
              ></l-editor>
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
            <!-- slot -->
            <a-form-item v-if="item.type === 'slot'" :name="item.name" :rules="item.rules">
              <template #label><form-tooltip v-bind="item"></form-tooltip></template>
              <div class="l-h32">
                <slot :name="item.name ?? ''" :form="deepConfig.form" :item="item"></slot>
              </div>
              <form-info v-if="item.info" :info="item.info"></form-info>
            </a-form-item>
          </a-col>
        </a-row>
      </div>
      <div
        v-if="!deepConfig.form.disabled"
        class="fixed-operates"
        :style="{
          left: USE_STORE_COMMON.collapsed ? '77px' : '217px',
          position: deepConfig?.form?.dialog ? 'static' : 'fixed',
          justifyContent: deepConfig.form?.dialog?.justify ?? 'flex-end',
        }"
      >
        <template v-if="!config?.form?.disabled">
          <!-- header -->
          <template v-if="config?.form?.operates?.header">
            <a-button
              v-for="header in deepConfig.form.operates.header"
              :key="header.name"
              class="m-lr4"
              v-bind="header.others"
              @click="() => emit('click:operate', header, deepConfig.form.data)"
            >
              {{ header.name }}
            </a-button>
          </template>
          <a-button class="info m-lr4" type="primary" @click="resetForm">重置</a-button>
          <a-button class="m-lr4" type="primary" html-type="submit">提交</a-button>
          <!-- footer -->
          <template v-if="config?.form?.operates?.footer">
            <a-button
              v-for="footer in deepConfig.form.operates.footer"
              :key="footer.name"
              class="m-lr4"
              v-bind="footer.others"
              @click="() => emit('click:operate', footer, deepConfig.form.data)"
            >
              {{ footer.name }}
            </a-button>
          </template>
        </template>
      </div>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from "vue";
import {FormInstance, message} from "ant-design-vue";
import useStoreCommon from "@/stores/common";
import formInfo from "./form-info.vue";
import formTooltip from "./form-tooltip.vue";

const props = defineProps<{
  config: any;
}>();
const emit = defineEmits(["click:operate", "on-finish"]);
defineExpose({resetForm});
const deepConfig: any = ref(props.config);
const USE_STORE_COMMON = useStoreCommon();
const formRef: any = ref<FormInstance>();

// 表单提交
const onFinish = () => {
  resetForm();
  emit("on-finish", deepConfig.value.form.data);
};

// 表单提交失败
const onFinishFailed = () => message.error("请完整填写表单");

// 表单重置
function resetForm() {
  formRef.value.resetFields();
}

// 监听属性变化
watch(
  () => props.config,
  () => (deepConfig.value = props.config),
);
</script>

<style lang="scss" scoped>
.l-form {
  .title {
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    background-color: #f8f8fa;
  }
  .max-w-560 {
    max-width: 560px;
  }
  .l-h32 {
    line-height: 32px;
  }
}
.l-form {
  :deep(.ant-form-horizontal .ant-form-item-label) {
    width: 120px;
    padding-right: 8px;
    text-align: right;
  }
  // :deep(.ant-form-horizontal .ant-form-item-control) {
  //   max-width: 560px;
  // }
  :deep(.ant-form-item .ant-input-textarea-show-count::after) {
    position: relative;
    top: -26px;
    right: 8px;
    z-index: 99;
  }

  .fixed-operates {
    padding: 16px;
    bottom: 0;
    right: 21px;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    transition: all 0.22s;
    text-align: center;
    background-color: #ffffff;
  }
}
</style>
