<template>
  <div class="l-editor">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
    <Editor
      v-model="valueHtml"
      style="overflow-y: hidden"
      :style="{height: `${height}px`}"
      :default-config="{
        ...editorConfig,
        readOnly: disabled,
      }"
      :mode="mode"
      @on-created="handleCreated"
      @on-change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, ref, shallowRef} from "vue";
import {Editor, Toolbar} from "@wangeditor/editor-for-vue";
import {IDomEditor} from "@wangeditor/editor";
import "@wangeditor/editor/dist/css/style.css";

const props = withDefaults(
  defineProps<{
    content?: string;
    disabled?: boolean;
    mode?: "normal" | "simple";
    height?: number;
    toolbarConfig?: any;
    editorConfig?: any;
  }>(),
  {
    content: "<p>hello</p>",
    disabled: false,
    mode: "simple",
    height: 360,
    toolbarConfig: {},
    editorConfig: {placeholder: "请输入内容...", readOnly: true},
  },
);
const emits = defineEmits(["change"]);

// 编辑器实例
const editorRef = shallowRef();

// 内容HTML
const valueHtml = ref(props.content);

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: IDomEditor) => (editorRef.value = editor);
const handleChange = (editor: IDomEditor) => emits("change", editor.getHtml());
</script>
<style scoped lang="scss">
.l-editor {
  border: 1px solid #d9d9d9;
}
</style>
