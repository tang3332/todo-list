<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import { useTodos } from '@/store/useTodos'

const { leftCount } = useTodos()
</script>

<template>
  <section class="banner">
    <div class="wrap">
      <p class="hello">你好，今天也来理一理吧</p>

      <h1>
        今天还剩
        <span class="num">{{ leftCount }}</span>
        件事
      </h1>

      <p class="desc">
        把要做的事写下来，做完打勾，不用记在脑子里。
        所有记录都保存在你自己的浏览器里，刷新不会丢。
      </p>

      <div class="actions">
        <RouterLink to="/todo">
          <BaseButton size="lg">打开待办清单</BaseButton>
        </RouterLink>
        <RouterLink to="/about">
          <BaseButton variant="ghost" size="lg">这个网站怎么做的</BaseButton>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  padding: 64px 0 52px;
  background: linear-gradient(180deg, #eef4ff, var(--bg));
  border-bottom: 1px solid var(--line);
}

.hello {
  font-size: 14px;
  color: var(--primary-dark);
  font-weight: 600;
  margin-bottom: 14px;
}

h1 {
  font-size: clamp(30px, 5vw, 44px);
  letter-spacing: -0.02em;
}

.num {
  color: var(--primary);
  font-size: 1.15em;
  padding: 0 4px;
}

.desc {
  margin-top: 16px;
  font-size: 15px;
  color: var(--soft);
  max-width: 460px;
  line-height: 1.8;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 30px;
}

@media (max-width: 560px) {
  .banner {
    padding: 44px 0 40px;
  }

  .actions {
    flex-direction: column;
  }

  .actions a {
    display: block;
  }

  .actions :deep(.btn) {
    width: 100%;
  }
}
</style>
