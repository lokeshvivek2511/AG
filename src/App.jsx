import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import gsap from 'gsap'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

import Home from '@/pages/Home'
import Designing from '@/pages/Designing'
import IntegratedPackaging from '@/pages/IntegratedPackaging'
import SPM from '@/pages/SPM'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

// ─────────────────────────────────────────────
// Page transition
// ─────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeIn' } },
}

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                     element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/designing"            element={<PageWrapper><Designing /></PageWrapper>} />
        <Route path="/integrated-packaging" element={<PageWrapper><IntegratedPackaging /></PageWrapper>} />
        <Route path="/spm"                  element={<PageWrapper><SPM /></PageWrapper>} />
        <Route path="/contact"              element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*"                     element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

// ─────────────────────────────────────────────
// Gear loader styles
// ─────────────────────────────────────────────
const loaderStyles = `
  @keyframes ag-spin-cw   { to { transform: rotate(360deg);  } }
  @keyframes ag-spin-ccw  { to { transform: rotate(-360deg); } }

  @keyframes ag-sparkle {
    0%   { opacity: 0; transform: translate(0, 0) scale(1); }
    20%  { opacity: 1; }
    100% { opacity: 0; transform: translate(var(--dx, 8px), var(--dy, -12px)) scale(0.2); }
  }

  @keyframes ag-progress {
    0%   { width: 0%;   opacity: 1; }
    70%  { width: 100%; opacity: 1; }
    85%  { width: 100%; opacity: 0; }
    86%  { width: 0%;   opacity: 0; }
    100% { width: 0%;   opacity: 1; }
  }

  .ag-loader {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background: #0d1b2e;
    overflow: hidden;
  }

  /* corner ghost gears */
  .ag-corner { position: absolute; opacity: 0.04; }
  .ag-corner.tl { top: -30px; left: -30px; width: 120px; animation: ag-spin-cw  9s linear infinite; }
  .ag-corner.br { bottom: -40px; right: -40px; width: 160px; animation: ag-spin-ccw 12s linear infinite; }

  /* gear stage */
  .ag-stage { position: relative; width: 260px; height: 180px; }

  .ag-gear { position: absolute; transform-origin: center; }
  .ag-gear.big   { animation: ag-spin-cw  4s linear infinite; }
  .ag-gear.med   { animation: ag-spin-ccw 2.5s linear infinite; }
  .ag-gear.small { animation: ag-spin-cw  1.8s linear infinite; }

  /* sparks */
  .ag-spark { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: #fb9511; opacity: 0; }
  .ag-s1 { --dx:  8px; --dy: -14px; animation: ag-sparkle 1.8s 0.0s ease-out infinite; }
  .ag-s2 { --dx: -5px; --dy: -10px; animation: ag-sparkle 1.8s 0.4s ease-out infinite; }
  .ag-s3 { --dx: 10px; --dy:  -7px; animation: ag-sparkle 1.8s 0.8s ease-out infinite; }
  .ag-s4 { --dx: -3px; --dy: -16px; animation: ag-sparkle 1.8s 1.2s ease-out infinite; }

  /* brand */
  .ag-brand { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; font-family: system-ui, -apple-system, sans-serif; }
  .ag-brand-name { font-size: clamp(22px, 5vw, 30px); font-weight: 700; letter-spacing: -0.5px; line-height: 1; }
  .ag-brand-name .ag { color: #fb9511; }
  .ag-brand-name .ds { color: #f0ece4; }
  .ag-brand-sub  { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #7a8499; }

  /* progress bar */
  .ag-bar-track { width: 160px; height: 2px; background: rgba(255,255,255,0.08); border-radius: 2px; margin-top: 6px; overflow: hidden; }
  .ag-bar-fill  { height: 100%; background: #fb9511; border-radius: 2px; animation: ag-progress 2.4s ease-in-out infinite; }
`

// ─────────────────────────────────────────────
// Gear path generator (from orange_gear_loader)
// ─────────────────────────────────────────────
function gearPath(R, r, teeth, holeR) {
  const toothH = (R - r) * 0.55
  const Ro = R
  const Ri = r
  const addendum = toothH
  const dedendum = toothH * 0.85
  const Ra = Ri + addendum
  const Rd = Ri - dedendum
  const toothAngle = (Math.PI * 2) / teeth
  const toothWidth = toothAngle * 0.42
  const spaceWidth = toothAngle - toothWidth

  let d = ''
  for (let i = 0; i < teeth; i++) {
    const base = i * toothAngle
    const a0 = base + spaceWidth * 0.5
    const a1 = a0 + toothWidth * 0.15
    const a2 = a0 + toothWidth * 0.45
    const a3 = a0 + toothWidth * 0.55
    const a4 = a0 + toothWidth * 0.85
    const a5 = a0 + toothWidth

    const pt = (angle, radius) => [Math.cos(angle) * radius, Math.sin(angle) * radius]

    const [x0, y0] = pt(a0, Ri)
    const [x1, y1] = pt(a1, Ra)
    const [x2, y2] = pt(a2, Ra)
    const [x3, y3] = pt(a3, Ra)
    const [x4, y4] = pt(a4, Ra)
    const [x5, y5] = pt(a5, Ri)

    if (i === 0) d += `M${x0.toFixed(2)},${y0.toFixed(2)}`
    else d += `L${x0.toFixed(2)},${y0.toFixed(2)}`

    d += `L${x1.toFixed(2)},${y1.toFixed(2)}`
    d += `A${Ra},${Ra} 0 0,1 ${x2.toFixed(2)},${y2.toFixed(2)}`
    d += `L${x3.toFixed(2)},${y3.toFixed(2)}`
    d += `A${Ra},${Ra} 0 0,1 ${x4.toFixed(2)},${y4.toFixed(2)}`
    d += `L${x5.toFixed(2)},${y5.toFixed(2)}`

    const nextA = a5 + spaceWidth
    const [nx, ny] = pt(nextA, Ri)
    d += `A${Ri},${Ri} 0 0,1 ${nx.toFixed(2)},${ny.toFixed(2)}`
  }
  d += 'Z'

  if (holeR) {
    d += ` M${holeR},0 A${holeR},${holeR} 0 1,0 -${holeR},0 A${holeR},${holeR} 0 1,0 ${holeR},0Z`
  }
  return d
}

// ─────────────────────────────────────────────
// Gear SVG components
// ─────────────────────────────────────────────
function GearIcon() {
  const path = gearPath(46, 30, 12, 46 * 0.22)
  return (
    <svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d={path} fill="#ffffff" />
    </svg>
  )
}

function GearBig() {
  const path = gearPath(58, 38, 14, 12)
  return (
    <svg viewBox="-70 -70 140 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d={path} fill="#fb9511" stroke="#c97000" strokeWidth="1" />
      <circle r={12 * 0.45} fill="#0d1b2e" />
      <circle r={12 * 0.18} fill="#fb9511" opacity="0.6" />
    </svg>
  )
}

function GearMed() {
  const path = gearPath(42, 28, 10, 9)
  return (
    <svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d={path} fill="#e0ddd8" stroke="#aaa89f" strokeWidth="1" />
      <circle r={9 * 0.45} fill="#0d1b2e" />
      <circle r={9 * 0.18} fill="#e0ddd8" opacity="0.6" />
    </svg>
  )
}

function GearSmall() {
  const path = gearPath(30, 20, 8, 6)
  return (
    <svg viewBox="-36 -36 72 72" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d={path} fill="#6b7a99" stroke="#4a5570" strokeWidth="1" />
      <circle r={6 * 0.45} fill="#0d1b2e" />
      <circle r={6 * 0.18} fill="#6b7a99" opacity="0.6" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// Loading screen
// ─────────────────────────────────────────────
function LoadingScreen({ onDone }) {
  const ref = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    // Position gears precisely as in orange loader
    if (stageRef.current) {
      const R1 = 58, R2 = 42, R3 = 30
      const cx1 = 60, cy1 = 90
      const dist12 = R1 + R2 - 4
      const angle12 = -0.3
      const cx2 = cx1 + Math.cos(angle12) * dist12
      const cy2 = cy1 + Math.sin(angle12) * dist12

      const dist23 = R2 + R3 - 4
      const angle23 = 1.1
      const cx3 = cx2 + Math.cos(angle23) * dist23
      const cy3 = cy2 + Math.sin(angle23) * dist23

      const w1 = R1 * 2 + 4, h1 = R1 * 2 + 4
      const w2 = R2 * 2 + 4, h2 = R2 * 2 + 4
      const w3 = R3 * 2 + 4, h3 = R3 * 2 + 4

      const g1 = stageRef.current.querySelector('.ag-gear.big')
      const g2 = stageRef.current.querySelector('.ag-gear.med')
      const g3 = stageRef.current.querySelector('.ag-gear.small')

      if (g1) g1.style.cssText += `width:${w1}px;height:${h1}px;top:${cy1-R1-2}px;left:${cx1-R1-2}px;`
      if (g2) g2.style.cssText += `width:${w2}px;height:${h2}px;top:${cy2-R2-2}px;left:${cx2-R2-2}px;`
      if (g3) g3.style.cssText += `width:${w3}px;height:${h3}px;top:${cy3-R3-2}px;left:${cx3-R3-2}px;`

      // Position sparks at mesh point
      const meshX = (cx1 + cx2) / 2 + 10
      const meshY = (cy1 + cy2) / 2
      const sparks = stageRef.current.querySelectorAll('.ag-spark')
      sparks.forEach(spark => {
        spark.style.left = (meshX + (Math.random() - 0.5) * 14) + 'px'
        spark.style.top = (meshY + (Math.random() - 0.5) * 14) + 'px'
      })

      // Adjust stage height
      const stageH = Math.max(cy1 + R1, cy2 + R2, cy3 + R3) + 10
      stageRef.current.style.height = stageH + 'px'
    }

    const timer = setTimeout(() => {
      if (ref.current) {
        gsap.to(ref.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: onDone,
        })
      }
    }, 1500)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <>
      <style>{loaderStyles}</style>
      <div ref={ref} className="ag-loader">

        {/* Corner ghost gears */}
        <div className="ag-corner tl"><GearIcon /></div>
        <div className="ag-corner br"><GearIcon /></div>

        {/* Gear stage */}
        <div ref={stageRef} className="ag-stage">
          {/* Spark particles at mesh point */}
          <div className="ag-spark ag-s1" />
          <div className="ag-spark ag-s2" />
          <div className="ag-spark ag-s3" />
          <div className="ag-spark ag-s4" />

          <div className="ag-gear big">  <GearBig />   </div>
          <div className="ag-gear med">  <GearMed />   </div>
          <div className="ag-gear small"><GearSmall /> </div>
        </div>

        {/* Brand */}
        <div className="ag-brand">
          <div className="ag-brand-name">
            <span className="ag">AG</span>
            <span className="ds"> Design</span>
          </div>
          <div className="ag-brand-sub">Solutions</div>
          <div className="ag-bar-track">
            <div className="ag-bar-fill" />
          </div>
        </div>

      </div>
    </>
  )
}

// ─────────────────────────────────────────────
// App
// ─────────────────────────────────────────────
export default function App() {
  const [loading, setLoading]   = useState(true)
  const [showApp, setShowApp]   = useState(false)

  const handleLoadDone = () => {
    setLoading(false)
    setShowApp(true)
  }

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadDone} />}

      {showApp && (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster position="bottom-right" />
        </BrowserRouter>
      )}
    </>
  )
}