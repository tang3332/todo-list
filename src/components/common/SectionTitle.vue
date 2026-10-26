<script setup>
// 每个小节的标题：一个大标题 + 一行灰色说明
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: 16px;
}

h2 {
  font-size: 19px;
}

p {
  margin-top: 4px;
  font-size: 13px;
  color: var(--soft);
}
</style>
