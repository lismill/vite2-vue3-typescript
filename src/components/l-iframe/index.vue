<template>
  <iframe :src="src" frameborder="0"></iframe>
</template>

<script setup lang="ts">
defineProps<{src: string}>();
</script>

<style lang="scss" scoped>
.l-iframe {
  border: none;
  width: 100%;
  height: calc(100vh - 100px);
}
</style>

<!-- /**
 * TSX
 */
import {defineComponent} from "vue"

export default defineComponent({
  name: 'l-iframe',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { src } = props
    return () => <iframe src={src}></iframe>
  }
}) -->
