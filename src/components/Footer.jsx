import { Link } from 'react-router-dom'
import * as LucideIcons from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '@/utils/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1 — Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3 mb-4 select-none">
            <img
              src="/logo.jpeg"
              alt="AG Design Solutions Logo"
              className="h-12 w-12 object-contain rounded-sm"
            />
            <span className="font-display font-bold text-base leading-tight">
              <span className="text-brand-blue">AG</span>
              <span className="text-brand-light"> Design Solutions</span>
            </span>
          </Link>
          <p className="text-brand-muted text-sm leading-relaxed mb-5">
            One-Point Solution from Design to Manufacturing. Precision-engineered mechanical design,
            packaging, and Special Purpose Machines.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ icon, href, label }) => {
              const Icon = LucideIcons[icon] || LucideIcons.Link
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-blue hover:border-brand-blue transition-colors shadow-sm"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold text-brand-light uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-brand-muted text-sm hover:text-brand-blue transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold text-brand-light uppercase tracking-widest mb-5">
            Contact Us
          </h4>
          <div className="space-y-3 text-sm text-brand-muted">
            <p className="flex gap-2">
              <LucideIcons.MapPin size={15} className="text-brand-blue mt-0.5 flex-shrink-0" />
              <span>{CONTACT_INFO.corporate}</span>
            </p>
            {CONTACT_INFO.emails.map(e => (
              <p key={e} className="flex gap-2 items-center">
                <LucideIcons.Mail size={15} className="text-brand-blue flex-shrink-0" />
                <a href={`mailto:${e}`} className="hover:text-brand-blue transition-colors">{e}</a>
              </p>
            ))}
            {CONTACT_INFO.phones.map(p => (
              <p key={p} className="flex gap-2 items-center">
                <LucideIcons.Phone size={15} className="text-brand-blue flex-shrink-0" />
                <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand-blue transition-colors">{p}</a>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-muted">
          <p>© 2026 AG Design Solutions. All rights reserved.</p>
          {/* <p>Powered by <span className="text-brand-blue font-medium"></span></p> */}
        </div>
      </div>
    </footer>
  )
}