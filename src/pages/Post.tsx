import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { Rich } from "@/components/Rich";
import { YouTube } from "@/components/YouTube";
import { Arrow, SealLabel, WhatsIcon } from "@/components/ui";
import { formatDate, POSTS_BY_DATE, readingMinutes, type Block, type Post as PostT } from "@/content/posts";
import { TRIAL_LABEL, WA_DEFAULT } from "@/content/site";
import { track } from "@/lib/track";

const BlockView = ({ b }: { b: Block }) => {
  switch (b.type) {
    case "p":
      return <p><Rich text={b.text} /></p>;
    case "h2":
      return <h2 className="!mt-14 font-display text-[30px] font-semibold leading-[1.08] text-helmet sm:text-[36px]">{b.text}</h2>;
    case "ul":
    case "ol": {
      const L = b.type;
      return (
        <L className="space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4">
              {L === "ol" ? (
                <span className="grid h-8 w-8 shrink-0 place-items-center bg-crest font-display text-[17px] font-semibold text-helmet" aria-hidden="true">{i + 1}</span>
              ) : (
                <span className="mt-[11px] h-2 w-2 shrink-0 bg-crest" aria-hidden="true" />
              )}
              <span className={L === "ol" ? "pt-[3px]" : ""}><Rich text={it} /></span>
            </li>
          ))}
        </L>
      );
    }
    case "quote":
      return (
        <blockquote className="!my-10 border-l-4 border-crest pl-6">
          <p className="font-display text-[26px] font-medium leading-[1.2] text-helmet sm:text-[30px]">{b.text}</p>
          {b.cite && <cite className="mt-3 block text-[14px] not-italic text-steel-deep">{b.cite}</cite>}
        </blockquote>
      );
    case "video":
      return <YouTube id={b.id} title={b.title} />;
    case "img":
      return (
        <figure className="!my-10">
          <img src={b.src} alt={b.alt} width={b.width} height={b.height} loading="lazy" decoding="async" className="h-auto w-full bg-helmet" />
          {b.caption && <figcaption className="mt-3 text-[14px] text-steel-deep">{b.caption}</figcaption>}
        </figure>
      );
  }
};

export const Post = ({ post }: { post: PostT }) => {
  const related = POSTS_BY_DATE.filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(POSTS_BY_DATE.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 3);
  const author = post.author === "mauricio" ? "Maurício Melo" : "Black Helmet Team";
  const portrait = post.cover.height > post.cover.width;

  return (
    <>
      <Header onHome={false} />
      <main id="conteudo">
        <article>
          <header className="grain relative overflow-hidden bg-helmet pb-14 pt-[104px] sm:pb-20 sm:pt-[128px]">
            <div className={`wrap relative grid items-end gap-10 ${portrait ? "lg:grid-cols-[1.25fr_0.75fr]" : "lg:grid-cols-[1.1fr_0.9fr]"} lg:gap-14`}>
              <div>
                <nav aria-label="Você está em" className="text-[13px] font-medium text-steel-mid">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li><a href="/" className="transition-colors hover:text-crest">Início</a></li>
                    <li aria-hidden="true">/</li>
                    <li><a href="/blog/" className="transition-colors hover:text-crest">Blog</a></li>
                    <li aria-hidden="true">/</li>
                    <li className="text-steel">{post.category}</li>
                  </ol>
                </nav>
                <SealLabel left className="rise mt-8 text-steel">{post.category}</SealLabel>
                <h1 className="rise mt-5 font-display text-[40px] font-semibold leading-[1] sm:text-[56px] lg:text-[60px]" style={{ animationDelay: ".08s" }}>
                  {post.title}
                </h1>
                <p className="rise lead mt-6 max-w-2xl text-steel" style={{ animationDelay: ".16s" }}>{post.description}</p>
                <p className="rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-steel-mid" style={{ animationDelay: ".24s" }}>
                  <span className="font-semibold text-ring">{author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.published}>{formatDate(post.published)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{readingMinutes(post)} min de leitura</span>
                </p>
              </div>
              <div className={`rise relative overflow-hidden bg-helmet-2 ${portrait ? "aspect-[4/5]" : "aspect-[16/10]"}`} style={{ animationDelay: ".2s" }}>
                <img
                  src={post.cover.src}
                  alt={post.cover.alt}
                  width={post.cover.width}
                  height={post.cover.height}
                  {...{ fetchpriority: "high" }}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
                />
              </div>
            </div>
          </header>

          <div className="bg-bone py-16 text-helmet sm:py-20">
            <div className="wrap">
              <div className="mx-auto max-w-[44rem] space-y-6 text-[18px] leading-[1.75] text-graphite">
                {post.body.map((b, i) => <BlockView key={i} b={b} />)}
              </div>

              <aside className="mx-auto mt-16 max-w-[44rem] border-t-2 border-helmet pt-10" aria-label="Agendar aula">
                <SealLabel left className="text-steel-deep">Aula experimental</SealLabel>
                <p className="mt-4 font-display text-[34px] font-semibold leading-[1.02] sm:text-[42px]">
                  Treine com o Maurício Melo, <span className="grifo">em Blumenau.</span>
                </p>
                <p className="lead mt-4 text-steel-deep">
                  Turmas para adultos, mulheres, kids a partir de 5 anos e 40+, no bairro Garcia. Você não precisa estar em forma para começar.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="/#agendar" onClick={() => track("cta_click", { location: "post", post: post.slug })} className="btn-primary">
                    Agendar {TRIAL_LABEL} <Arrow />
                  </a>
                  <a href={WA_DEFAULT} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { location: "post", post: post.slug })} className="btn-ghost-light">
                    <WhatsIcon /> Falar no WhatsApp
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </article>

        <section aria-labelledby="leia-tambem" className="border-t border-linelight bg-bone pb-20 text-helmet sm:pb-28">
          <div className="wrap pt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="leia-tambem" className="font-display text-[34px] font-semibold leading-none sm:text-[44px]">Leia também</h2>
              <a href="/blog/" className="inline-flex min-h-[44px] items-center gap-2 font-display text-[16px] font-medium uppercase tracking-[0.06em] text-helmet underline decoration-crest decoration-2 underline-offset-8 transition-colors hover:text-steel-deep">
                Todos os posts <Arrow />
              </a>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
