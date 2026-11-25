import { useState, type FormEvent } from "react";
import { AUDIENCES, TRIAL_LABEL, waLink } from "@/content/site";
import { track } from "@/lib/track";
import { Arrow, WhatsIcon } from "./ui";

const PERIODS = ["Almoço (11h45)", "Noite (a partir das 17h15)", "Tanto faz"];

const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

type Props = { audience: string; onAudience: (v: string) => void };

export const LeadForm = ({ audience, onAudience }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [period, setPeriod] = useState(PERIODS[2]);
  const [error, setError] = useState<string | null>(null);
  const [sentLink, setSentLink] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2) return setError("Escreva seu nome para a equipe saber com quem fala.");
    if (digits.length < 10) return setError("Confira o WhatsApp com DDD, por exemplo (47) 99999-9999.");
    setError(null);

    const isKid = audience === "Criança";
    const msg = [
      `Olá! Quero agendar uma ${TRIAL_LABEL} na Black Helmet.`,
      `Nome: ${name.trim()}`,
      `Turma: ${isKid ? "Kids (para meu filho ou filha)" : audience}`,
      `Melhor período: ${period}`,
      `WhatsApp: ${phone}`,
    ].join("\n");
    const link = waLink(msg);

    track("generate_lead", { form: "aula_experimental", audience, period });
    const hook = import.meta.env.VITE_LEAD_WEBHOOK as string | undefined;
    if (hook) {
      try {
        fetch(hook, {
          method: "POST",
          mode: "no-cors",
          keepalive: true,
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ name: name.trim(), phone: digits, audience, period, source: "site", at: new Date().toISOString() }),
        }).catch(() => {});
      } catch { /* o WhatsApp abaixo continua sendo o caminho principal */ }
    }

    setSentLink(link);
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (mobile) window.location.href = link;
    else window.open(link, "_blank", "noopener");
  };

  if (sentLink) {
    return (
      <div className="border border-graphite bg-helmet-2 p-6 sm:p-8" role="status" aria-live="polite">
        <p className="font-display text-[32px] font-semibold leading-none">Pronto, {name.split(" ")[0]}.</p>
        <p className="lead mt-4 text-steel">
          Sua mensagem abriu no WhatsApp com tudo preenchido. É só tocar em <strong className="text-ring">enviar</strong> que a equipe responde com os horários da turma.
        </p>
        <a href={sentLink} target="_blank" rel="noopener" className="btn-primary mt-6 w-full sm:w-auto">
          <WhatsIcon /> Não abriu? Toque aqui
        </a>
      </div>
    );
  }

  const chip = (active: boolean) =>
    `min-h-[44px] rounded-full border px-4 text-[14px] font-semibold transition ${
      active ? "border-crest bg-crest text-helmet" : "border-graphite text-steel hover:border-steel"
    }`;

  return (
    <form onSubmit={submit} noValidate className="border border-graphite bg-helmet-2 p-5 sm:p-8" aria-describedby={error ? "form-error" : undefined}>
      <fieldset>
        <legend className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel">Para quem é a aula?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {AUDIENCES.map((a) => (
            <label key={a.id} className="cursor-pointer">
              <input
                type="radio"
                name="audience"
                value={a.formValue}
                checked={audience === a.formValue}
                onChange={() => onAudience(a.formValue)}
                className="peer sr-only"
              />
              <span className={`${chip(audience === a.formValue)} inline-flex items-center peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-crest`}>
                {a.id === "kids" ? "Meu filho(a)" : a.tab}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel">Seu nome</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 h-[54px] w-full border border-graphite bg-helmet px-4 text-[17px] text-ring placeholder:text-steel-deep focus:border-crest focus:outline-none"
            placeholder="Seu nome"
          />
        </label>
        <label className="block">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel">WhatsApp</span>
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel-national"
            required
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            className="mt-2 h-[54px] w-full border border-graphite bg-helmet px-4 text-[17px] text-ring placeholder:text-steel-deep focus:border-crest focus:outline-none"
            placeholder="(47) 99999-9999"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel">Melhor período</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {PERIODS.map((p) => (
            <label key={p} className="cursor-pointer">
              <input type="radio" name="period" value={p} checked={period === p} onChange={() => setPeriod(p)} className="peer sr-only" />
              <span className={`${chip(period === p)} inline-flex items-center peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-crest`}>{p}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {error && (
        <p id="form-error" role="alert" className="mt-5 border-l-4 border-crest bg-helmet px-4 py-3 text-[15px] text-ring">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary mt-7 w-full !min-h-[58px] !text-[18px]">
        Agendar pelo WhatsApp <Arrow className="h-5 w-5" />
      </button>
      <p className="mt-4 text-center text-[13px] leading-relaxed text-steel-deep">
        Abre o WhatsApp com sua mensagem pronta. Sem cadastro e sem compromisso.{" "}
        <a href="/privacidade/" className="underline underline-offset-2 hover:text-steel">Privacidade</a>
      </p>
    </form>
  );
};
