"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { areas } from "@/lib/site";

type State = { kind: "idle" | "sending" | "ok" | "error"; msg: string };

export default function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle", msg: "" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "sending", msg: "Enviando…" });
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "on" }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Não foi possível enviar. Tente novamente.");
      form.reset();
      setState({ kind: "ok", msg: "Mensagem enviada. O escritório entrará em contato." });
    } catch (err) {
      setState({ kind: "error", msg: err instanceof Error ? err.message : "Erro ao enviar." });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" autoComplete="name" required minLength={2} />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" required inputMode="tel" />
        </div>
        <div className="field">
          <label htmlFor="assunto">Assunto</label>
          <select id="assunto" name="assunto" defaultValue="">
            <option value="" disabled>Selecione</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.title}>{a.title}</option>
            ))}
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" maxLength={2000} aria-describedby="msg-ajuda" />
        <p id="msg-ajuda" className="muted" style={{ fontSize: ".88rem" }}>
          Para o primeiro contato, evite enviar detalhes do caso ou documentos.
        </p>
      </div>

      {/* Antispam: campo invisível para pessoas */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="site">Não preencha</label>
        <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          Li e concordo com a <Link href="/politica-de-privacidade">Política de Privacidade</Link> e com o
          tratamento dos meus dados para retorno do contato.
        </span>
      </label>

      <div>
        <button type="submit" className="btn btn-primary" disabled={state.kind === "sending"}>
          Enviar mensagem
        </button>
      </div>
      <p className="form-status" role="status" aria-live="polite" data-state={state.kind}>{state.msg}</p>
    </form>
  );
}
