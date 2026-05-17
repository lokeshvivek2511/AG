import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEOHead from '@/components/SEOHead'
import SectionWrapper from '@/components/SectionWrapper'
import { PACKAGING_TABS, PACKAGING_DATA } from '@/utils/constants'
import GalleryGrid from '@/components/GalleryGrid'

gsap.registerPlugin(ScrollTrigger)

function InnerHero({ tag, title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-32 pb-16 px-6 lg:px-10 bg-brand-navy overflow-hidden">
      <div className="mesh-grid absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(79,70,229,0.12) 0%, transparent 65%)' }} />
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

// Grid for packaging items

const TAB_COLORS = {
  plastic:     'brand-blue',
  metal:       'brand-indigo',
  wooden:      'brand-orange',
  consumables: 'brand-success',
}

export default function IntegratedPackaging() {
  const [activeTab, setActiveTab] = useState('plastic')

  return (
    <>
      <SEOHead
        title="Integrated Packaging Solutions | AG Design Solutions"
        description="End-to-end packaging: Plastic crates, metal pallets, wooden solutions, corrugated boxes, and consumables. Engineered for automotive, FMCG, and industrial clients."
        canonical="/integrated-packaging"
      />

      <InnerHero
        tag="Packaging Solutions"
        title="Integrated Packaging"
        subtitle="Bringing together engineering, manufacturing, and logistics to deliver end-to-end packaging solutions that optimize space, protect products, and streamline operations."
        breadcrumb="Integrated Packaging"
      />

      <div className="section-divider" />

      <section className="py-16 px-6 lg:px-10 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          {/* Category tabs */}
          <SectionWrapper className="mb-10">
            <div className="flex flex-wrap gap-3">
              {PACKAGING_TABS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    activeTab === key
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20'
                      : 'bg-brand-card text-brand-muted border-brand-border hover:border-brand-blue hover:text-brand-light'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </SectionWrapper>

          {/* Active tab heading */}
          <div className={`border-l-4 border-${TAB_COLORS[activeTab]} pl-4 mb-8`}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-light">
              {PACKAGING_TABS.find(t => t.key === activeTab)?.label}
            </h2>
          </div>

          {/* Grid — AnimatePresence for smooth switch */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <GalleryGrid items={PACKAGING_DATA[activeTab]} cols={3} />

            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
