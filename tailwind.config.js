/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    '#FFFFFF',   // primary background → white
          dark:    '#F4F6FB',   // secondary background → light gray
          card:    '#FFFFFF',   // card background → white
          border:  '#E2E8F0',   // borders → soft gray
          blue:    '#fb9511',   // primary CTA → purple
          indigo:  '#3B82F6',   // accent → blue
          cyan:    '#0EA5E9',   // highlight → sky blue
          light:   '#0F172A',   // primary text → dark navy (was light text)
          muted:   '#64748B',   // muted text → slate gray
          white:   '#FFFFFF',
          orange:  '#F97316',   // warning/highlight accent
          success: '#10B981',   // success green
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':      'radial-gradient(ellipse at 70% 40%, rgba(108,71,255,0.08) 0%, transparent 70%)',
        'card-glow':      'radial-gradient(ellipse at center, rgba(108,71,255,0.06) 0%, transparent 70%)',
        'gradient-cta':   'linear-gradient(135deg, #fb9511, #e1a95f)',
        'gradient-section':'linear-gradient(90deg, transparent, #6C47FF, #3B82F6, transparent)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 24px rgba(108,71,255,0.15)',
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