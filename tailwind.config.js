/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    '#0A0F1E',
          dark:    '#0D1526',
          card:    '#111B30',
          border:  '#1E2D4A',
          blue:    '#1E6FE8',
          indigo:  '#4F46E5',
          cyan:    '#06B6D4',
          light:   '#E8F0FF',
          muted:   '#8A9DC0',
          white:   '#FFFFFF',
          orange:  '#F97316',
          success: '#10B981',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at 70% 40%, rgba(30,111,232,0.15) 0%, transparent 70%)',
        'card-glow': 'radial-gradient(ellipse at center, rgba(30,111,232,0.08) 0%, transparent 70%)',
        'gradient-cta': 'linear-gradient(135deg, #1E6FE8, #4F46E5)',
        'gradient-section': 'linear-gradient(90deg, transparent, #1E6FE8, #4F46E5, transparent)',
      },
      animation: {
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
