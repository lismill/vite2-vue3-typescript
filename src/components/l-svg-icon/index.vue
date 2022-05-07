<template>
  <svg
    :class="['svg-icon', className]"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${name}`" :fill="color" />
  </svg>
</template>
<script lang="ts">
export default {
  name: "LSvgIcon",
};
</script>
<script setup lang="ts">
withDefaults(
  defineProps<{
    className?: string;
    name?: string;
    size?: string | number;
    color?: string;
  }>(),
  {
    className: "",
    name: "404",
    color: "",
    size: "14",
  },
);
</script>

<style scope lang="scss">
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
