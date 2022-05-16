<template>
  <div class="bg-ffffff p-16">
    <!-- 
      type?: "canvas" | "image";
      text: string;
      width?: string;
      dark?: string;
      light?: string;
     -->
    <a-row type="flex" justify="space-around">
      <a-col :span="4">
        <h3>Canvas: 111111</h3>
        <l-qrcode text="Canvas: 111111" @get:canvas:url="getCanvasUrl1"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handleDownloadByCanvas1">下载</a-button>
      </a-col>
      <a-col :span="4">
        <h3>Canvas: 222222</h3>
        <l-qrcode text="Canvas: 222222" @get:canvas:url="getCanvasUrl2"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handleDownloadByCanvas2">下载</a-button>
      </a-col>
      <a-col :span="4">
        <h3>Image: 111111</h3>
        <l-qrcode type="image" text="Image: 111111" @get:image:url="getImageUrl1"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handledownloadByBase641">下载</a-button>
      </a-col>
      <a-col :span="4">
        <h3>Image: 222222</h3>
        <l-qrcode type="image" text="Image: 222222" @get:image:url="getImageUrl2"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handledownloadByBase642">下载</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {downloadByBase64, downloadByCanvas} from "@/api/common/download";

/**
 * 显示图片和下载图片
 */
const imageUrl1 = ref("");
const imageUrl2 = ref("");
const getImageUrl1 = (data: string) => (imageUrl1.value = data);
const getImageUrl2 = (data: string) => (imageUrl2.value = data);
const handledownloadByBase641 = () => downloadByBase64(imageUrl1.value, "二维码.png");
const handledownloadByBase642 = () => downloadByBase64(imageUrl2.value, "二维码.png");

/**
 * 显示 canvas 和下载 canvas
 */
const canvasUrl1 = ref<HTMLCanvasElement>();
const canvasUrl2 = ref<HTMLCanvasElement>();
const getCanvasUrl1 = (data: HTMLCanvasElement) => (canvasUrl1.value = data);
const getCanvasUrl2 = (data: HTMLCanvasElement) => (canvasUrl2.value = data);
const handleDownloadByCanvas1 = () => downloadByCanvas(canvasUrl1.value, "二维码.png");
const handleDownloadByCanvas2 = () => downloadByCanvas(canvasUrl2.value, "二维码.png");
</script>
