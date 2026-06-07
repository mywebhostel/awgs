import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        paper: "#fbfcfd",
        rule: "#d8dee8",
        standard: {
          blue: "#2563eb",
          teal: "#0f766e",
          amber: "#b45309",
          violet: "#6d28d9"
        }
      },
      boxShadow: {
        soft: "0 18px 48px rgba(23, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
