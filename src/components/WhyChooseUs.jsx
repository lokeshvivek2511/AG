import { useEffect, useRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionWrapper from './SectionWrapper'
import { FEATURES } from '@/utils/constants'

gsap.registerPlugin(ScrollTrigger)

// Accent colors cycling through the navy/steel palette
const ACCENT_COLORS = ['#1E3C82', '#4A7BC8', '#8AAAD4', '#1E3C82', '#4A7BC8', '#0F1F3D']
const ICON_BG      = ['#1E3C82', '#4A7BC8', '#8AAAD4', '#1E3C82', '#4A7BC8', '#0F1F3D']

export default function WhyChooseUs() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = Array.from(gridRef.current.children)
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#4A7BC8' }}>
            Our Strengths
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: '#0F1F3D' }}>
            Why Choose Us?
          </h2>
          <p className="text-brand-muted text-lg">We don't just design; we engineer success.</p>
        </SectionWrapper>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => {
            const Icon = LucideIcons[f.icon] || LucideIcons.Star
            return (
              <motion.div
                key={i}
                whileHover={{
                  x: 4,
                  boxShadow: `0 6px 24px rgba(30,60,130,0.12)`,
                  background: '#EEF4FF',
                }}
                transition={{ duration: 0.22 }}
                className="flex items-start gap-4 p-5 rounded-xl border bg-[#F8FAFF] cursor-default"
                style={{
                  borderColor: '#E2E8F0',
                  borderLeft: `3px solid ${ACCENT_COLORS[i]}`,
                }}
              >
                {/* Icon badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: ICON_BG[i] }}
                >
                  <Icon size={18} strokeWidth={1.8} color="white" />
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold mb-1.5" style={{ color: '#0F1F3D' }}>
                    {f.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}