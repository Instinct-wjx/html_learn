import "../src/css/reset.css";
import "../src/css/variables.css";
import "../src/css/layout.css";
import "../src/css/hero.css";
import "../src/css/nav.css";
import "../src/css/cards.css";
import "../src/css/lab.css";
import "../src/css/responsive.css";

export const metadata = {
  title: "zero to tech",
  description: "个人主页与文字实验室",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="app-shell">
          <div className="page-shell">
            <main className="page-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
