import { Link } from 'react-router-dom'
import SEOHead from '@/components/SEOHead'
import GalleryGrid from '@/components/GalleryGrid'
import SectionWrapper from '@/components/SectionWrapper'
import { DESIGN_PRODUCT_TILES, DESIGN_TESTING_TILES, DESIGN_DRAWING_TILES } from '@/utils/constants'

// Page hero for inner pages
function InnerHero({ tag, title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-32 pb-16 px-6 lg:px-10 bg-brand-navy overflow-hidden">
      <div className="mesh-grid absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(30,111,232,0.12) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-light">{breadcrumb}</span>
        </nav>

        <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">{tag}</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-light mb-5 max-w-2xl leading-tight">
          {title}
        </h1>
        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">{subtitle}</p>
      </div>
    </section>
  )
}

// Section heading with left-border accent
function SectionHeading({ title, color = 'brand-blue' }) {
  return (
    <div className={`border-l-4 border-${color} pl-4 mb-8`}>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-light">{title}</h2>
    </div>
  )
}

export default function Designing() {
  return (
    <>
      <SEOHead
        title="Designing Services | AG Design Solutions"
        description="Expert mechanical design services: Structural, Mould, Jig & Fixture, Assembly, Sheet Metal, Motion Study, Testing & Simulation, and Manufacturing Drawings."
        canonical="/designing"
      />

      <InnerHero
        tag="Engineering Design"
        title="Designing"
        subtitle="Planning and developing ideas into structured outputs that solve real-world problems. Ensuring accuracy, usability, and innovation at every stage."
        breadcrumb="Designing"
      />

      <div className="section-divider" />

      {/* Product Development */}
      <section className="py-16 px-6 lg:px-10 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Design Services</p>
            <SectionHeading title="Product Development" color="brand-blue" />
          </SectionWrapper>
          <GalleryGrid items={DESIGN_PRODUCT_TILES} cols={3} />
        </div>
      </section>

      <div className="section-divider" />

      {/* Testing & Simulation */}
      <section className="py-16 px-6 lg:px-10 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Analysis</p>
            <SectionHeading title="Testing & Simulation" color="brand-success" />
          </SectionWrapper>
          <GalleryGrid items={DESIGN_TESTING_TILES} cols={3} />
        </div>
      </section>

      <div className="section-divider" />

      {/* Manufacturing Drawing */}
      {/* <section className="py-16 px-6 lg:px-10 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Documentation</p>
            <SectionHeading title="Manufacturing Drawing" color="brand-orange" />
          </SectionWrapper>
          <GalleryGrid items={DESIGN_DRAWING_TILES} cols={3} />
        </div>
      </section> */}
    </>
  )
}
