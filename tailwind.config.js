/** Tokens do manual de marca Black Helmet (tokens.css do cliente). */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crest: "#f1e306",
        helmet: { DEFAULT: "#040507", 2: "#121315" },
        graphite: "#2a2d31",
        steel: { DEFAULT: "#ccd8e0", deep: "#5e6a72" },
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
