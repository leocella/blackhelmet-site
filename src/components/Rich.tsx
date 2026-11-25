import type { ReactNode } from "react";

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Texto dos posts com **negrito** e [link](url). Sem HTML cru: tudo vira elemento React. */
export const Rich = ({ text }: { text: string }) => {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(<strong key={m.index} className="font-semibold text-helmet">{m[1]}</strong>);
    } else {
      const href = m[3];
      const external = /^https?:\/\//.test(href);
      out.push(
        <a
          key={m.index}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
          className="font-medium text-helmet underline decoration-crest decoration-2 underline-offset-4 transition-colors hover:bg-crest"
        >
          {m[2]}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
};
