import { useEffect, useState } from "react";
import { getConsent, initAnalytics, setConsent } from "@/lib/track";

export const Consent = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    initAnalytics();
    setOpen(getConsent() === null);
  }, []);
  if (!open) return null;
  const choose = (v: "granted" | "denied") => { setConsent(v); setOpen(false); };
  return (
    <div role="dialog" aria-label="Cookies" className="pb-safe fixed inset-x-0 bottom-0 z-50 border-t border-graphite bg-helmet-2/95 px-4 pt-3 backdrop-blur-md sm:inset-x-auto sm:bottom-4 sm:right-4 sm:max-w-md sm:border sm:p-4">
      <div className="flex items-center gap-3">
        <p className="flex-1 text-[12.5px] leading-snug text-steel">
          Cookies de medição para melhorar o site. <a href="/privacidade/" className="text-ring underline underline-offset-2">Detalhes</a>
        </p>
        <button onClick={() => choose("denied")} className="min-h-[44px] cursor-pointer px-3 text-[13px] font-semibold text-steel underline-offset-2 hover:underline">Recusar</button>
        <button onClick={() => choose("granted")} className="btn-primary !min-h-[44px] !px-4 !text-[14px]">Aceitar</button>
      </div>
    </div>
  );
};
