import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

const ACCENT_CYCLE = [
  '#1E3C82', '#4A7BC8', '#8AAAD4', '#0F1F3D',
  '#1E3C82', '#4A7BC8', '#8AAAD4', '#0F1F3D', '#4A7BC8',
]

export default function SectorCard({ icon, name, index = 0 }) {
  const Icon    = LucideIcons[icon] || LucideIcons.CircleDot
  const accent  = ACCENT_CYCLE[index % ACCENT_CYCLE.length]

  return (
    <motion.div
      whileHover={{
        x: 4,
        boxShadow: '0 6px 20px rgba(30,60,130,0.10)',
        background: '#EEF4FF',
      }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFF] border"
      style={{ borderColor: '#E2E8F0', borderLeft: `3px solid ${accent}` }}
    >
      <div
        className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
        style={{ background: accent }}
      >
        <Icon size={18} strokeWidth={1.8} color="white" />
      </div>
      <span className="text-sm font-medium" style={{ color: '#0F1F3D' }}>{name}</span>
    </motion.div>
  )
}