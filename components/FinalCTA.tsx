import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="section section-ink" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className="cta-final">
            <h2 id="cta-title" className="title-lg">Precisa de orientação jurídica?</h2>
            <p className="lead">
              Entre em contato com nosso escritório para apresentar sua demanda e verificar as possibilidades de atendimento.
            </p>
            <div className="btn-row">
              <Link href="/#contato" className="btn btn-gold">Entrar em contato</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
