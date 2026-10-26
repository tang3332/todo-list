<script setup>
import TodoTag from '@/components/todo/TodoTag.vue'

// item 是父组件传进来的一条待办：{ id, text, done, tag }
defineProps({
  item: { type: Object, required: true },
})

// 这个组件不直接改数据，只"通知"父组件要做什么
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <li class="item" :class="{ done: item.done }">
    <button
      class="check"
      :class="{ on: item.done }"
      :title="item.done ? '标记为未完成' : '标记为已完成'"
      @click="emit('toggle')"
    >
      <span v-if="item.done">✓</span>
    </button>

    <div class="body">
      <p class="text">{{ item.text }}</p>
      <TodoTag :text="item.tag" />
    </div>

    <button class="del" title="删除" @click="emit('remove')">删除</button>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 4px;
  border-bottom: 1px solid var(--line);
}

.item:last-child {
  border-bottom: none;
}

/* 勾选框 */
.check {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border: 2px solid #d3dce8;
  border-radius: 50%;
  background: #fff;
  color: #fff;
  font-size: 12px;
  line-height: 1;
  display: grid;
  place-items: center;
  transition: all 0.15s;
}

.check:hover {
  border-color: var(--primary);
}

.check.on {
  background: var(--green);
  border-color: var(--green);
}

.body {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.text {
  font-size: 14.5px;
  word-break: break-word;
}

/* 完成之后文字变灰、加删除线 */
.done .text {
  color: var(--light);
  text-decoration: line-through;
}

.del {
  flex-shrink: 0;
  padding: 5px 10px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: #94a3b8;
  font-size: 12.5px;
  transition: all 0.15s;
}

.del:hover {
  background: #fef3f2;
  color: #d9534f;
}
</style>
