<template>
  <!-- 基础组件 - SvgIcon -->
  <a-card class="card" title="基础组件 - SvgIcon" size="small" hoverable>
    <a-space>
      <l-svg-icon size="22"></l-svg-icon>
      <l-svg-icon name="斜塔" size="22"></l-svg-icon>
      <l-svg-icon name="menu-heart" size="22" color="#e74e3d"></l-svg-icon>
    </a-space>
  </a-card>

  <!-- 基础组件 - IfyIcon -->
  <a-card class="card" title="基础组件 - IfyIcon" size="small" hoverable>
    <a-space direction="vertical">
      <p>https://dayjs.fenxianglu.cn/category/</p>
      <a-space>
        <l-ify-icon size="22"></l-ify-icon>
        <l-ify-icon name="mdi:dev-to" size="22" color="#e74e3d"></l-ify-icon>
        <l-ify-icon name="bx:camera-home" size="22"></l-ify-icon>
        <l-ify-icon name="bx:table" size="22"></l-ify-icon>
      </a-space>
      <p class="flex"><l-ify-icon name="bx:table" size="22"></l-ify-icon>表格图标</p>
    </a-space>
  </a-card>

  <!-- 基础组件 - Button -->
  <a-card class="card" title="基础组件 - Button" size="small" hoverable>
    <a-space>
      <a-button>默认按钮</a-button>
      <a-button type="primary">主要按钮</a-button>
      <a-button type="primary" class="success">成功按钮</a-button>
      <a-button type="primary" class="warning">警告按钮</a-button>
      <a-button type="primary" danger>错误按钮</a-button>
      <a-button type="primary" class="info">信息按钮</a-button>
    </a-space>
  </a-card>

  <!-- 基础组件 - 空状态 -->
  <a-card class="card" title="基础组件 - 空状态" size="small" hoverable>
    <l-empty padding="70px 0" desc="- 暂无数据 -">
      <slot>
        <p class="m-b10">我想是不是您请求数据的姿势不对呢？</p>
        <a-space :size="16">
          <a-button type="primary" class="success">重新加载</a-button>
          <a-button type="primary">返回首页</a-button>
        </a-space>
      </slot>
    </l-empty>
  </a-card>

  <!-- 基础组件 - 表格组件- 选择数据 -->
  <a-card class="card" title="基础组件 - 表格组件- 选择数据" size="small" hoverable>
    <table-choose></table-choose>
  </a-card>

  <!-- 基础组件 - 表格组件- 选择数据 -->
  <a-card class="card" title="基础组件 - 表格组件- 选择数据" size="small" hoverable>
    <table-edit></table-edit>
  </a-card>

  <!-- 公共方法 - 上传文件 -->
  <a-card class="card" title="公共方法 - 上传文件" size="small" hoverable>
    <l-upload-file :config="upload.config" @file:change="(fileList) => (upload.fileLists = fileList)"></l-upload-file>
    <p>{{ upload.fileLists }}</p>
  </a-card>

  <!-- 公共方法 - 下载文件 -->
  <a-card class="card" title="公共方法 - 下载文件" size="small" hoverable>
    <a-popconfirm
      title="确认要下载文件么?"
      ok-text="确认"
      cancel-text="取消"
      placement="topLeft"
      @confirm="handleDownloadByUrl"
    >
      <a-button type="primary" :loading="loading">文件地址下载</a-button>
    </a-popconfirm>
    <a-popconfirm
      class="m-l8"
      title="确认要下载文件么?"
      ok-text="确认"
      cancel-text="取消"
      placement="topLeft"
      @confirm="handleDownByData"
    >
      <a-button type="primary" :loading="loading">文件流下载</a-button>
    </a-popconfirm>
  </a-card>

  <!-- 公共方法 - 本地存储 - localstorage -->
  <a-card class="card" title="公共方法 - 本地存储 - localstorage" size="small" hoverable>
    <a-space>
      <a-button type="primary" @click="handleStorage.get">获取</a-button>
      {{ `storage.get("xxx")` }}
      <a-button type="primary" class="success" @click="handleStorage.set">设置</a-button>
      {{ `storage.set("xxx", {a: 1, b: 2})` }}
      <a-button type="primary" danger @click="handleStorage.remove">删除</a-button>
      {{ `storage.remove("xxx")` }}
      <a-button type="primary" danger @click="handleStorage.clear">清空</a-button>
      {{ `storage.clear()` }}
    </a-space>
  </a-card>

  <!-- 公共方法 - 新窗口访问 GET 请求 -->
  <a-card class="card" title="公共方法 - 新窗口访问 GET 请求" size="small" hoverable>
    <a-button type="primary" @click="() => openTargetWindow({extends: {target: '_blank'}})">打开</a-button>
  </a-card>

  <!-- 自定义指令 - 标签权限 -->
  <a-card class="card" title="自定义指令 - 标签权限" size="small" hoverable>
    <div v-permission="['all']">
      权限判断: {{`
      <div v-permission="['all']">权限判断</div>
      `}}
    </div>
  </a-card>

  <!-- 自定义指令 - 可拖拽弹出框 -->
  <div class="card">
    <modal-drag></modal-drag>
  </div>

  <!-- 自定义指令 - 数字格式化 -->
  <a-card class="card" title="自定义指令 - 数字格式化" size="small" hoverable>
    <number-format></number-format>
  </a-card>

  <!-- 三方插件 - 复制到剪贴板 - vue-clipboard3 -->
  <a-card class="card" title="三方插件 - 复制到剪贴板 - vue-clipboard3" size="small" hoverable>
    <a-button type="primary" @click="clipboard('Hello,')">复制 'Hello,' 到剪贴板</a-button>
  </a-card>

  <!-- 三方插件 - 拖拽排序 - vuedraggable -->
  <a-card class="card" title="三方插件 - 拖拽排序 - vuedraggable" size="small" hoverable>
    <vuedraggable></vuedraggable>
  </a-card>

  <!-- 三方插件 - 日期插件 - dayjs -->
  <a-card class="card" title="三方插件 - 日期插件 - dayjs" size="small" hoverable>
    <a-space direction="vertical">
      <p>https://dayjs.fenxianglu.cn/category/</p>
      <p>{{ day }}</p>
      <p>{{ day.format("YYYY-MM-DD") }}</p>
      <p>{{ day.format("YYYY-MM-DD HH:MM:ss") }}</p>
    </a-space>
  </a-card>

  <!-- 三方插件 - 日期插件 - Lodash -->
  <a-card title="三方插件 - 日期插件 - Lodash" size="small" hoverable>
    <a-space>
      <a-button type="primary" @click="debounce">防抖函数</a-button>
      <a-button type="primary" class="success" @click="throttle">节流函数</a-button>
    </a-space>
  </a-card>
</template>
<script setup lang="ts">
import {ref, reactive} from "vue";
import _ from "lodash";
import {message} from "ant-design-vue";
import useClipboard from "vue-clipboard3";
import dayjs from "dayjs";
import storage from "@/utils/local-storage";
import {openTargetWindow} from "@/api/develop";
import {downloadByUrl, downloadByData} from "@/api/common/download";
import ModalDrag from "../directive/modal-drag/index.vue";
import NumberFormat from "../directive/number-format/index.vue";
import TableChoose from "../table-choose/index.vue";
import TableEdit from "../table-edit/index.vue";
import vuedraggable from "../others/vuedraggable/index.vue";

/**
 * @description 上传组件
 */
const upload = reactive({
  config: {
    maxCount: 2,
    fileList: [
      {
        name: "xx.png",
        status: "done",
        response: {
          status: true,
        },
      },
    ],
  },
  fileLists: [
    {
      name: "xx.png",
      status: "done",
      response: {
        status: true,
      },
    },
  ],
});

/**
 * @description 下载组件
 */
const loading = ref(false);
const handleDownloadByUrl = async () => {
  loading.value = true;
  await downloadByUrl("https://i.postimg.cc/Lsw8GQv5/icon.jpg", "logo.jpg");
  loading.value = false;
};
const handleDownByData = async () => {
  loading.value = true;
  await downloadByData("content text", "text.txt");
  loading.value = false;
};

/**
 * 本地存储 - storage
 */
const handleStorage = {
  get: () => message.success(`获取成功: ${JSON.stringify(storage.get("xxx"))}`),
  set: () => {
    storage.set("xxx", {a: 1, b: 2});
    message.success(`设置成功`);
  },
  remove: () => {
    storage.remove("xxx");
    message.success(`删除成功`);
  },
  clear: () => {
    storage.clear();
    message.success(`清空成功`);
  },
};

/**
 * 三方插件 - 复制到剪贴板 - vue-clipboard3
 */
const {toClipboard} = useClipboard();
const clipboard = async (text: string) => {
  try {
    await toClipboard(`${text} - ${Date.now()}`);
    message.success(`${text} 已复制到剪贴板`);
  } catch (e) {
    console.error(e);
  }
};

/**
 * 三方插件 - 日期插件 - dayjs
 */
const day = dayjs();

/**
 * 三方插件 - 日期插件 - Lodash
 */
const debounce = _.debounce(() => message.success("防抖函数"), 600);
const throttle = _.throttle(() => message.success("节流函数"), 600);
</script>
<style scoped lang="scss">
.card {
  margin-bottom: 16px;
}
</style>
