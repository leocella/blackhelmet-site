import { useRef, useState, type KeyboardEvent } from "react";
import { AUDIENCES } from "@/content/site";
import { track } from "@/lib/track";
import { Arrow, Check, PhotoSlot } from "./ui";

type Props = { onPick: (formValue: string) => void };

export const AudienceTabs = ({ onPick }: Props) => {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

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
            className={`min-h-[48px] shrink-0 cursor-pointer rounded-full border-2 px-5 font-display text-[16px] font-medium uppercase tracking-[0.06em] transition-colors duration-200 ${
              i === active ? "border-helmet bg-helmet text-ring" : "border-linelight text-steel-deep hover:border-helmet hover:text-helmet"
            }`}
          >
            {x.tab}
          </button>
        ))}
      </div>

      {/* Todos os painéis vão para o HTML pré-renderizado (Google e IAs leem o conteúdo de cada turma); só o ativo aparece. */}
      {AUDIENCES.map((x, i) => (
        <div
          key={x.id}
          role="tabpanel"
          id={`panel-${x.id}`}
          aria-labelledby={`tab-${x.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="rise mt-8 grid items-center gap-8 focus-visible:outline-offset-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 [&[hidden]]:hidden"
        >
          <div>
            <h3 className="font-display text-[34px] font-semibold leading-[1.02] text-helmet sm:text-[44px]">{x.title}</h3>
            <p className="lead mt-5 max-w-xl text-steel-deep">{x.lead}</p>
            <ul className="mt-6 space-y-3">
              {x.points.map((p) => (
                <li key={p} className="flex gap-3 text-[16px] font-medium text-helmet">
                  <Check /> {p}
                </li>
              ))}
            </ul>
            <a
              href="#agendar"
              onClick={() => { onPick(x.formValue); track("cta_click", { location: "audience", audience: x.id }); }}
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              {x.cta} <Arrow />
            </a>
          </div>
          <PhotoSlot id={x.id === "kids" ? "kids" : "turma"} ratio="aspect-[4/3] lg:aspect-[4/5]" className="hidden sm:block" />
        </div>
      ))}
    </div>
  );
};
