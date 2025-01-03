/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['"Archivo Black"', 'sans-serif'],
        'fira-sans': ['"Fira Sans"', 'sans-serif'],
      },
      animation: {
        wave: 'wave 24s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}