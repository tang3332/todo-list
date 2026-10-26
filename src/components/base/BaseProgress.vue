<script setup>
// 进度条：传进来一个 0~100 的数字，决定里面那条彩色条的宽度
defineProps({
  percent: { type: Number, default: 0 },
})
</script>

<template>
  <div class="track">
    <!-- 宽度用行内 style 动态控制 -->
    <div class="fill" :style="{ width: percent + '%' }"></div>
  </div>
</template>

<style scoped>
.track {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: #e3ebf5;
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #60a5fa, var(--primary));
  transition: width 0.35s ease;
}
</style>
