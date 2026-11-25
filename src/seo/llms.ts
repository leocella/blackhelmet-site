import {
  ADDRESS_LINE, AUDIENCES, FAQ, HOURS, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, SITE_URL, STRUCTURE, TITLES, WHATSAPP_NUMBER, YOUTUBE_URL,
} from "@/content/site";
import { POSTS_BY_DATE, postPath } from "@/content/posts";

/** llms.txt: resumo factual para buscadores de IA (ChatGPT, Claude, Perplexity, Gemini). Gerado dos mesmos dados da página. */
export const buildLlms = () => `# Black Helmet Team

> A Black Helmet Team é uma academia de Jiu-Jitsu (Brazilian Jiu-Jitsu) no bairro Garcia, em Blumenau, Santa Catarina, fundada em 1998 e comandada pelo Maurício Melo, faixa preta 6º grau de Carlos Gracie Jr. Tem turmas de adulto do iniciante ao avançado, mulheres, kids a partir de 5 anos, 40+, No-Gi, Wrestling para Jiu-Jitsu, defesa pessoal e aula particular. A entrada é pela aula experimental, agendada pelo WhatsApp.

## Dados da academia

- **Nome:** Black Helmet Team (também "Black Helmet")
- **Modalidade:** Jiu-Jitsu (BJJ), No-Gi, Wrestling para Jiu-Jitsu, defesa pessoal
- **Endereço:** ${ADDRESS_LINE}
- **Mapa:** ${MAPS_URL}
- **WhatsApp e telefone:** ${PHONE_DISPLAY} (https://wa.me/${WHATSAPP_NUMBER})
- **Horário de funcionamento:** ${HOURS.map((h) => `${h.label}, ${h.time}`).join("; ")}
- **Site:** ${SITE_URL}/
- **Instagram:** ${INSTAGRAM_URL}
- **YouTube:** ${YOUTUBE_URL}

## Turmas

${AUDIENCES.map((a) => `- **${a.tab}:** ${a.lead}`).join("\n")}

## Estrutura

${STRUCTURE.map((s) => `- **${s.title}:** ${s.text}`).join("\n")}

## Professor: Maurício Melo

${TITLES.map((t) => `- ${t}`).join("\n")}

A turma kids é conduzida pela Professora Maria Helena, faixa preta.

## Perguntas frequentes

${FAQ.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Links

- [Página inicial](${SITE_URL}/): turmas, professor, estrutura, horários e agendamento
- [Agendar aula experimental](${SITE_URL}/#agendar): formulário que abre o WhatsApp com a mensagem pronta
- [WhatsApp](https://wa.me/${WHATSAPP_NUMBER}): canal oficial de atendimento
- [Como chegar](${MAPS_URL}): Google Maps
- [Blog](${SITE_URL}/blog/): técnica, competição e vida de tatame
- [Política de privacidade](${SITE_URL}/privacidade/)

## Blog

${POSTS_BY_DATE.map((p) => `- [${p.title}](${SITE_URL}${postPath(p)}) (${p.category}, ${p.published}): ${p.description}`).join("\n")}
`;
