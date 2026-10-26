<script setup>
import { useRoute } from 'vue-router'
import { useTodos } from '@/store/useTodos'

// route 里存着当前地址，用来给当前页的导航加高亮
const route = useRoute()

// 拿一下"还剩几条"，显示在导航上
const { leftCount } = useTodos()

const links = [
  { to: '/', text: '首页' },
  { to: '/todo', text: '待办' },
  { to: '/about', text: '关于' },
]
</script>

<template>
  <header class="header">
    <div class="wrap inner">
      <RouterLink to="/" class="logo">
        <span class="dot"></span>
        今天做什么
      </RouterLink>

      <nav class="nav">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="link"
          :class="{ active: route.path === link.to }"
        >
          {{ link.text }}
          <!-- 只有"待办"这一项显示数量 -->
          <span v-if="link.to === '/todo' && leftCount > 0" class="badge">{{ leftCount }}</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.inner {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
}

.nav {
  display: flex;
  gap: 4px;
}

.link {
  position: relative;
  padding: 7px 15px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  color: var(--soft);
  transition: color 0.15s, background 0.15s;
}

.link:hover {
  color: var(--ink);
  background: #f1f5f9;
}

.link.active {
  color: var(--primary-dark);
  background: var(--primary-soft);
}

.badge {
  display: inline-block;
  min-width: 17px;
  padding: 0 5px;
  margin-left: 5px;
  border-radius: 999px;
  background: var(--primary);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
  line-height: 17px;
  vertical-align: 1px;
}

@media (max-width: 560px) {
  .logo {
    font-size: 15px;
  }

  .link {
    padding: 7px 10px;
    font-size: 13px;
  }
}
</style>
