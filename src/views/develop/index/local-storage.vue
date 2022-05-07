<template>
  <a-card title="LocalStorage" size="small" hoverable>
    <a-space direction="vertical">
      <p><a-button size="small" @click="get">获取</a-button> storage.get("xxx")</p>
      <p><a-button size="small" @click="set">设置</a-button> storage.set("xxx", {a: 1, b: 2})</p>
      <p><a-button size="small" @click="remove">删除</a-button> storage.remove("xxx")</p>
      <p><a-button size="small" @click="clear">清空</a-button> storage.clear()</p>
    </a-space>
  </a-card>
</template>
<script setup lang="ts">
import {message} from "ant-design-vue";
import storage from "@/utils/local-storage";

const get = () => {
  message.success(`获取成功: ${JSON.stringify(storage.get("xxx"))}`);
};
const set = () => {
  storage.set("xxx", {a: 1, b: 2});
  message.success(`设置成功`);
};
const remove = () => {
  storage.remove("xxx");
  message.success(`删除成功`);
};
const clear = () => {
  storage.clear();
  message.success(`清空成功`);
};
</script>
