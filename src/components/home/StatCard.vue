<script setup>
import BaseCard from '@/components/base/BaseCard.vue'

// 首页上的小统计卡：图标 + 数字 + 说明，都是父组件传进来的
defineProps({
  icon: { type: String, required: true },
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
  color: { type: String, default: 'blue' },
})
</script>

<template>
  <BaseCard>
    <div class="stat">
      <div class="icon" :class="color">{{ icon }}</div>
      <div>
        <div class="value">{{ value }}</div>
        <div class="label">{{ label }}</div>
      </div>
    </div>
  </BaseCard>
</template>

<style scoped>
.stat {
  display: flex;
  align-items: center;
  gap: 14px;
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 20px;
}

.blue {
  background: var(--primary-soft);
}

.green {
  background: var(--green-soft);
}

.gray {
  background: #f1f5f9;
}

.value {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.label {
  font-size: 12.5px;
  color: var(--soft);
}

/* 手机上三张卡横着排，内部改成上下结构才放得下 */
@media (max-width: 640px) {
  .stat {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .icon {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    font-size: 16px;
  }

  .value {
    font-size: 20px;
  }

  .label {
    font-size: 11.5px;
  }
}
</style>
