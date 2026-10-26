<script setup>
// 通用卡片外壳：白底 + 圆角 + 边框，内容用插槽塞进来
defineProps({
  padding: { type: String, default: 'md' },
})
</script>

<template>
  <div class="card" :class="padding">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.sm {
  padding: 14px 16px;
}

.md {
  padding: 20px;
}

.lg {
  padding: 28px;
}
</style>
