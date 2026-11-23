"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Next.js 用 Link 完成站内跳转，用 usePathname 判断当前页面。
export default function Nav() {
  const pathname = usePathname();
  const items = [
    { href: "/", label: "个人主页" },
    { href: "/text-lab", label: "文字实验室" },
  ];

  return (
    <div className="hero-topline">
      <p className="brand-eyebrow">zero to tech</p>
      <nav className="inline-links hero-nav">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              "nav-link" + (pathname === item.href ? " active" : "")
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
