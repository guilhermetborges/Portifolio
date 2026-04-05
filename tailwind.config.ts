import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./i18n/*.{ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#22c55e",
          secondary: "#16a34a",
          glow: "rgba(34, 197, 94, 0.15)",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 197, 94, 0.2)",
        "glow-lg": "0 0 40px rgba(34, 197, 94, 0.3)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
