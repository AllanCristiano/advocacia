import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="title-xl">Política de Privacidade</h1>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <p>
            Modelo inicial, a ser revisado e complementado pelo escritório e por profissional habilitado
            (LGPD, Lei nº 13.709/2018).
          </p>
          <h2>Finalidade da coleta</h2>
          <p>
            Os dados informados no formulário de contato (nome, e-mail, telefone, assunto e mensagem) são usados
            apenas para retornar o contato e verificar as possibilidades de atendimento.
          </p>
          <h2>Tratamento e armazenamento</h2>
          <p>Descrever onde os dados são armazenados, por quanto tempo e quem tem acesso.</p>
          <h2>Direitos do titular</h2>
          <p>
            O titular pode solicitar acesso, correção ou exclusão de seus dados pelo e-mail{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <h2>Cookies</h2>
          <p>Informar os cookies utilizados, se houver, e como gerenciá-los.</p>
        </div>
      </section>
    </>
  );
}
