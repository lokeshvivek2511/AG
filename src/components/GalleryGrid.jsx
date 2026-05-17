import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GalleryGrid({ items = [], cols = 3 }) {
  const gridRef = useRef(null)

  const colClass =
    cols === 2 ? 'grid-cols-1 sm:grid-cols-2' :
    cols === 4 ? 'grid-cols-2 sm:grid-cols-4' :
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  useEffect(() => {
    if (!gridRef.current) return
    const cards = Array.from(gridRef.current.children)
    gsap.fromTo(cards, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.08, duration: 0.55, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 82%' },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div ref={gridRef} className={`grid ${colClass} gap-4 mt-6`}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5, boxShadow: '0 10px 28px rgba(30,60,130,0.13)' }}
          transition={{ duration: 0.25 }}
          className="rounded-xl overflow-hidden bg-white border"
          style={{
            borderColor: '#E2E8F0',
            boxShadow: '0 2px 8px rgba(30,60,130,0.05)',
            borderTop: '7px solid #2b8c48',
          }}
        >
          {/* Image */}
          <div className="overflow-hidden">
           <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover block"
              style={{
                filter: "drop-shadow(0px 8px 24px rgba(46, 139, 87, 0.55))",
              }}
            />
          </div>

          {/* Label row */}
          <div className="px-4 py-3 flex items-center gap-2">
            {/* Tiny gear dot accent */}
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: `#${item.color || '1E3C82'}` }}
            />
            <p className="text-sm font-semibold" style={{ color: '#0F1F3D' }}>{item.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}