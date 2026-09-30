# Landing page — Escritório de Advocacia (Next.js)

Implementação da Fase 1 e 2 do documento de requisitos v1.0: landing institucional,
páginas de áreas, perfis, artigos, FAQ, formulário com validação e WhatsApp.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Defina `NEXT_PUBLIC_SITE_URL` (veja `.env.example`) para sitemap, canonical e Open Graph.

## Onde editar

- `lib/site.ts`: nome, endereço, telefone, WhatsApp, áreas, equipe, artigos e FAQ (tudo é placeholder).
- `components/Hero.tsx`: troque a ilustração por uma foto real do escritório (`next/image`, `priority`).
- `app/api/contato/route.ts`: ligue o envio de e-mail/CRM (há um TODO).
- `app/politica-de-privacidade/page.tsx`: modelo inicial, precisa de revisão jurídica.
- `app/globals.css`: tokens de cor no `:root` (azul-marinho, cinza, off-white, dourado discreto).

## Conformidade

Todo o texto deve ser revisado pelo escritório antes de publicar (OAB, publicidade, LGPD).
Não há números de clientes, percentuais de sucesso ou promessas de resultado.
