import Link from "next/link";
import Reveal from "./Reveal";
import { businessItems } from "@/lib/site";

export default function BusinessLaw() {
  return (
    <section id="empresas" className="section section-ink" aria-labelledby="emp-title">
      <div className="container">
        <Reveal>
          <div className="biz-grid">
            <div className="biz-copy">
              <h2 id="emp-title" className="title-lg">Soluções jurídicas para empresas</h2>
              <p className="lead">
                Apoio jurídico consultivo e contencioso para organizações, com foco na prevenção de riscos.
              </p>
              <div className="btn-row">
                <Link href="/areas-de-atuacao/direito-empresarial" className="btn btn-gold">
                  Conhecer atuação empresarial
                </Link>
              </div>
            </div>
            <ul className="biz-list">
              {businessItems.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
