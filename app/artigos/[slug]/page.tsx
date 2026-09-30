import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, articleBySlug, lawyerBySlug, formatDate } from "@/lib/site";
import ArticleCard from "@/components/ArticleCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = articleBySlug((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/artigos/${a.slug}` },
    openGraph: { type: "article", publishedTime: a.date },
  };
}

export default async function ArticlePage({ params }: Props) {
  const a = articleBySlug((await params).slug);
  if (!a) notFound();
  const author = lawyerBySlug(a.authorSlug);
  const related = articles.filter((x) => x.slug !== a.slug && x.areaSlug === a.areaSlug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: a.date,
    author: author ? { "@type": "Person", name: author.name } : undefined,
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Você está em">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>
            <Link href="/#conteudos">Informação jurídica</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{a.category}</span>
          </nav>
          <h1 className="title-xl">{a.title}</h1>
          <p className="article-meta" style={{ marginTop: "1.25rem" }}>
            <b>{a.category}</b>
            <time dateTime={a.date}>{formatDate(a.date)}</time>
            {author && <span>{author.name} — {author.oab}</span>}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="prose">
            <p className="lead">{a.excerpt}</p>
            <p>Conteúdo do artigo a ser redigido e revisado pelo escritório, com linguagem informativa e sem promessa de resultado.</p>
            <h2>Referências jurídicas</h2>
            <ul className="bullets"><li>Legislação e jurisprudência aplicáveis, a serem indicadas pelo autor.</li></ul>
          </div>
          {related.length > 0 && (
            <div>
              <h2 className="title-md" style={{ marginBottom: "1.5rem" }}>Artigos relacionados</h2>
              <div className="articles-grid">{related.map((r) => <ArticleCard key={r.slug} article={r} />)}</div>
            </div>
          )}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
