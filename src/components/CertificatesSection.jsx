import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const CERTS = [
  {
    label: 'Professional Certificate',
    img: 'https://placehold.co/400x300/111B30/1E6FE8?text=Professional+Certificate',
    glowColor: 'rgba(30,111,232,0.2)',
  },
  {
    label: 'Associate Certificate',
    img: 'https://placehold.co/400x300/111B30/4F46E5?text=Associate+Certificate',
    glowColor: 'rgba(79,70,229,0.2)',
  },
]

export default function CertificatesSection() {
  return (
    <section className="py-20 px-6 lg:px-10 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3">Credibility</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light">Our Certifications</h2>
        </SectionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {CERTS.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ boxShadow: `0 0 40px ${c.glowColor}` }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border border-brand-blue/40"
              style={{ boxShadow: `0 0 20px ${c.glowColor}` }}
            >
              <img src={c.img} alt={c.label} loading="lazy" className="w-full block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
