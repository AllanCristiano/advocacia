import Link from "next/link";
import type { Lawyer } from "@/lib/site";
import { areaBySlug } from "@/lib/site";

export default function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  const areaNames = lawyer.areaSlugs.map((s) => areaBySlug(s)?.title).filter(Boolean).join(", ");
  return (
    <article className="lawyer-card">
      <div className="lawyer-photo" role="img" aria-label="Espaço reservado para fotografia profissional">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      </div>
      <h3>{lawyer.name}</h3>
      <p className="lawyer-oab">{lawyer.oab}</p>
      <p className="muted">{areaNames}</p>
      <Link href={`/equipe/${lawyer.slug}`} className="text-link">Ver perfil</Link>
    </article>
  );
}
