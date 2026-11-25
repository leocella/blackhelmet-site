# Black Helmet Team · site

Landing page de conversão da Black Helmet Team (Jiu-Jitsu em Blumenau, Maurício Melo). Padrão Claryon: Vite + React + Tailwind, pré-renderizado no build, deploy na Vercel.

## Rodar

```sh
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/ com HTML pré-renderizado, sitemap.xml, robots.txt e llms.txt
```

## Onde mexer

- `src/content/site.ts`: todos os fatos (endereço, horários, títulos, turmas, FAQ, fotos). A página, o JSON-LD e o `llms.txt` saem daqui.
- `FREE_TRIAL` em `site.ts`: mude para `true` só depois que o Maurício confirmar que a aula experimental é gratuita.
- `PHOTOS` em `site.ts`: coloque as fotos em `public/img/fotos/` (webp, ~1600px) e preencha os caminhos.
- `src/seo/routes.ts`: title, description e dados estruturados (SportsActivityLocation, Person, FAQPage).
- `VITE_LEAD_WEBHOOK` (opcional, variável na Vercel): URL que recebe cada lead do formulário em JSON (n8n, Make, planilha). Sem ela, o lead vai só pelo WhatsApp.

## Medição

GTM `GTM-MVKXNL9X` carrega só depois do aceite de cookies. Eventos no `dataLayer`: `generate_lead`, `whatsapp_click`, `cta_click`, `audience_select`, `faq_open`, `maps_click`, `phone_click`.
