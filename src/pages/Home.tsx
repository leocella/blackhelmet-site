import { useState } from "react";
import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import { AudienceTabs } from "@/components/AudienceTabs";
import { LeadForm } from "@/components/LeadForm";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { POSTS_BY_DATE } from "@/content/posts";
import { Arrow, Check, PhotoSlot, RingStat, SealLabel, TitleTicker, WhatsIcon } from "@/components/ui";
import {
  ADCC_TITLES, ADDRESS, ADDRESS_LINE, HOURS, YEARS_BLACK_BELT, YEARS_JIU_JITSU, MAPS_URL, OBJECTIONS, PHONE_DISPLAY, STEPS, STRUCTURE, TITLES, TRIAL_LABEL, WA_DEFAULT, WHATSAPP_NUMBER,
} from "@/content/site";
import { track } from "@/lib/track";
import { useReveal } from "@/lib/useReveal";

export const Home = () => {
  const [audience, setAudience] = useState("Adulto");
  useReveal();

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-crest focus:px-4 focus:py-2 focus:text-helmet">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        {/* HERO */}
        <section id="topo" className="grain relative overflow-hidden bg-helmet pb-14 pt-[104px] sm:pb-20 sm:pt-[132px]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-[30%] top-[6%] w-[110%] max-w-[760px] opacity-[0.16] sm:-right-[8%] sm:w-[62%] sm:opacity-[0.22] lg:-right-[4%] lg:top-[12%] lg:w-[40%] lg:opacity-100">
            <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
              <circle cx="300" cy="300" r="286" fill="none" stroke="#f2f8f8" strokeOpacity=".5" strokeWidth="2" className="ring-draw" />
              <circle cx="300" cy="300" r="250" fill="none" stroke="#f2f8f8" strokeOpacity=".12" strokeWidth="1" />
            </svg>
            <div className="relative aspect-square">
              <div className="absolute inset-[14%] rounded-full bg-[radial-gradient(closest-side,rgba(204,216,224,0.16),transparent)]" />
              <img src="/img/capacete.webp" alt="" width={299} height={368} {...{ fetchpriority: "high" }} className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="wrap relative">
            <SealLabel left className="rise text-steel">Blumenau · Garcia · desde 1998</SealLabel>
            <h1 className="rise mt-6 max-w-[15ch] font-display text-[50px] font-semibold leading-[0.92] sm:text-[80px] lg:text-[92px] xl:text-[100px]" style={{ animationDelay: ".08s" }}>
              Jiu-Jitsu em Blumenau. <span className="font-light text-ring/90">Todo mundo começou do</span> <span className="text-crest">zero.</span>
            </h1>
            <p className="rise lead mt-7 max-w-[40rem] text-ring/90" style={{ animationDelay: ".16s" }}>
              Turmas para adultos, mulheres e crianças a partir de 5 anos, inclusive para quem começa depois dos 40, com o Mauricio Melo, faixa preta 6º grau de Carlos Gracie Jr.
              Você não precisa estar em forma. <em className="font-medium text-steel">Só precisa aparecer.</em>
            </p>
            <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".24s" }}>
              <a href="#agendar" onClick={() => track("cta_click", { location: "hero" })} className="btn-primary !min-h-[58px] !text-[18px]">
                <span className="sm:hidden">Agendar aula experimental</span><span className="hidden sm:inline">Agendar minha {TRIAL_LABEL}</span> <Arrow className="h-5 w-5" />
              </a>
              <a href={WA_DEFAULT} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { location: "hero" })} className="btn-ghost-dark !min-h-[58px]">
                <WhatsIcon /> Falar no WhatsApp
              </a>
            </div>
            <ul className="rise mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-steel" style={{ animationDelay: ".32s" }}>
              {["Sem experiência", "Sem condicionamento", "Sem kimono na primeira aula"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-crest" aria-hidden="true" />{t}</li>
              ))}
            </ul>

            <div className="mt-14 grid grid-cols-2 gap-y-8 border-t border-graphite pt-10 sm:mt-20 sm:grid-cols-4">
              <RingStat value="6º" label="Grau · faixa preta" />
              <RingStat value={String(YEARS_JIU_JITSU)} label="Anos de tatame" />
              <RingStat value={`${ADCC_TITLES}x`} label="Campeão em eventos ADCC" />
              <RingStat value="1998" label="Desde · Blumenau" />
            </div>
          </div>
        </section>

        <TitleTicker />

        {/* PARA QUEM */}
        <section id="para-quem" className="bg-bone py-20 text-helmet sm:py-28">
          <div className="wrap">
            <div className="reveal max-w-3xl">
              <SealLabel left className="text-steel-deep">Para quem é</SealLabel>
              <h2 className="h-section mt-5">
                Escolha <span className="grifo">por onde</span> você começa.
              </h2>
              <p className="lead mt-5 text-steel-deep">
                Cada perfil tem ritmo, cuidado e objetivo próprios. Toque no seu e veja como é a sua primeira aula.
              </p>
            </div>
            <div className="reveal mt-10">
              <AudienceTabs onPick={setAudience} />
            </div>
          </div>
        </section>

        {/* OBJEÇÕES */}
        <section className="grain relative bg-helmet py-20 sm:py-28">
          <div className="wrap relative">
            <div className="reveal max-w-3xl">
              <SealLabel left className="text-steel">Antes da primeira aula</SealLabel>
              <h2 className="h-section mt-5">
                Parece motivo para não começar. <span className="text-crest">Não é.</span>
              </h2>
            </div>
            <div className="mt-12 grid gap-px bg-graphite sm:grid-cols-2">
              {OBJECTIONS.map((o, i) => (
                <div key={o.q} className="reveal group relative bg-helmet p-7 transition-colors duration-300 hover:bg-helmet-2 sm:p-9" style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-crest transition-transform duration-300 group-hover:scale-y-100" aria-hidden="true" />
                  <p className="font-display text-[26px] font-medium leading-tight text-ring">“{o.q}”</p>
                  <p className="lead mt-3 text-steel">{o.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-bone py-20 text-helmet sm:py-28">
          <div className="wrap">
            <div className="reveal max-w-3xl">
              <SealLabel left className="text-steel-deep">Como funciona</SealLabel>
              <h2 className="h-section mt-5">Da mensagem ao tatame em <span className="grifo">4 passos.</span></h2>
            </div>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {STEPS.map((s, i) => (
                <li key={s.n} className="reveal border-t-2 border-helmet pt-6" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="grid h-11 w-11 place-items-center bg-crest font-display text-[22px] font-semibold text-helmet">{s.n}</span>
                  <h3 className="mt-5 font-display text-[26px] font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-steel-deep">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="reveal mt-12">
              <a href="#agendar" onClick={() => track("cta_click", { location: "steps" })} className="btn-primary w-full sm:w-auto">
                Dar o primeiro passo <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* PROFESSOR */}
        <section id="professor" className="grain relative overflow-hidden bg-helmet py-20 sm:py-28">
          <div className="wrap relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="reveal relative">
              <PhotoSlot id="professor" ratio="aspect-[4/5]" />
              <div className="absolute -bottom-6 left-6 bg-crest px-5 py-3 font-display text-[18px] font-semibold uppercase tracking-[0.06em] text-helmet sm:left-8">
                Mauricio Melo
              </div>
            </div>
            <div className="reveal">
              <SealLabel left className="text-steel">6º grau · faixa preta</SealLabel>
              <h2 className="h-section mt-5">
                Você aprende com quem <span className="text-crest">ainda compete.</span>
              </h2>
              <p className="lead mt-6 text-steel">
                O Mauricio Melo é faixa preta de Carlos Gracie Jr., com {YEARS_JIU_JITSU} anos de Jiu-Jitsu e {YEARS_BLACK_BELT} de faixa preta.
                Em dezembro de 2025 estava no tatame do ADCC Américas, em Buenos Aires. O mesmo preparo que ele leva para o campeonato,
                ele traz para a sua aula: técnica limpa, correção de perto e respeito pelo seu ritmo.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {TITLES.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] font-medium text-ring"><Check /> {t}</li>
                ))}
              </ul>
              <p className="mt-8 border-l-2 border-crest pl-4 text-[15px] leading-relaxed text-steel">
                As turmas kids ficam com a <strong className="text-ring">Professora Maria Helena</strong>, graduada faixa preta na Black Helmet,
                o <strong className="text-ring">Professor Mauricio</strong> e o <strong className="text-ring">Instrutor Andrews</strong>.
                A equipe foi formada pelo próprio Mauricio.
              </p>
            </div>
          </div>
        </section>

        {/* ESTRUTURA */}
        <section id="estrutura" className="bg-bone py-20 text-helmet sm:py-28">
          <div className="wrap">
            <div className="reveal max-w-3xl">
              <SealLabel left className="text-steel-deep">Estrutura</SealLabel>
              <h2 className="h-section mt-5">Feita para você <span className="grifo">voltar</span> amanhã.</h2>
            </div>
            {/* 5 cards: 2 em cima e 3 embaixo no desktop; no tablet o último ocupa a linha inteira. */}
            <div className="mt-12 grid gap-px bg-linelight sm:grid-cols-2 lg:grid-cols-6">
              {STRUCTURE.map((s, i) => (
                <div
                  key={s.title}
                  className={`reveal group relative bg-bone p-7 transition-colors duration-300 hover:bg-white ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === STRUCTURE.length - 1 && STRUCTURE.length % 2 ? "sm:col-span-2 lg:col-span-2" : ""}`}
                  style={{ transitionDelay: `${(i < 2 ? i : i - 2) * 70}ms` }}
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-helmet transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <span className="font-display text-[15px] font-medium text-steel-deep">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-[24px] font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-steel-deep">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATLETA */}
        <section className="relative overflow-hidden bg-helmet">
          <div className="grid lg:grid-cols-2">
            <PhotoSlot id="atleta" ratio="aspect-[16/11] lg:aspect-auto lg:min-h-[560px]" />
            <div className="wrap reveal flex flex-col justify-center py-16 lg:max-w-none lg:px-16">
              <SealLabel left className="text-steel">Do tatame ao pódio</SealLabel>
              <h2 className="mt-6">
                <span className="block font-display text-[22px] font-light uppercase tracking-[0.04em] text-ring/80 sm:text-[28px]">Guerra é preparo.</span>
                <span className="block font-display text-[64px] font-bold uppercase leading-[0.88] text-crest sm:text-[96px]">Legado.</span>
              </h2>
              <p className="lead mt-6 max-w-lg text-steel">
                Ouro no Europeu IBJJF, bronze no Mundial IBJJF, os dois de kimono, e {ADCC_TITLES} títulos em eventos ADCC. A disciplina que leva o Mauricio ao pódio é a mesma que
                você encontra na aula das 17h15 de uma terça qualquer.
              </p>
              <div className="mt-8">
                <a href="#agendar" onClick={() => track("cta_click", { location: "athlete" })} className="btn-ghost-dark w-full sm:w-auto">
                  Treinar com o Mauricio <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="bg-bone py-20 text-helmet sm:py-28">
          <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="reveal">
              <SealLabel left className="text-steel-deep">Dúvidas</SealLabel>
              <h2 className="h-section mt-5">Perguntas de quem <span className="grifo">está começando.</span></h2>
              <p className="lead mt-5 text-steel-deep">Não achou a sua? A equipe responde no WhatsApp.</p>
              <a href={WA_DEFAULT} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { location: "faq" })} className="btn-ghost-light mt-7">
                <WhatsIcon /> Perguntar no WhatsApp
              </a>
            </div>
            <div className="reveal"><Faq /></div>
          </div>
        </section>

        {/* AGENDAR + ONDE */}
        <section id="agendar" className="grain relative bg-helmet py-20 sm:py-28">
          <div className="wrap relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="reveal">
              <SealLabel left className="text-steel">Aula experimental</SealLabel>
              <h2 className="h-section mt-5">
                Sua primeira aula <span className="text-crest">começa aqui.</span>
              </h2>
              <p className="lead mt-5 max-w-lg text-steel">
                Preencha em 20 segundos. A mensagem abre pronta no WhatsApp e a equipe responde com os horários da sua turma.
              </p>
              <div className="mt-8"><LeadForm audience={audience} onAudience={setAudience} /></div>
            </div>

            <div id="onde" className="reveal flex flex-col gap-8 lg:pt-[132px]">
              <div className="border border-graphite p-6 sm:p-8">
                <h3 className="font-display text-[28px] font-semibold">Onde fica</h3>
                <address className="lead mt-3 not-italic text-steel">
                  {ADDRESS.street}<br />{ADDRESS.district}, {ADDRESS.city} - {ADDRESS.region}, {ADDRESS.postalCode}
                </address>
                <a href={MAPS_URL} target="_blank" rel="noopener" onClick={() => track("maps_click")} className="btn-ghost-dark mt-6 w-full sm:w-auto" aria-label={`Como chegar: ${ADDRESS_LINE}`}>
                  Como chegar <Arrow />
                </a>
              </div>
              <div className="border border-graphite p-6 sm:p-8">
                <h3 className="font-display text-[28px] font-semibold">Horário de funcionamento</h3>
                <dl className="mt-4 divide-y divide-graphite">
                  {HOURS.map((h) => (
                    <div key={h.label} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-[16px] text-steel">{h.label}</dt>
                      <dd className="font-display text-[22px] font-medium text-ring">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-[14px] text-steel-mid">A grade de cada turma vai pelo WhatsApp quando você agenda.</p>
              </div>
              <a href={`tel:+${WHATSAPP_NUMBER}`} onClick={() => track("phone_click")} className="font-display text-[28px] font-medium text-ring transition hover:text-crest">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" aria-labelledby="blog-titulo" className="bg-bone py-20 text-helmet sm:py-28">
          <div className="wrap">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <SealLabel left className="text-steel-deep">Do blog</SealLabel>
                <h2 id="blog-titulo" className="h-section mt-5">Direto do <span className="grifo">tatame.</span></h2>
              </div>
              <a href="/blog/" className="btn-ghost-light">Ver todos os posts <Arrow /></a>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS_BY_DATE.slice(0, 3).map((p, i) => (
                <div key={p.slug} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}><PostCard post={p} /></div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
};
