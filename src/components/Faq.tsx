import { FAQ } from "@/content/site";
import { track } from "@/lib/track";

export const Faq = () => (
  <div className="divide-y divide-linelight border-y border-linelight">
    {FAQ.map((f, i) => (
      <details
        key={f.q}
        className="group"
        open={i === 0}
        onToggle={(e) => (e.currentTarget as HTMLDetailsElement).open && track("faq_open", { question: f.q })}
      >
        <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
          <h3 className="font-display text-[21px] font-medium leading-tight text-helmet sm:text-[24px]">{f.q}</h3>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-helmet text-helmet transition group-open:rotate-45 group-open:bg-crest group-open:border-crest" aria-hidden="true">
            <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" /></svg>
          </span>
        </summary>
        <p className="lead max-w-3xl pb-6 text-steel-deep">{f.a}</p>
      </details>
    ))}
  </div>
);
