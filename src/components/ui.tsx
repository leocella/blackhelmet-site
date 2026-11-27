import type { ReactNode } from "react";
import { PHOTOS, SITE_NAME, TITLES } from "@/content/site";

export const SealLabel = ({ children, className = "", left = false }: { children: ReactNode; className?: string; left?: boolean }) => (
  <p className={`seal-label ${left ? "left" : ""} ${className}`}>{children}</p>
);

/** O anel do selo em volta de um número de autoridade (componente RingStat do manual). */
export const RingStat = ({ value, label, tone = "dark" }: { value: string; label: string; tone?: "dark" | "light" }) => (
  <div className="flex flex-col items-center text-center">
    <div
      className={`grid aspect-square w-[92px] place-items-center rounded-full border-2 sm:w-[112px] ${
        tone === "dark" ? "border-ring/80" : "border-helmet"
      }`}
    >
      <span className={`font-display text-[34px] font-semibold leading-none sm:text-[42px] ${tone === "dark" ? "text-crest" : "text-helmet"}`}>
        {value}
      </span>
    </div>
    <span className={`mt-3 max-w-[9.5rem] text-[11px] font-medium uppercase leading-snug tracking-[0.24em] sm:text-[12px] ${tone === "dark" ? "text-steel" : "text-steel-deep"}`}>
      {label}
    </span>
  </div>
);

export const Selo = ({ size = 48, className = "", eager = false, alt = SITE_NAME }: { size?: number; className?: string; eager?: boolean; alt?: string }) => (
  <picture>
    <source type="image/webp" srcSet="/img/selo-96.webp 96w, /img/selo-192.webp 192w, /img/selo-384.webp 384w" sizes={`${size}px`} />
    <img
      src="/img/selo-192.png"
      srcSet="/img/selo-96.png 96w, /img/selo-192.png 192w, /img/selo-384.png 384w"
      sizes={`${size}px`}
      width={size}
      height={size}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  </picture>
);

/** Foto da página ou, enquanto ela não chega, uma composição da marca (capacete + anel) no mesmo espaço. */
export const PhotoSlot = ({ id, className = "", ratio = "aspect-[4/5]" }: { id: keyof typeof PHOTOS; className?: string; ratio?: string }) => {
  const p = PHOTOS[id];
  if (p.src) {
    return (
      <div className={`relative overflow-hidden bg-helmet-2 ${ratio} ${className}`}>
        <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    );
  }
  // Sem foto ainda: composição tipográfica da marca, diferente para cada espaço.
  const fallback: Record<string, { big: string; label: string; helmet?: boolean }> = {
    hero: { big: "", label: "", helmet: true },
    professor: { big: "", label: "", helmet: true },
    kids: { big: "5+", label: "Kids · a partir de 5 anos" },
    turma: { big: "Oss", label: "Turma · Black Helmet" },
    atleta: { big: "ADCC", label: "Buenos Aires · dez/2025" },
  };
  const f = fallback[id];
  return (
    <div className={`grain relative overflow-hidden bg-helmet-2 ${ratio} ${className}`} role="img" aria-label={p.alt}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="200" cy="250" r="170" fill="none" stroke="#f2f8f8" strokeOpacity=".14" strokeWidth="1.5" />
        <circle cx="200" cy="250" r="140" fill="none" stroke="#f2f8f8" strokeOpacity=".08" strokeWidth="1" />
      </svg>
      {f.helmet ? (
        <img src="/img/capacete.webp" alt="" width={417} height={501} loading="lazy" className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 opacity-90" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="font-display text-[clamp(72px,12vw,150px)] font-bold uppercase leading-none text-transparent" style={{ WebkitTextStroke: "2px #f1e306" }}>
            {f.big}
          </span>
          <span className="mt-5 text-[11px] font-medium uppercase tracking-[0.38em] text-steel">{f.label}</span>
        </div>
      )}
    </div>
  );
};

export const Check = () => (
  <svg viewBox="0 0 20 20" className="mt-[3px] h-[18px] w-[18px] shrink-0" aria-hidden="true">
    <rect width="20" height="20" fill="#f1e306" />
    <path d="M5 10.5l3 3 7-7" fill="none" stroke="#040507" strokeWidth="2.2" />
  </svg>
);

export const WhatsIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 .5C5.6.5.5 5.6.5 12c0 2 .5 4 1.5 5.8L.4 23.6l5.9-1.5c1.7.9 3.7 1.4 5.7 1.4 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5z" />
  </svg>
);

export const Arrow = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

/** Faixa com os títulos do Mauricio correndo (decorativa: os mesmos títulos estão em lista na seção do professor). */
export const TitleTicker = () => {
  const row = (
    <ul className="flex shrink-0 items-center">
      {TITLES.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-display text-[18px] font-medium uppercase tracking-[0.08em] text-steel sm:px-8 sm:text-[22px]">{t}</span>
          <span className="h-2 w-2 rotate-45 bg-crest" />
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden="true" className="ticker relative overflow-hidden border-y border-graphite bg-helmet-2 py-5">
      <div className="ticker-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
};
