<template>
  <l-table :config="config" @click:operate="clickOperate">
    <template #operate="scope">
      <a class="link" @click="clickOperate({name: '编辑'}, scope.rows)">编辑</a>
      <a class="link" @click="clickOperate({name: '删除'}, scope.rows)">删除</a>
    </template>
    <template #image>
      <img style="width: 32px; height: 32px; border-radius: 50%" src="https://i.postimg.cc/Lsw8GQv5/icon.jpg" />
      <span class="m-l6">Lean</span>
    </template>
  </l-table>
</template>
<script setup lang="ts">
import {notification} from "ant-design-vue";
import config from "./config";

/**
 * 点击操作按钮
 */
const clickOperate = (item: any, data: any) => {
  console.log("data:::", data);
  /**
   * 处理业务逻辑
   */
  switch (item.name) {
    case "编辑":
      notification.success({message: `${item.name}`, description: "处理编辑业务逻辑", duration: 2.5});
      break;
    case "删除":
      notification.success({message: `${item.name}`, description: "处理删除业务逻辑", duration: 2.5});
      break;
    case "新增数据":
      notification.success({message: `${item.name}`, description: "处理新增数据业务逻辑", duration: 2.5});
      break;
    case "导出数据":
      notification.success({message: `${item.name}`, description: "处理导出数据业务逻辑", duration: 2.5});
      break;
    case "查看配置":
      notification.success({message: `${item.name}`, description: "处理查看配置业务逻辑", duration: 2.5});
      break;
    case "批量开始":
      notification.success({message: `${item.name}`, description: "处理批量开始业务逻辑", duration: 2.5});
      break;
    case "批量关闭":
      notification.success({message: `${item.name}`, description: "处理批量关闭业务逻辑", duration: 2.5});
      break;
    default:
      break;
  }
};
</script>
<script lang="ts">
export default {name: "DevelopComponentsTable"};
</script>
