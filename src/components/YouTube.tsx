import { useState } from "react";
import { track } from "@/lib/track";

/**
 * Vídeo do YouTube "leve": mostra só a miniatura e carrega o player (youtube-nocookie) no clique.
 * Página mais rápida e nenhum cookie do YouTube antes de a pessoa escolher assistir.
 */
export const YouTube = ({ id, title }: { id: string; title: string }) => {
  const [play, setPlay] = useState(false);
  return (
    <figure className="relative my-10 aspect-video overflow-hidden bg-helmet">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => { setPlay(true); track("video_play", { video: id }); }}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Assistir ao vídeo: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-helmet/80 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-crest text-helmet transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-4 text-left font-display text-[17px] font-medium leading-tight text-ring sm:p-6 sm:text-[20px]">{title}</span>
        </button>
      )}
    </figure>
  );
};
