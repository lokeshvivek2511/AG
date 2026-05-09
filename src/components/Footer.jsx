import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Youtube } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '@/utils/constants'

const SOCIAL_ICONS = { Linkedin, Instagram, Youtube }

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold mb-3">
              <span className="text-brand-blue">AG</span>
              <span className="text-brand-light"> Design Solutions</span>
            </p>
            <p className="text-brand-muted text-sm leading-relaxed mb-5">
              One-Point Solution from Design to Manufacturing
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => {
                const Icon = SOCIAL_ICONS[icon]
                return (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-blue hover:border-brand-blue transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-brand-muted text-sm hover:text-brand-light transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <p className="text-brand-muted text-sm leading-relaxed">📍 {CONTACT_INFO.corporate}</p>
              <p className="text-brand-muted text-sm">{CONTACT_INFO.emails[0]}</p>
              <p className="text-brand-muted text-sm">{CONTACT_INFO.phones[0]}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-brand-muted text-xs">© 2026 AG Design Solutions. All rights reserved.</p>
          <p className="text-brand-muted text-xs">Powered by Your Agency</p>
        </div>
      </div>
    </footer>
  )
}
