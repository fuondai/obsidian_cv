import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F17",
        surface: "#0F1424",
        accent: {
          purple: "#7C3AED",
          blue: "#2563EB",
          cyan: "#38BDF8"
        }
      },
      boxShadow: {
        glow: "0 0 20px rgba(124,58,237,0.35)",
        glowBlue: "0 0 20px rgba(56,189,248,0.35)"
      }
    }
  },
  plugins: []
}
export default config
