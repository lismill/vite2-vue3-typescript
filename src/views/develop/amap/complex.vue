<template>
  <div class="bg-ffffff p-16">
    <a-button type="primary" class="m-b16" @click="add">添加坐标点到东方明珠</a-button>
    <l-amap
      :height="500"
      :marker="[
        [121.472773, 31.233082],
        [121.479167, 31.227284],
      ]"
      :custom-map="customMap"
    ></l-amap>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const rMap: any = ref();
const RAMap: any = ref();
// 添加自定义事件
const add = () => {
  const marker = new RAMap.value.Marker({
    position: [121.49969, 31.239571],
  });
  rMap.value.add(marker);
  rMap.value.setFitView();
};
// 扩展定制地图方法
const customMap = (map: any, AMap: any) => {
  rMap.value = map;
  RAMap.value = AMap;

  // 添加坐标点覆盖物
  const marker = new AMap.Marker({
    position: [121.482834, 31.236943],
  });
  map.add(marker);

  // 添加折线覆盖物
  const polyline = new AMap.Polyline({
    path: [
      new AMap.LngLat(121.431283, 31.266573),
      new AMap.LngLat(121.431798, 31.2257),
      new AMap.LngLat(121.487502, 31.223938),
      new AMap.LngLat(121.483897, 31.266133),
      new AMap.LngLat(121.431283, 31.266573),
    ],
    strokeColor: "red",
    lineJoin: "round",
  });
  map.add(polyline);

  // 添加面覆盖物
  const polygon = new AMap.Polygon({
    path: [
      new AMap.LngLat(121.441153, 31.254393),
      new AMap.LngLat(121.449436, 31.247973),
      new AMap.LngLat(121.438364, 31.240965),
      new AMap.LngLat(121.441153, 31.254393),
    ],
    strokeWeight: 2,
    fillColor: "red",
  });
  map.add(polygon);

  // 添加圆型覆盖物
  const circle = new AMap.Circle({
    center: new AMap.LngLat(121.45789, 31.249624),
    radius: 500,
    fillColor: "red",
    strokeWeight: 2,
  });
  map.add(circle);

  // 添加矩形覆盖物
  const rectangle = new AMap.Rectangle({
    bounds: new AMap.Bounds(new AMap.LngLat(121.483511, 31.271781), new AMap.LngLat(121.507157, 31.252632)),
    fillColor: "red",
  });
  map.add(rectangle);

  // 添加椭圆形覆盖物
  const ellipse = new AMap.Ellipse({
    center: [121.499861, 31.238396],
    radius: [1100, 800],
    fillColor: "red",
  });
  map.add(ellipse);

  // 添加地图点击事件
  map.on("click", (e: Event) => console.log("您点击了地图:::", e));
};
</script>
