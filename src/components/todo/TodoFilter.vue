<script setup>
// 三个筛选按钮：全部 / 未完成 / 已完成
defineProps({
  current: { type: String, required: true },
})

const emit = defineEmits(['change'])

const options = [
  { value: 'all', text: '全部' },
  { value: 'left', text: '未完成' },
  { value: 'done', text: '已完成' },
]
</script>

<template>
  <div class="filter">
    <button
      v-for="opt in options"
      :key="opt.value"
      class="btn"
      :class="{ on: current === opt.value }"
      @click="emit('change', opt.value)"
    >
      {{ opt.text }}
    </button>
  </div>
</template>

<style scoped>
.filter {
  display: inline-flex;
  padding: 3px;
  border-radius: 10px;
  background: #f1f5f9;
}

.btn {
  padding: 7px 16px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 13px;
  font-weight: 600;
  color: var(--soft);
  transition: all 0.15s;
}

.btn:hover {
  color: var(--ink);
}

.btn.on {
  background: #fff;
  color: var(--primary-dark);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.1);
}
</style>
