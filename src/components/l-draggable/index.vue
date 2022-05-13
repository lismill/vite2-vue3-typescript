<template>
  <draggable
    v-model="list"
    class="list-group"
    tag="transition-group"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null,
    }"
    v-bind="options"
    item-key="order"
    @start="drag = true"
    @end="drag = false"
    @change="() => emit('update:data', list)"
  >
    <template #item="{element, index}">
      <li class="list-group-item">
        <slot :element="element" :index="index"></slot>
      </li>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import {ref} from "vue";
import draggable from "vuedraggable";

interface IConfig {
  list: Array<any>;
  options?: any;
}
const emit = defineEmits(["update:data"]);
const config = withDefaults(defineProps<IConfig>(), {
  list: () => [],
  options: {
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
  },
});
const list = ref(config.list);
const drag = ref(false);
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
