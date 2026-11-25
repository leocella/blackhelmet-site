import { Footer } from "@/components/Footer";
import { Selo } from "@/components/ui";
import { CNPJ, LEGAL_NAME, PHONE_DISPLAY } from "@/content/site";

export const Privacy = () => (
  <>
    <header className="border-b border-graphite">
      <div className="wrap flex h-[72px] items-center"><a href="/" aria-label="Voltar ao início"><Selo size={44} eager /></a></div>
    </header>
    <main className="wrap max-w-3xl py-16 text-steel">
      <h1 className="font-display text-[44px] font-semibold leading-none text-ring">Política de privacidade</h1>
      <div className="lead mt-8 space-y-5">
        <p>{LEGAL_NAME} (CNPJ {CNPJ}) respeita a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>
        <h2 className="pt-4 font-display text-[26px] text-ring">O que coletamos</h2>
        <p>Quando você usa o formulário de agendamento, seu nome, WhatsApp, turma e período escolhidos são colocados numa mensagem que abre no seu WhatsApp. Nada é enviado sem você tocar em enviar.</p>
        <p>Se você aceitar os cookies de medição, usamos o Google Tag Manager e ferramentas ligadas a ele para contar visitas e cliques, sem identificar você pelo nome.</p>
        <h2 className="pt-4 font-display text-[26px] text-ring">Para que usamos</h2>
        <p>Para responder seu pedido de aula, apresentar horários e planos e melhorar o site. Não vendemos nem repassamos seus dados.</p>
        <h2 className="pt-4 font-display text-[26px] text-ring">Seus direitos</h2>
        <p>Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo WhatsApp {PHONE_DISPLAY}. Para retirar o consentimento de cookies, limpe os dados do site no seu navegador.</p>
      </div>
      <a href="/" className="btn-primary mt-12">Voltar ao início</a>
    </main>
    <Footer />
  </>
);
