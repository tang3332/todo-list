<script setup>
import { computed, ref } from 'vue'
import TodoInput from '@/components/todo/TodoInput.vue'
import TodoFilter from '@/components/todo/TodoFilter.vue'
import TodoList from '@/components/todo/TodoList.vue'
import TodoSummary from '@/components/todo/TodoSummary.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import { useTodos } from '@/store/useTodos'

const { todos, leftCount, doneCount, percent, add, toggle, remove, clearDone } = useTodos()

// 当前选中的筛选条件：all / left / done
const filter = ref('all')

// 根据筛选条件算出现在该显示哪些
const filtered = computed(() => {
  if (filter.value === 'left') return todos.value.filter((item) => !item.done)
  if (filter.value === 'done') return todos.value.filter((item) => item.done)
  return todos.value
})

// 列表空的时候，提示语要跟着筛选条件变
const emptyText = computed(() => {
  if (filter.value === 'left') {
    return { title: '没有未完成的了', desc: '全部做完了，休息一下' }
  }
  if (filter.value === 'done') {
    return { title: '还没有完成的事', desc: '去「未完成」里勾掉一件试试' }
  }
  return { title: '一条待办都没有', desc: '在上面输入框写点什么，按回车就能加' }
})
</script>

<template>
  <div class="wrap page">
    <header class="head">
      <h1>待办清单</h1>
      <p>在这里加、勾、删，改动会立刻保存</p>
    </header>

    <!-- 添加 -->
    <BaseCard class="block">
      <TodoInput @add="add" />
    </BaseCard>

    <!-- 概览 + 筛选 + 列表 -->
    <BaseCard class="block">
      <TodoSummary
        :left="leftCount"
        :done="doneCount"
        :percent="percent"
        @clear="clearDone"
      />

      <div class="filter-row">
        <TodoFilter :current="filter" @change="filter = $event" />
      </div>

      <TodoList
        :items="filtered"
        :empty-title="emptyText.title"
        :empty-desc="emptyText.desc"
        @toggle="toggle"
        @remove="remove"
      />
    </BaseCard>
  </div>
</template>

<style scoped>
.page {
  padding-top: 40px;
}

.head {
  margin-bottom: 22px;
}

.head h1 {
  font-size: 28px;
  letter-spacing: -0.02em;
}

.head p {
  margin-top: 5px;
  font-size: 14px;
  color: var(--soft);
}

.block {
  margin-bottom: 18px;
}

.filter-row {
  margin: 16px 0 4px;
}

@media (max-width: 560px) {
  .page {
    padding-top: 28px;
  }

  .head h1 {
    font-size: 24px;
  }
}
</style>
