import Reveal from "./Reveal";
import { faq } from "@/lib/site";

export default function FAQ({ items = faq, id = "faq" }: { items?: { q: string; a: string }[]; id?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section id={id} className="section section-white" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <div className="faq-grid">
            <div className="section-head">
              <h2 id={`${id}-title`} className="title-lg">Perguntas frequentes</h2>
              <p className="lead">As respostas serão revisadas pelo escritório antes da publicação.</p>
            </div>
            <div className="faq-list">
              {items.map((i) => (
                <details key={i.q}>
                  <summary>{i.q}</summary>
                  <p>{i.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
