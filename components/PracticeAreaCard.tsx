import Link from "next/link";
import type { Area } from "@/lib/site";

export default function PracticeAreaCard({ area }: { area: Area }) {
  return (
    <Link href={`/areas-de-atuacao/${area.slug}`} className="area-card">
      <h3>{area.title}</h3>
      <p>{area.summary}</p>
      <ul className="chips" aria-label={`Temas de ${area.title}`}>
        {area.topics.slice(0, 4).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Link>
  );
}
