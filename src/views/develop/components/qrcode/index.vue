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
      <a-col :span="4" class="text-center">
        <l-qrcode text="Canvas: 111111" @get:canvas:url="getCanvasUrl1">
          <template #header>
            <div>Canvas: 111111</div>
          </template>
          <template #footer>
            <div>二维码介绍文案</div>
          </template>
          <template #download>
            <a-button type="primary" @click="handleDownloadByCanvas1">下载</a-button>
          </template>
        </l-qrcode>
      </a-col>
      <a-col :span="4">
        <l-qrcode text="Canvas: 222222" @get:canvas:url="getCanvasUrl2">
          <template #header>
            <div>Canvas: 222222</div>
          </template>
          <template #footer>
            <div>二维码介绍文案</div>
          </template>
          <template #download>
            <a-button type="primary" @click="handleDownloadByCanvas2">下载</a-button>
          </template>
        </l-qrcode>
      </a-col>
      <a-col :span="4">
        <l-qrcode type="image" text="Image: 111111" @get:image:url="getImageUrl1">
          <template #header>
            <div>Image: 111111</div>
          </template>
          <template #footer>
            <div>二维码介绍文案</div>
          </template>
          <template #download>
            <a-button type="primary" @click="handledownloadByBase641">下载</a-button>
          </template>
        </l-qrcode>
      </a-col>
      <a-col :span="4">
        <l-qrcode type="image" text="Image: 222222" @get:image:url="getImageUrl2">
          <template #header>
            <div>Image: 222222</div>
          </template>
          <template #footer>
            <div>二维码介绍文案</div>
          </template>
          <template #download>
            <a-button type="primary" @click="handledownloadByBase642">下载</a-button>
          </template>
        </l-qrcode>
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
