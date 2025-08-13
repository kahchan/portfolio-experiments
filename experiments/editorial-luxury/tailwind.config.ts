import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        'accent-content': "var(--accent-content)",
      },
      fontFamily: {
        'serif': ['var(--font-spectral)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'stagger-in': 'stagger-in 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
      keyframes: {
        'stagger-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "var(--accent)",
          "secondary": "#64748b",
          "accent": "var(--accent)",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        dark: {
          "primary": "var(--accent)",
          "secondary": "#94a3b8",
          "accent": "var(--accent)",
          "neutral": "#f1f5f9",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};

export default config;