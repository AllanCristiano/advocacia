import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function Location() {
  const q = encodeURIComponent(site.address);
  return (
    <section id="localizacao" className="section" aria-labelledby="loc-title">
      <div className="container">
        <Reveal>
          <div className="loc-grid">
            <div className="loc-info">
              <h2 id="loc-title" className="title-lg">Onde estamos</h2>
              <dl>
                <div><dt>Endereço</dt><dd>{site.address}</dd></div>
                <div><dt>Telefone</dt><dd><a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a></dd></div>
                <div><dt>E-mail</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
                <div><dt>Horário de atendimento</dt><dd>{site.hours}</dd></div>
                <div><dt>Modalidades</dt><dd>Atendimento presencial e online, conforme a demanda.</dd></div>
              </dl>
              <div className="btn-row">
                <a className="btn btn-ghost" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener noreferrer">
                  Como chegar
                </a>
              </div>
            </div>
            <iframe
              className="map"
              title={`Mapa: ${site.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
