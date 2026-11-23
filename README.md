# zero-to-tech-4-1 · Next.js 迁移练习

这个项目原来使用 React + Vite，现在已按照“零到全栈”模块 4.5 的方式迁移到 Next.js。页面内容、组件拆分和 anime.js 动画保持不变，入口和路由交给 Next.js 管理。

## 运行项目

```bash
npm install
npm run dev
```

浏览器打开 <http://localhost:3000>。

生产构建：

```bash
npm run build
npm run start
```

## 项目结构

```text
app/
  layout.jsx          全站 HTML 外壳和全局 CSS
  page.jsx            首页，对应 /
  text-lab/page.jsx   文字实验室，对应 /text-lab
src/
  components/         React 组件
  css/                页面样式
data/
  site.js             页面内容数据
next.config.mjs       Next.js 配置
```

## 从 React + Vite 到 Next.js 的变化

- 删除了 Vite 的 `index.html`、`vite.config.js`、`src/main.jsx` 和 `src/App.jsx`。
- `app/layout.jsx` 取代原来的 HTML 外壳和 React 挂载入口。
- `app/page.jsx` 与 `app/text-lab/page.jsx` 使用文件夹定义两个真实 URL。
- 导航由普通链接回调改为 Next.js 的 `Link` 和 `usePathname`。
- 使用浏览器状态、事件或动画的组件通过 `"use client"` 标记为客户端组件。
- 纯展示组件仍是服务端组件，可由 Next.js 预先生成 HTML。
- 页面文案集中在 `data/site.js`，组件负责展示，输入框由 React state 驱动字数统计。

这仍然是 React：Next.js 建立在 React 之上，并补充了路由、服务端渲染、构建和部署等能力。
