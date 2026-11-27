import { ADDRESS_LINE, CNPJ, INSTAGRAM_URL, CREDITS, LEGAL_NAME, YOUTUBE_URL } from "@/content/site";
import { track } from "@/lib/track";
import { Selo } from "./ui";

export const Footer = () => (
  <footer className="border-t border-graphite bg-helmet pb-28 pt-14 lg:pb-10">
    <div className="wrap grid gap-10 sm:grid-cols-[auto_1fr_auto] sm:items-center">
      <Selo size={88} alt="" />
      <div className="text-[14px] leading-relaxed text-steel-mid">
        <p className="font-semibold text-steel">Black Helmet Team · Jiu-Jitsu em Blumenau desde 1998</p>
        <p>{ADDRESS_LINE}</p>
        <p>{LEGAL_NAME} · CNPJ {CNPJ}</p>
      </div>
      <ul className="-mx-2 flex flex-wrap text-[14px] font-semibold text-steel">
        <li><a className="inline-flex min-h-[44px] items-center px-2 transition-colors hover:text-crest" href={INSTAGRAM_URL} target="_blank" rel="noopener">Instagram</a></li>
        <li><a className="inline-flex min-h-[44px] items-center px-2 transition-colors hover:text-crest" href={YOUTUBE_URL} target="_blank" rel="noopener">YouTube</a></li>
        <li><a className="inline-flex min-h-[44px] items-center px-2 transition-colors hover:text-crest" href="/blog/">Blog</a></li>
        <li><a className="inline-flex min-h-[44px] items-center px-2 transition-colors hover:text-crest" href="/privacidade/">Privacidade</a></li>
      </ul>
    </div>
    <div className="wrap mt-10">
      <ul className="flex flex-wrap justify-center gap-x-6 border-t border-graphite pt-4 text-[13px] text-steel-mid sm:justify-end">
        {CREDITS.map((c) => (
          <li key={c.name}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener"
              onClick={() => track("credit_click", { agency: c.name, role: c.role })}
              className="group inline-flex min-h-[44px] items-center gap-1 transition-colors hover:text-crest"
            >
              {c.role} por <span className="font-semibold text-steel transition-colors group-hover:text-crest">{c.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
