import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATS } from '@/utils/constants'

gsap.registerPlugin(ScrollTrigger)

// Background SVG watermarks per card
const BG_ICONS = [
  // Gear ring (Projects)
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
    <circle cx="45" cy="45" r="40" stroke="white" strokeWidth="7" strokeDasharray="10 6"/>
    <circle cx="45" cy="45" r="22" fill="white"/>
    <circle cx="45" cy="45" r="10" stroke="white" strokeWidth="4"/>
  </svg>,
  // Compass (Sectors)
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
    <line x1="45" y1="8" x2="32" y2="78" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <line x1="45" y1="8" x2="58" y2="78" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <line x1="28" y1="54" x2="62" y2="54" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="45" cy="8" r="5" fill="white"/>
  </svg>,
  // Target / crosshair (Precision)
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
    <circle cx="45" cy="45" r="38" stroke="white" strokeWidth="4"/>
    <circle cx="45" cy="45" r="24" stroke="white" strokeWidth="4"/>
    <circle cx="45" cy="45" r="10" fill="white"/>
    <line x1="45" y1="4" x2="45" y2="86" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <line x1="4" y1="45" x2="86" y2="45" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>,
  // Hexagon / bolt (Founders)
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
    <polygon points="45,6 82,27 82,63 45,84 8,63 8,27" stroke="white" strokeWidth="5" fill="none"/>
    <circle cx="45" cy="45" r="14" fill="white"/>
  </svg>,
]

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #0F1F3D 0%, #1E3C82 100%)',
  'linear-gradient(135deg, #163370 0%, #1E3C82 100%)',
  'linear-gradient(135deg, #0F1F3D 0%, #163370 100%)',
  'linear-gradient(135deg, #1E3C82 0%, #3561B8 100%)',
]

const BAR_WIDTHS = ['85%', '72%', '100%', '40%']

export default function CounterSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const elements = ref.current.querySelectorAll('[data-counter]')

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        elements.forEach(el => {
          const target = parseInt(el.dataset.counter, 10)
          const obj = { val: 0 }
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.round(obj.val) },
          })
        })
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className="relative rounded-2xl overflow-hidden p-5"
          style={{ background: CARD_GRADIENTS[i] }}
        >
          {/* Watermark */}
          <div className="absolute top-[-10px] right-[-10px] opacity-[0.07] pointer-events-none select-none">
            {BG_ICONS[i]}
          </div>

          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#8AAAD4', letterSpacing: '0.14em' }}>
            {stat.label}
          </p>

          {/* Value */}
          <p className="font-display font-extrabold leading-none mb-1"
            style={{ fontSize: '36px', color: '#FFFFFF' }}>
            <span data-counter={stat.value}>0</span>
            <span style={{ color: '#4A7BC8' }}>{stat.suffix}</span>
          </p>

          {/* Progress bar */}
          <div className="mt-3 h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: BAR_WIDTHS[i],
                background: 'linear-gradient(90deg, #4A7BC8, #8AAAD4)',
                animation: 'fillStatBar 1.4s ease forwards',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          </div>

          <style>{`
            @keyframes fillStatBar { from { width: 0 } }
          `}</style>
        </div>
      ))}
    </div>
  )
}