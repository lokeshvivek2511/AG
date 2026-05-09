import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

export default function SectorCard({ icon, name }) {
  const Icon = LucideIcons[icon] || LucideIcons.CircleDot

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 0 18px rgba(6,182,212,0.15)' }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border"
    >
      <div className="text-brand-cyan flex-shrink-0">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-brand-light">{name}</span>
    </motion.div>
  )
}
