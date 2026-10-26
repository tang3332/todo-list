import { computed, ref, watch } from 'vue'

// ===== 这是一份"全站共用"的数据 =====
// 注意：todos 写在函数外面，所以整个网站只有这一份。
// 首页和待办页拿到的都是它，改一边另一边会立刻跟着变。

const DEFAULT_TODOS = [
  { id: 1, text: '看完 Vue 教程的「列表渲染」', done: true, tag: '学习' },
  { id: 2, text: '把待办清单的删除按钮做完', done: false, tag: '学习' },
  { id: 3, text: '下午三点去取快递', done: false, tag: '生活' },
]

// 从浏览器本地读上次存的数据，读不到就用默认的几条
function readLocal() {
  const saved = localStorage.getItem('my-todos')
  if (!saved) return DEFAULT_TODOS
  try {
    return JSON.parse(saved)
  } catch (error) {
    // 万一存进去的内容坏了，就当没存过，不能让页面白屏
    return DEFAULT_TODOS
  }
}

const todos = ref(readLocal())

// 只要列表有变化，就自动存进浏览器，刷新页面数据还在
watch(
  todos,
  (newValue) => {
    localStorage.setItem('my-todos', JSON.stringify(newValue))
  },
  { deep: true }
)

export function useTodos() {
  // 一共几条
  const total = computed(() => todos.value.length)

  // 还没做的有几条
  const leftCount = computed(() => todos.value.filter((item) => !item.done).length)

  // 已经做完的有几条
  const doneCount = computed(() => todos.value.filter((item) => item.done).length)

  // 完成百分比，进度条用
  const percent = computed(() => {
    if (total.value === 0) return 0
    return Math.round((doneCount.value / total.value) * 100)
  })

  // 添加一条
  function add(text, tag) {
    todos.value.push({
      id: Date.now(),
      text: text,
      done: false,
      tag: tag,
    })
  }

  // 删除一条
  function remove(id) {
    todos.value = todos.value.filter((item) => item.id !== id)
  }

  // 勾选 / 取消勾选
  function toggle(id) {
    const target = todos.value.find((item) => item.id === id)
    if (target) target.done = !target.done
  }

  // 清空已完成的
  function clearDone() {
    todos.value = todos.value.filter((item) => !item.done)
  }

  return { todos, total, leftCount, doneCount, percent, add, remove, toggle, clearDone }
}
