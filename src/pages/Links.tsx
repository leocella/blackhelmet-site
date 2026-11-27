import type { ReactNode } from "react";
import { ADDRESS, HOURS, MAPS_ROUTE_URL, TRIAL_LABEL, WA_INSTAGRAM } from "@/content/site";
import { track } from "@/lib/track";
import { Arrow, SealLabel, Selo, WhatsIcon } from "@/components/ui";

// Página da bio do Instagram (/links). Três caminhos: WhatsApp, site e rota até a academia.

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

type Item = { id: string; href: string; label: string; sub: string; icon: ReactNode; primary?: boolean; external?: boolean };

const ITEMS: Item[] = [
  { id: "whatsapp", href: WA_INSTAGRAM, label: `Agendar ${TRIAL_LABEL}`, sub: "Direto no WhatsApp da equipe", icon: <WhatsIcon />, primary: true, external: true },
  { id: "site", href: "/", label: "Conhecer a academia", sub: "Turmas, professores e horários", icon: <GlobeIcon /> },
  { id: "rota", href: MAPS_ROUTE_URL, label: "Como chegar", sub: "Rota pelo Google Maps", icon: <PinIcon />, external: true },
];

export const Links = () => (
  <main className="grain relative min-h-screen overflow-hidden bg-helmet pb-32 pt-12 sm:pt-16">
    {/* Anéis do selo ao fundo, como no topo da home. */}
    <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute left-1/2 top-[-120px] w-[640px] max-w-none -translate-x-1/2 opacity-60">
      <circle cx="300" cy="300" r="286" fill="none" stroke="#f2f8f8" strokeOpacity=".35" strokeWidth="1.5" className="ring-draw" />
      <circle cx="300" cy="300" r="250" fill="none" stroke="#f2f8f8" strokeOpacity=".1" strokeWidth="1" />
    </svg>

    <div className="relative mx-auto w-full max-w-[440px] px-5">
      <header className="rise text-center">
        <Selo size={112} eager alt="" className="mx-auto" />
        <h1 className="mt-6 font-display text-[34px] font-semibold uppercase leading-none tracking-[0.04em]">Black Helmet Team</h1>
        <SealLabel className="mt-4 justify-center text-steel">Blumenau · desde 1998</SealLabel>
        <p className="mt-5 font-display text-[22px] font-light leading-tight text-ring/90">
          Jiu-Jitsu em Blumenau. Todo mundo começou do <span className="font-semibold text-crest">zero.</span>
        </p>
      </header>

      <ul className="mt-9 space-y-3">
        {ITEMS.map((x, i) => (
          <li key={x.id} className="rise" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
            <a
              href={x.href}
              {...(x.external ? { target: "_blank", rel: "noopener" } : {})}
              onClick={() => track("links_click", { link: x.id })}
              className={`group flex min-h-[72px] items-center gap-3 rounded-full border-2 py-3 pl-4 pr-5 transition duration-200 active:scale-[0.98] ${
                x.primary
                  ? "border-crest bg-crest text-helmet hover:bg-[#fff236]"
                  : "border-ring/80 bg-helmet text-ring hover:border-crest hover:text-crest"
              }`}
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${x.primary ? "bg-helmet text-crest" : "border border-graphite bg-helmet-2"}`}>
                {x.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[17px] font-medium uppercase leading-tight tracking-[0.03em] sm:text-[19px]">{x.label}</span>
                <span className={`mt-0.5 block text-[13px] leading-snug ${x.primary ? "text-helmet/75" : "text-steel"}`}>{x.sub}</span>
              </span>
              <Arrow className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ul>

      <section aria-label="Endereço e horários" className="rise mt-10 border border-graphite bg-helmet-2/60 p-5" style={{ animationDelay: ".4s" }}>
        <address className="text-[14px] not-italic leading-relaxed text-steel">
          <span className="font-semibold text-ring">{ADDRESS.street}</span>
          <br />
          {ADDRESS.district}, {ADDRESS.city} - {ADDRESS.region}
        </address>
        <dl className="mt-4 divide-y divide-graphite border-t border-graphite">
          {HOURS.map((h) => (
            <div key={h.label} className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-[13px] text-steel">{h.label}</dt>
              <dd className="font-display text-[17px] font-medium text-ring">{h.time}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-8 text-center text-[12px] uppercase tracking-[0.3em] text-steel-mid">Oss</p>
    </div>
  </main>
);
