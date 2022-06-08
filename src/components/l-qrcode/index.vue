<template>
  <!-- header -->
  <div v-if="!!$slots.header" class="header m-b8">
    <slot name="header"></slot>
  </div>
  <div v-if="type === 'canvas'" :id="ID" class="qrcode qrcode-canvas"></div>
  <div v-else class="qrcode qrcode-image">
    <img :id="ID" :style="{width: `${width}px`, height: `${width}px`}" />
  </div>
  <!-- footer -->
  <div v-if="!!$slots.footer" class="footer m-t6">
    <slot name="footer"></slot>
  </div>
  <!-- download -->
  <div v-if="!!$slots.download" class="download m-t6">
    <slot name="download"></slot>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import QRCode from "qrcode";

interface IQRCode {
  type?: "canvas" | "image";
  text: string;
  width?: string;
  dark?: string;
  light?: string;
}

const emit = defineEmits(["get:canvas:url", "get:image:url"]);
const props = withDefaults(defineProps<IQRCode>(), {
  type: "canvas",
  text: "",
  width: "160",
  dark: "#000000",
  light: "#ffffff",
});
// 动态节点id，防止多个覆盖显示
const ID = Math.random().toString(36).substr(2);
// 图片地址
const DATA_URL = ref("");

/**
 * 初始化
 * 根据配置显示 canvas 还是 image
 */
const init = () => {
  const OPTION = {
    margin: 0,
    width: Number(props.width),
    color: {
      dark: props.dark,
      light: props.light,
    },
  };
  if (props.type === "canvas") {
    QRCode.toCanvas(props.text, OPTION, (err: any, canvas: HTMLCanvasElement) => {
      if (err) throw err;
      const container: HTMLElement | null = document.getElementById(ID);
      if (!container) return;

      container && (container as HTMLElement).appendChild(canvas);
      emit("get:canvas:url", canvas);
    });
  } else if (props.type === "image") {
    QRCode.toDataURL(props.text, OPTION, (err: any, url: any) => {
      if (err) throw err;
      const image: HTMLElement | null = document.getElementById(ID);

      if (!image) return;
      (image as HTMLImageElement).src = url;
      DATA_URL.value = url;
      emit("get:image:url", DATA_URL.value);
    });
  }
};
onMounted(() => init());
</script>
