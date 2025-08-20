import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./i18n/*.{ts,js}"],
  theme: { extend: { colors: { brand: { primary: "#22c55e" } } } },
  plugins: [],
};
export default config;
