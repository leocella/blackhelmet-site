// Posts do blog. Migrados do WordPress antigo em 25/11/2026 e revisados pelo manual de marca:
// sem emoji, "Maurício Melo" com acento e um L, "Jiu-Jitsu" com hífen e só títulos confirmados (TITLES em site.ts).
// Saíram dos textos antigos: grau errado (5º), ranking IBJJF, "primeiro patrocinado", "finalização mais rápida",
// citação atribuída sem fonte e restos de texto gerado por IA. Antes de recolocar algo assim, confirme com o Maurício.
// Confirmado pelo Leo em 25/11/2026: o Maurício é patrocinado pela VOUK, recebeu o 6º grau do mestre Crézio
// e a Professora Maria Helena conduz as turmas kids.
//
import { YEARS_BLACK_BELT, YEARS_JIU_JITSU } from "@/content/site";

// Formato do texto: **negrito** e [link](url). Links externos abrem em nova aba.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "video"; id: string; title: string }
  | { type: "img"; src: string; width: number; height: number; alt: string; caption?: string };

export type Post = {
  slug: string;
  /** Título da página (title tag, até ~60 caracteres). */
  seoTitle: string;
  /** H1 do post. */
  title: string;
  description: string;
  category: "Competição" | "Técnica" | "Academia" | "Kids" | "Filosofia";
  published: string;
  modified: string;
  author: "mauricio" | "academia";
  cover: { src: string; width: number; height: number; alt: string };
  /** URL antiga no WordPress, quando mudou (o 301 fica em vercel.json). */
  legacyPath?: string;
  body: Block[];
};

const MIGRATED = "2026-11-25";

export const POSTS: Post[] = [
  {
    slug: "vlog-adcc-argentina-bastidores-guerra-tatame",
    seoTitle: "Vlog: bastidores do ADCC Américas em Buenos Aires",
    title: "Vlog: bastidores do ADCC Américas, do corte de peso à guerra no tatame",
    description:
      "Corte de peso com controle diário, alimentação na viagem, as regras que fazem do ADCC o combate mais real e o que o estresse da competição ensina.",
    category: "Competição",
    published: "2026-01-07",
    modified: MIGRATED,
    author: "academia",
    cover: { src: "/img/blog/vlog-adcc-argentina-bastidores-guerra-tatame.webp", width: 1170, height: 1600, alt: "Capa do vlog ADCC Argentina, da Black Helmet" },
    body: [
      { type: "p", text: "Competir no **ADCC (Abu Dhabi Combat Club)** vai muito além dos minutos no tatame. É um trabalho de precisão com o corpo e com a cabeça. Neste vlog, mostramos os bastidores do ADCC Américas, em Buenos Aires, e o que acontece antes da adrenalina subir." },
      { type: "video", id: "otymfUlbnOw", title: "Vlog: ADCC Argentina, bastidores, alimentação e as lutas" },
      { type: "h2", text: "Controle de peso com monitoramento, não com sorte" },
      { type: "p", text: "Bater o peso com segurança vem do acompanhamento diário. O atleta mostra como controla a oscilação: acorda com 84 a 85 kg e chega aos 82 kg depois do treino. Em vez de desidratação extrema, a estratégia foi a **sauna intermitente**, em ciclos de 20 minutos com ducha fria, até bater 82,450 kg sem perder desempenho." },
      { type: "p", text: "Para quem quer chegar nesse nível, o acompanhamento de um nutricionista é o que garante um corte de peso com saúde." },
      { type: "h2", text: "Alimentação na viagem: foco sem neura" },
      { type: "p", text: "A alimentação durante a viagem prioriza **carboidratos**, para garantir energia no dia da luta. Os bastidores também mostram a realidade: um croissant e um café no dia da pesagem não foram o fim do mundo, porque o atleta sabe exatamente como o corpo dele reage." },
      { type: "p", text: "Uma dica do vídeo para não ter surpresa na balança: **suba na balança segurando o que você pretende comer ou beber**. Se o peso final continuar dentro do limite, está seguro." },
      { type: "h2", text: "Os dois macetes contra cãibra e fadiga" },
      { type: "ul", items: ["**Hidratação forte** ao longo do dia.", "**Uma porção pequena de mostarda (cerca de 10 g)**, que o atleta usa para segurar a cãibra no meio da luta."] },
      { type: "h2", text: "Por que o ADCC é o combate mais real" },
      { type: "p", text: "Renato Suguino, diretor de arbitragem, explica no vídeo que as regras do ADCC são desenhadas para **premiar quem ataca**:" },
      { type: "ul", items: [
        "A primeira metade da luta não vale pontos, só finalização.",
        "Puxar para a guarda gera **punição de -1 ponto**, o que força a luta em pé.",
        "Só pontua quem estabiliza e domina o oponente.",
      ] },
      { type: "p", text: "As regras oficiais estão no site da [ADCC Brasil](https://www.adccbrasil.com.br/)." },
      { type: "p", text: "Para treinar e competir nesse ritmo, a [linha No-Gi da VOUK](https://voukbrasil.com/collections/no-gi \"patrocinado\"), marca que patrocina o Maurício Melo, foi feita para aguentar o rigor de competições como o ADCC." },
      { type: "h2", text: "Do tatame para a vida" },
      { type: "p", text: "O evento também trouxe uma conversa sobre medo. Para Rafael Hammer, o estresse de lutar um evento desse porte é uma escola para quem empreende: acreditar no próprio trabalho mesmo com incerteza é o que separa o amador do profissional." },
      { type: "quote", text: "Preparar-se para o ADCC é como acertar um motor de corrida: cada grama de peso e cada refeição contam. Se o ajuste for preciso e a postura for de ataque, o pódio vira consequência do trabalho feito antes." },
      { type: "h2", text: "Treine com quem vive essa realidade" },
      { type: "p", text: "Domínio e estabilização, luta em pé e cabeça fria sob pressão não ficam só no vídeo. Na Black Helmet, no bairro Garcia, em Blumenau, você treina com o **Maurício Melo**, faixa preta 6º grau que competiu no ADCC Américas em dezembro de 2025, seja para se preparar para campeonato, seja para treinar pela saúde." },
    ],
  },
  {
    slug: "adcc-americas-buenos-aires-jiu-jitsu",
    seoTitle: "ADCC Américas em Buenos Aires: honra, guerra e legado",
    title: "ADCC Américas em Buenos Aires: honra, guerra e legado no Jiu-Jitsu competitivo",
    description:
      "O relato do Maurício Melo sobre o ADCC Américas, em Buenos Aires, em dezembro de 2025: lutas duras, nível altíssimo e o que fica além da medalha.",
    category: "Competição",
    published: "2025-12-17",
    modified: MIGRATED,
    author: "mauricio",
    cover: { src: "/img/blog/adcc-americas-buenos-aires-jiu-jitsu.webp", width: 1170, height: 1600, alt: "Medalha do ADCC South American Championship, Buenos Aires 2025, emoldurada" },
    body: [
      { type: "p", text: "Buenos Aires foi palco de um dos maiores desafios da minha trajetória no Jiu-Jitsu competitivo. O ADCC Américas, em dezembro de 2025, não é só um campeonato de alto nível técnico. É um teste de preparo físico, mental e emocional. Cada luta exige foco absoluto, estratégia e coragem para decidir sob pressão." },
      { type: "quote", text: "Antes da luta, a mente já venceu." },
      { type: "img", src: "/img/blog/adcc-americas-retrato.webp", width: 1170, height: 793, alt: "Maurício Melo apoiado na grade à beira do tatame no ADCC Américas, em preto e branco" },
      { type: "h2", text: "Lutas duríssimas e responsabilidade no mais alto nível" },
      { type: "p", text: "Nível altíssimo e cada segundo valendo tudo. Entrei no tatame para representar a minha história, a minha equipe, a minha academia e todos que caminham comigo no dia a dia. Saio com a certeza de que dei tudo e de que honrei o kimono." },
      { type: "p", text: "O ADCC reúne atletas extremamente preparados. Não existe espaço para erro, e cada detalhe faz diferença. Cada confronto carrega anos de preparação, disciplina e sacrifícios silenciosos." },
      { type: "img", src: "/img/blog/adcc-americas-luta.webp", width: 1170, height: 711, alt: "Maurício Melo em luta no ADCC Américas, em Buenos Aires, sob o olhar do árbitro" },
      { type: "h2", text: "Representar uma trajetória" },
      { type: "p", text: "Competir no **ADCC Américas em Buenos Aires** é assumir o compromisso com tudo o que foi construído no Jiu-Jitsu. Não se trata só de lutar, mas de representar valores, pessoas e uma história feita nos treinos de todo dia. O campeonato exige técnica, mas também mentalidade forte, resiliência e controle emocional." },
      { type: "img", src: "/img/blog/adcc-americas-bandeira.webp", width: 960, height: 1280, alt: "Maurício Melo com a bandeira do Brasil diante do painel do ADCC South American Championship 2025" },
      { type: "h2", text: "O que fica além da medalha" },
      { type: "p", text: "O maior legado do ADCC Américas está no aprendizado. Cada luta deixa lições que fortalecem o atleta dentro e fora do tatame. O crescimento vem do enfrentamento, da entrega total e da capacidade de aprender com cada desafio." },
      { type: "p", text: "Mais do que medalhas, levo aprendizado, gratidão e a chama acesa para seguir evoluindo. O trabalho continua. A jornada não para." },
      { type: "video", id: "2bn-zab-n2E", title: "ADCC Américas em Buenos Aires" },
      { type: "video", id: "6PFTlkqes70", title: "ADCC Américas em Buenos Aires, segunda parte" },
      { type: "img", src: "/img/blog/adcc-americas-equipe.webp", width: 960, height: 1280, alt: "Maurício Melo e equipe diante do painel do ADCC South American Championship 2025" },
      { type: "p", text: "Obrigado, Buenos Aires. Obrigado, ADCC. Oss." },
    ],
  },
  {
    slug: "cerimonia-de-graduacao-faixa-preta-professora-maria-helena",
    seoTitle: "Professora Maria Helena recebe a faixa preta",
    title: "Cerimônia de graduação: a Professora Maria Helena recebe a faixa preta",
    description:
      "A Professora Maria Helena, que conduz as turmas kids da Black Helmet, recebe a faixa preta diante da equipe, em Blumenau.",
    category: "Academia",
    published: "2025-12-10",
    modified: MIGRATED,
    author: "mauricio",
    cover: { src: "/img/blog/cerimonia-de-graduacao-faixa-preta-professora-maria-helena.webp", width: 1200, height: 1600, alt: "Professora Maria Helena, de faixa preta, no tatame da Black Helmet" },
    body: [
      { type: "p", text: "Hoje celebramos um marco de muita honra dentro da Black Helmet." },
      { type: "p", text: "A **Professora Maria Helena** recebe a faixa preta, símbolo de excelência técnica, maturidade marcial e compromisso com o caminho do Jiu-Jitsu." },
      { type: "video", id: "P-SerRhl2CA", title: "Cerimônia de graduação: faixa preta da Professora Maria Helena" },
      { type: "p", text: "Essa conquista representa anos de entrega silenciosa, disciplina, superação constante e dedicação aos alunos, à equipe e à arte suave. A faixa preta não é só um grau. É um juramento renovado de responsabilidade, liderança e retidão." },
      { type: "p", text: "Diante da equipe, do tatame e da nossa história, reconhecemos oficialmente a sua trajetória, o seu caráter firme e a inspiração que você transmite a todos que têm a honra de aprender com você." },
      { type: "p", text: "Parabéns, Professora Maria Helena, pela faixa preta. Que este novo ciclo seja guiado pela sabedoria, pela técnica e pela força do espírito marcial." },
      { type: "p", text: "Hoje a Professora Maria Helena conduz as **turmas kids da Black Helmet**, para crianças a partir de 5 anos, separadas por faixa etária." },
    ],
  },
  {
    slug: "trajetoria-mauricio-melo-jiu-jitsu-blumenau",
    legacyPath: "/a-trajetoria-de-mauricio-melo-e-a-forca-do-jiu‑jitsu-em-blumenau/",
    seoTitle: "A trajetória de Maurício Melo e o Jiu-Jitsu em Blumenau",
    title: "A trajetória de Maurício Melo e a força do Jiu-Jitsu em Blumenau",
    description:
      "Quem é o Maurício Melo, faixa preta 6º grau, como o apoio a atletas locais fortalece o esporte e o que faz a metodologia da Black Helmet.",
    category: "Academia",
    published: "2025-10-16",
    modified: MIGRATED,
    author: "academia",
    cover: { src: "/img/blog/trajetoria-mauricio-melo-jiu-jitsu-blumenau.webp", width: 1007, height: 562, alt: "Maurício Melo sentado no tatame, em conversa com outro atleta" },
    body: [
      { type: "p", text: "Blumenau tem se destacado nas artes marciais com o crescimento do Jiu-Jitsu. Dentro desse movimento, a **Black Helmet** virou um polo de formação de atletas e de difusão da arte suave. Este texto fala do **Maurício Melo**, atleta que levou o nome da cidade para o cenário internacional, e de como o apoio a atletas locais fortalece o esporte na região." },
      { type: "video", id: "GCNN-CraO9k", title: "A trajetória de Maurício Melo" },
      { type: "h2", text: "Quem é Maurício Melo" },
      { type: "p", text: `O Maurício Melo é **faixa preta 6º grau**, graduado faixa preta por Carlos Gracie Jr., com ${YEARS_JIU_JITSU} anos de Jiu-Jitsu e ${YEARS_BLACK_BELT} de faixa preta. É ouro no Europeu IBJJF (kimono), bronze no Mundial No-Gi IBJJF, 4x campeão em eventos ADCC e competiu no ADCC Américas, em Buenos Aires, em dezembro de 2025. É atleta patrocinado pela marca VOUK e o símbolo da Black Helmet, academia que comanda em Blumenau desde 1998.` },
      { type: "h2", text: "A importância do apoio aos atletas" },
      { type: "p", text: "O apoio de marcas e academias é o que permite a talentos regionais competir e evoluir. Com patrocínio, o atleta consegue:" },
      { type: "ul", items: [
        "Disputar competições nacionais e internacionais com mais frequência.",
        "Treinar com estrutura adequada e orientação de professores experientes.",
        "Mostrar para quem está começando que é possível ir longe no esporte.",
      ] },
      { type: "p", text: "Quando uma academia investe nos alunos e cria vínculos com marcas do setor, ela fortalece toda a comunidade do Jiu-Jitsu local." },
      { type: "h2", text: "A metodologia da Black Helmet" },
      { type: "p", text: "A Black Helmet é uma das academias mais tradicionais de Blumenau. Tem aulas de **Jiu-Jitsu, No-Gi e Wrestling para Jiu-Jitsu**, com o Maurício Melo à frente, num trabalho técnico e ao mesmo tempo próximo de cada aluno, do iniciante ao competidor." },
      { type: "ul", items: [
        "**Desenvolvimento técnico e humano:** além da parte física, o treino trabalha disciplina, respeito e autoconfiança.",
        "**Variedade de modalidades:** com kimono, sem kimono (No-Gi) e quedas para o Jiu-Jitsu, formando atletas completos.",
        "**Experiência de quem ainda compete:** a trajetória do professor dá segurança no aprendizado.",
      ] },
      { type: "h2", text: "Os benefícios do Jiu-Jitsu e o impacto em Blumenau" },
      { type: "p", text: "Para o corpo, o Jiu-Jitsu melhora condicionamento, flexibilidade e força. Para a cabeça, ajuda a reduzir o estresse, aumentar a autoestima e desenvolver disciplina. Em Blumenau, a arte suave também tem papel social: acolhe crianças, jovens e adultos e oferece uma alternativa esportiva saudável." },
      { type: "h2", text: "Conclusão" },
      { type: "p", text: "O Maurício Melo representa a força e a determinação do Jiu-Jitsu blumenauense. Se você procura um lugar para começar ou evoluir no Jiu-Jitsu, a Black Helmet junta tradição e experiência de competição com um ensino feito para o seu ritmo." },
    ],
  },
  {
    slug: "voce-sabe-passar-a-guarda-como-mauricio-melo",
    seoTitle: "Passagem de guarda no Jiu-Jitsu com o Maurício Melo",
    title: "Você sabe passar a guarda como o Maurício Melo?",
    description:
      "Passo a passo da passagem de guarda demonstrada pelo Maurício Melo, faixa preta 6º grau, com dicas de base, postura e pressão para treinar.",
    category: "Técnica",
    published: "2025-10-16",
    modified: MIGRATED,
    author: "academia",
    cover: { src: "/img/blog/voce-sabe-passar-a-guarda-como-mauricio-melo.webp", width: 1022, height: 577, alt: "Dois atletas de kimono sentados no tatame, diante do logo da VOUK" },
    body: [
      { type: "p", text: "A **passagem de guarda** é um dos fundamentos mais importantes do Jiu-Jitsu. É o momento em que quem está por cima rompe a linha de defesa formada pelas pernas e pelo quadril do oponente (a guarda) e avança para uma posição de domínio, como a montada ou o 100 kg. Dominar essa transição exige técnica, paciência e muita repetição." },
      { type: "p", text: "No vídeo abaixo, o Maurício Melo, faixa preta 6º grau e professor da Black Helmet, demonstra uma passagem de guarda clássica e cheia de detalhes. Este texto complementa a demonstração." },
      { type: "video", id: "V7F_2-PZXrA", title: "Você sabe passar a guarda como Maurício Melo?" },
      { type: "h2", text: "Por que a passagem de guarda é fundamental" },
      { type: "ul", items: [
        "**Pontua nas competições:** nas regras da IBJJF, a passagem de guarda vale três pontos e pode decidir uma luta equilibrada.",
        "**Leva ao controle:** você sai de uma posição em que o oponente tem espaço para atacar e chega ao 100 kg, ao joelho na barriga ou à montada.",
        "**Treina timing e paciência:** é preciso sentir o momento certo de quebrar a estrutura da guarda.",
        "**Ensina base, postura e controle:** três conceitos simples que sustentam toda a arte suave.",
      ] },
      { type: "h2", text: "O passo a passo demonstrado" },
      { type: "ol", items: [
        "**Postura sólida dentro da guarda:** joelho apoiado na linha da calça do adversário e coluna ereta, sem abrir espaço para raspagem.",
        "**Quebra da guarda:** uma mão na lapela e a outra no cotovelo ou na manga do oponente. Use o joelho para pressionar e abrir a guarda, sem pressa, esperando o adversário relaxar as pernas.",
        "**Controle das pernas:** com a guarda aberta, segure o joelho ou a calça para ele não recompor. Ao mesmo tempo, bloqueie o quadril com o antebraço ou com a perna.",
        "**A passagem:** deslize o joelho entre as pernas do adversário e projete o corpo para frente, colando o ombro no peito dele. Mantenha a pressão com o quadril e afaste a coxa oposta.",
        "**Estabilização:** termine no 100 kg ou na montada. Ajuste a base, respire e prepare o ataque.",
      ] },
      { type: "h2", text: "Dicas para melhorar a sua passagem" },
      { type: "ul", items: [
        "**Base e postura primeiro:** estabilidade dentro da guarda impede triângulos e omoplatas.",
        "**Pressão constante:** use o peso do corpo, com ombro e quadril como alavancas, e não só os braços.",
        "**Controle de punhos e mangas:** não deixe o oponente montar pegadas fortes.",
        "**Varie as passagens:** toreando, emborcada, por fora. Quem só tem uma fica previsível.",
        "**Drill e rola:** repita devagar no aquecimento e depois teste no treino de verdade para acertar o timing.",
      ] },
      { type: "h2", text: "Conclusão" },
      { type: "p", text: "A passagem de guarda mostra como um detalhe de postura, pressão ou pegada muda tudo. Assista ao vídeo, observe cada ajuste e treine com parceiros. E, se quiser correção de perto, a aula na Black Helmet é o lugar para isso." },
    ],
  },
  {
    slug: "estrangulamento-do-norte-sul-jiu-jitsu",
    legacyPath: "/estrangulamento-norte‑sul-no-jiu‑jitsu-aprenda-com-mauricio-melo-da-black-helmet-de-blumenau/",
    seoTitle: "Estrangulamento do norte-sul no Jiu-Jitsu, passo a passo",
    title: "Estrangulamento do norte-sul no Jiu-Jitsu: aprenda com o Maurício Melo",
    description:
      "Do 100 kg para o norte-sul com estrangulamento na lapela: o passo a passo demonstrado pelo Maurício Melo, com base, postura e controle.",
    category: "Técnica",
    published: "2025-10-16",
    modified: MIGRATED,
    author: "academia",
    cover: { src: "/img/blog/estrangulamento-do-norte-sul-jiu-jitsu.webp", width: 797, height: 583, alt: "Demonstração do 100 kg no tatame do centro de treinamento da VOUK" },
    body: [
      { type: "p", text: "No Jiu-Jitsu, os detalhes fazem a diferença. Num vídeo gravado no centro de treinamento da VOUK, marca que patrocina o Maurício Melo, ele demonstra uma **transição do 100 kg para o norte-sul**, finalizando com um estrangulamento na lapela. O estilo é o de sempre: fundamento e pressão constante." },
      { type: "video", id: "JLCIkWBQ1vs", title: "Estrangulamento do norte-sul com Maurício Melo" },
      { type: "h2", text: "O 100 kg e o norte-sul" },
      { type: "p", text: "O **100 kg** é o controle lateral em que quem está por cima distribui o peso sobre o oponente, imobilizando quadril e ombros, geralmente com um braço por baixo da cabeça e o outro junto ao cotovelo do adversário. Dele saem transições para a montada, o joelho na barriga ou, como no vídeo, o **norte-sul**." },
      { type: "p", text: "No norte-sul, o seu tronco fica alinhado ao do oponente, com as cabeças em sentidos opostos. Essa mudança de direção reduz as chances de raspagem e abre espaço para o estrangulamento." },
      { type: "h2", text: "Passo a passo" },
      { type: "ol", items: [
        "**Partindo do 100 kg:** vire o corpo de lado, transfira o peso do quadril para o peito e bloqueie o ombro do adversário com o seu ombro.",
        "**Transição para o norte-sul:** gire o tronco, coloque o ombro no meio do peito do oponente e deslize para o norte-sul, mantendo o peso para ele não virar de lado.",
        "**Pegada na lapela:** com a posição estável, passe o polegar por dentro da lapela do oponente, por baixo do pescoço. A outra mão controla a calça ou a lapela oposta para travar a defesa.",
        "**Finalização:** puxe a lapela enquanto desloca o corpo levemente de lado para ajustar a pressão.",
        "**Segurança:** no primeiro tapinha, solte na hora.",
      ] },
      { type: "h2", text: "Base, postura e controle" },
      { type: "ul", items: [
        "**Base sólida:** distribua o peso com joelhos e cotovelos como apoio para o oponente não escapar.",
        "**Postura correta:** coluna alinhada e pescoço protegido. Na transição, não se incline demais.",
        "**Controle:** domine as pegadas na lapela e no quadril. Sem controle, o adversário repõe a guarda.",
      ] },
      { type: "h2", text: "Conclusão" },
      { type: "p", text: "É uma técnica old school e extremamente eficiente quando feita com pressão, base e controle. Estrangulamento se treina com um professor por perto: a repetição guiada é o que garante a técnica e a segurança no treino." },
    ],
  },
  {
    slug: "mauricio-melo-recebe-6-grau-das-maos-crezio",
    legacyPath: "/mauricio-mello-recebe-6-grau-das-maos-crezio/",
    seoTitle: "Maurício Melo recebe o 6º grau das mãos do mestre Crézio",
    title: "A jornada de um mestre: Maurício Melo recebe o 6º grau das mãos do mestre Crézio",
    description:
      "O Maurício Melo recebe o sexto grau na faixa preta das mãos do mestre Crézio: a celebração de uma vida inteira dedicada ao Jiu-Jitsu.",
    category: "Academia",
    published: "2025-10-29",
    modified: MIGRATED,
    author: "academia",
    cover: { src: "/img/blog/mauricio-melo-recebe-6-grau-das-maos-crezio.webp", width: 1485, height: 1485, alt: "Maurício Melo e o mestre Crézio, de faixa coral, na graduação de 6º grau" },
    body: [
      { type: "p", text: "Receber o **sexto grau na faixa preta de Jiu-Jitsu das mãos do mestre Crézio** carrega muito mais do que um reconhecimento técnico. É a celebração de uma vida inteira dedicada ao Jiu-Jitsu." },
      { type: "p", text: "Dos primeiros treinos às grandes competições, cada passo da trajetória do professor Maurício Melo foi guiado por disciplina, paixão e respeito pelos valores do Jiu-Jitsu." },
      { type: "p", text: "Ser graduado por um ícone como o mestre Crézio representa a continuidade de uma linhagem de mestres, atletas e professores que mantém viva a essência do esporte. O sexto grau simboliza as conquistas no tatame e também a influência passada a cada aluno e companheiro de jornada." },
      { type: "p", text: "Assim como o mestre Crézio inspirou gerações, o professor Maurício segue inspirando novos praticantes a acreditar na superação, na técnica e na humildade, os pilares que sustentam a história da Black Helmet." },
    ],
  },
  {
    slug: "o-que-o-jiu-jitsu-ensina-alem-da-luta",
    seoTitle: "O que o Jiu-Jitsu ensina além da luta",
    title: "O que o Jiu-Jitsu ensina além da luta",
    description:
      "Autoconhecimento, disciplina, resiliência, inteligência emocional, humildade e coragem: as lições do tatame que valem para a vida.",
    category: "Filosofia",
    published: "2025-07-10",
    modified: MIGRATED,
    author: "academia",
    cover: { src: "/img/blog/o-que-o-jiu-jitsu-ensina-alem-da-luta.webp", width: 1200, height: 1600, alt: "Mão ajustando a faixa preta amarrada no kimono branco" },
    body: [
      { type: "p", text: "Quando se fala em Jiu-Jitsu, a maioria das pessoas pensa em luta, competição e defesa pessoal. Mas quem vive o Jiu-Jitsu sabe que ele vai muito além do combate. No tatame, a gente aprende **valores que moldam o caráter**, fortalecem a mente e mudam a forma de enxergar a vida." },
      { type: "p", text: "Na Black Helmet, em Blumenau, cada treino é um espelho da vida real: às vezes você vence, às vezes aprende, mas nunca sai igual." },
      { type: "h2", text: "1. Autoconhecimento: o tatame é um espelho" },
      { type: "p", text: "O Jiu-Jitsu revela quem você é. A cada treino, você passa por pressão, desconforto e superação, e aprende sobre os seus **limites, emoções e reações**. O controle do corpo começa pelo controle da mente, e o adversário mais difícil não está na sua frente." },
      { type: "h2", text: "2. Disciplina e respeito" },
      { type: "p", text: "Desde o primeiro dia, o aluno aprende a cumprimentar, respeitar a hierarquia e manter a postura. Cada técnica pede paciência, repetição e humildade. A disciplina que começa no treino vira **autocontrole, responsabilidade e respeito pelo próximo**." },
      { type: "h2", text: "3. Resiliência: aprender a cair e levantar" },
      { type: "p", text: "No Jiu-Jitsu, **cair faz parte**, e cada queda é uma chance de levantar mais forte. Perder é parte da evolução. Essa lição vale no trabalho, nos estudos e nas relações." },
      { type: "h2", text: "4. Inteligência emocional" },
      { type: "p", text: "Num rola intenso, não há espaço para desespero: é preciso **respirar, analisar e reagir com calma**. A mesma habilidade serve fora do tatame, nos negócios, nas relações e nas decisões difíceis." },
      { type: "h2", text: "5. Humildade e cooperação" },
      { type: "p", text: "No tatame, ninguém é melhor do que ninguém. Todo faixa preta já foi iniciante, e todo treino é uma troca. Na Black Helmet, essa cultura é o coração da academia: um ambiente em que todos se ajudam e se respeitam." },
      { type: "h2", text: "6. Coragem e autoconfiança" },
      { type: "p", text: "Treinar com parceiros de tamanhos e estilos diferentes ensina a **lidar com o medo e a ansiedade**. A confiança nasce da repetição, da técnica e da certeza de que dá para superar o obstáculo com calma e preparo." },
      { type: "h2", text: "7. Filosofia de vida" },
      { type: "p", text: "Mais do que um esporte, o Jiu-Jitsu é uma **filosofia de evolução contínua**. Assim como no tatame, na vida não há vitória sem esforço nem evolução sem humildade." },
      { type: "h2", text: "O que o Jiu-Jitsu deixa em quem pratica" },
      { type: "ul", items: ["Corpo saudável e disciplinado", "Mente mais calma e focada", "Espírito mais forte e resiliente", "Atitude mais confiante e respeitosa"] },
      { type: "p", text: "O Jiu-Jitsu não ensina só a lutar, ensina a **viver melhor**. Mais do que faixas e medalhas, a Black Helmet busca formar caráter e equilíbrio, dentro e fora do tatame." },
    ],
  },
  {
    slug: "crianca-no-jiu-jitsu",
    seoTitle: "É bom uma criança fazer Jiu-Jitsu? Os benefícios",
    title: "É bom uma criança fazer Jiu-Jitsu?",
    description:
      "Coordenação, força, disciplina, autoconfiança e respeito: os benefícios do Jiu-Jitsu para crianças e como funciona a turma kids da Black Helmet.",
    category: "Kids",
    published: "2025-11-04",
    modified: MIGRATED,
    author: "academia",
    cover: { src: "/img/blog/crianca-no-jiu-jitsu.webp", width: 1080, height: 1080, alt: "Turma kids de Jiu-Jitsu de kimono no tatame da Black Helmet" },
    body: [
      { type: "p", text: "Muitos pais se perguntam se o **Jiu-Jitsu é bom para crianças**. A resposta é sim. Mais do que um esporte, o Jiu-Jitsu é uma escola de valores que ajuda os pequenos a crescer com disciplina, respeito, autoconfiança e equilíbrio emocional." },
      { type: "h2", text: "Benefícios físicos" },
      { type: "p", text: "**Desenvolvimento motor:** rolamentos, quedas e transições desenvolvem coordenação, equilíbrio e consciência corporal. A criança aprende a conhecer o próprio corpo e a se mover com segurança." },
      { type: "p", text: "**Força e flexibilidade:** cada treino trabalha o corpo todo e cria o hábito de uma vida ativa desde cedo." },
      { type: "p", text: "**Saúde:** o Jiu-Jitsu combate o sedentarismo e melhora o condicionamento, a postura e a respiração. No tatame, as crianças se movimentam, se divertem e gastam energia longe das telas." },
      { type: "h2", text: "Benefícios socioemocionais" },
      { type: "ul", items: [
        "**Disciplina e autocontrole:** seguir regras, respeitar o professor, esperar a vez e controlar as emoções.",
        "**Autoconfiança:** cada técnica aprendida reforça a sensação de capacidade. O progresso vem do esforço.",
        "**Respeito e convivência:** respeitar colegas e hierarquia, ajudar o outro e lidar com a frustração.",
        "**Resiliência:** lidar com vitórias e derrotas com maturidade.",
      ] },
      { type: "h2", text: "Defesa pessoal e confiança contra o bullying" },
      { type: "p", text: "O Jiu-Jitsu ensina técnicas de defesa pessoal que ajudam a criança a se proteger. Mais do que isso, a postura de segurança e confiança que ela ganha no tatame ajuda a evitar situações de bullying." },
      { type: "h2", text: "A turma kids da Black Helmet" },
      { type: "p", text: "Na Black Helmet, as aulas kids são **lúdicas e seguras, a partir de 5 anos, com turmas separadas por faixa etária**. Quem conduz é a **Professora Maria Helena, faixa preta**. Os pais acompanham tudo da sala de espera, com transmissão ao vivo do tatame." },
      { type: "p", text: "Colocar uma criança no Jiu-Jitsu é dar a ela a chance de crescer com propósito, força e valores sólidos." },
    ],
  },
];

export const postPath = (p: Post) => `/${p.slug}/`;
export const findPost = (path: string) => POSTS.find((p) => postPath(p) === path);
/** Mais recentes primeiro. */
export const POSTS_BY_DATE = [...POSTS].sort((a, b) => b.published.localeCompare(a.published));

export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  return `${d} de ${months[m - 1]} de ${y}`;
};

export const readingMinutes = (p: Post) => {
  const words = p.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
};
