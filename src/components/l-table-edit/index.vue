<template>
  <div
    v-if="deepConfig.data && deepConfig.columns"
    class="l-table-edit"
    :style="{
      border: deepConfig.border
        ? `${deepConfig?.borderColor ? `1px solid ${deepConfig.borderColor}` : '1px solid #1a73e8'}`
        : '',
      padding: deepConfig.border ? '16px' : '',
    }"
  >
    <a-form ref="formRef" :model="form">
      <!-- 添加按钮 -->
      <a-button v-if="deepConfig.headerButton !== false && !deepConfig.disabled" class="m-b16 m-r8" @click="addRow">
        添加数据
      </a-button>
      <!-- 操作按钮 -->
      <a-button v-if="!deepConfig.disabled" type="primary" class="m-b16 m-r8" @click="onCheck">确认数据</a-button>
      <a-button v-if="deepConfig.disabled" class="success m-b16" type="primary" @click="deepConfig.disabled = false">
        编辑数据
      </a-button>
      <!-- 头部提示 -->
      <div v-if="deepConfig.headerTips" class="m-b16" v-html="deepConfig.headerTips"></div>
      <!-- 表格 -->
      <a-table
        :data-source="deepConfig.data"
        :columns="deepConfig.columns"
        :pagination="false"
        v-bind="deepConfig.others"
      >
        <!-- 内容 -->
        <template #bodyCell="{column, text, index}">
          <!-- 序号 -->
          <template v-if="['#', '序号'].includes(column.title)">{{ index + 1 }}</template>
          <!-- 默认列 -->
          <template v-else>
            <template v-if="column.type">
              <!-- input -->
              <a-form-item v-if="column.type === 'input'" :name="`${column.dataIndex}[${index}]`" :rules="column.rules">
                <a-input
                  v-model:value="form[`${column.dataIndex}[${index}]`]"
                  :allow-clear="true"
                  :placeholder="`请输入${column.title}`"
                  :disabled="deepConfig.disabled"
                  v-bind="column.others"
                  @change="onChange(column, index)"
                />
              </a-form-item>
              <!-- date -->
              <a-form-item v-if="column.type === 'date'" :name="`${column.dataIndex}[${index}]`" :rules="column.rules">
                <a-date-picker
                  v-model:value="form[`${column.dataIndex}[${index}]`]"
                  class="w-100"
                  :placeholder="`请选择${column.title}`"
                  :disabled="deepConfig.disabled"
                  v-bind="column.others"
                  @change="onChange(column, index)"
                />
              </a-form-item>
              <!-- daterange -->
              <a-form-item
                v-if="column.type === 'daterange'"
                :name="`${column.dataIndex}[${index}]`"
                :rules="column.rules"
              >
                <a-range-picker
                  v-model:value="form[`${column.dataIndex}[${index}]`]"
                  :placeholder="[`开始${column.title}`, `结束${column.title}`]"
                  :disabled="deepConfig.disabled"
                  class="w-100"
                  v-bind="column.others"
                  @change="onChange(column, index)"
                />
              </a-form-item>
              <!-- select -->
              <a-form-item
                v-if="column.type === 'select'"
                :name="`${column.dataIndex}[${index}]`"
                :rules="column.rules"
              >
                <a-select
                  v-model:value="form[`${column.dataIndex}[${index}]`]"
                  :allow-clear="true"
                  :placeholder="`请选择${column.title}`"
                  :disabled="deepConfig.disabled"
                  class="w-100"
                  v-bind="column.others"
                  @change="onChange(column, index)"
                >
                  <a-select-option v-for="option in column.options" :key="option.label" :value="option.value">
                    {{ option.label }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <!-- operate -->
              <template v-if="column.type === 'operate'">
                <span v-if="deepConfig.disabled" class="operate-disabled">删除</span>
                <a-popconfirm v-else placement="topRight" title="确定删除数据么?" @confirm="deleteRow(index)">
                  <a class="link">删除</a>
                </a-popconfirm>
              </template>
            </template>
            <template v-else>{{ text }}</template>
          </template>
        </template>
      </a-table>
      <!-- 添加数据 -->
      <a-button
        v-if="deepConfig.footerButton !== false && !deepConfig.disabled"
        class="m-t16"
        block
        type="dashed"
        @click="addRow"
      >
        添加数据
      </a-button>
      <!-- 底部提示 -->
      <div v-if="deepConfig.footerTips" class="m-t16" v-html="deepConfig.footerTips"></div>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import {ref, reactive} from "vue";
import type {FormInstance} from "ant-design-vue";

const props = defineProps<{
  config: any;
}>();
const emit = defineEmits(["update:table:edit"]);
const formRef: any = ref<FormInstance>();
const form: any = reactive({});
const deepConfig = reactive(props.config);

/**
 * 添加数据
 */
const addRow = () => deepConfig.data.push({});

/**
 * 删除数据
 */
const deleteRow = (index: number) => deepConfig.data.splice(index, 1);

/**
 * 表单切换
 */
const onChange = (column: any, index: number) => {
  const DATA = form[`${[column.dataIndex]}[${index}]`];
  deepConfig.data[index][column.dataIndex] = DATA;
};

/**
 * 校验表单
 * 校验通过提交数据
 */
const onCheck = async () => {
  try {
    await formRef.value.validate();
    deepConfig.disabled = true;
    emit("update:table:edit", deepConfig.data);
  } catch (error) {
    // pass
  }
};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
.l-table-edit {
  .ant-table-cell a.link {
    margin-right: 12px;
    color: #1a73e8;
    font-size: 13px;
    &:last-child {
      margin-right: 0;
    }
  }
  .ant-table-cell .operate-disabled {
    cursor: not-allowed;
    color: #999999;
  }
  :deep(.ant-form-item) {
    margin-bottom: 0;
  }
  :deep(.ant-form-item-with-help .ant-form-item-explain) {
    position: absolute;
    top: 30px;
    font-size: 12px;
    min-height: 12px;
  }
}
</style>
