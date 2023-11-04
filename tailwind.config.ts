import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          "light-bg-1": "#ff0080",
          "light-bg-2": "",
          "light-text-1": "",
          "light-text-2": "",
          "dark-bg-1": "",
          "dark-bg-2": "",
          "dark-text-1": "",
          "dark-text-2": "",
          "primary": "",
          "secondary": "",
          "tertiary": "",
        },
      },
      dropShadow: {
        "main-sm": "0 0 3px #222",
        "main-md": "0 0 6px #222",
        "main-lg": [
          "0 0 10px rgba(0, 0, 0, 0.07)",
          "0 0 5px rgba(0, 0, 0, 0.12)"
        ],
        "main-xl": [
          "0 0 12px rgba(0, 0, 0, 0.1)",
          "0 0 6px rgba(0, 0, 0, 0.7)"
        ],
      },
      backgroundImage: {
        "char-bg": "url('/images/bg3.png')",
      },
      keyframes: {
        "skeleton-light": {
          "0%": { "background-color": "hsl(200, 20%, 80%)" },
          "100%": { "background-color": "hsl(200, 20%, 95%)" },
        },
        "skeleton-dark": {
          "0%": { "background-color": "hsl(204, 5%, 22%)" },
          "100%": { "background-color": "hsl(210, 4%, 10%)" },
        },
      },
      animation: {
        "skeleton-light": "skeleton-light 1s linear infinite alternate",
        "skeleton-dark": "skeleton-dark 1s linear infinite alternate",
      }
    },
  },
  plugins: [],
}
export default config
