import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import PracticeAreaCard from "./PracticeAreaCard";
import { areas } from "@/lib/site";

export default function PracticeAreas() {
  return (
    <section id="areas" className="section section-white" aria-labelledby="areas-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 id="areas-title" className="title-lg">Áreas de atuação</h2>
            <p className="lead">As áreas reais de atuação serão definidas pelo escritório.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="areas-grid">
            {areas.map((a) => (
              <PracticeAreaCard key={a.slug} area={a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
