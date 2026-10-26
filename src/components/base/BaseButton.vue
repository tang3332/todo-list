<script setup>
// 全站通用的按钮
// type 一定要默认成 button，否则放在 form 里会被浏览器当成"提交"按钮
defineProps({
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
})
</script>

<template>
  <button :type="type" class="btn" :class="[variant, size]">
    <!-- 插槽：里面写什么就显示什么 -->
    <slot>按钮</slot>
  </button>
</template>

<style scoped>
.btn {
  border: 1px solid transparent;
  border-radius: 10px;
  font-weight: 600;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}

.btn:active {
  transform: scale(0.98);
}

/* 尺寸 */
.sm {
  padding: 6px 14px;
  font-size: 13px;
}

.md {
  padding: 10px 20px;
  font-size: 14px;
}

.lg {
  padding: 12px 26px;
  font-size: 15px;
}

/* 颜色 */
.primary {
  background: var(--primary);
  color: #fff;
}

.primary:hover {
  background: var(--primary-dark);
}

.ghost {
  background: #fff;
  border-color: var(--line);
  color: var(--ink);
}

.ghost:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.danger {
  background: #fff;
  border-color: #fecdca;
  color: #d9534f;
}

.danger:hover {
  background: #fef3f2;
}
</style>
