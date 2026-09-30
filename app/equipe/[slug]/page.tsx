import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team, lawyerBySlug, areaBySlug, articles } from "@/lib/site";
import ArticleCard from "@/components/ArticleCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = lawyerBySlug((await params).slug);
  if (!l) return {};
  return { title: `${l.name} — ${l.oab}`, alternates: { canonical: `/equipe/${l.slug}` } };
}

export default async function LawyerPage({ params }: Props) {
  const l = lawyerBySlug((await params).slug);
  if (!l) notFound();
  const mine = articles.filter((a) => a.authorSlug === l.slug);

  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: l.name, jobTitle: "Advogado(a)" };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Você está em">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>
            <Link href="/#equipe">Equipe</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{l.name}</span>
          </nav>
          <h1 className="title-xl">{l.name}</h1>
          <p className="lawyer-oab" style={{ marginTop: ".75rem" }}>{l.oab}</p>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="prose">
            <p>{l.bio}</p>
            <h2>Formação</h2>
            <ul className="bullets">{l.education.map((e) => <li key={e}>{e}</li>)}</ul>
            <h2>Áreas de atuação</h2>
            <ul className="bullets">
              {l.areaSlugs.map((s) => {
                const a = areaBySlug(s);
                return a ? <li key={s}><Link className="text-link" href={`/areas-de-atuacao/${s}`}>{a.title}</Link></li> : null;
              })}
            </ul>
          </div>
          {mine.length > 0 && (
            <div>
              <h2 className="title-md" style={{ marginBottom: "1.5rem" }}>Artigos publicados</h2>
              <div className="articles-grid">{mine.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
            </div>
          )}
          <div className="btn-row"><Link href="/#contato" className="btn btn-primary">Entrar em contato</Link></div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
