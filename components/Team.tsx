import Reveal from "./Reveal";
import LawyerCard from "./LawyerCard";
import { team } from "@/lib/site";

export default function Team() {
  return (
    <section id="equipe" className="section" aria-labelledby="equipe-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 id="equipe-title" className="title-lg">Conheça nossa equipe</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="team-grid">
            {team.map((l) => (
              <LawyerCard key={l.slug} lawyer={l} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
