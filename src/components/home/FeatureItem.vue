<script setup>
// 首页的三条说明：图标 + 标题 + 一句话
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
})
</script>

<template>
  <div class="feature">
    <div class="icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </div>
</template>

<style scoped>
.feature {
  padding: 4px 0;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: var(--primary-soft);
  display: grid;
  place-items: center;
  font-size: 19px;
  margin-bottom: 14px;
}

h3 {
  font-size: 15.5px;
  margin-bottom: 6px;
}

p {
  font-size: 13px;
  color: var(--soft);
  line-height: 1.75;
}
</style>
