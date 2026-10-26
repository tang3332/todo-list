import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TodoView from '@/views/TodoView.vue'
import AboutView from '@/views/AboutView.vue'

// 三个页面对应三个地址
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/todo', name: 'todo', component: TodoView },
  { path: '/about', name: 'about', component: AboutView },
]

const router = createRouter({
  // hash 模式：地址里带一个 #，部署到静态网页托管上刷新不会 404
  history: createWebHashHistory(),
  routes,
})

export default router
