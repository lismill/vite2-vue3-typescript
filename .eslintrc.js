module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    // 'plugin:vue/essential',
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // 是否禁止console.log
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 是否禁止debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 是否禁止存在未使用的表达式
    "no-unused-expressions": "off",
    // 是否禁止使用++
    "no-plusplus": "off",
    // 禁止在返回语句中赋值
    "no-return-assign": "off",
    // 禁止变量声明覆盖外层作用域的变量
    "no-shadow": "off",
    // 禁止使用 v-html
    "vue/no-v-html": "off",
    // 关闭any类型的警告
    "@typescript-eslint/no-explicit-any": ["off"],
    // 忽略路径别名
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": "off",
    // 关闭驼峰命名规则
    "vue/multi-word-component-names": 0,
  },
};
