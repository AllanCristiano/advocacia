import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contato" className="section section-white" aria-labelledby="contato-title">
      <div className="container">
        <Reveal>
          <div className="contact-grid">
            <div className="section-head">
              <h2 id="contato-title" className="title-lg">Entre em contato</h2>
              <p className="lead">
                Apresente brevemente sua demanda. O escritório retornará para verificar as possibilidades de atendimento.
              </p>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
