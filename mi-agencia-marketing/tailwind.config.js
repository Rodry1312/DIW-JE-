/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilita el cambio manual
  theme: {
    extend: {
      colors: {
        // Paleta "The Data Rebels"
        neonGreen: '#39FF14',
        cyberBlack: '#050505',
        cyberGray: '#1A1A1B',
        dataBlue: '#00F5FF',
        slateBlue: '#1e293b',
      },
      fontFamily: {
        // Tipografía para datos/código
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        // Tipografía para títulos potentes
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}