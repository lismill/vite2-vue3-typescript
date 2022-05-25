import type {App} from "vue";

// 自动导入当前目录下的文件
const modules = import.meta.globEager("./*.ts");
const directives = Object.values(modules).map((routes) => routes.default);

export const setupDirectives = (app: App) => {
  directives.forEach((directive) => directive.name && app.directive(directive.name, directive));
};
