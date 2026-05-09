import { useEffect, useRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionWrapper from './SectionWrapper'
import { FEATURES } from '@/utils/constants'

gsap.registerPlugin(ScrollTrigger)

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
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Our Strengths</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light mb-3">Why Choose Us?</h2>
          <p className="text-brand-muted text-lg">We don't just design; we engineer success.</p>
        </SectionWrapper>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = LucideIcons[f.icon] || LucideIcons.Star
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5, boxShadow: '0 0 24px rgba(30,111,232,0.15)' }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-brand-card border border-brand-border"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 text-brand-cyan">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-light mb-2">{f.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
