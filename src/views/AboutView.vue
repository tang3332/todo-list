<script setup>
import BaseCard from '@/components/base/BaseCard.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

// 这个页面是纯静态的，就是对着一张清单把用到的知识列出来
// 每一项都标了所在文件，方便对着代码找

const points = [
  {
    name: 'ref',
    file: 'store/useTodos.js',
    desc: '定义会变的数据。整个网站的待办列表就是一个大 ref，改它页面就跟着变。',
  },
  {
    name: 'computed',
    file: 'store/useTodos.js',
    desc: '算出来的值。「还剩几条」「完成百分比」都不是单独存的，是数出来的。',
  },
  {
    name: 'v-model',
    file: 'TodoInput.vue',
    desc: '输入框和变量绑在一起。打字时变量变，清空变量时输入框也变空。',
  },
  {
    name: 'v-for',
    file: 'TodoList.vue',
    desc: '把数组变成一串列表项，:key 用一个不重复的 id，Vue 才能认得出谁是谁。',
  },
  {
    name: 'v-if / v-else',
    file: 'TodoList.vue',
    desc: '数组里有东西就显示列表，没有就显示一个空状态提示。',
  },
  {
    name: '@click',
    file: 'TodoItem.vue',
    desc: '点圆圈勾选、点删除移除，都是事件触发一个函数。',
  },
  {
    name: ':class',
    file: 'TodoItem.vue',
    desc: '根据数据切换样式。item.done 是 true 就加上 done 这个类，文字变灰加删除线。',
  },
  {
    name: 'props',
    file: 'TodoItem.vue',
    desc: '父组件把一条待办传进来。子组件只管显示，不负责改。',
  },
  {
    name: 'emit',
    file: 'TodoItem.vue',
    desc: '子组件想改数据时不能自己改，只能 emit 一个事件，让父组件去改。',
  },
  {
    name: '插槽 slot',
    file: 'BaseButton.vue',
    desc: '按钮里写什么字由使用方决定。全站所有按钮都是这一个组件。',
  },
  {
    name: 'watch',
    file: 'store/useTodos.js',
    desc: '监听列表的变化，一变就写进 localStorage，所以刷新以后数据还在。',
  },
  {
    name: 'Vue Router',
    file: 'router/index.js',
    desc: '三个页面靠地址切换。用 hash 模式，部署到静态托管上刷新不会 404。',
  },
]

const pages = [
  { path: '/', name: '首页', desc: '看到还剩几件事，也能直接加新的' },
  { path: '/todo', name: '待办', desc: '完整操作：加、勾、删、筛选' },
  { path: '/about', name: '关于', desc: '就是你现在看的这一页' },
]
</script>

<template>
  <div class="wrap page">
    <header class="head">
      <h1>关于这个网站</h1>
      <p>一个用来练习 Vue 3 的小作品，也是我做实验报告的记录</p>
    </header>

    <BaseCard class="block">
      <SectionTitle title="它是做什么的" />
      <p class="text">
        就是一个待办清单。把要做的事写进去，做完打勾，系统帮你算还剩几件。
        没有后端、不用注册，所有数据都存在你自己浏览器的 localStorage 里，
        所以换一台电脑打开就是空的。
      </p>
      <p class="text">
        整个网站只有三个页面，一条线走完：<b>首页看概况 → 待办页做操作 → 关于页看说明</b>。
      </p>
    </BaseCard>

    <BaseCard class="block">
      <SectionTitle title="三个页面" subtitle="地址里带 # 是因为用了 hash 路由" />
      <ul class="page-list">
        <li v-for="item in pages" :key="item.path" class="page-item">
          <code>{{ item.path }}</code>
          <div>
            <strong>{{ item.name }}</strong>
            <span>{{ item.desc }}</span>
          </div>
        </li>
      </ul>
    </BaseCard>

    <BaseCard class="block">
      <SectionTitle
        title="用到了哪些 Vue 知识"
        subtitle="一共 12 个点，每个都标了写在哪个文件里"
      />
      <ul class="point-list">
        <li v-for="item in points" :key="item.name" class="point">
          <div class="point-head">
            <span class="name">{{ item.name }}</span>
            <code class="file">{{ item.file }}</code>
          </div>
          <p class="desc">{{ item.desc }}</p>
        </li>
      </ul>
    </BaseCard>

    <BaseCard class="block">
      <SectionTitle title="数据是怎么流动的" />
      <p class="text">
        所有待办都放在 <code>store/useTodos.js</code> 这一个文件里。它 <code>export</code> 一个函数
        <code>useTodos()</code>，哪个组件要用数据，就 import 进来调用一下。
      </p>
      <p class="text">
        关键在 <code>todos</code> 这个 ref 写在函数外面，所以整个网站只有一份。
        首页改了，待办页马上能看到，因为它们读的是同一个变量。
      </p>
      <p class="text">
        子组件（比如一条待办）不直接改这份数据，它只 <code>emit</code> 一个事件上来，
        由页面组件调用 <code>toggle()</code> 或 <code>remove()</code> 去改。
        这样数据只有一处会被修改，出了问题好找。
      </p>
    </BaseCard>
  </div>
</template>

<style scoped>
.page {
  padding-top: 40px;
}

.head {
  margin-bottom: 22px;
}

.head h1 {
  font-size: 28px;
  letter-spacing: -0.02em;
}

.head p {
  margin-top: 5px;
  font-size: 14px;
  color: var(--soft);
}

.block {
  margin-bottom: 18px;
}

.text {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.9;
  margin-bottom: 10px;
}

.text:last-child {
  margin-bottom: 0;
}

.text b {
  color: var(--ink);
}

code {
  padding: 1px 6px;
  border-radius: 5px;
  background: #f1f5f9;
  color: var(--primary-dark);
  font-size: 12.5px;
  font-family: Consolas, Monaco, monospace;
}

/* 页面列表 */
.page-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.page-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.page-item code {
  min-width: 62px;
  text-align: center;
  flex-shrink: 0;
}

.page-item div {
  display: flex;
  flex-direction: column;
}

.page-item strong {
  font-size: 14px;
}

.page-item span {
  font-size: 12.5px;
  color: var(--soft);
}

/* 知识点列表 */
.point-list {
  display: flex;
  flex-direction: column;
}

.point {
  padding: 13px 0;
  border-bottom: 1px solid var(--line);
}

.point:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.point-head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.name {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--primary-dark);
}

.file {
  font-size: 11.5px;
  background: #f8fafc;
  color: var(--soft);
}

.desc {
  font-size: 13px;
  color: var(--soft);
  line-height: 1.75;
}

@media (max-width: 560px) {
  .page {
    padding-top: 28px;
  }

  .head h1 {
    font-size: 24px;
  }
}
</style>
