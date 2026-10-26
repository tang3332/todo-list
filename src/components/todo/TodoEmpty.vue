<script setup>
// 列表为空的时候显示这个
defineProps({
  title: { type: String, default: '这里空空的' },
  desc: { type: String, default: '' },
})
</script>

<template>
  <div class="empty">
    <div class="icon">📝</div>
    <p class="title">{{ title }}</p>
    <p v-if="desc" class="desc">{{ desc }}</p>
  </div>
</template>

<style scoped>
.empty {
  padding: 48px 20px;
  text-align: center;
}

.icon {
  font-size: 38px;
  opacity: 0.55;
  margin-bottom: 12px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: var(--soft);
}

.desc {
  margin-top: 6px;
  font-size: 13px;
  color: var(--light);
}
</style>
