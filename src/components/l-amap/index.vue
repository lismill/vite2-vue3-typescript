<template>
  <div :id="ID" :style="{height: `${height}px` ?? '800px'}"></div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

const props = withDefaults(
  defineProps<{
    mapKey?: string;
    version?: string;
    height?: number;
    viewMode?: string;
    zoom?: number;
    center?: Array<number>;
    plugins?: Array<any>;
    marker?: Array<Array<number>>;
    customMap?: any;
  }>(),
  {
    mapKey: "5f1e38f767fdef0aa26db3c27d69cc37",
    version: "2.0",
    height: 400,
    viewMode: "3D",
    zoom: 13,
    center: () => [121.47, 31.23],
    plugins: () => ["AMap.ToolBar", "AMap.Scale"],
    marker: () => [],
    customMap: () => "",
  },
);

// 动态 ID
const ID = Math.random().toString(36).substr(2);

// let map: any = shallowRef(null);
const initMap = () => {
  AMapLoader.load({
    key: props.mapKey,
    version: props.version,
    plugins: props.plugins,
  })
    .then((AMap) => {
      const map = new AMap.Map(ID, {
        viewMode: props.viewMode,
        zoom: props.zoom,
        center: props.center,
      });

      // 地图标记点
      if (props.marker?.length) {
        props.marker.forEach((position: Array<number>) => {
          const marker = new AMap.Marker({
            position,
          });
          map.add(marker);
        });
      }

      // 地图控件
      props.plugins.includes("AMap.ToolBar") && map.addControl(new AMap.ToolBar());
      props.plugins.includes("AMap.Scale") && map.addControl(new AMap.Scale());
      props.plugins.includes("AMap.HawkEye") && map.addControl(new AMap.HawkEye({isOpen: true}));
      props.plugins.includes("AMap.MapType") && map.addControl(new AMap.MapType());
      props.plugins.includes("AMap.Geolocation") && map.addControl(new AMap.Geolocation());

      // 特定方法
      props.customMap && props.customMap(map, AMap);
    })
    .catch((e) => console.log(e));
};

onMounted(() => initMap());
</script>
