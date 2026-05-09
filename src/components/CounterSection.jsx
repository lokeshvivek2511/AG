import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATS } from '@/utils/constants'

gsap.registerPlugin(ScrollTrigger)

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
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-brand-card/70 border border-brand-border rounded-xl backdrop-blur-sm mt-8"
    >
      {STATS.map((s, i) => (
        <div key={i} className="text-center py-1">
          <div className="font-display text-3xl font-bold text-brand-blue">
            <span data-counter={s.value}>0</span>
            <span>{s.suffix}</span>
          </div>
          <p className="text-brand-muted text-xs mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
