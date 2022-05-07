// 自动导入
const modules = import.meta.globEager("./**/*.vue");
const COMPONENTS = Object.values(modules)
  .map((item) => {
    return {
      name: item.default?.name,
      component: item.default,
    };
  })
  .filter((item) => item.name);

export default COMPONENTS;
