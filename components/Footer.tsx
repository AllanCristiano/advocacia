import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2>{site.name}</h2>
            <p>{site.tagline}</p>
            {site.social.length > 0 && (
              <ul style={{ marginTop: "1rem" }}>
                {site.social.map((s) => (
                  <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
                ))}
              </ul>
            )}
          </div>
          <nav aria-label="Rodapé">
            <h2>Navegação</h2>
            <ul>
              {nav.map((i) => (
                <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Contato</h2>
            <ul>
              <li><a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a></li>
              <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
          <div>
            <h2>Endereço</h2>
            <p>{site.address}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{site.registro}</p>
          <div className="legal">
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          </div>
          <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
