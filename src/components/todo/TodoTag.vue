<script setup>
// 分类小标签，颜色按分类不同
defineProps({
  text: { type: String, required: true },
})
</script>

<template>
  <span class="tag" :class="text">{{ text }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 1px 9px;
  border-radius: 6px;
  font-size: 11.5px;
  font-weight: 600;
  background: #f1f5f9;
  color: var(--soft);
}

/* 三个分类三种颜色 */
.学习 {
  background: var(--primary-soft);
  color: var(--primary-dark);
}

.生活 {
  background: var(--green-soft);
  color: #0f8a63;
}

.工作 {
  background: #fff3e6;
  color: #b45309;
}
</style>
