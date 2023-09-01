import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        "main-sm": "0 0 3px #222",
        "main-md": "0 0 6px #222",
        "main-lg": [
          "0 0 10px rgba(0, 0, 0, 0.07)",
          "0 0 5px rgba(0, 0, 0, 0.12)"
        ],
      }
    },
  },
  plugins: [],
}
export default config
