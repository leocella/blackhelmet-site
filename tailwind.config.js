/** Tokens do manual de marca Black Helmet (tokens.css do cliente). */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crest: "#f1e306",
        helmet: { DEFAULT: "#040507", 2: "#121315" },
        graphite: "#2a2d31",
        // steel.deep só em fundo claro (4,9:1 no bone); em fundo escuro use steel.mid (6,8:1 no helmet).
        steel: { DEFAULT: "#ccd8e0", mid: "#8b979f", deep: "#5e6a72" },
        ring: "#f2f8f8",
        bone: "#eef2f3",
        linelight: "#c9d2d7",
      },
      fontFamily: {
        display: ['Oswald', '"Arial Narrow"', "Arial", "sans-serif"],
        body: ["Montserrat", '"Segoe UI"', "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
