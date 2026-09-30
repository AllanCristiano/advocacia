import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, areaBySlug, articles, faq, team, site } from "@/lib/site";
import LawyerCard from "@/components/LawyerCard";
import ArticleCard from "@/components/ArticleCard";
import FAQ from "@/components/FAQ";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = areaBySlug((await params).slug);
  if (!area) return {};
  return {
    title: `${area.title} em ${site.city}/${site.uf}`,
    description: area.intro,
    alternates: { canonical: `/areas-de-atuacao/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const area = areaBySlug((await params).slug);
  if (!area) notFound();

  const lawyers = team.filter((l) => l.areaSlugs.includes(area.slug));
  const related = articles.filter((a) => a.areaSlug === area.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Você está em">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>
            <Link href="/#areas">Áreas de atuação</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{area.title}</span>
          </nav>
          <h1 className="title-xl">{area.title}</h1>
          <p className="lead" style={{ marginTop: "1.25rem" }}>{area.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="prose">
            <h2>Principais questões</h2>
            <ul className="bullets">
              {area.topics.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <h2>Como o escritório atua</h2>
            <p>{area.approach}</p>
          </div>

          {lawyers.length > 0 && (
            <div>
              <h2 className="title-md" style={{ marginBottom: "1.5rem" }}>Equipe relacionada</h2>
              <div className="team-grid">
                {lawyers.map((l) => <LawyerCard key={l.slug} lawyer={l} />)}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div>
              <h2 className="title-md" style={{ marginBottom: "1.5rem" }}>Conteúdos relacionados</h2>
              <div className="articles-grid">
                {related.map((a) => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      <FAQ items={faq.slice(0, 4)} id="faq-area" />

      <section className="section">
        <div className="container cta-final">
          <h2 className="title-lg">Precisa de orientação em {area.title}?</h2>
          <div className="btn-row">
            <Link href="/#contato" className="btn btn-primary">Entrar em contato</Link>
          </div>
        </div>
      </section>
    </>
  );
}
