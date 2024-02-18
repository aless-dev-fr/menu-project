import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./styles/**/*.{js,jsx,ts,tsx}", "./packages/**/*.{js,jsx,ts,tsx}"],
  plugins: []
};

export default config;
