import Link from "next/link";
import Nav from "./Nav.jsx";
import PageHeading from "./PageHeading.jsx";
import AnimatedCardGrid from "./AnimatedCardGrid.jsx";
import { home } from "../../data/site.js";

export default function HomePage() {
  return (
    <AnimatedCardGrid className="dashboard-grid">
      {/* 复用：Nav 和 PageHeading 都和文字实验室共享，只是 PageHeading 的 props 换了内容 */}
      <article className="hero-stage panel-full">
        <Nav />
        <PageHeading title={home.heroTitle} subtitle={home.heroSubtitle} />
      </article>

      {/* 下面这两张卡只在首页用、也不复杂，就直接写在这儿——不必为了拆而拆 */}
      <article className="panel panel-full featured-work-panel card">
        <p className="section-kicker">{home.featuredWork.kicker}</p>
        <p className="featured-title">{home.featuredWork.title}</p>
        <p className="featured-copy">{home.featuredWork.copy}</p>
        <Link className="featured-link" href="/text-lab">
          <span className="featured-link-label">{home.featuredWork.linkLabel}</span>
          <span className="arrow">›</span>
        </Link>
      </article>

      <article className="panel panel-full identity-panel card">
        <div className="identity-item">
          <p className="section-kicker">{home.identity.mottoLabel}</p>
          <p className="identity-value identity-quote">{home.identity.motto}</p>
        </div>
        <div className="identity-item">
          <p className="section-kicker">{home.identity.learningLabel}</p>
          <p className="identity-value">{home.identity.learning}</p>
        </div>
      </article>
    </AnimatedCardGrid>
  );
}
