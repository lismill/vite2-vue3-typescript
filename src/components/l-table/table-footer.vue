<template>
  <div
    v-if="config?.footer?.operates || config?.footer?.pagination"
    class="table-footer bg-ffffff flex"
    :class="{fixed: config?.footer?.fixed}"
    :style="{
      zIndex: 999,
      justifyContent: config?.footer?.operates ? 'space-between' : 'flex-end',
      paddingBottom: config?.footer?.fixed ? '0' : '16px',
      left: USE_STORE_COMMON.collapsed ? '77px' : '217px',
    }"
  >
    <!-- operates -->
    <div v-if="config.footer.operates" class="m-l16">
      <a-checkbox v-model:checked="checked" class="m-l8" @click="selectAll">
        {{ checked ? "取消全选" : "全部选中" }}
      </a-checkbox>
      <a-button
        v-for="item in config.footer.operates"
        :key="item.name"
        class="m-l8"
        v-bind="item.others"
        @click="clickOperate(item)"
      >
        {{ item.name }}
      </a-button>
    </div>

    <!-- pagination -->
    <div v-if="config.footer.pagination" class="table-pagination bg-ffffff p-16">
      <a-pagination
        :current="props.config.footer.pagination.currentPage"
        show-quick-jumper
        :total="config.footer.pagination?.total ?? 0"
        :show-total="() => `共 ${config.footer.pagination?.total ?? 0} 条数据`"
        @change="onChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from "vue";
import {message} from "ant-design-vue";
import useStoreCommon from "@/stores/common";

const props = defineProps<{config: any}>();
const emit = defineEmits(["update:config", "click:operate"]);
const USE_STORE_COMMON = useStoreCommon();

const checked = ref(props.config?.footer?.checked ?? false);
const selectAll = () => {
  emit("update:config", {
    ...props.config,
    table: {
      ...props.config.table,
      selectedRows: props.config.footer.checked ? [] : props.config.table.data,
    },
    footer: {
      ...props.config.footer,
      checked,
    },
  });
};

watch(
  () => props.config?.footer?.checked,
  (v) => (checked.value = v),
);

/**
 * 分页切换
 */
const onChange = (page: number, pageSize: number) => {
  emit(
    "update:config",
    {
      ...props.config,
      footer: {
        ...props.config.footer,
        pagination: {
          ...props.config.footer.pagination,
          currentPage: page,
          pageSize,
        },
      },
    },
    true,
  );
};

/**
 * 操作按钮
 */
const clickOperate = (item: any) => {
  if (props.config?.table?.selectedRows?.length) {
    emit("click:operate", item, props.config);
  } else {
    message.error("操作提示: 请先选择数据");
  }
};
</script>
<style lang="scss" scoped>
.table-footer.fixed {
  position: fixed;
  bottom: 0;
  right: 21px;
  transition: all 0.22s;
}
:deep(.ant-pagination-prev),
:deep(.ant-pagination-next),
:deep(.ant-pagination-jump-prev),
:deep(.ant-pagination-jump-next) {
  display: inline-grid;
}
</style>
