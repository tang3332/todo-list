<script setup>
import TodoItem from '@/components/todo/TodoItem.vue'
import TodoEmpty from '@/components/todo/TodoEmpty.vue'

// items 是筛好之后要显示的数组
defineProps({
  items: { type: Array, required: true },
  emptyTitle: { type: String, default: '这里空空的' },
  emptyDesc: { type: String, default: '' },
})

const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <div>
    <!-- 有数据就渲染列表，没数据就显示空状态 -->
    <ul v-if="items.length > 0" class="list">
      <TodoItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @toggle="emit('toggle', item.id)"
        @remove="emit('remove', item.id)"
      />
    </ul>

    <TodoEmpty v-else :title="emptyTitle" :desc="emptyDesc" />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
</style>
