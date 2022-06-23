<template>
  <a-row class="l-statistic" type="flex" justify="space-between" align="bottom">
    <a-col v-for="item in data" :key="item.title" :span="span" class="m-tb12 flex flex-y-end">
      <!-- icon -->
      <img v-if="!!item.status" src="./images/up.png" class="m-r20" width="50" />
      <img v-else src="./images/down.png" class="m-r20" width="50" />

      <!-- statistic -->
      <a-statistic :value="item.value">
        <template #title>
          {{ item.title }}
          <a-tooltip v-if="item.tips" placement="top">
            <template #title>{{ item.tips }}</template>
            <l-ify-icon
              class="cursor-pointer"
              name="ant-design:question-circle-filled"
              color="#666666"
              size="16"
            ></l-ify-icon>
          </a-tooltip>
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
interface IData {
  title: string;
  value: string | number;
  status: 1 | 0;
  tips?: string;
}

withDefaults(
  defineProps<{
    data: Array<IData>;
    span: string;
  }>(),
  {
    span: "6",
  },
);
</script>
