import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'

import agfirstpic from '../../public/Reference_Image/ag_firstpic.jpeg'
// import CounterSection from './CounterSection'

// Split text into animatable word spans
function WordReveal({ text, className = '' }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word-reveal" style={{ marginRight: '0.3em' }}>
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </span>
  )
}

// Floating geometric shape
function FloatingShape({ size, top, left, right, opacity, delay }) {
  return (
    <div
      className="absolute rounded-full border border-brand-blue/20 float-shape pointer-events-none"
      style={{
        width: size, height: size,
        top, left, right,
        opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${10 + delay * 2}s`,
      }}
    />
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return
    const words = heroRef.current.querySelectorAll('.word-inner')
    gsap.fromTo(
      words,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.75, ease: 'power3.out', delay: 0.4 }
    )
    // Sub-headline fade in
    const sub = heroRef.current.querySelector('.hero-sub')
    if (sub) gsap.fromTo(sub, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 1.1 })
    // Buttons
    const btns = heroRef.current.querySelector('.hero-btns')
    if (btns) gsap.fromTo(btns, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 1.3 })
    // Image
    const img = heroRef.current.querySelector('.hero-image')
    if (img) gsap.fromTo(img, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out', delay: 0.6 })
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero-noise relative min-h-screen flex items-center bg-brand-navy overflow-hidden pt-24 pb-16 px-6 lg:px-10"
    >
      {/* Mesh grid */}
      <div className="mesh-grid absolute inset-0 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute right-0 top-1/4 w-2/3 h-3/4 bg-hero-glow pointer-events-none" />

      {/* Floating shapes */}
      <FloatingShape size="120px" top="15%" left="5%"  opacity={0.8} delay={0}   />
      <FloatingShape size="80px"  top="60%" left="2%"  opacity={0.7} delay={3}   />
      <FloatingShape size="160px" top="10%" right="8%" opacity={0.6} delay={1.5} />
      <FloatingShape size="60px"  top="75%" right="12%" opacity={0.5} delay={4}  />

      {/* Hexagon accent */}
      <svg
        className="absolute top-1/3 right-1/4 float-shape pointer-events-none"
        width="90" height="90" viewBox="0 0 90 90"
        style={{ opacity: 0.08, animationDelay: '2s', animationDuration: '14s' }}
      >
        <polygon points="45,5 85,27.5 85,62.5 45,85 5,62.5 5,27.5" fill="none" stroke="#1E6FE8" strokeWidth="1.5"/>
      </svg>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left content */}
        <div>
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-5">
            One-Point Engineering Solution
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            <WordReveal text="One-Point Solution" className="text-brand-light" />
            <br />
            <WordReveal text="from Design to" className="text-brand-light" />
            {' '}
            <span className="word-reveal" style={{ marginRight: '0.3em' }}>
              <span className="word-inner text-brand-blue">Manufacturing</span>
            </span>
          </h1>

          <p className="hero-sub text-brand-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            AG Design Solutions delivers precision-engineered mechanical design, integrated packaging systems,
            and custom Special Purpose Machines — built for automotive, OEM, and industrial leaders.
          </p>

          <div className="hero-btns flex flex-wrap gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/designing"
                className="inline-block bg-gradient-cta text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Explore Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-block border border-white/30 text-brand-light font-medium px-6 py-3 rounded-xl text-sm hover:border-brand-blue hover:bg-brand-blue/10 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* <CounterSection /> */}
        </div>

        {/* Right image */}
        <div className="hero-image  lg:block">
          <div className="relative">
            <div className="absolute -inset-3 bg-brand-blue/10 rounded-2xl blur-xl pointer-events-none" />
            <img
              src={agfirstpic}
              alt="Engineering Excellence"
              loading="eager"
              className="relative w-full rounded-2xl border border-brand-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
