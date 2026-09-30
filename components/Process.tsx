import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="atendimento" className="section section-white" aria-labelledby="atend-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 id="atend-title" className="title-lg">Como funciona o atendimento</h2>
          </div>
        </Reveal>
        <Reveal>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title} className="step">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
