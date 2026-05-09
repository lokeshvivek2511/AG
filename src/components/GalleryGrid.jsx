import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GalleryGrid({ items, columns = 'auto' }) {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const children = Array.from(gridRef.current.children)
    gsap.fromTo(
      children,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [items])

  const colClass = columns === 'auto'
    ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
    : `grid-cols-${columns}`

  return (
    <div
      ref={gridRef}
      className={`grid ${colClass} gap-4 mt-6`}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4, boxShadow: '0 0 20px rgba(30,111,232,0.2)' }}
          transition={{ duration: 0.25 }}
          className="rounded-xl overflow-hidden bg-brand-card border border-brand-border"
        >
          <div className="overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover block"
            />
          </div>
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-brand-light">{item.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
