import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'
import { NAV_LINKS } from '@/utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(navRef.current, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 })
  }, [])

  // useEffect(() => { setMenuOpen(false) }, [location])

  const handleNavClick = () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  setMenuOpen(false)
}

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-brand-border shadow-sm'
            : 'bg-white/80 backdrop-blur-sm border-b border-brand-border/50'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 select-none">
          <img
            src="/logo.jpeg"
            alt="AG Design Solutions Logo"
            className="h-10 w-10 object-contain rounded-sm"
          />
          <span className="font-display font-bold text-base leading-tight hidden sm:block">
            <span className="text-brand-blue">AG</span>
            <span className="text-brand-light"> Design Solutions</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <Link

                to={path}
                className={`text-sm transition-colors duration-200 relative group ${
                  location.pathname === path ? 'text-brand-blue' : 'text-brand-muted hover:text-brand-light'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-blue rounded transition-all duration-300 ${
                    location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-gradient-cta text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </motion.div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-brand-light p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white border-b border-brand-border shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={handleNavClick}
                  className={`font-display text-lg font-semibold transition-colors ${
                    location.pathname === path ? 'text-brand-blue' : 'text-brand-light'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="inline-block mt-2 bg-gradient-cta text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
              >
                Get a Quote
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}