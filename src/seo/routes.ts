import {
  ADDRESS, CNPJ, FAQ, HOURS, INSTAGRAM_URL, LEGAL_NAME, MAPS_URL, SITE_NAME, SITE_URL, TITLES, WHATSAPP_NUMBER, YOUTUBE_URL,
} from "@/content/site";
import { POSTS, POSTS_BY_DATE, postPath, type Post } from "@/content/posts";

// Fonte única das rotas públicas: prerender, sitemap, robots e títulos leem daqui (padrão Claryon).

export { SITE_URL };
type JsonLd = Record<string, unknown>;

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  sitemap?: { lastmod: string; changefreq: string; priority: number };
  jsonLd: JsonLd[];
  /** Open Graph: padrão é website com a imagem de compartilhamento da marca. */
  og?: { type: "article"; image: string; imageAlt: string; published: string; modified: string; section: string };
};

const OG_IMAGE = `${SITE_URL}/og/black-helmet-share.jpg`;
const ORG_ID = `${SITE_URL}/#academia`;
const PERSON_ID = `${SITE_URL}/#mauricio-melo`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LASTMOD = "2026-11-25";

const academy: JsonLd = {
  "@type": ["SportsActivityLocation", "ExerciseGym"],
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: ["Black Helmet", "Black Helmet Jiu-Jitsu", LEGAL_NAME],
  description:
    "Academia de Jiu-Jitsu no bairro Garcia, em Blumenau (SC), desde 1998. Turmas de adulto do iniciante ao avançado, mulheres, kids a partir de 5 anos, 40+, No-Gi, Wrestling para Jiu-Jitsu, defesa pessoal e aula particular, com o Maurício Melo, faixa preta 6º grau de Carlos Gracie Jr.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/img/selo-384.png`,
  image: OG_IMAGE,
  telephone: `+${WHATSAPP_NUMBER}`,
  taxID: CNPJ,
  foundingDate: "1998",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: "BR",
  },
  hasMap: MAPS_URL,
  areaServed: [
    { "@type": "City", name: "Blumenau" },
    { "@type": "Place", name: "Garcia, Blumenau" },
  ],
  openingHoursSpecification: HOURS.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sport: "Brazilian Jiu-Jitsu",
  amenityFeature: [
    "Tatame padrão olímpico",
    "Ambiente climatizado",
    "Sala de espera com transmissão ao vivo",
    "Turmas com número limitado de alunos",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  makesOffer: [
    "Jiu-Jitsu adulto (iniciante ao avançado)",
    "Jiu-Jitsu para mulheres",
    "Jiu-Jitsu kids (a partir de 5 anos)",
    "Jiu-Jitsu 40+",
    "No-Gi",
    "Wrestling para Jiu-Jitsu",
    "Defesa pessoal",
    "Aula particular",
    "Aula experimental",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  founder: { "@id": PERSON_ID },
  employee: [
    { "@id": PERSON_ID },
    { "@type": "Person", name: "Maria Helena", jobTitle: "Professora de Jiu-Jitsu kids, faixa preta" },
  ],
  sameAs: [INSTAGRAM_URL, YOUTUBE_URL],
};

const person: JsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Maurício Melo",
  jobTitle: "Mestre de Jiu-Jitsu, faixa preta 6º grau",
  description:
    "Faixa preta 6º grau de Carlos Gracie Jr., com 36 anos de Jiu-Jitsu e 24 de faixa preta. Fundador e professor da Black Helmet Team, em Blumenau (SC).",
  award: TITLES.filter((t) => /Ouro|Bronze|campeão|Competidor/.test(t)),
  knowsAbout: ["Brazilian Jiu-Jitsu", "No-Gi", "Grappling", "ADCC", "Defesa pessoal"],
  worksFor: { "@id": ORG_ID },
  homeLocation: { "@type": "City", name: "Blumenau" },
  sameAs: [INSTAGRAM_URL, YOUTUBE_URL],
};

const website: JsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
};

const faqPage: JsonLd = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const graph = (...nodes: JsonLd[]): JsonLd => ({ "@context": "https://schema.org", "@graph": nodes });

export const HOME_ROUTE: RouteMeta = {
  path: "/",
  title: "Jiu-Jitsu em Blumenau | Black Helmet Team · Maurício Melo",
  description:
    "Jiu-Jitsu no Garcia, em Blumenau, com o Maurício Melo, faixa preta 6º grau. Turmas para adultos, mulheres, kids a partir de 5 anos e 40+. Agende sua aula.",
  sitemap: { lastmod: LASTMOD, changefreq: "monthly", priority: 1 },
  jsonLd: [
    graph(academy, person, website, {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Jiu-Jitsu em Blumenau | Black Helmet Team",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      inLanguage: "pt-BR",
      dateModified: LASTMOD,
    }, faqPage),
  ],
};

export const PRIVACY_ROUTE: RouteMeta = {
  path: "/privacidade/",
  title: "Política de privacidade | Black Helmet Team",
  description: "Como a Black Helmet Team trata os dados enviados pelo site e pelo WhatsApp.",
  sitemap: { lastmod: LASTMOD, changefreq: "yearly", priority: 0.2 },
  jsonLd: [graph(website)],
};

export const NOT_FOUND_ROUTE: RouteMeta = {
  path: "/404",
  title: "Página não encontrada | Black Helmet Team",
  description: "Essa página não existe. Volte para o início e agende sua aula de Jiu-Jitsu em Blumenau.",
  noindex: true,
  jsonLd: [],
};

const crumbs = (items: [string, string][]): JsonLd => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE_URL}${path}` })),
});

export const BLOG_ROUTE: RouteMeta = {
  path: "/blog/",
  title: "Blog de Jiu-Jitsu | Black Helmet Team · Blumenau",
  description:
    "Técnicas explicadas pelo Maurício Melo, bastidores do ADCC, graduações da equipe e o que o Jiu-Jitsu ensina para adultos e crianças. Black Helmet, Blumenau.",
  sitemap: { lastmod: POSTS_BY_DATE.map((p) => p.modified).sort().reverse()[0], changefreq: "weekly", priority: 0.6 },
  jsonLd: [
    graph(website, {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog/#blog`,
      url: `${SITE_URL}/blog/`,
      name: "Blog da Black Helmet Team",
      inLanguage: "pt-BR",
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": WEBSITE_ID },
      blogPost: POSTS_BY_DATE.map((p) => ({ "@id": `${SITE_URL}${postPath(p)}#post` })),
    }, crumbs([["Início", "/"], ["Blog", "/blog/"]])),
  ],
};

const postRoute = (p: Post): RouteMeta => {
  const url = `${SITE_URL}${postPath(p)}`;
  const ogImage = `${SITE_URL}/og/blog/${p.slug}.jpg`;
  const videos = p.body.flatMap((b) => (b.type === "video" ? [`https://www.youtube.com/watch?v=${b.id}`] : []));
  return {
    path: postPath(p),
    title: `${p.seoTitle} | Black Helmet`,
    description: p.description,
    sitemap: { lastmod: p.modified, changefreq: "yearly", priority: 0.5 },
    og: { type: "article", image: ogImage, imageAlt: p.cover.alt, published: p.published, modified: p.modified, section: p.category },
    jsonLd: [
      graph(website, {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: url,
        url,
        headline: p.title,
        description: p.description,
        image: [ogImage, `${SITE_URL}${p.cover.src}`],
        datePublished: p.published,
        dateModified: p.modified,
        inLanguage: "pt-BR",
        articleSection: p.category,
        author: p.author === "mauricio" ? { "@id": PERSON_ID } : { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        isPartOf: { "@id": `${SITE_URL}/blog/#blog` },
        about: { "@id": ORG_ID },
        ...(videos.length ? { video: videos.map((v) => ({ "@type": "VideoObject", name: p.title, url: v, embedUrl: v.replace("watch?v=", "embed/") })) } : {}),
      }, {
        // Nós citados pelo @id (precisam existir no mesmo grafo).
        "@type": ["SportsActivityLocation", "ExerciseGym"], "@id": ORG_ID, name: SITE_NAME, url: `${SITE_URL}/`, logo: `${SITE_URL}/img/selo-384.png`,
      }, { "@type": "Person", "@id": PERSON_ID, name: "Maurício Melo", url: `${SITE_URL}/#professor` },
      crumbs([["Início", "/"], ["Blog", "/blog/"], [p.seoTitle, postPath(p)]])),
    ],
  };
};

export const getRoutes = (): RouteMeta[] => [HOME_ROUTE, PRIVACY_ROUTE, BLOG_ROUTE, ...POSTS.map(postRoute)];

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonForScript = (data: unknown) => JSON.stringify(data, null, 2).replace(/</g, "\\u003c");

export const renderHead = (route: RouteMeta): string => {
  const url = `${SITE_URL}${route.path}`;
  const tags = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    route.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    !route.noindex && `<link rel="canonical" href="${url}" />`,
    `<meta name="geo.region" content="BR-SC" />`,
    `<meta name="geo.placename" content="Blumenau" />`,
    `<meta property="og:type" content="${route.og?.type ?? "website"}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    !route.noindex && `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:image" content="${route.og?.image ?? OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(route.og?.imageAlt ?? "Selo da Black Helmet Team, Jiu-Jitsu em Blumenau desde 1998")}" />`,
    route.og && `<meta property="article:published_time" content="${route.og.published}" />`,
    route.og && `<meta property="article:modified_time" content="${route.og.modified}" />`,
    route.og && `<meta property="article:section" content="${escapeHtml(route.og.section)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${route.og?.image ?? OG_IMAGE}" />`,
    ...route.jsonLd.map((d) => `<script type="application/ld+json">\n${jsonForScript(d)}\n</script>`),
  ];
  return tags.filter(Boolean).join("\n  ");
};
