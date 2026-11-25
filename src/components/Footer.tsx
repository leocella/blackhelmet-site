import { ADDRESS_LINE, CNPJ, INSTAGRAM_URL, LEGAL_NAME, YOUTUBE_URL } from "@/content/site";
import { Selo } from "./ui";

export const Footer = () => (
  <footer className="border-t border-graphite bg-helmet pb-28 pt-14 lg:pb-14">
    <div className="wrap grid gap-10 sm:grid-cols-[auto_1fr_auto] sm:items-center">
      <Selo size={88} />
      <div className="text-[14px] leading-relaxed text-steel-deep">
        <p className="font-semibold text-steel">Black Helmet Team · Jiu-Jitsu em Blumenau desde 1998</p>
        <p>{ADDRESS_LINE}</p>
        <p>{LEGAL_NAME} · CNPJ {CNPJ}</p>
      </div>
      <ul className="flex gap-5 text-[14px] font-semibold text-steel">
        <li><a className="hover:text-crest" href={INSTAGRAM_URL} target="_blank" rel="noopener">Instagram</a></li>
        <li><a className="hover:text-crest" href={YOUTUBE_URL} target="_blank" rel="noopener">YouTube</a></li>
        <li><a className="hover:text-crest" href="/privacidade/">Privacidade</a></li>
      </ul>
    </div>
  </footer>
);
