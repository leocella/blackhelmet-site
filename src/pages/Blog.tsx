import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { Arrow, SealLabel } from "@/components/ui";
import { POSTS_BY_DATE } from "@/content/posts";
import { track } from "@/lib/track";

export const Blog = () => (
  <>
    <Header onHome={false} current="/blog/" />
    <main id="conteudo">
      <section className="grain relative overflow-hidden bg-helmet pb-14 pt-[104px] sm:pb-20 sm:pt-[132px]">
        <div className="wrap relative">
          <nav aria-label="Você está em" className="text-[13px] font-medium text-steel-mid">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="transition-colors hover:text-crest">Início</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-steel">Blog</li>
            </ol>
          </nav>
          <SealLabel left className="rise mt-8 text-steel">Blog · Black Helmet</SealLabel>
          <h1 className="rise mt-5 max-w-[16ch] font-display text-[48px] font-semibold leading-[0.95] sm:text-[72px]" style={{ animationDelay: ".08s" }}>
            Técnica, competição e <span className="text-crest">vida de tatame.</span>
          </h1>
          <p className="rise lead mt-6 max-w-2xl text-steel" style={{ animationDelay: ".16s" }}>
            Posições explicadas pelo Mauricio Melo, os bastidores do ADCC, as graduações da equipe e o que o Jiu-Jitsu ensina para adultos e crianças.
          </p>
        </div>
      </section>

      <section aria-label="Posts" className="bg-bone py-16 text-helmet sm:py-24">
        <div className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS_BY_DATE.map((p) => <PostCard key={p.slug} post={p} headingLevel="h2" />)}
        </div>
        <div className="wrap mt-16">
          <a href="/#agendar" onClick={() => track("cta_click", { location: "blog" })} className="btn-primary w-full sm:w-auto">
            Agendar aula experimental <Arrow />
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
