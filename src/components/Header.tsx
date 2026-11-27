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
  { href: "/blog/", label: "Blog" },
];

/** onHome=false: links de seção apontam para "/#secao" (páginas do blog e outras rotas). */
export const Header = ({ onHome = true, current: fixedCurrent }: { onHome?: boolean; current?: string }) => {
  const [solid, setSolid] = useState(false);
  const [spy, setSpy] = useState<string | null>(null);
  const current = fixedCurrent ?? spy;
  const link = (href: string) => (href.startsWith("#") && !onHome ? `/${href}` : href);

  // Marca no menu a seção que está no meio da tela.
  useEffect(() => {
    if (!onHome || !("IntersectionObserver" in window)) return;
    const els = NAV.filter((n) => n.href.startsWith("#")).map((n) => document.querySelector<HTMLElement>(n.href)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setSpy(`#${e.target.id}`); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

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
        <a href={onHome ? "#topo" : "/"} className="flex shrink-0 items-center gap-3" aria-label="Black Helmet Team, voltar ao início">
          <Selo size={48} eager alt="" />
          <span className="hidden whitespace-nowrap font-body text-[13px] font-bold uppercase tracking-[0.14em] sm:block lg:hidden xl:block">Black Helmet</span>
        </a>
        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[13px] xl:gap-7 font-medium text-steel">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={link(n.href)}
                  aria-current={current === n.href ? (n.href.startsWith("#") ? "true" : "page") : undefined}
                  className="relative inline-flex min-h-[44px] items-center transition-colors duration-200 hover:text-ring aria-[current=true]:text-ring aria-[current=page]:text-ring after:absolute after:inset-x-0 after:bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-crest after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=true]:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {n.label}
                </a>
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
          <a href={link("#agendar")} onClick={() => track("cta_click", { location: "header" })} className="btn-primary !min-h-[44px] !px-5 !text-[15px]">
            Agendar aula
          </a>
        </div>
      </div>
    </header>
  );
};
