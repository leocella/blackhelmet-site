import { Home } from "@/pages/Home";
import { Privacy } from "@/pages/Privacy";
import { NotFound } from "@/pages/NotFound";
import { Consent } from "@/components/Consent";

const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export const App = ({ path }: { path: string }) => {
  const p = normalize(path);
  const page = p === "/" ? <Home /> : p === "/privacidade/" ? <Privacy /> : <NotFound />;
  return (
    <>
      {page}
      <Consent />
    </>
  );
};
