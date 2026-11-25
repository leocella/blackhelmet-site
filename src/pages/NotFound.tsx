import { Selo } from "@/components/ui";

export const NotFound = () => (
  <main className="grid min-h-screen place-items-center bg-helmet px-6 text-center">
    <div>
      <Selo size={120} eager className="mx-auto" />
      <h1 className="mt-8 font-display text-[48px] font-semibold leading-none">Essa página saiu do tatame.</h1>
      <p className="lead mt-4 text-steel">Volte para o início e agende sua aula.</p>
      <a href="/" className="btn-primary mt-8">Ir para o início</a>
    </div>
  </main>
);
