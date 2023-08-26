# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


# 1.Getting Started

with yarn
```bash
yarn create vite
```
next
```
  cd vite-typescript-element-app
  yarn
  yarn dev
```

## 1.1
修改开发端口
vite.config.ts
```
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 41024
  }
})
```
更改标题和图标
index.html


## 1.2 在项目中使用 Element Plus。
```
yarn add element-plus
// main.ts
```
完整引入#
https://element-plus.gitee.io/zh-CN/guide/quickstart.html


## 1.3 路由vue-router的使用

安装vue-router
```
yarn add vue-router@4
```
安装完成后在src下创建router文件夹和index.ts, 文件结构如上边的图。

路径别名配置
我们在vite.config.ts, 加入以下内容：

```ts
import path from "path"

  resolve: {
    alias: {
      '@':path.resolve(__dirname,"src")
    }
  }
```
然后在tsconfig.json，加入以下内容:

``` 
"compilerOptions": {
    "baseUrl": "./", // 解析非相对模块名的基准目录，默认当前目录
    "paths": {"@/*": ["src/*"]}, // 路径映射条目，相当于baseUrl
}
```
## 1.4 安装 Axios:
```
// http请求
yarn add axios

```

## 1.5 国际化支持

https://vue-i18n.intlify.dev/guide/installation.html

yarn add vue-i18n@9

存在问题
无法找到模块“vue-i18n”的声明文件
还有$t的使用也会报类型错
```
改为 pnpm安装解决问题
# 安装 pnpm
npm install pnpm -g
# 安装依赖
pnpm install
# 启动运行
pnpm run dev

更新所有插件
pnpm update

```

## 1.6 Pinia状态管理

https://pinia.vuejs.org/zh/core-concepts/

```
pnpm install pinia

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()  //必须使用变量，否则报错
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```