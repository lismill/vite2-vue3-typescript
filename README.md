## 依赖信息

```
"dependencies": {
  "@iconify/iconify": "^2.2.1",
  "ant-design-vue": "^3.2.0",
  "axios": "^0.26.1",
  "dayjs": "^1.11.1",
  "echarts": "^5.3.2",
  "nprogress": "^0.2.0",
  "pinia": "^2.0.13",
  "qrcode": "^1.5.0",
  "qs": "^6.10.3",
  "screenfull": "^6.0.1",
  "vue": "^3.2.25",
  "vue-router": "^4.0.14",
  "vuedraggable": "^4.1.0"
},
"devDependencies": {
  "@commitlint/cli": "^16.2.3",
  "@commitlint/config-conventional": "^16.2.1",
  "@iconify/json": "^2.1.29",
  "@types/node": "^17.0.23",
  "@typescript-eslint/eslint-plugin": "^5.18.0",
  "@typescript-eslint/parser": "^5.18.0",
  "@vitejs/plugin-vue": "^2.3.0",
  "@vitejs/plugin-vue-jsx": "^1.3.10",
  "commitizen": "^4.2.4",
  "cz-conventional-changelog": "^3.3.0",
  "eslint": "^7.32.0",
  "eslint-config-airbnb-base": "^15.0.0",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-import": "^2.26.0",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-plugin-vue": "^8.6.0",
  "husky": "^7.0.4",
  "less": "^4.1.2",
  "mockjs": "^1.1.0",
  "prettier": "^2.6.2",
  "rollup-plugin-visualizer": "^5.6.0",
  "sass": "^1.50.1",
  "typescript": "^4.5.4",
  "unplugin-vue-components": "^0.19.3",
  "vite": "^2.9.0",
  "vite-plugin-compression": "^0.5.1",
  "vite-plugin-eslint": "^1.3.0",
  "vite-plugin-mock": "^2.9.6",
  "vite-plugin-purge-icons": "^0.8.1",
  "vite-plugin-svg-icons": "^2.0.1",
  "vue-tsc": "^0.29.8"
},
```

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

![基础框架结构](https://i.postimg.cc/zXKGnM42/dashboard.png)

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

## 配置 TSX 支持

### 安装

`npm install --save-dev @vitejs/plugin-vue-jsx`

### 配置

`vite.config.ts`

```
import vueJsx from "@vitejs/plugin-vue-jsx";

// ...

plugins.push(
  vueJsx()
);
```

### 使用

`index.tsx`

```
import {defineComponent} from "vue";

export default defineComponent({
  setup() {
    return () => <div class="tsx bg-ffffff p-16">
      这是一个 tsx 文件
    </div>;
  },
});
```

## 自定义指令 - 标签权限

### 配置

`main.ts`

```
import directives from "@/utils/directives";
// ...
directives.forEach((directive) => directive.name && app.directive(directive.name, directive));
```

`src/stores/permission.ts`

```
import {defineStore} from "pinia";

const useStorePermission = defineStore("STORE_PERMISSION)", {
  state: () => {
    return {
      permissions: ["all"],
    };
  },
  actions: {},
});
export default useStorePermission;
```

`src/utils/directives/permission.ts`

```
import {DirectiveBinding} from "vue";
import useStorePermission from "@/stores/permission";

export default {
  name: "permission",
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const USE_STORE_PERMISSION = useStorePermission();
    const {permissions} = USE_STORE_PERMISSION;

    if (Array.isArray(binding.value) && binding.value.every((v: string) => typeof v === "string")) {
      const HAS = binding.value.every((v: string) => (permissions as Array<string>).includes(v));
      !HAS && el.parentNode && el.parentNode.removeChild(el);
    } else {
      console.error(`v-permission: ${binding.instance?.$el.baseURI} parameter must be an Array<string>.`);
      el.parentNode && el.parentNode.removeChild(el);
    }
  },
};
```

### 使用

```
<div v-permission="['all']">权限判断</div>
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

## 配置页面缓存和标签页缓存

### 实现逻辑

`整体思路`

- 路由设置 keepAlive 标识
- 获取有缓存标识的路由 name
- 存入 store
- router-view 的 include 获取 store 中的值 (三级菜单缓存, router-view 的 name 也需要缓存)
- 根据标签页的操作处理缓存

`标签页面操作`

- 删除标签页: 清除 include 中的 name
- 清空标签页: 恢复 include 的默认值
- 刷新当前路由: 先清除 include 中的 name, 借助中转路由回跳, 中转路由跳回前添加 to.name 到 include

### 关键代码

`src/views/_layout/index.vue`

```
<router-view v-slot="{Component}">
  <keep-alive :include="USE_STORE_KEEPALIVE.keepalives">
    <component :is="Component" :key="$route.path" />
  </keep-alive>
</router-view>
```

`src/router/index.ts`

```
// 缓存的菜单
export const KEEPALIVE_ROUTES = (() => {
  const KEEPALIVES: Array<string> = ["Layout"];
  function reduceKeepAlive(routes: any) {
    routes.forEach((item: any) => {
      item?.meta?.keepAlive && KEEPALIVES.push(item.meta.keepAlive);
      item?.children?.length && reduceKeepAlive(item.children ?? []);
    });
  }
  reduceKeepAlive(router.options.routes);
  return KEEPALIVES;
})();
```

`src/stores/keepalive.ts`

```
import {defineStore} from "pinia";
import {KEEPALIVE_ROUTES} from "@/router";

const useStoreKeepalive = defineStore("STORE_KEEPALIVE)", {
  state: () => {
    return {
      keepalives: KEEPALIVE_ROUTES,
    };
  },
  actions: {
    addKeepAlives(keepalive: string) {
      !this.keepalives.find((item) => item === keepalive) && this.keepalives.push(keepalive);
    },
    removeKeepAlives(keepalive: string | Array<any>) {
      typeof keepalive === "string"
        ? (this.keepalives = this.keepalives.filter((item) => item !== keepalive))
        : (this.keepalives = this.keepalives.filter(
            (item) => !keepalive.some((itemParams: any) => itemParams === item),
          ));
    },
  },
});
export default useStoreKeepalive;
```

`src/views/_layout/framework-tabs.vue`

```
<template>
  <div class="framework-tabs bg-ffffff p-l16">
    <a-tabs v-model:activeKey="activeKey" size="small" hide-add type="editable-card" @tab-click="tabClick" @edit="edit">
      <a-tab-pane
        v-for="(tab, index) in USE_STORE_TABS.tabs"
        :key="tab.path"
        :tab="tab.title"
        :closable="index !== 0"
      ></a-tab-pane>
      <template #rightExtra>
        <div class="toolbar p-r16">
          <span title="刷新页面" @click="reload">
            <l-ify-icon name="zondicons:reload" size="16"></l-ify-icon>
          </span>
          <span v-if="USE_STORE_TABS.tabs.length > 1" title="全部关闭" @click="closeAll">
            <l-ify-icon name="mdi:window-close" size="17" style="top: 4px"></l-ify-icon>
          </span>
        </div>
      </template>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStoreTabs from "@/stores/tabs";
import useStoreKeepalive from "@/stores/keepalive";

const ROUTE = useRoute();
const ROUTER = useRouter();
const USE_STORE_TABS = useStoreTabs();
const USE_STORE_KEEPALIVE = useStoreKeepalive();
const activeKey = ref(USE_STORE_TABS.tabs[0].path);

// 清除 keepalive
const removeKeepAlive = () => {
  ROUTE.meta?.keepAlive && USE_STORE_KEEPALIVE.removeKeepAlives(ROUTE.meta.keepAlive as string);
};

// 添加 keepalive
const addKeepAlive = () => {
  ROUTE.meta?.keepAlive && USE_STORE_KEEPALIVE.addKeepAlives(ROUTE.meta.keepAlive as string);
};

// 切换标签
const tabClick = (path: any) => ROUTER.push(path);

// 删除标签
const edit = (path: any) => {
  // 清除 tab
  if (ROUTE.path === path) {
    const LAST_TABS = USE_STORE_TABS.removeTabs(path);
    USE_STORE_TABS.tabs.length === 1 ? ROUTER.push(USE_STORE_TABS.tabs[0].path) : ROUTER.push(LAST_TABS);
  } else {
    USE_STORE_TABS.removeTabs(path);
    USE_STORE_TABS.tabs.length === 1 && ROUTER.push(USE_STORE_TABS.tabs[0].path);
  }
  // 清除 keepalive
  removeKeepAlive();
};

// 刷新路由
const reload = () => {
  removeKeepAlive();
  ROUTER.push(`/framework/redirect?keepalive=${ROUTE.meta.keepAlive}`);
};

// 关闭全部标签
const closeAll = () => {
  USE_STORE_TABS.resetTabs();
  ROUTER.push(USE_STORE_TABS.tabs[0].path);
};

// 设置标签页
const changeTabs = () => {
  USE_STORE_TABS.changeTabs({
    path: ROUTE.path,
    title: ROUTE.meta?.title,
    hidden: ROUTE.meta?.hidden ?? false,
  });
  activeKey.value = ROUTE.path;
  addKeepAlive();
};

watch(
  () => ROUTE.path,
  () => changeTabs(),
);

onMounted(() => changeTabs());
</script>

<style lang="scss" scoped>
.framework-tabs
  :deep(.ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top
    > div
    > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav) {
  margin: 2px 0 0 0;
}

.framework-tabs
  :deep(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-top
    > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top
    > div
    > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before) {
  border-bottom: 1px solid rgba(240, 242, 245, 1);
}

.framework-tabs :deep(.ant-tabs-tab-remove) {
  margin-left: 1px;
  font-size: 11px;
}

.toolbar {
  span {
    cursor: pointer;
    padding: 4px;
    &:hover {
      opacity: 0.85;
    }
  }
}
</style>
```

## 配置富文本编辑器 - wangeditor

### 安装

```
npm install @wangeditor/editor --save
npm install @wangeditor/editor-for-vue@next --save
```

### 配置

`src/components/l-editor/index.vue`

```
<template>
  <div class="l-editor">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
    <Editor
      v-model="valueHtml"
      style="overflow-y: hidden"
      :style="{height: `${height}px`}"
      :default-config="editorConfig"
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
    mode?: "normal" | "simple";
    height?: number;
    toolbarConfig?: any;
    editorConfig?: any;
  }>(),
  {
    content: "<p>hello</p>",
    mode: "simple",
    height: 360,
    toolbarConfig: {},
    editorConfig: {placeholder: "请输入内容..."},
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
```

### 使用

`src/views/develop/components/editor/index.vue`

```
<template>
  <div class="bg-ffffff p-16">
    <div class="m-b16">
      <p>绑定的html: {{ content }}</p>
    </div>
    <l-editor :content="content" :height="500" @change="(v) => (content = v)"></l-editor>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const content = ref("<p>Hello, </p>");
</script>

<style lang="scss" scoped></style>
```

## 配置地图显示 - amap

### 安装

`npm install @amap/amap-jsapi-loader --save`

### 配置

`src/components/l-amap/index.vue`

```
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
      props.customMap(map, AMap);
    })
    .catch((e) => console.log(e));
};

onMounted(() => initMap());
</script>
```

### 简单方式使用

```
<template>
  <div class="bg-ffffff p-16">
    <l-amap
      :height="500"
      :marker="[
        [121.472773, 31.233082],
        [121.479167, 31.227284],
      ]"
    ></l-amap>
  </div>
</template>
```

### 复杂方式使用

```
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

## 配置可视化图表库 - ECharts

### 安装

`npm install echarts --save`

### 配置

`src/components/l-echarts/index.vue`

```
<template>
  <div id="echarts" ref="chart"></div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import * as echarts from "echarts";
import type {EChartsType, EChartsOption} from "echarts";

const props = defineProps<{option: EChartsOption}>();

const chart = ref<HTMLElement>();
let myEcharts: EChartsType | null = null;

const init = () => {
  myEcharts = echarts.init(chart.value as HTMLElement);
  myEcharts.setOption(props.option);
  window.onresize = () => (myEcharts as EChartsType).resize();
};

onMounted(() => init());
</script>

<style lang="scss" scoped>
#echarts {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
```

### 使用

`index.vue`

```
<template>
  <div style="height: 260px">
    <l-echarts :option="option"></l-echarts>
  </div>
</template>

<script setup lang="ts">
import type {EChartsOption} from "echarts";

const option: EChartsOption = {
  xAxis: {},
  yAxis: {},
  grid: {
    left: "2%",
    right: "2%",
    top: "2%",
    bottom: "2%",
    containLabel: true,
  },
  series: [
    {
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68],
      ],
      type: "scatter",
    },
  ],
};
</script>
```

## 配置生成二维码图片和下载 - qrcode

### 安装

`npm install --save qrcode`

### 配置

`src/components/l-qrcode/index.vue`

```
<template>
  <div v-if="type === 'canvas'" :id="ID" class="qrcode qrcode-canvas"></div>
  <div v-else class="qrcode qrcode-image">
    <img :id="ID" :style="{width: `${width}px`, height: `${width}px`}" />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import QRCode from "qrcode";

interface IQRCode {
  type?: "canvas" | "image";
  text: string;
  width?: string;
  dark?: string;
  light?: string;
}

const emit = defineEmits(["get:canvas:url", "get:image:url"]);
const props = withDefaults(defineProps<IQRCode>(), {
  type: "canvas",
  text: "",
  width: "160",
  dark: "#000000",
  light: "#ffffff",
});
// 动态节点id，防止多个覆盖显示
const ID = Math.random().toString(36).substr(2);
// 图片地址
const DATA_URL = ref("");

/**
 * 初始化
 * 根据配置显示 canvas 还是 image
 */
const init = () => {
  const OPTION = {
    margin: 0,
    width: Number(props.width),
    color: {
      dark: props.dark,
      light: props.light,
    },
  };
  if (props.type === "canvas") {
    QRCode.toCanvas(props.text, OPTION, (err: any, canvas: HTMLCanvasElement) => {
      if (err) throw err;
      const container: HTMLElement | null = document.getElementById(ID);
      (container as HTMLElement).appendChild(canvas);
      emit("get:canvas:url", canvas);
    });
  } else if (props.type === "image") {
    QRCode.toDataURL(props.text, OPTION, (err: any, url: any) => {
      if (err) throw err;
      const image: HTMLElement | null = document.getElementById(ID);
      (image as HTMLImageElement).src = url;
      DATA_URL.value = url;
      emit("get:image:url", DATA_URL.value);
    });
  }
};
onMounted(() => init());
</script>
```

### 使用

`index.vue`

```
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
      <a-col :span="4">
        <h3>Canvas: 111111</h3>
        <l-qrcode text="Canvas: 111111" @get:canvas:url="getCanvasUrl1"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handleDownloadByCanvas1">下载</a-button>
      </a-col>
      <a-col :span="4">
        <h3>Canvas: 222222</h3>
        <l-qrcode text="Canvas: 222222" @get:canvas:url="getCanvasUrl2"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handleDownloadByCanvas2">下载</a-button>
      </a-col>
      <a-col :span="4">
        <h3>Image: 111111</h3>
        <l-qrcode type="image" text="Image: 111111" @get:image:url="getImageUrl1"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handledownloadByBase641">下载</a-button>
      </a-col>
      <a-col :span="4">
        <h3>Image: 222222</h3>
        <l-qrcode type="image" text="Image: 222222" @get:image:url="getImageUrl2"></l-qrcode>
        <a-button type="primary" class="m-t16" @click="handledownloadByBase642">下载</a-button>
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
```

## 配置可拖拽组件 - vuedraggable@next

### 安装

`npm install vuedraggable@next --save`

### 配置

`src/components/l-draggable/index.vue`

```
<template>
  <draggable
    v-model="list"
    class="list-group"
    tag="transition-group"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null,
    }"
    v-bind="options"
    item-key="order"
    @start="drag = true"
    @end="drag = false"
    @change="() => emit('update:data', list)"
  >
    <template #item="{element, index}">
      <li class="list-group-item">
        <slot :element="element" :index="index"></slot>
      </li>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import {ref} from "vue";
import draggable from "vuedraggable";

interface IConfig {
  list: Array<any>;
  options?: any;
}
const emit = defineEmits(["update:data"]);
const config = withDefaults(defineProps<IConfig>(), {
  list: () => [],
  options: {
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
  },
});
const list = ref(config.list);
const drag = ref(false);
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
```

### 使用

`index.vue`

```
<template>
  <div class="bg-ffffff p-16">
    <l-draggable v-bind="config" @update:data="(data) => (config.list = data)">
      <template #default="{element, index}">
        <div class="item">
          {{ index }} -
          <a-input v-model:value="element.name" style="width: 100px"></a-input>
        </div>
      </template>
    </l-draggable>
    <p class="m-t16">{{ config.list }}</p>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const config = reactive({
  list: [
    {
      name: "111",
      order: 1,
      fixed: true,
    },
    {
      name: "222",
      order: 2,
    },
    {
      name: "333",
      order: 3,
    },
    {
      name: "444",
      order: 4,
    },
    {
      name: "555",
      order: 5,
    },
    {
      name: "666",
      order: 6,
    },
  ],
});
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #f0f0f0;
  padding: 8px 16px;
}
</style>
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

## 提交代码前对目录权限进行校验

`.husky/pre-commit`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/pre-permission"

npm run lint
```

`.husky/pre-permission`

```
#!/bin/sh
# 校验提交 src 目录的权限
NAMES=(
  lismill
)
EMAILS=(
  lismill@163.com
)
NAME=`git config user.name`
EMAIL=`git config user.email`
FILES=$(git diff --cached --name-only)

for FILE in ${FILES[@]}
do
  if [[ $FILE =~ "src/" ]]; then
    :
  else
    # 校验提交 src 以外目录的权限
    # 校验失败，撤销已暂存的文件
    echo "${NAMES[@]}" | grep -wq $NAME &&  exit 0 || echo "Error: 该用户名没有操作 src 以外目录的权限" && git reset -q HEAD -- . && exit 1
    echo "${EMAILS[@]}" | grep -wq $EMAIL &&  exit 0 || echo "Error: 该邮箱没有操作 src 以外目录的权限" && git reset -q HEAD -- . && exit 1
  fi
done
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
