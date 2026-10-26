<script setup>
import BaseProgress from '@/components/base/BaseProgress.vue'

// 待办页顶部的一条概览：还剩几件 + 进度条 + 清除已完成
defineProps({
  left: { type: Number, required: true },
  done: { type: Number, required: true },
  percent: { type: Number, required: true },
})

const emit = defineEmits(['clear'])
</script>

<template>
  <div class="summary">
    <div class="top">
      <p class="text">
        还剩 <b>{{ left }}</b> 件没做，已经完成 <b>{{ done }}</b> 件
      </p>
      <button v-if="done > 0" class="clear" @click="emit('clear')">清除已完成</button>
    </div>

    <BaseProgress :percent="percent" />

    <p class="percent">完成度 {{ percent }}%</p>
  </div>
</template>

<style scoped>
.summary {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.text {
  font-size: 13.5px;
  color: var(--soft);
}

.text b {
  color: var(--primary-dark);
  font-size: 15px;
}

.clear {
  border: none;
  background: transparent;
  color: var(--light);
  font-size: 12.5px;
  padding: 4px 8px;
  border-radius: 7px;
  transition: all 0.15s;
}

.clear:hover {
  background: #fef3f2;
  color: #d9534f;
}

.percent {
  font-size: 12px;
  color: var(--light);
  text-align: right;
}
</style>
