<script setup>
import { computed } from 'vue'
import HomeBanner from '@/components/home/HomeBanner.vue'
import StatCard from '@/components/home/StatCard.vue'
import FeatureItem from '@/components/home/FeatureItem.vue'
import TodoInput from '@/components/todo/TodoInput.vue'
import TodoList from '@/components/todo/TodoList.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useTodos } from '@/store/useTodos'

const { todos, total, leftCount, doneCount, add, toggle, remove } = useTodos()

// 首页只显示还没做的前三条
const preview = computed(() => todos.value.filter((item) => !item.done).slice(0, 3))

const features = [
  {
    icon: '✍️',
    title: '写下来就不用记',
    desc: '脑子里装着七八件事最容易忘。写下来，脑子就空出来了。',
  },
  {
    icon: '✅',
    title: '做完打个勾',
    desc: '点一下左边的圆圈就算完成，文字会变灰并划掉，看着很有成就感。',
  },
  {
    icon: '💾',
    title: '自动保存在本地',
    desc: '不用注册也不用登录，数据存在你自己的浏览器里，刷新不会丢。',
  },
]
</script>

<template>
  <div>
    <HomeBanner />

    <div class="wrap body">
      <!-- 三个数字 -->
      <div class="stats">
        <StatCard icon="📋" :value="total" label="全部待办" color="gray" />
        <StatCard icon="🔥" :value="leftCount" label="还没做" color="blue" />
        <StatCard icon="🎉" :value="doneCount" label="已完成" color="green" />
      </div>

      <!-- 待办预览 -->
      <BaseCard class="block">
        <SectionTitle title="今天要做的" subtitle="先做最上面三条，新加的会排到后面" />

        <TodoInput @add="add" />

        <div class="list-wrap">
          <TodoList
            :items="preview"
            empty-title="今天的都做完了"
            empty-desc="去待办页加几条新的事情吧"
            @toggle="toggle"
            @remove="remove"
          />
        </div>

        <RouterLink to="/todo" class="more">查看全部待办 →</RouterLink>
      </BaseCard>

      <!-- 三条说明 -->
      <div class="features">
        <FeatureItem
          v-for="item in features"
          :key="item.title"
          :icon="item.icon"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  padding-top: 32px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 22px;
}

.block {
  margin-bottom: 22px;
}

.list-wrap {
  margin-top: 8px;
}

.more {
  display: inline-block;
  margin-top: 14px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--primary);
}

.more:hover {
  color: var(--primary-dark);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 28px 4px 8px;
  border-top: 1px solid var(--line);
}

@media (max-width: 640px) {
  .stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}
</style>
