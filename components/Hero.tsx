import Link from "next/link";

// Fachada em linhas finas. Substitua por uma fotografia real do escritório
// (ex.: <Image src="/images/hero.jpg" ... priority />) quando disponível.
function FacadeArt() {
  const W = 400, H = 500;
  const arches = [0, 1, 2].map((i) => {
    const w = 78, x = 62 + i * 96, top = 150, bottom = 400, r = w / 2;
    return `M${x} ${bottom} V${top + r} A${r} ${r} 0 0 1 ${x + w} ${top + r} V${bottom}`;
  });
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Ilustração em linhas finas de uma fachada com três arcos">
      <path className="draw" pathLength={1} d="M30 110 H370" />
      <path className="draw draw-gold" pathLength={1} d="M30 122 H370" />
      <path className="draw" pathLength={1} d="M50 110 L200 50 L350 110" />
      {arches.map((d, i) => (
        <path key={i} className="draw" pathLength={1} d={d} />
      ))}
      {arches.map((_, i) => (
        <path key={`in${i}`} className="draw draw-gold" pathLength={1}
          d={`M${76 + i * 96} 400 V${189 + 0} A25 25 0 0 1 ${126 + i * 96} 189 V400`} />
      ))}
      <path className="draw" pathLength={1} d="M40 400 H360" />
      <path className="draw" pathLength={1} d="M30 412 H370" />
      <path className="draw" pathLength={1} d="M20 424 H380" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" className="title-xl">
            Advocacia orientada por conhecimento, estratégia e responsabilidade.
          </h1>
          <p className="lead">
            Atuação jurídica personalizada para pessoas e empresas, com abordagem técnica e acompanhamento próximo.
          </p>
          <div className="btn-row">
            <Link href="/#escritorio" className="btn btn-primary">Conheça o escritório</Link>
            <Link href="/#contato" className="btn btn-ghost">Entrar em contato</Link>
          </div>
        </div>
        <div className="hero-art">
          <FacadeArt />
        </div>
      </div>
    </section>
  );
}
