import type { Config } from 'tailwindcss';

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
          "light-bg-1": "#ff0080",  // background
          "light-bg-2": "",         // single cards
          "light-bg-3": "",         // grouped cards (group severals other cards for example)
          "light-text-1": "",       
          "light-text-2": "",       
          "dark-bg-1": "",          
          "dark-bg-2": "",
          "dark-bg-3": "",
          "dark-text-1": "",
          "dark-text-2": "",
          "primary": "",            // can be used as accent color too
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
        "hero-bg": "url('/images/bg3.png')",
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
        glitch: {
          "0%": { "clip-path": "polygon(0% 43%, 83% 43%, 83% 22%, 23% 22%, 23% 24%, 91% 24%, 91% 26%, 18% 26%, 18% 83%, 29% 83%, 29% 17%, 41% 17%, 41% 39%, 18% 39%, 18% 82%, 54% 82%, 54% 88%, 19% 88%, 19% 4%, 39% 4%, 39% 14%, 76% 14%, 76% 52%, 23% 52%, 23% 35%, 19% 35%, 19% 8%, 36% 8%, 36% 31%, 73% 31%, 73% 16%, 1% 16%, 1% 56%, 50% 56%, 50% 8%)" },
          "5%": { "clip-path": "polygon(0% 29%, 44% 29%, 44% 83%, 94% 83%, 94% 56%, 11% 56%, 11% 64%, 94% 64%, 94% 70%, 88% 70%, 88% 32%, 18% 32%, 18% 96%, 10% 96%, 10% 62%, 9% 62%, 9% 84%, 68% 84%, 68% 50%, 52% 50%, 52% 55%, 35% 55%, 35% 87%, 25% 87%, 25% 39%, 15% 39%, 15% 88%, 52% 88%)" },
          "30%": { "clip-path": "polygon(0% 53%, 93% 53%, 93% 62%, 68% 62%, 68% 37%, 97% 37%, 97% 89%, 13% 89%, 13% 45%, 51% 45%, 51% 88%, 17% 88%, 17% 54%, 81% 54%, 81% 75%, 79% 75%, 79% 76%, 38% 76%, 38% 28%, 61% 28%, 61% 12%, 55% 12%, 55% 62%, 68% 62%, 68% 51%, 0% 51%, 0% 92%, 63% 92%, 63% 4%, 65% 4%)" },
          "45%": { "clip-path": "polygon(0% 33%, 2% 33%, 2% 69%, 58% 69%, 58% 94%, 55% 94%, 55% 25%, 33% 25%, 33% 85%, 16% 85%, 16% 19%, 5% 19%, 5% 20%, 79% 20%, 79% 96%, 93% 96%, 93% 50%, 5% 50%, 5% 74%, 55% 74%, 55% 57%, 96% 57%, 96% 59%, 87% 59%, 87% 65%, 82% 65%, 82% 39%, 63% 39%, 63% 92%, 4% 92%, 4% 36%, 24% 36%, 24% 70%, 1% 70%, 1% 43%, 15% 43%, 15% 28%, 23% 28%, 23% 71%, 90% 71%, 90% 86%, 97% 86%, 97% 1%, 60% 1%, 60% 67%, 71% 67%, 71% 91%, 17% 91%, 17% 14%, 39% 14%, 39% 30%, 58% 30%, 58% 11%, 52% 11%, 52% 83%, 68% 83%)" },
          "76%": { "clip-path": "polygon(0% 26%, 15% 26%, 15% 73%, 72% 73%, 72% 70%, 77% 70%, 77% 75%, 8% 75%, 8% 42%, 4% 42%, 4% 61%, 17% 61%, 17% 12%, 26% 12%, 26% 63%, 73% 63%, 73% 43%, 90% 43%, 90% 67%, 50% 67%, 50% 41%, 42% 41%, 42% 46%, 50% 46%, 50% 84%, 96% 84%, 96% 78%, 49% 78%, 49% 25%, 63% 25%, 63% 14%)" },
          "90%": { "clip-path": "polygon(0% 41%, 13% 41%, 13% 6%, 87% 6%, 87% 93%, 10% 93%, 10% 13%, 89% 13%, 89% 6%, 3% 6%, 3% 8%, 16% 8%, 16% 79%, 0% 79%, 0% 99%, 92% 99%, 92% 90%, 5% 90%, 5% 60%, 0% 60%, 0% 48%, 89% 48%, 89% 13%, 80% 13%, 80% 43%, 95% 43%, 95% 19%, 80% 19%, 80% 85%, 38% 85%, 38% 62%)" },
          "1%, 7%, 33%, 47%, 78%, 93%": { "clip-path": "none" },
        },
        movement: {
          "0%": { top: "0px", left: "-23px" },
          "15%": { top: "12px", left: "12px" },
          "60%": { top: "7px", left: "-12px" },
          "75%": { top: "-7px", left: "23px" },
          "100%": { top: "12px", left: "7px" },
        },
        opacity: {
          "0%": { opacity: "0.1" },
          "5%": { opacity: "0.7" },
          "30%": { opacity: "0.4" },
          "45%": { opacity: "0.6" },
          "76%": { opacity: "0.4" },
          "90%": { opacity: "0.8" },
          "1%, 7%, 33%, 47%, 78%, 93%": { opacity: "0" }
        },
        color: {
          "0%": { filter: "blur(3px)", "font-weight": "100", color: "#E0287D" },
          "20%": { filter: "blur(0)", "font-weight": "400", color: "#FFFFFF" },
          "50%": { filter: "blur(2px)", "font-weight": "300", color: "#1BC7FB" },
          "60%": { filter: "blur(0)", "font-weight": "600", color: "#FFFFFF" },
          "90%": { filter: "blur(6px)", "font-weight": "400", color: "#E0287D" },
        },
      },
      animation: {
        "skeleton-light": "skeleton-light 1s linear infinite alternate",
        "skeleton-dark": "skeleton-dark 1s linear infinite alternate",
        glitch: "glitch 5s step-end infinite",
        glitchImg1: "glitch 5s step-end infinite, opacity 5s step-end infinite, movement 10s step-end infinite",
        glitchImg2: "glitch 5s step-end infinite, opacity 5s step-end infinite, movement 8s step-end infinite",
      }
    },
  },
  plugins: [],
}
export default config
