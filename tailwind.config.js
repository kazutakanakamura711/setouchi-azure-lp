/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "680px" },
      tablet: { max: "980px" },
      tabletUp: "681px",
      desktop: "981px",
    },
    extend: {
      colors: {
        ivory: "#f8f5ef",
        "warm-white": "#eee9df",
        navy: "#1a2744",
        gold: "#b8986a",
        charcoal: "#2c2c2c",
        ink: "#242a31",
      },
      fontFamily: {
        serif: [
          '"Playfair Display"',
          '"Yu Mincho"',
          '"Hiragino Mincho ProN"',
          "Georgia",
          "serif",
        ],
        sans: [
          '"Work Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "sans-serif",
        ],
      },
      keyframes: {
        "hero-zoom": {
          from: { transform: "scale(1.08)" },
          to: { transform: "scale(1)" },
        },
        "hero-copy": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-line": {
          "0%": { transform: "translateY(-120%)" },
          "55%, 100%": { transform: "translateY(220%)" },
        },
      },
      animation: {
        "hero-zoom": "hero-zoom 14s ease-out both",
        "hero-copy": "hero-copy 1.4s 0.2s ease both",
        "scroll-line": "scroll-line 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
