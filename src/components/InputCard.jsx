"use client";

import { useState } from "react";

// 文字实验室的"输入区"卡片。单独拆成一块，页面读起来更清爽。
export default function InputCard() {
  const [text, setText] = useState("今天的风很轻，适合把脑海里的想法慢慢写下来。");

  return (
    <article className="panel panel-half lab-panel card">
      <div className="panel-heading">
        <p className="section-kicker">输入区</p>
        <h3>贴一段中文</h3>
      </div>
      <form className="lab-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="text-input">文本内容</label>
        <textarea
          id="text-input"
          rows="8"
          placeholder="例如：生活没有标准答案，但每一天都值得认真感受。"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <p className="lab-count">已输入 {text.length} 字</p>
        {/* 真正的分析结果将在接入后端 API 后由返回数据驱动。 */}
        <button className="primary-button" type="button">开始分析</button>
      </form>
    </article>
  );
}
