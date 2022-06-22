<template>
  <!-- header -->
  <div
    v-if="config?.toolbar?.status || config?.toolbar?.operates"
    class="table-toolbar flex bg-ffffff p-t16 p-r16 p-l16"
    :style="{justifyContent: config?.toolbar?.status ? 'space-between' : 'flex-end'}"
  >
    <!-- status -->
    <div v-if="config?.toolbar?.status" class="status">
      <a-radio-group v-model:value="radioActive" @change="onChange">
        <a-radio-button v-for="item in config.toolbar.status" :key="item.name" :value="item.value">
          {{ item.name }}
          <span v-if="item.total" class="total"> ({{ item.total }})</span>
        </a-radio-button>
      </a-radio-group>
    </div>
    <!-- operates -->
    <!-- 自定义功能按钮 -->
    <template v-if="toolbarOperates">
      <slot name="toolbar-operates"></slot>
    </template>
    <template v-else>
      <div v-if="config?.toolbar?.operates" class="operate">
        <a-button
          v-for="item in config.toolbar.operates"
          :key="item.name"
          class="m-l8"
          v-bind="item.others"
          @click="() => emit('click:operate', item, config)"
        >
          {{ item.name }}
        </a-button>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import {ref, useSlots} from "vue";

const props = defineProps<{
  config: any;
}>();
const emit = defineEmits(["update:config", "click:operate"]);

const toolbarOperates = !!useSlots()["toolbar-operates"];

/**
 * 状态切换
 */
const radioActive = ref(props.config?.search?.data[props.config?.toolbar?.statusProp]);
const onChange = () => {
  let DATA = {
    ...props.config,
    search: {
      ...props.config.search,
      data: {
        ...props.config.search.data,
        [props.config.toolbar.statusProp]: radioActive.value,
      },
    },
  };
  props.config.footer &&
    (DATA = {
      ...DATA,
      footer: {
        ...props.config.footer,
        pagination: {
          ...props.config.footer.pagination,
          currentPage: 1,
        },
      },
    });
  emit("update:config", DATA, true);
};
</script>
<style lang="scss" scoped>
.table-toolbar {
  .total {
    color: #ff4d4f;
  }
}
</style>
