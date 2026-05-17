import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEOHead from '@/components/SEOHead'
import SectionWrapper from '@/components/SectionWrapper'
import { SPMS } from '@/utils/constants'

gsap.registerPlugin(ScrollTrigger)

function InnerHero({ tag, title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-32 pb-16 px-6 lg:px-10 bg-brand-navy overflow-hidden">
      <div className="mesh-grid absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(6,182,212,0.12) 0%, transparent 65%)' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-light">{breadcrumb}</span>
        </nav>
        <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">{tag}</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-light mb-5 max-w-2xl leading-tight">{title}</h1>
        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">{subtitle}</p>
      </div>
    </section>
  )
}

// Single SPM card
function SPMCard({ name, desc, img, color }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: `0 0 32px rgba(30,111,232,0.25)` }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden bg-brand-card border border-brand-border"
    >
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          src={img}
          alt={name}
          loading="lazy"
          className="w-full aspect-[10/7] object-cover block"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-brand-light mb-2">{name}</h3>
        <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function SPM() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = Array.from(gridRef.current.children)
    gsap.fromTo(cards, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.12, duration: 0.65, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <>
      <SEOHead
        title="Special Purpose Machines (SPM) | AG Design Solutions"
        description="Custom-engineered SPMs: Bottle Cap Vadding, Elevated Conveyor, Can Filling Line, Cap Pressing Machine, Roller Bed Conveyor, Vertical FFS. Precision manufacturing."
        canonical="/spm"
      />

      <InnerHero
        tag="Custom Machinery"
        title="Special Purpose Machines"
        subtitle="SPM (Special Purpose Machine) is designed to perform specific operations with high precision and efficiency — improving productivity by reducing manual effort and cycle time."
        breadcrumb="SPM"
      />

      <div className="section-divider" />

      {/* Machine Gallery */}
      <section className="py-16 px-6 lg:px-10 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper className="mb-10">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Our Machines</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-light">Machine Gallery</h2>
          </SectionWrapper>

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPMS.map((spm) => (
              <SPMCard key={spm.name} {...spm} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Banner */}
      <section className="py-20 px-6 lg:px-10 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-brand-card border border-brand-border p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(30,111,232,0.08), rgba(79,70,229,0.08))' }}>
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Custom SPM</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light mb-4">
              Need a custom machine for your process?
            </h2>
            <p className="text-brand-muted text-lg mb-8">
              Tell us your requirements — we'll engineer the solution.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                to="/contact"
                className="bg-gradient-cta text-white font-semibold px-8 py-4 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Request Custom SPM
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
