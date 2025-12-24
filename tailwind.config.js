/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hgDark: '#020617', // Deep Midnight Navy
        hgBlue: '#0f172a',
        hgAccent: '#C5A059',
        hgGlow: '#60a5fa',
        hgGold: '#C5A059', // Brushed Gold
        hgSlate: '#64748b',
        hgMuted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        heading: ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #d4af37 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
