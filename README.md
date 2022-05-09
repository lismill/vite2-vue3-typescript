## 版本信息
|插件|版本|
| ----- | ----- |
|vite|^2.9.0|
|prettier|^2.6.2|
|eslint|^7.32.0|
|typescript|^4.5.4|

## Eslint + Prettier 代码规范和自动格式化

### 安装 Prettier

`npm install --save-dev prettier`
`.prettierrc`

```
{
  "tabWidth": 2,
  "printWidth": 120,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": false
}
```

### 安装 ESLint

#### 安装和配置

`npm install --save-dev eslint`

`npx eslint --init`

```
- How would you like to use ESLint? （你想如何使用 ESLint?）
  - To check syntax, find problems, and enforce code style（检查语法、发现问题并强制执行代码风格）
- What type of modules does your project use?（你的项目使用哪种类型的模块?）
  - JavaScript modules (import/export)
- Which framework does your project use? （你的项目使用哪种框架?）
  - Vue.js
- Does your project use TypeScript?（你的项目是否使用 TypeScript？）
  - Yes
- Where does your code run?（你的代码在哪里运行?）
  - Browser
- How would you like to define a style for your project?（你想怎样为你的项目定义风格？）
  - Use a popular style guide（使用一种流行的风格指南）
- Which style guide do you want to follow?（你想遵循哪一种风格指南?）
  - Style
- What format do you want your config file to be in?（你希望你的配置文件是什么格式?）
  - JavaScript
- Would you like to install them now with npm?
  - Yes
```

`.eslintrc.js`

```
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
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
```

#### VSCode 工作区配置

`settings.json`

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

#### VSCode 默认格式化方式

`右键 => 格式化文档的方式 => Prettier`

#### 解决 Prettier 和 ESLint 的冲突

`npm install --save-dev eslint-plugin-prettier` // 将 Prettier 的规则设置到 ESLint 的规则中。
`npm install --save-dev eslint-config-prettier` // 关闭 ESLint 中与 Prettier 中会发生冲突的规则。

#### 安装 vite 相关组件及配置

`vite.config.ts`

```
import eslintPlugin from "vite-plugin-eslint";

// ...
plugins: [
  vue(),
  eslintPlugin({
    include: ["src/**/*.js", "src/**/*.vue", "src/**/*.ts"],
    exclude: ["./node_modules/**"],
    cache: false
  })
]
```

## 设置路径别名

`vite.config.ts`

```
defineConfig({
  // ...
  resolve: {
    extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".node", ".scss"],
    alias: {
      "@": resolve("./src"),
      "@views": resolve("./src/views"),
    },
  },
})
```

`tsconfig.json`

```
{
  compilerOptions: {
    // ...
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

`.eslintrc.js`

```
{
  rules: {
    // 忽略路径别名
    "import/no-unresolved": [2, {ignore: ["^@/"]}],
  }
}
```

## 多环境配置

### 配置

`package.json`

```
scripts: {
  // ...
  "start": "npm run dev:development",
  "dev": "npm run dev:development",
  "dev:development": "vite --mode development",
  "dev:test": "vite --mode test",
  "dev:production": "vite --mode production",
  "build": "npm run build:production",
  "build:development": "vue-tsc --noEmit && vite build --mode development",
  "build:test": "vue-tsc --noEmit && vite build --mode test",
  "build:production": "vue-tsc --noEmit && vite build --mode production",
}
```

`.env.development`

```
VITE_ENV = "development"
VITE_BASE_URL = "development.xxx.com"
```

`.env.test`

```
VITE_ENV = "test"
VITE_BASE_URL = "test.xxx.com"
```

`.env.production`

```
VITE_ENV = "production"
VITE_BASE_URL = "production.xxx.com"
```

### 使用方法

```
console.log(import.meta.env);
const {VITE_ENV, VITE_BASE_URL} = import.meta.env;
```

## 配置 UI 组件库 - ant-design-vue

### 安装

```
npm install ant-design-vue --save
npm install unplugin-vue-components --save-dev
```

### 配置

`vite.config.ts`

```
/**
 * unplugin-vue-components
 * 支持UI组件库的按需导入
 * 支持自定义组件的自动按需导入
 * 自动生成 components.d.ts 语法提示与类型检测文件
 */
import Components from "unplugin-vue-components/vite";
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers";
// ...
plugins: [
  // ...
  Components({
    resolvers: [AntDesignVueResolver()],
    dts: "src/components.d.ts",
  }),
]
```

`package.json`

```
"build:development": "vue-tsc --noEmit --skipLibCheck && vite build --mode development",
"build:test": "vue-tsc --noEmit --skipLibCheck && vite build --mode test",
"build:production": "vue-tsc --noEmit --skipLibCheck && vite build --mode production",
```

`./src/assets/styles/antdv.scss`

```
@import "ant-design-vue/es/message/style";
@import "ant-design-vue/es/notification/style";
// ...
```

### 使用

`./src/views/home/index.vue`

```
<!-- https://www.antdv.com/components/overview-cn/ -->
<template>
  <a-button type="primary">primary</a-button>
  <a-tooltip>
    <template #title>prompt text</template>
    Tooltip will show when mouse enter.
  </a-tooltip>
</template>

<script setup lang="ts">
import {message, notification} from "ant-design-vue";
// ...
message.success("antdv message");
notification.open({
  message: "Notification Title",
  description: "This is the content of the notification.",
})
</script>
```

## 配置基础框架结构

![基础框架结构](https://i.postimg.cc/T2zdcK7v/dashboard.png)

## 配置主题颜色

### 安装

`npm install less --save-dev`

### 配置

`vite.config.ts`

```
css: {
  preprocessorOptions: {
    less: {
      modifyVars: {
        "primary-color": "#0960bd",
      },
      javascriptEnabled: true,
    },
  },
},
// ...
```

`main.ts`

```
import "ant-design-vue/dist/antd.less";
```

## 配置首次加载动画

`APP.vue`

```
<template>
  <div v-if="loading" id="frameword-loading">
    <div>
      <l-ify-icon name="eos-icons:loading" size="40"></l-ify-icon>
      <p>加载中...</p>
    </div>
  </div>
  <RouterView v-else></RouterView>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref} from "vue";

const loading = ref(true);
setTimeout(() => (loading.value = false), 60000);
</script>
```

`src/assets/styles/framework.scss`

```
#frameword-loading {
  position: fixed;
  width: 100wh;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
  div {
    position: absolute;
    top: 45%;
    color: #1a73e8;
    p {
      position: relative;
      left: 4px;
      font-size: 13px;
    }
  }
}
```

## 封装 localStorage

### 配置

`src/utils/local-storage/index.ts`

```
const {localStorage} = window;
/**
 * localStorage 获取
 * @param key
 * @returns
 */
const get = (key: string) => {
  try {
    if (!key) return "";
    const v = localStorage.getItem(key);
    if ((v?.startsWith("{") && v.endsWith("}")) || (v?.startsWith("[") && v.endsWith("]"))) {
      return JSON.parse(v);
    }
    return v;
  } catch (err) {
    console.log(err);
    return "";
  }
};

/**
 * localStorage 设置
 * @param key
 * @param value
 */
const set = (key: string, value: string | object) => {
  localStorage.setItem(key, typeof value === "object" ? JSON.stringify(value) : value);
};

/**
 * localStorage 删除
 * @param key
 * @returns
 */
const remove = (key: string) => {
  return localStorage.removeItem(key);
};

/**
 * localStorage 清空
 * @returns
 */
const clear = () => {
  return localStorage.clear();
};

export default {
  get,
  set,
  remove,
  clear,
};
```

### 使用

`**/*.vue`

```
import storage from "@/utils/local-storage";

// ...

// 获取
storage.get("key")

// 设置
storage.set("key", {a: 1, b: 2})

// 删除
storage.remove("key")

// 清空
storage.clear()
```

## vue-router

### 安装

`npm install --save vue-router`

### 配置

`main.ts`

```
import router from "./router";
// ...
createApp(App).use(router).mount("#app");
```

`App.vue`

```
<template>
  <Layout></Layout>
</template>

<script setup lang="ts">
import Layout from "@/views/_layout/index.vue";
</script>
```

`./src/views/_layout/index.vue`

```
<template>
  <router-view></router-view>
</template>
```

`./src/views/_layout/framework.vue`

```
<template>
  <div class="framework">
    <header>header</header>
    <suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        <div>
          <h3>loading...</h3>
        </div>
      </template>
    </suspense>
  </div>
</template>
```

`./router/index.ts`

```
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

// 自动导入当前目录下的路由配置
const modules = import.meta.globEager("./*.ts");
const ROUTES = Object.values(modules).map((routes) => routes.default);

// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
  /**
   * 自动导入路由配置
   */
  ...ROUTES,
  /**
   * 登录页面
   */
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/_login/index.vue"),
    meta: {
      title: "login",
    },
  },
  /**
   * 404 页面
   */
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("@/views/_not-found/index.vue"),
  },
];

const router = createRouter({
  // history || hash 模式
  history: createWebHistory(), // createWebHistory || createWebHashHistory
  routes,
});

export default router;
```

`./router/base.ts`

```
import Layout from "@/views/_layout/index.vue";

export default {
  path: "/",
  component: Layout,
  redirect: "/home",
  children: [
    {
      path: "home",
      name: "Home",
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: "Home",
      },
    },
    {
      path: "login",
      name: "Login",
      component: () => import("@/views/_login/index.vue"),
      meta: {
        title: "Login",
      },
    },
  ],
};
```

`./router/develop.ts`

```
import Framework from "@/views/_layout/framework.vue";

export default {
  path: "/develop",
  name: "develop",
  meta: {
    title: "develop",
  },
  component: Framework,
  redirect: "/develop/index",
  children: [
    {
      path: "index",
      name: "DevelopIndex",
      component: () => import("@/views/develop/index/index.vue"),
      meta: {
        title: "DevelopIndex",
      },
    },
  ],
};
```

### 编程式导航

```
import { useRouter, useRoute } from 'vue-router'

// 路由跳转
const router = useRouter();
router.push('/');

// 监听路由变化
const route = useRoute()
watch(() => route.query, query => {
  console.log(query)
})
```

## 配置 sass

```
npm install --save-dev sass
```

## pinia 公共状态管理

### 安装

`npm install pinia --save`

### 配置

`./src/main.ts`

```
import {createPinia} from "pinia";

// ...
createApp(App).use(pinia).mount("#app");
```

### 使用

`./src/stores/common.ts`

```
import {defineStore} from "pinia";

const useStoreCommon = defineStore("STORE_COMMON)", {
  state: () => {
    return {
      version: "v1.0",
    };
  },
  actions: {
    changeVersion(v: string) {
      this.version = v;
    },
  },
});
export default useStoreCommon;
```

`./src/stores/user.ts`

```
import {defineStore} from "pinia";

interface IUser {
  name: string;
  age: number;
}

const useStoreUser = defineStore("STORE_USER", {
  state: () => {
    return {
      user: {
        name: "lean",
        age: 1,
      },
    };
  },
  actions: {
    changeUser(user: IUser) {
      this.user = {...this.user, ...user};
    },
  },
});
export default useStoreUser;
```

`./src/views/home/index.vue`

```
<script setup lang="ts">
import useStoreCommon from "@/stores/common";
import useStoreUser from "@/stores/user";

const STORE_COMMON = useStoreCommon();
const STORE_USER = useStoreUser();

// 获取状态值
console.log(STORE_COMMON.version);
console.log(STORE_USER.user);

// 设置状态值
STORE_COMMON.changeVersion("vvv");
STORE_USER.changeUser({
  name: "leelean",
  age: 3,
});
console.log(STORE_COMMON.version);
console.log(STORE_USER.user);
</script>
```

## 配置 axios 网络请求

### 安装

```
npm install --save 'axios'
npm install --save 'qs'
npm install --save 'nprogress'
```

### 配置

`./src/env.d.ts`

```
declare module "qs";
declare module "nprogress";
```

`./src/packages/axios/index.ts`

```
import axios, {AxiosRequestConfig} from "axios";
import qs from "qs";
import nprogress from "nprogress";
import business from "./business";
import "nprogress/nprogress.css";

// 创建请求
const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  withCredentials: true,
  timeout: 1000 * 10,
  transformRequest: [
    (data: AxiosRequestConfig) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data: AxiosRequestConfig) => {
      if (typeof data === "string" && (data as "").startsWith("{")) {
        return JSON.parse(data);
      }
      return {};
    },
  ],
});

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();
/**
 * 添加请求
 * @param {Object} config
 */
const addPending = (config: AxiosRequestConfig<any>) => {
  const url = [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join("&");
  // eslint-disable-next-line no-param-reassign
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel);
      }
    });
};
/**
 * 移除请求
 * @param {Object} config
 */
const removePending = (config: any) => {
  const url = [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join("&");
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config: any) => {
    // 请求开始对之前的请求做检查取消操作
    removePending(config);
    // 将当前请求添加到 pending 中
    addPending(config);
    // 开启进度条
    nprogress.start();

    // 根据业务拦截请求
    return business.request(config);
  },
  (error) => {
    console.log("error:::", error);
  },
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    // 在请求结束后，移除本次请求
    removePending(response);

    // 关闭进度条
    nprogress.done();

    // 根据业务拦截响应
    return business.response(response);
  },
  (error) => {
    // 关闭进度条
    nprogress.done();
    if (axios.isCancel(error)) {
      console.log(`repeated request: ${error.message}`);
    } else {
      console.log("error:::", error);
    }
    return Promise.reject(error);
  },
);

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

export default service;
```

`./src/packages/axios/business.ts`

```
const config = {
  /**
   * 拦截请求处理相应的业务逻辑
   * @param request
   * @returns request
   */
  request(request: {method: string; headers: {[x: string]: string}}) {
    console.log("请求拦截器处理业务逻辑", request);

    /**
     * 处理 POST 请求参数
     */
    if (request.method.toUpperCase() === "POST") {
      request.headers["Content-Type"] = "application/json;charset=utf-8";
    }
    return request;
  },

  /**
   * 拦截响应处理相应的业务逻辑
   * @param response
   * @returns response
   */
  response(response: {data: any}) {
    console.log("返回拦截器处理业务逻辑", response);
    return response.data;
  },
};

export default config;
```

### 使用

`./src/views/home/index.vue`

```
import {getHomeList} from "@/api/home";

// ...
getHomeList({name: "", age: 0}).then((res) => {
  console.log("GetHome:::", console.log(res));
});
```

`./src/api/home/index.ts`

```
import {AxiosPromise} from "axios";
import request from "@/packages/axios";

import {IHomeListP, IHomeListR} from "./types";

// 获取首页配置
export const getHomeList = (params: IHomeListP): AxiosPromise<IHomeListR> => {
  return request.get("url", {params});
};

// 设置首页配置
export const setHomeList = (params: IHomeListP): AxiosPromise<IHomeListR> => {
  return request.post("/home/config", params);
};
```

`./src/api/home/types.ts`

```
export interface IHomeListP {
  name: string;
  age: number;
}
export interface IHomeListR {
  name: string;
  age: number;
  city: string;
}
```

## 配置日期时间库 - dayjs

### 安装

`npm install dayjs --save`

### 使用

`./src/views/home/index.vue`

```
<!-- https://dayjs.fenxianglu.cn/category -->

import dayjs from "dayjs";

const day = dayjs().format();
const day = dayjs().format('YYYY-MM-DD');
const day = dayjs().format('YYYY-MM-DD HH:mm:ss');
const day = dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss');
const day = dayjs().add(7, "day");
const day = dayjs().subtract(7, 'year');
const day = dayjs('2022-12-12').daysInMonth();
const day = dayjs().isBefore('2022-12-12', 'year');
const day = dayjs().isSame('2022-12-12', 'year');
const day = dayjs().isAfter('2022-12-12', 'year');
const day = dayjs().isSameOrBefore('2022-12-12', 'year');
const day = dayjs().isSameOrAfter('2022-12-12', 'year');

// ...
```

## 配置环境变量控制插件是否启用

### 配置

`.env.production`

```
VITE_ENV = "production"
VITE_BASE_URL = "production.xxx.com"

# 是否开启打包分析
VITE_BUILD_USE_VISUALIZER = true

# 是否开启资源压缩
VITE_BUILD_USE_COMPRESSION = true
```

### 使用

```
/* eslint-disable import/no-extraneous-dependencies */
import {defineConfig, loadEnv} from "vite";

// ...

// https://vitejs.dev/config/
export default ({mode}) => {
  const {VITE_BUILD_USE_VISUALIZER, VITE_BUILD_USE_COMPRESSION} = loadEnv(mode, process.cwd());
  /**
   * Plugins
   */
  const plugins = [];

  /**
   * 生产环境
   */
  if (process.env.NODE_ENV === "production") {
    // visualizer
    if (VITE_BUILD_USE_VISUALIZER === "true") {
      plugins.push(
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }),
      );
    }
    // compression
    if (VITE_BUILD_USE_COMPRESSION === "true") {
      plugins.push(viteCompression());
    }
  }

  return defineConfig({
    // ...
    plugins: [vue(), ...plugins],
  });
};
```

## 配置 SVG - vite-plugin-svg-icons

### 安装

`npm install vite-plugin-svg-icons --save-dev`

### 配置

`vite.config.ts`

```
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// ...
plugins: [
  // svg-icon
  createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), "src/assets/svgs")],
    symbolId: "icon-[dir]-[name]",
  }),
],
```

`main.ts`

```
import "virtual:svg-icons-register";
import components from "@/components/index";

// ...
components.forEach((component) => app.component(component.name, component.component));
```

`src/components/index.ts`

```
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
```

`src/components/svg-icon/index.vue`

```
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
```

`src/assets/svgs`

```
404.svg
// ...
```

### 使用

```
<svg-icon
  class-name="icon-xieta"
  name="斜塔"
  size="20"
></svg-icon>
```

## 配置 Iconify 图标 - vite-plugin-purge-icons

### 安装

```
npm install @iconify/iconify --save
npm install vite-plugin-purge-icons @iconify/json --save-dev
```

### 配置

`vite.config.ts`

```
import PurgeIcons from "vite-plugin-purge-icons";
// ...

plugins: [
  // ...
  // Iconify
  PurgeIcons({}),
],
```

`main.ts`

```
import "@purge-icons/generated";

// ...
```

`src/components/index.ts`

```
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
```

`src/components/ify-icon/index.vue`

```
<template>
  <span :class="`iconify ${className}`" :data-icon="name" :data-width="size" :data-height="size" :style="style"></span>
</template>

<script lang="ts">
export default {
  name: "IfyIcon",
};
</script>
<script setup lang="ts">
withDefaults(
  defineProps<{
    className?: string;
    style?: {[key: string]: string};
    name?: string;
    size?: string | number;
  }>(),
  {
    className: "",
    style: undefined,
    name: "tabler:error-404",
    size: "14",
  },
);
</script>
```

`src/components.d.ts`

```
import IfyIcon from "@/components/ify-icon/index.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    IfyIcon: typeof IfyIcon;
  }
}
export {};
```

### 使用

```
<!-- https://icon-sets.iconify.design -->
<IfyIcon
  name="bi:balloon-heart-fill"
  class-name="ify-home"
  size="20"
  :style="{color: '#e74e3d'}"
></IfyIcon>
```

## 配置压缩资源 - vite-plugin-compress

### 安装

`npm install vite-plugin-compression --save-dev`

### 配置

`vite.config.ts`

```
import viteCompression from 'vite-plugin-compression';
// ...
plugins: [
  // ...
  // compression
  viteCompression(),
]
```

### 使用

`npm run build` 执行完成后，自动生成压缩的资源文件。

## 配置打包分析 - rollup-plugin-visualizer

### 安装

`npm install rollup-plugin-visualizer --save-dev`

### 配置

``

```
import {visualizer} from "rollup-plugin-visualizer";

// ...
plugins: [
  // ...
  // visualizer
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
]
```

### 使用

`npm run build` 执行完成后，根目录会自动生成 `stats.html` 图表文件。

## 配置 mock 数据 - vite-plugin-mock

### 安装

`npm install mockjs vite-plugin-mock --save-dev`

### 配置

`.env.development` `.env.test`

```
# 开启 mock 数据
VITE_USE_MOCK = true
```

`vite.config.ts`

```
import {viteMockServe} from "vite-plugin-mock";
// ...

/**
 * 配置插件
 */
const configPlugins = ({VITE_USE_MOCK}: any) => {
  const plugins = [
    // ...
  ];

  if (process.env.NODE_ENV === "production") {
    // ...
  } else {
    /**
     * 开发环境
     */
    // mock
    VITE_USE_MOCK === "true" &&
      plugins.push(
        viteMockServe({
          // 配置mock位置
          mockPath: "/src/mock",
        }),
      );
  }
  return plugins;
};

// https://vitejs.dev/config/
export default ({mode}) => {
  const LOAD_ENV = loadEnv(mode, process.cwd());
  return defineConfig({
    // ...
    plugins: [vue(), ...configPlugins(LOAD_ENV)],
  });
};
```

### 使用

`src/mock/home.ts`

```
import {Random} from "mockjs";

const data: any = [];
for (let i = 0; i < 10; i++) {
  data.push({
    name: Random.name(),
    date: Random.date(),
  });
}

export default [
  {
    url: "/home/list",
    method: "get",
    timeout: 1500,
    response: () => {
      return {
        code: 200,
        msg: "ok",
        data,
      };
    },
  },
];

// axios.get("/home/list");
// fetch("/api/getUsers").then((res) => res.json()).then((data) => console.log(data))
```

## 配置全屏切换 - screenfull

### 安装

`npm install --save screenfull`

### 使用

`src/views/_layout/framework-header.vue`

```
<div
  class="full-screen m-r16"
  @click="
    () => {
      screenfull.toggle();
      isFullscreen = !isFullscreen;
    }
  "
>
  <a-tooltip v-if="isFullscreen">
    <template #title>退出全屏</template>
    <span>
      <l-ify-icon name="gridicons:fullscreen-exit" size="22" style="position: relative; top: 6px"></l-ify-icon>
    </span>
  </a-tooltip>
  <a-tooltip v-else>
    <template #title>全屏</template>
    <span>
      <l-ify-icon name="gridicons:fullscreen" size="22" style="position: relative; top: 6px"></l-ify-icon>
    </span>
  </a-tooltip>
</div>

// ...

// 全屏切换
const isFullscreen = ref(false);
```

## 配置打包编译基础路径前缀

`vite.config.ts`

```
const LOAD_ENV = loadEnv(mode, process.cwd());
// ...
base: command === "serve" ? "./" : LOAD_ENV.VITE_BASE_PREFIX,
```

`.env.*`

```
# 打包编译基础路径前缀
# The value can only be an absolute URL, ./, or an empty string.

// .env.development
VITE_BASE_PREFIX = "/development"

// .env.test
VITE_BASE_PREFIX = "/test"

// .env.production
VITE_BASE_PREFIX = "/production"
```

## 提交代码前进行 eslint 校验

### 安装依赖

`npm install -D husky`

### 启用 Git hooks

`husky install`

`package.json`

```
scripts: {
  // ...
  "prepare": "husky install",
  "lint": "eslint \"src/**/*.{js,jsx,vue}\""
}
```

### pre-commit

```
npx husky add .husky/pre-commit ""
```

### 修改内容

`.husky/pre-commit`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

## 提交代码前对提交信息进行校验

### 安装

`npm install @commitlint/cli @commitlint/config-conventional --save-dev`

### 配置

`commitlint.config.js`

```
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

`.husky/commit-msg`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

### 提交信息规范

```
git commit -m 'feat: 新增功能'
git commit -m 'fix: bug 修复'
git commit -m 'perf: 性能优化'
git commit -m 'docs: 文档更新'
git commit -m 'docs: 文档更新'
git commit -m 'style: 样式'
git commit -m 'test: 测试'
// ...
```

### 报错信息

```
⧗   input: 测试commitlint
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
```

## 询问式 commit 信息

### 安装

`npm install commitizen cz-conventional-changelog --save-dev`

### 配置

`package.json`

```
// ...
"scripts": {
  // ...
  "commit": "git cz"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

### 使用

`npm run commit`

```
$ npm run commit

> vite-vue-ts@0.0.0 commit E:\vite\vite-vue-ts
> git add . && git cz

cz-cli@4.2.4, cz-conventional-changelog@3.3.0

? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip)
? Write a short, imperative tense description of the change (max 94 chars):
 (13) 询问式 commit 信息
? Provide a longer description of the change: (press enter to skip)

? Are there any breaking changes? No
? Does this change affect any open issues? No

> vite-vue-ts@0.0.0 lint E:\vite\vite-vue-ts
> eslint "src/**/*.{js,ts,jsx,vue}"

[master 7af568d] feat: 询问式 commit 信息
 3 files changed, 766 insertions(+), 86 deletions(-)
```

# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

```

```
