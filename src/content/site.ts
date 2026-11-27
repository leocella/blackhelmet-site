// Fonte única dos fatos da academia. Tudo que aparece na página, no JSON-LD e no llms.txt sai daqui.
// Regra do manual de marca: só títulos e ofertas confirmados. Antes de mudar algo aqui, confirme com o Mauricio.

export const SITE_URL = "https://blackhelmet.com.br";
export const SITE_NAME = "Black Helmet Team";

/** Mude para true só depois que o Mauricio confirmar que a aula experimental é gratuita. */
export const FREE_TRIAL = false;
export const TRIAL_LABEL = FREE_TRIAL ? "aula experimental gratuita" : "aula experimental";

export const WHATSAPP_NUMBER = "5547999786853";
export const PHONE_DISPLAY = "(47) 99978-6853";
export const INSTAGRAM_URL = "https://instagram.com/blackhelmetteam";
export const YOUTUBE_URL = "https://www.youtube.com/@mauriciocabralmelo";
export const MAPS_URL = "https://www.google.com/maps?cid=11429641102400006549";
export const CNPJ = "31.215.910/0001-15";
export const LEGAL_NAME = "Academia Black Helmet Team";

/** Créditos no rodapé: quem fez o quê. UTM para cada agência medir as visitas vindas daqui. */
const creditUtm = "utm_source=blackhelmet.com.br&utm_medium=referral&utm_campaign=credito_rodape";
export const CREDITS = [
  { role: "Identidade visual", name: "OSS Growth", url: `https://www.ossgrowth.com.br/?${creditUtm}` },
  { role: "Site", name: "Claryon", url: `https://www.claryonautomation.com.br/?${creditUtm}` },
];

export const ADDRESS = {
  street: "R. Expedicionário Aleixo Herculano Maba, 50",
  district: "Garcia",
  city: "Blumenau",
  region: "SC",
  postalCode: "89020-150",
};
export const ADDRESS_LINE = `${ADDRESS.street} - ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.region}, ${ADDRESS.postalCode}`;

export const HOURS = [
  // Segunda e quarta abrem mais cedo (confirmado pelo Leo em 27/11/2026).
  { label: "Segunda e quarta", time: "10h às 13h15", days: ["Monday", "Wednesday"], opens: "10:00", closes: "13:15" },
  { label: "Terça, quinta e sexta", time: "11h45 às 13h15", days: ["Tuesday", "Thursday", "Friday"], opens: "11:45", closes: "13:15" },
  { label: "Segunda a quinta", time: "17h15 às 22h", days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "17:15", closes: "22:00" },
];

export const waLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const WA_DEFAULT = waLink(`Olá! Quero agendar uma ${TRIAL_LABEL} na Black Helmet.`);
/** Mensagem do /links (bio do Instagram): a equipe já sabe de onde a pessoa veio. */
export const WA_INSTAGRAM = waLink(`Olá! Vim pelo Instagram e quero agendar uma ${TRIAL_LABEL} na Black Helmet.`);
/** Rota no Google Maps até a academia (abre o app no celular, saindo da localização da pessoa). */
export const MAPS_ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${SITE_NAME}, ${ADDRESS_LINE}`)}&travelmode=driving`;

/** Anos de Jiu-Jitsu e de faixa preta do Mauricio (corrigido para 39 pelo Leo em 25/11/2026). Fonte única: atualize aqui. */
export const YEARS_JIU_JITSU = 39;
export const YEARS_BLACK_BELT = 24;
/** Títulos em eventos ADCC (corrigido para 5 pelo Leo em 27/11/2026). Fonte única: atualize aqui. */
export const ADCC_TITLES = 5;

/** Títulos aprovados no manual de marca (tabela "Títulos: só o que dá para provar"). */
export const TITLES = [
  "Faixa preta 6º grau",
  "Faixa preta de Carlos Gracie Jr.",
  `${YEARS_JIU_JITSU} anos de Jiu-Jitsu, ${YEARS_BLACK_BELT} de faixa preta`,
  "Ouro no Europeu IBJJF (kimono)",
  "Bronze no Mundial IBJJF (kimono)",
  `${ADCC_TITLES}x campeão em eventos ADCC`,
  "Competidor do ADCC Américas (Buenos Aires, dez/2025)",
];

/** Equipe das turmas kids (confirmado pelo Leo em 27/11/2026). */
export const KIDS_TEAM = "a Professora Maria Helena, o Professor Mauricio Melo e o Instrutor Andrews";

export type Audience = {
  id: string;
  tab: string;
  title: string;
  lead: string;
  points: string[];
  cta: string;
  formValue: string;
};

export const AUDIENCES: Audience[] = [
  {
    id: "adulto",
    tab: "Adultos",
    title: "Você não precisa estar em forma para começar.",
    lead:
      "A maioria dos alunos chegou aqui sem nunca ter vestido um kimono. Você começa pelo básico (postura, queda segura, saída de baixo) e treina no seu ritmo, com o professor ajustando cada detalhe.",
    points: ["Turmas do iniciante ao avançado", "O condicionamento vem com o treino, não antes", "Defesa pessoal que funciona na vida real"],
    cta: "Agendar minha aula",
    formValue: "Adulto",
  },
  {
    id: "mulheres",
    tab: "Mulheres",
    title: "Técnica vence força. É para isso que o Jiu-Jitsu existe.",
    lead:
      "Você aprende a sair de situações de risco, ganha confiança e condicionamento num tatame de respeito, com professor acompanhando de perto desde a primeira aula.",
    points: ["Ambiente de respeito e acompanhamento", "Começa pelo básico, no seu ritmo", "Sem experiência e sem condicionamento prévio"],
    cta: "Agendar minha aula",
    formValue: "Mulher",
  },
  {
    id: "kids",
    tab: "Kids",
    title: "Disciplina e confiança, com a energia no lugar certo.",
    lead:
      `Aulas lúdicas e seguras a partir de 5 anos, separadas por faixa etária, com ${KIDS_TEAM}. Você acompanha tudo da sala de espera, com transmissão ao vivo do tatame.`,
    points: ["A partir de 5 anos, turmas por idade", "Prof. Maria Helena, Prof. Mauricio e Instrutor Andrews", "Sala de espera com transmissão ao vivo"],
    cta: "Agendar aula para meu filho",
    formValue: "Criança",
  },
  {
    id: "40mais",
    tab: "40+",
    title: "Depois dos 40 não é tarde. É o melhor momento.",
    lead:
      "Você treina nas turmas regulares, e o professor ajusta a intensidade ao seu corpo, com foco em mobilidade, força e equilíbrio. Cada um no seu ritmo, sem precisar provar nada para ninguém.",
    points: ["Intensidade ajustada ao seu corpo", "Mobilidade, força e equilíbrio", "Treina junto com a turma, no seu ritmo"],
    cta: "Agendar minha aula",
    formValue: "40+",
  },
  {
    id: "particular",
    tab: "Particular",
    title: "Evolução no seu horário, com plano só seu.",
    lead:
      "Aula particular com o Mauricio Melo ou com a equipe, em horário flexível, para quem quer acelerar a técnica, se preparar para competir ou treinar com agenda apertada.",
    points: ["Horário flexível", "Plano montado para o seu objetivo", "Ideal para competição ou agenda apertada"],
    cta: "Quero aula particular",
    formValue: "Aula particular",
  },
];

export const STEPS = [
  { n: "1", title: "Agende", text: "Pelo formulário ou pelo WhatsApp. Você escolhe a turma e o melhor período." },
  { n: "2", title: "Faça a aula experimental", text: "Antes do treino, uma conversa rápida sobre saúde, condicionamento e objetivo. Depois, tatame." },
  { n: "3", title: "Escolha seu plano", text: "A equipe apresenta os planos e você decide com calma, sem pressão." },
  { n: "4", title: "Evolua com acompanhamento", text: "Grade de aulas no app e indicação de aula particular ou mentoria quando fizer sentido." },
];

export const OBJECTIONS = [
  { q: "Nunca treinei luta.", a: "Todo mundo começou do zero. A primeira aula é feita para quem nunca pisou num tatame." },
  { q: "Estou fora de forma.", a: "O condicionamento vem do treino. Você respeita o seu ritmo e o professor ajusta a intensidade." },
  { q: "Tenho medo de me machucar.", a: "Turmas com número limitado de alunos, tatame padrão olímpico e técnica antes de força." },
  { q: "Não tenho kimono.", a: "Na aula experimental, venha de roupa de treino confortável. O kimono fica para depois." },
];

export const STRUCTURE = [
  { title: "Tatame padrão olímpico", text: "Piso certo para cair, rolar e treinar com segurança." },
  { title: "Turmas com limite de alunos", text: "Professor perto de você, corrigindo de verdade." },
  { title: "Jiu-Jitsu, No-Gi e Wrestling", text: "Com kimono, sem kimono e quedas para o Jiu-Jitsu." },
  { title: "Ambiente climatizado", text: "Ar-condicionado no verão de Blumenau faz diferença." },
  { title: "Transmissão ao vivo", text: "Sala de espera com imagem do tatame para pais e acompanhantes." },
];

export const FAQ = [
  {
    q: "Onde treinar Jiu-Jitsu em Blumenau?",
    a: `A Black Helmet Team fica no bairro Garcia, em Blumenau (SC), na ${ADDRESS.street}. A academia é comandada pelo Mauricio Melo, faixa preta 6º grau de Carlos Gracie Jr., e tem turmas de adulto do iniciante ao avançado (inclusive para quem começa depois dos 40), kids a partir de 5 anos e aula particular.`,
  },
  {
    q: "Preciso estar em forma para começar no Jiu-Jitsu?",
    a: "Não. O condicionamento vem com o treino. A aula experimental é feita para quem nunca treinou, e o professor ajusta a intensidade ao seu ritmo.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "Você agenda pelo site ou pelo WhatsApp, chega alguns minutos antes, conversa rapidamente com a equipe sobre saúde, condicionamento e objetivo e faz a aula com a turma. Venha de roupa de treino confortável.",
  },
  {
    q: "Preciso ter kimono na primeira aula?",
    a: "Não. Na aula experimental, venha com roupa de treino confortável. Se decidir continuar, a equipe orienta sobre o kimono.",
  },
  {
    q: "Qual a idade mínima para o Jiu-Jitsu kids?",
    a: `A partir de 5 anos. As turmas são separadas por faixa etária, com ${KIDS_TEAM}, e os pais acompanham pela sala de espera com transmissão ao vivo.`,
  },
  {
    q: "Mulheres podem treinar Jiu-Jitsu sem experiência?",
    a: "Sim. A primeira aula é feita para quem nunca treinou: você começa pelo básico, no seu ritmo, com o professor acompanhando de perto. No Jiu-Jitsu a técnica vence a força, e o tatame é um ambiente de respeito.",
  },
  {
    q: "Tem Jiu-Jitsu para quem tem mais de 40 anos?",
    a: "Sim. Não há turma separada por idade: você treina nas turmas regulares, e o professor ajusta a intensidade ao seu corpo, com foco em mobilidade, força, equilíbrio e bem-estar.",
  },
  {
    q: "Quais são os horários da Black Helmet?",
    a: `${HOURS.map((h) => `${h.label}, ${h.time}`).join("; ")}. A grade de cada turma é enviada pelo WhatsApp quando você agenda.`,
  },
  {
    q: "Quanto custa treinar Jiu-Jitsu na Black Helmet?",
    a: "Os planos são apresentados depois da aula experimental, de acordo com a turma e a frequência que você escolher. Para saber os valores, chame a equipe no WhatsApp.",
  },
  {
    q: "Quem é o Mauricio Melo?",
    a: `Mauricio Melo é faixa preta 6º grau de Carlos Gracie Jr., com ${YEARS_JIU_JITSU} anos de Jiu-Jitsu e ${YEARS_BLACK_BELT} de faixa preta. É ouro no Europeu IBJJF (kimono), bronze no Mundial IBJJF (kimono), ${ADCC_TITLES}x campeão em eventos ADCC e competiu no ADCC Américas em Buenos Aires, em dezembro de 2025. Ensina na Black Helmet, em Blumenau, desde 1998.`,
  },
];

/**
 * Fotos da página. Enquanto estiverem null, a página mostra uma composição com o selo no lugar.
 * Para trocar: coloque o arquivo em public/img/fotos/ (webp, ~1600px no lado maior) e preencha o caminho.
 */
export const PHOTOS: Record<"hero" | "professor" | "kids" | "turma" | "atleta", { src: string | null; alt: string; width?: number; height?: number }> = {
  hero: { src: null, alt: "Aula de Jiu-Jitsu na Black Helmet Team, em Blumenau" },
  professor: { src: null, alt: "Mauricio Melo, faixa preta 6º grau, ensinando no tatame da Black Helmet" },
  kids: { src: "/img/fotos/kids.webp", width: 1080, height: 1080, alt: "Turma kids de Jiu-Jitsu de kimono no tatame da Black Helmet" },
  turma: { src: null, alt: "Alunos treinando Jiu-Jitsu no tatame da Black Helmet" },
  atleta: { src: "/img/fotos/atleta.webp", width: 1170, height: 793, alt: "Mauricio Melo à beira do tatame no ADCC Américas, em Buenos Aires" },
};
