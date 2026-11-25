// Medição: eventos vão para o dataLayer; o GTM do cliente só carrega depois do consentimento (LGPD).
export const GTM_ID = "GTM-MVKXNL9X";
const CONSENT_KEY = "bh-consent";

type DL = Record<string, unknown>;
declare global {
  interface Window { dataLayer?: DL[] }
}

export const track = (event: string, params: DL = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

const loadGtm = () => {
  if (document.getElementById("gtm-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
};

export const getConsent = (): "granted" | "denied" | null => {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

export const setConsent = (v: "granted" | "denied") => {
  try { localStorage.setItem(CONSENT_KEY, v); } catch { /* navegação privada */ }
  if (v === "granted") loadGtm();
};

export const initAnalytics = () => {
  if (getConsent() === "granted") loadGtm();
};
