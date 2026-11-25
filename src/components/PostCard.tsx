import { formatDate, postPath, type Post } from "@/content/posts";
import { Arrow } from "./ui";

/** Card de post (lista do blog, home e "leia também"). Fundo claro. */
export const PostCard = ({ post, headingLevel = "h3" }: { post: Post; headingLevel?: "h2" | "h3" }) => {
  const H = headingLevel;
  return (
    <article className="group relative flex h-full flex-col bg-bone">
      <div className="relative aspect-[16/10] overflow-hidden bg-helmet">
        <img
          src={post.cover.src}
          alt={post.cover.alt}
          width={post.cover.width}
          height={post.cover.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-0 top-0 bg-helmet px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-ring">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col border-x border-b border-linelight p-6">
        <time dateTime={post.published} className="text-[13px] font-medium text-steel-deep">{formatDate(post.published)}</time>
        <H className="mt-2 font-display text-[24px] font-semibold leading-[1.1] text-helmet">
          <a href={postPath(post)} className="after:absolute after:inset-0 focus-visible:outline-none group-focus-within:underline">
            {post.title}
          </a>
        </H>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-steel-deep">{post.description}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-display text-[15px] font-medium uppercase tracking-[0.06em] text-helmet" aria-hidden="true">
          Ler post <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-crest transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100" aria-hidden="true" />
    </article>
  );
};
