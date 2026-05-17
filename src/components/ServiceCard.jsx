import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Animated SVG icon for each service
function ServiceIcon({ type }) {
  if (type === 'designing') return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="26" cy="26" r="24" fill="#EEF4FF"/>
      <circle cx="26" cy="26" r="16" fill="none" stroke="#1E3C82" strokeWidth="1.2" strokeDasharray="3 2"
        style={{ transformOrigin: '26px 26px', animation: 'spinGear 14s linear infinite' }}/>
      <line x1="26" y1="12" x2="19" y2="36" stroke="#1E3C82" strokeWidth="2" strokeLinecap="round"/>
      <line x1="26" y1="12" x2="33" y2="36" stroke="#1E3C82" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="28" x2="32" y2="28" stroke="#4A7BC8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="26" cy="12" r="2.5" fill="#4A7BC8"/>
    </svg>
  )

  if (type === 'packaging') return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="26" cy="26" r="24" fill="#F0F7FF"/>
      <rect x="14" y="20" width="24" height="18" rx="2" fill="none" stroke="#1E3C82" strokeWidth="1.8"/>
      <path d="M14 24h24" stroke="#4A7BC8" strokeWidth="1.5"/>
      <path d="M21 20v-4h10v4" stroke="#1E3C82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="26" y1="24" x2="26" y2="38" stroke="#4A7BC8" strokeWidth="1.2" strokeDasharray="2 1.5"/>
    </svg>
  )

  // SPM / default — spinning gear
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="26" cy="26" r="24" fill="#EEF4FF"/>
      <g style={{ transformOrigin: '26px 26px', animation: 'spinGear 10s linear infinite' }}>
        <circle cx="26" cy="26" r="10" fill="none" stroke="#1E3C82" strokeWidth="2.5"/>
        <circle cx="26" cy="26" r="4" fill="#4A7BC8"/>
        <rect x="24.5" y="13" width="3" height="5" rx="1" fill="#1E3C82"/>
        <rect x="24.5" y="34" width="3" height="5" rx="1" fill="#1E3C82"/>
        <rect x="13" y="24.5" width="5" height="3" rx="1" fill="#1E3C82"/>
        <rect x="34" y="24.5" width="5" height="3" rx="1" fill="#1E3C82"/>
      </g>
    </svg>
  )
}

const ICON_TYPE = {
  '/designing':             'designing',
  '/integrated-packaging':  'packaging',
  '/spm':                   'spm',
}

const ACCENT_GRADIENTS = {
  '/designing':             'linear-gradient(90deg, #1E3C82, #4A7BC8, #8AAAD4)',
  '/integrated-packaging':  'linear-gradient(90deg, #4A7BC8, #1E3C82, #0F1F3D)',
  '/spm':                   'linear-gradient(90deg, #8AAAD4, #4A7BC8, #1E3C82)',
}

export default function ServiceCard({ title, desc, path, cta }) {
  const iconType = ICON_TYPE[path] || 'spm'
  const accent   = ACCENT_GRADIENTS[path] || ACCENT_GRADIENTS['/designing']

  return (
    <>
      <style>{`
        @keyframes spinGear { to { transform: rotate(360deg); } }
      `}</style>

      <motion.div
        whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(30,60,130,0.13)' }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl overflow-hidden bg-white border border-brand-border cursor-pointer group"
        style={{ boxShadow: '0 2px 8px rgba(30,60,130,0.06)' }}
      >
        <Link to={path} className="block">
          {/* Metallic accent bar */}
          <div className="h-1" style={{ background: accent }} />

          <div className="p-6">
            {/* Icon */}
            <div className="w-14 h-14 mb-4">
              <ServiceIcon type={iconType} />
            </div>

            <h3 className="font-display text-base font-bold mb-2" style={{ color: '#0F1F3D' }}>
              {title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-5">{desc}</p>

            {/* CTA */}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide"
              style={{ color: '#1E3C82' }}>
              {cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="#1E3C82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          {/* Corner gear watermark */}
          <svg className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none"
            width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" fill="#1E3C82" stroke="#1E3C82" strokeWidth="6" strokeDasharray="8 4"/>
          </svg>
        </Link>
      </motion.div>
    </>
  )
}