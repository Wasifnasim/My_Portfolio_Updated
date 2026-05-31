/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        purple: {
          DEFAULT: '#8a64ff',
          soft: '#b99fff',
          dim: 'rgba(138,100,255,0.12)',
        },
        gold: '#f0c060',
        surface: '#100c1e',
        surface2: '#17112b',
        bg: '#07050f',
      },
    },
  },
  plugins: [],
}
