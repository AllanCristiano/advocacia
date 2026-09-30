import Reveal from "./Reveal";
import { differentials } from "@/lib/site";

export default function Differentials() {
  return (
    <section id="diferenciais" className="section" aria-labelledby="dif-title">
      <div className="container diff-grid">
        <Reveal>
          <div className="section-head">
            <h2 id="dif-title" className="title-lg">Uma atuação jurídica construída caso a caso</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="diff-list">
            {differentials.map((d) => (
              <div key={d.title} className="diff-item">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
