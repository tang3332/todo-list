<template>
  <footer class="footer">
    <div class="wrap inner">
      <span>今天做什么 · 一个 Vue 3 练习作品</span>
      <span class="hint">待办数据保存在你自己的浏览器里，换台电脑就没有了</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: #fff;
  padding: 22px 0;
}

.inner {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  justify-content: space-between;
  font-size: 12.5px;
  color: var(--light);
}
</style>
