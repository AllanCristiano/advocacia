import Reveal from "./Reveal";
import { pillars, values } from "@/lib/site";

export default function About() {
  return (
    <>
      <div className="pillars">
        <ul className="container pillars-grid" aria-label="Princípios de atuação">
          {pillars.map((p) => (
            <li key={p} className="pillar">{p}</li>
          ))}
        </ul>
      </div>

      <section id="escritorio" className="section" aria-labelledby="escritorio-title">
        <div className="container">
          <Reveal>
            <div className="about-grid">
              <div className="about-copy">
                <h2 id="escritorio-title" className="title-lg">Conheça o escritório</h2>
                <p className="lead">
                  Texto institucional a ser fornecido pelo escritório: história, fundação, princípios, áreas de
                  atuação, localização, filosofia de trabalho e perfil dos clientes.
                </p>
                <p className="mission">
                  Oferecer atuação jurídica técnica, responsável e personalizada, buscando compreender as
                  particularidades de cada caso.
                </p>
              </div>
              <div className="about-photo" role="img" aria-label="Espaço reservado para fotografia real do escritório">
                Fotografia do escritório
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ul className="values" aria-label="Valores">
              {values.map((v) => (
                <li key={v.title} className="value">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
