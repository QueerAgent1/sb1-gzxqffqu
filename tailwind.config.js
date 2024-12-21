/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'electric-blue': 'var(--electric-blue)',
        'emerald-green': 'var(--emerald-green)',
        'deep-purple': 'var(--deep-purple)',
        'bg-dark': 'var(--bg-dark)',
      },
      backgroundImage: {
        'gradient-dark': 'var(--bg-gradient)',
      },
    },
  },
  plugins: [],
};