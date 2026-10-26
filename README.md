# 今天做什么 · 待办清单

一个用 Vue 3 写的待办清单网站，纯前端，不需要后端。

## 运行

```bash
npm install
npm run dev      # 开发模式，默认 http://localhost:5173
npm run build    # 打包到 dist/
npm run preview  # 预览打包结果
```

## 页面

| 路由 | 页面 | 内容 |
|---|---|---|
| `/` | 首页 | 项目介绍、数据概览、功能说明 |
| `/todo` | 待办 | 输入框、状态筛选、待办列表、完成度 |
| `/about` | 关于 | 项目结构、用到的 Vue 知识点清单一览 |

## 目录结构

```
src/
├── main.js                    入口，挂载 app 和路由
├── App.vue                    根组件，页头 + 路由出口 + 页脚
├── router/index.js            路由表（hash 模式）
├── store/useTodos.js          待办数据，全站共用一份
├── style.css                  全局样式与配色变量
├── views/                     三个页面
│   ├── HomeView.vue
│   ├── TodoView.vue
│   └── AboutView.vue
└── components/                16 个组件
    ├── base/                  基础件：按钮、卡片、进度条
    ├── common/                小标题
    ├── layout/                页头、页脚
    ├── home/                  首页用：横幅、统计卡、功能条目
    └── todo/                  待办用：输入、列表、条目、标签、筛选、汇总、空态
```

一共 20 个 `.vue` 文件，代码约 1700 行。

## 数据是怎么流动的

所有待办放在 `src/store/useTodos.js` 里，`ref` 声明在函数外部，因此整个应用只有一份数据：

```js
const todos = ref([...])

export function useTodos() {
  // 增、删、改、查的方法都写在这里
  return { todos, addTodo, removeTodo, toggleTodo, clearDone, remaining, doneCount, percent }
}
```

任何组件需要数据，`import` 之后调用一次 `useTodos()` 即可拿到同一份。

组件之间遵守单向数据流：父组件用 `props` 把数据传下去，子组件不直接改数据，而是 `emit` 一个事件把操作意图告诉父组件，由父组件调用 store 里的方法。以 `TodoItem.vue` 为例，勾选框被点击时抛的是 `toggle` 事件，删除按钮抛的是 `remove` 事件。

## 用到的 Vue 知识点

| 知识点 | 位置 |
|---|---|
| `ref` 响应式数据 | `store/useTodos.js` |
| `computed` 计算属性 | `store/useTodos.js`、`TodoSummary.vue` |
| `v-model` 双向绑定 | `TodoInput.vue` |
| `v-for` 列表渲染 | `TodoList.vue`、`TodoFilter.vue` |
| `v-if` / `v-else` 条件渲染 | `TodoList.vue`、`TodoEmpty.vue` |
| `@click` 事件绑定 | `TodoItem.vue`、`TodoFilter.vue` |
| `:class` 动态样式 | `TodoItem.vue`、`TodoFilter.vue` |
| `props` 父传子 | `TodoItem.vue`、`BaseButton.vue` |
| `emits` 子传父 | `TodoItem.vue`、`TodoInput.vue` |
| 插槽 `slot` | `BaseCard.vue`、`BaseButton.vue` |
| `watch` 监听 | `store/useTodos.js`（写入 localStorage） |
| Vue Router | `router/index.js`、`TheHeader.vue` |

此外还用到 `<script setup>` 语法、组件注册、`computed` 派生列表做筛选、`localStorage` 持久化。

## 功能说明

- **加一条**：输入内容回车或点按钮，新待办进入列表
- **勾一条**：点前面的圆圈，标记完成，标题加删除线
- **删一条**：点右侧删除按钮
- **按状态筛选**：全部 / 未完成 / 已完成
- **完成度进度条**：随勾选实时变化
- **清除已完成**：一次删掉所有已完成项
- **数据持久化**：刷新页面后待办仍在，存在浏览器 localStorage 里

## 浏览器支持

Chrome、Edge、Firefox、Safari 的近期版本，移动端浏览器同样可用。
