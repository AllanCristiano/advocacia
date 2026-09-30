import { NextResponse } from "next/server";

// Rate limit simples em memória (por instância). Em produção, prefira Redis/Upstash.
const hits = new Map<string, { n: number; t: number }>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[<>]/g, "").trim().slice(0, max) : "";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const now = Date.now();
  const rec = hits.get(ip);
  if (rec && now - rec.t < WINDOW) {
    if (rec.n >= MAX) {
      return NextResponse.json({ error: "Muitas tentativas. Tente novamente mais tarde." }, { status: 429 });
    }
    rec.n++;
  } else {
    hits.set(ip, { n: 1, t: now });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Honeypot: robôs preenchem, pessoas não. Responde OK sem processar.
  if (clean(body.site, 100)) return NextResponse.json({ ok: true });

  const nome = clean(body.nome, 120);
  const email = clean(body.email, 160);
  const telefone = clean(body.telefone, 30);
  const assunto = clean(body.assunto, 80);
  const mensagem = clean(body.mensagem, 2000);

  if (nome.length < 2) return NextResponse.json({ error: "Informe seu nome." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  if (telefone.replace(/\D/g, "").length < 10) return NextResponse.json({ error: "Telefone inválido." }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ error: "É necessário concordar com a Política de Privacidade." }, { status: 400 });

  // TODO: enviar por e-mail (Resend, SMTP) ou gravar em CRM/banco.
  // Evite registrar dados pessoais em logs.
  void { nome, email, telefone, assunto, mensagem };

  return NextResponse.json({ ok: true });
}
