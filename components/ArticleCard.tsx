import Link from "next/link";
import { formatDate, type Article } from "@/lib/site";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <p className="article-meta">
        <b>{article.category}</b>
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </p>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <Link href={`/artigos/${article.slug}`} className="text-link">Leia o artigo</Link>
    </article>
  );
}
