import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-navy px-6 overflow-hidden">
      <div className="mesh-grid absolute inset-0 pointer-events-none opacity-40" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(30,111,232,0.08) 0%, transparent 65%)' }} />

      <div className="relative z-10 text-center max-w-md">
        <p className="font-display text-8xl font-bold text-brand-blue/30 mb-2 select-none">404</p>
        <h1 className="font-display text-3xl font-bold text-brand-light mb-4">Page Not Found</h1>
        <p className="text-brand-muted mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
          <Link
            to="/"
            className="bg-gradient-cta text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
