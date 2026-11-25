import { useRef, useState, type KeyboardEvent } from "react";
import { AUDIENCES } from "@/content/site";
import { track } from "@/lib/track";
import { Arrow, Check, PhotoSlot } from "./ui";

type Props = { onPick: (formValue: string) => void };

export const AudienceTabs = ({ onPick }: Props) => {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const a = AUDIENCES[active];

  const select = (i: number) => {
    setActive(i);
    track("audience_select", { audience: AUDIENCES[i].id });
  };
  const onKey = (e: KeyboardEvent) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + AUDIENCES.length) % AUDIENCES.length;
    select(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Escolha seu perfil" onKeyDown={onKey} className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        {AUDIENCES.map((x, i) => (
          <button
            key={x.id}
            ref={(el) => (tabs.current[i] = el)}
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${x.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
            className={`min-h-[48px] shrink-0 rounded-full border-2 px-5 font-display text-[16px] font-medium uppercase tracking-[0.06em] transition ${
              i === active ? "border-helmet bg-helmet text-ring" : "border-linelight text-steel-deep hover:border-helmet hover:text-helmet"
            }`}
          >
            {x.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${a.id}`}
        aria-labelledby={`tab-${a.id}`}
        key={a.id}
        className="rise mt-8 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
      >
        <div>
          <h3 className="font-display text-[34px] font-semibold leading-[1.02] text-helmet sm:text-[44px]">{a.title}</h3>
          <p className="lead mt-5 max-w-xl text-steel-deep">{a.lead}</p>
          <ul className="mt-6 space-y-3">
            {a.points.map((p) => (
              <li key={p} className="flex gap-3 text-[16px] font-medium text-helmet">
                <Check /> {p}
              </li>
            ))}
          </ul>
          <a
            href="#agendar"
            onClick={() => { onPick(a.formValue); track("cta_click", { location: "audience", audience: a.id }); }}
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            {a.cta} <Arrow />
          </a>
        </div>
        <PhotoSlot id={a.id === "kids" ? "kids" : "turma"} ratio="aspect-[4/3] lg:aspect-[4/5]" className="hidden sm:block" />
      </div>
    </div>
  );
};
