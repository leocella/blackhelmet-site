# Regras do projeto

- Siga o manual de marca da Black Helmet: só títulos e ofertas confirmados (tabela em `TITLES`), "Maurício Melo" com acento e um L, "Jiu-Jitsu" com hífen, amarelo `#f1e306` só como destaque (nunca fundo chapado de seção), cantos retos, sem emoji.
- Fatos ficam em `src/content/site.ts`; não escreva fato solto em componente.
- Toda rota pública entra em `src/seo/routes.ts` e em `src/App.tsx` para ganhar HTML pré-renderizado, metadados e entrada no sitemap. Não coloque conteúdo estático no `index.html`.
- Não mexa no domínio blackhelmet.com.br nem promova para produção sem aprovação do Leo.
