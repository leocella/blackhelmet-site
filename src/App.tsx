import { Home } from "@/pages/Home";
import { Privacy } from "@/pages/Privacy";
import { NotFound } from "@/pages/NotFound";
import { Blog } from "@/pages/Blog";
import { Post } from "@/pages/Post";
import { Links } from "@/pages/Links";
import { Consent } from "@/components/Consent";
import { findPost } from "@/content/posts";

const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export const App = ({ path }: { path: string }) => {
  const p = normalize(path);
  const post = findPost(p);
  const page =
    p === "/" ? <Home /> :
    p === "/privacidade/" ? <Privacy /> :
    p === "/blog/" ? <Blog /> :
    p === "/links/" ? <Links /> :
    post ? <Post post={post} /> :
    <NotFound />;
  return (
    <>
      {page}
      <Consent />
    </>
  );
};
