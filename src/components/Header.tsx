import { useEffect, useState } from "react";
import { Selo, WhatsIcon } from "./ui";
import { WA_DEFAULT } from "@/content/site";
import { track } from "@/lib/track";

const NAV = [
  { href: "#para-quem", label: "Para quem" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#professor", label: "Professor" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#onde", label: "Onde fica" },
];

export const Header = () => {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-graphite/80 bg-helmet/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-[64px] items-center justify-between gap-4 sm:h-[72px]">
        <a href="#topo" className="flex items-center gap-3" aria-label="Black Helmet Team, voltar ao início">
          <Selo size={44} eager />
          <span className="hidden font-body text-[13px] font-bold uppercase tracking-[0.14em] sm:block">Black Helmet</span>
        </a>
        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[13px] font-medium text-steel">
            {NAV.map((n) => (
              <li key={n.href}>
                <a className="transition hover:text-crest" href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            onClick={() => track("whatsapp_click", { location: "header" })}
            className="grid h-11 w-11 place-items-center rounded-full border border-ring/30 text-ring transition hover:border-crest hover:text-crest"
            aria-label="Falar com a Black Helmet no WhatsApp"
          >
            <WhatsIcon />
          </a>
          <a href="#agendar" onClick={() => track("cta_click", { location: "header" })} className="btn-primary !min-h-[44px] !px-5 !text-[15px]">
            Agendar aula
          </a>
        </div>
      </div>
    </header>
  );
};
