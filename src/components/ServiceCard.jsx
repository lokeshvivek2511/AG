import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceCard({ title, desc, img, path, cta }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 0 32px rgba(30,111,232,0.25)' }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden bg-brand-card border border-brand-border cursor-pointer group"
    >
      <Link to={path} className="block">
        <div className="overflow-hidden aspect-video">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg font-semibold text-brand-light mb-2">{title}</h3>
          <p className="text-brand-muted text-sm leading-relaxed mb-4">{desc}</p>
          <span className="text-brand-blue text-sm font-semibold group-hover:text-brand-cyan transition-colors">
            {cta}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
