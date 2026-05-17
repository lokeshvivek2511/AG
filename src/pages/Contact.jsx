import { Link } from 'react-router-dom'
import * as LucideIcons from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import ContactForm from '@/components/ContactForm'
import SectionWrapper from '@/components/SectionWrapper'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/utils/constants'

function InnerHero() {
  return (
    <section className="relative pt-32 pb-16 px-6 lg:px-10 bg-brand-navy overflow-hidden">
      <div className="mesh-grid absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(30,111,232,0.12) 0%, transparent 65%)' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-light">Contact</span>
        </nav>
        <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Reach Us</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-light mb-4 leading-tight">
          Get In Touch
        </h1>
        <p className="text-brand-muted text-lg leading-relaxed max-w-xl">
          One-point solution from design to manufacturing. Tell us your requirements and we'll engineer the perfect solution.
        </p>
      </div>
    </section>
  )
}

function InfoRow({ icon: Icon, children }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex-shrink-0 text-brand-cyan">
        <Icon size={16} />
      </div>
      <div className="text-sm text-brand-muted leading-relaxed">{children}</div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact AG Design Solutions | Get a Quote"
        description="Reach AG Design Solutions for mechanical design, packaging, and SPM inquiries. Corporate Office: Gobichettipalayam. Plant: Padappai, Kancheepuram."
        canonical="/contact"
      />

      <InnerHero />
      <div className="section-divider" />

      <section className="py-16 px-6 lg:px-10 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Contact Info */}
          <SectionWrapper>
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Our Locations</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-light mb-6">Contact Details</h2>

            <div className="space-y-5 mb-8">
              <InfoRow icon={LucideIcons.MapPin}>
                <strong className="text-brand-light block mb-0.5">Corporate Office</strong>
                {CONTACT_INFO.corporate}
              </InfoRow>
              <InfoRow icon={LucideIcons.Factory}>
                <strong className="text-brand-light block mb-0.5">Our Plant</strong>
                {CONTACT_INFO.plant}
              </InfoRow>
              <InfoRow icon={LucideIcons.Mail}>
                <strong className="text-brand-light block mb-1">Email</strong>
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.emails.map(e => (
                    <a key={e} href={`mailto:${e}`} className="hover:text-brand-blue transition-colors">{e}</a>
                  ))}
                </div>
              </InfoRow>
              <InfoRow icon={LucideIcons.Phone}>
                <strong className="text-brand-light block mb-1">Phone</strong>
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.phones.map(p => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand-blue transition-colors">{p}</a>
                  ))}
                </div>
              </InfoRow>
            </div>

            {/* Social */}
            <div className="flex gap-3 mb-8">
              {SOCIAL_LINKS.map(({ icon, href, label }) => {
                const Icon = LucideIcons[icon] || LucideIcons.Link
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-cyan hover:border-brand-cyan transition-colors"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-brand-border">
              <iframe
                src={CONTACT_INFO.mapEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AG Design Solutions Plant Location"
              />
            </div>
          </SectionWrapper>

          {/* Right — Form */}
          <SectionWrapper delay={0.15}>
            <ContactForm />
          </SectionWrapper>
        </div>
      </section>
    </>
  )
}
