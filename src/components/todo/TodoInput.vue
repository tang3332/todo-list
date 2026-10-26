<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'

// 这个组件自己不管数据，只负责"收集用户输入"然后告诉父组件
const emit = defineEmits(['add'])

const text = ref('')
const tag = ref('学习')

const tags = ['学习', '生活', '工作']

function submit() {
  // 去掉首尾空格，空的就不加
  const value = text.value.trim()
  if (!value) return

  emit('add', value, tag.value)
  text.value = '' // 加完清空输入框
}
</script>

<template>
  <div class="box">
    <div class="row">
      <input
        v-model="text"
        type="text"
        class="input"
        placeholder="要做点什么？写完按回车"
        @keyup.enter="submit"
      />
      <BaseButton size="lg" @click="submit">添加</BaseButton>
    </div>

    <div class="tags">
      <span class="label">分类</span>
      <button
        v-for="item in tags"
        :key="item"
        class="tag"
        :class="{ on: tag === item }"
        @click="tag = item"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.row {
  display: flex;
  gap: 10px;
}

.input {
  flex: 1;
  height: 46px;
  padding: 0 16px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
  font-size: 14.5px;
  font-family: inherit;
  color: var(--ink);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.input::placeholder {
  color: var(--light);
}

.tags {
  display: flex;
  align-items: center;
  gap: 8px;
}

.label {
  font-size: 12.5px;
  color: var(--soft);
}

.tag {
  padding: 4px 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  font-size: 12.5px;
  color: var(--soft);
  transition: all 0.15s;
}

.tag:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.tag.on {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  font-weight: 600;
}

@media (max-width: 560px) {
  .input {
    font-size: 14px;
  }
}
</style>
