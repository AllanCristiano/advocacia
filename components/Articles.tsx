import Reveal from "./Reveal";
import ArticleCard from "./ArticleCard";
import { articles } from "@/lib/site";

export default function Articles() {
  return (
    <section id="conteudos" className="section" aria-labelledby="art-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 id="art-title" className="title-lg">Informação jurídica</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="articles-grid">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
