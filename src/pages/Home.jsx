import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SEOHead from '@/components/SEOHead'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceCard from '@/components/ServiceCard'
import SectorCard from '@/components/SectorCard'
import CertificatesSection from '@/components/CertificatesSection'
import SectionWrapper from '@/components/SectionWrapper'
import roadmap from '../../public/roadmap.png'

import { SERVICES, SECTORS } from '@/utils/constants'

gsap.registerPlugin(ScrollTrigger)

// Divider line
function Divider() {
  return <div className="section-divider my-0" />
}

// Who We Are section
function WhoWeAre() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(leftRef.current, { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.85, ease: 'power2.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 80%' },
      })
    }
    if (rightRef.current) {
      gsap.fromTo(rightRef.current, { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.85, ease: 'power2.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 80%' },
      })
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="py-20 px-6 lg:px-10 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div ref={leftRef}>
          <div className="relative">
            <div className="absolute -inset-2 bg-brand-cyan/10 rounded-2xl blur-xl pointer-events-none" />
            <img
              src={roadmap}
              alt="AG Design Roadmap"
              loading="lazy"
              className="relative w-full rounded-2xl border border-brand-border"
            />
          </div>
        </div>

        {/* Text */}
        <div ref={rightRef}>
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light mb-5">Who We Are</h2>
          <p className="text-brand-muted leading-relaxed mb-8">
            AG Design Solutions, founded by experienced Mechanical Engineers, specializes in innovative
            packaging design and custom machinery. We deliver efficient, cost-effective engineering solutions
            that optimize packaging processes and improve operational productivity.
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border border-l-2 border-l-brand-blue">
              <h3 className="font-display font-semibold text-brand-light mb-1.5">Our Mission</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Empowering brands with innovative, creative engineering solutions that inspire industries
                and transform ideas into manufactured reality.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border border-l-2 border-l-brand-cyan">
              <h3 className="font-display font-semibold text-brand-light mb-1.5">Our Vision</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                We aim to lead the future of mechanical design by championing precision, sustainability
                and collaboration, creating meaningful impact for businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services preview section
function ServicesSection() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = Array.from(gridRef.current.children)
    gsap.fromTo(cards, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="py-20 px-6 lg:px-10 bg-brand-navy">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light mb-3">Our Services</h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Integrating design, packaging, and SPM — complete solutions for your operations.
          </p>
        </SectionWrapper>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Sectors section
function SectorsSection() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const items = Array.from(gridRef.current.children)
    gsap.fromTo(items, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1,
      stagger: { amount: 0.6, grid: 'auto', from: 'start' },
      duration: 0.55, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="py-20 px-6 lg:px-10 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Industries</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light">Key Sectors We Serve</h2>
        </SectionWrapper>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTORS.map((s) => (
            <SectorCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Quote / CTA banner
function QuoteBanner() {
  const bannerRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return
    gsap.to(bgRef.current, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section ref={bannerRef} className="relative py-24 px-6 lg:px-10 overflow-hidden">
      {/* Parallax bg */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(30,111,232,0.18) 0%, rgba(79,70,229,0.15) 50%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-brand-navy" />
      <div className="mesh-grid absolute inset-0 -z-10 pointer-events-none" style={{ opacity: 0.5 }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Our Promise</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-light mb-4 leading-tight">
          "Designing Today for<br />Tomorrow's Innovations"
        </h2>
        <p className="text-brand-muted text-lg mb-8">One-point solution from design to manufacturing.</p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
          <Link
            to="/contact"
            className="bg-gradient-cta text-white font-semibold px-8 py-4 rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Global reach section
function GlobalReach() {
  return (
    <section className="py-20 px-6 lg:px-10 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper className="text-center mb-10">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Reach</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light mb-3">Global Reach</h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Serving clients across India and internationally — delivering precision engineering beyond borders.
          </p>
        </SectionWrapper>

        <div className="relative rounded-2xl overflow-hidden border border-brand-border">
          <div className="absolute -inset-1 bg-brand-cyan/10 rounded-2xl blur-xl pointer-events-none" />
          <img
            src="https://placehold.co/800x400/111B30/06B6D4?text=Global+Reach+Map"
            alt="Global Reach Map"
            loading="lazy"
            className="relative w-full block rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="AG Design Solutions | One-Point Engineering Solution"
        description="AG Design Solutions provides end-to-end mechanical design, packaging solutions, and custom SPM manufacturing for automotive, OEM, and manufacturing industries."
        keywords="Mechanical Design Services, Packaging Design Solutions, Special Purpose Machines, SPM Manufacturing, Industrial Automation Solutions"
        canonical="/"
      />

      <Hero />
      <Divider />
      <WhoWeAre />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <ServicesSection />
      <Divider />
      <SectorsSection />
      <Divider />
      {/* <CertificatesSection />
      <Divider /> */}
      <QuoteBanner />
      {/* <Divider />
      <GlobalReach /> */}
    </>
  )
}
