import { useEffect, useState } from "react";
import { WhatsIcon } from "./ui";
import { WA_DEFAULT } from "@/content/site";
import { track } from "@/lib/track";

/** Barra fixa no polegar (só celular): aparece depois do hero e some quando o formulário está na tela. */
export const MobileBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("topo");
    const form = document.getElementById("agendar");
    if (!hero || !form || !("IntersectionObserver" in window)) return;
    let heroVisible = true;
    let formVisible = false;
    const update = () => setShow(!heroVisible && !formVisible);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === hero) heroVisible = e.isIntersecting;
        if (e.target === form) formVisible = e.isIntersecting;
      });
      update();
    }, { threshold: 0.15 });
    io.observe(hero);
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-graphite bg-helmet/95 px-4 pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex gap-3">
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener"
          tabIndex={show ? 0 : -1}
          onClick={() => track("whatsapp_click", { location: "mobile_bar" })}
          className="btn-ghost-dark !min-h-[50px] !px-4"
          aria-label="Falar no WhatsApp"
        >
          <WhatsIcon />
        </a>
        <a
          href="#agendar"
          tabIndex={show ? 0 : -1}
          onClick={() => track("cta_click", { location: "mobile_bar" })}
          className="btn-primary !min-h-[50px] flex-1"
        >
          Agendar aula experimental
        </a>
      </div>
    </div>
  );
};
