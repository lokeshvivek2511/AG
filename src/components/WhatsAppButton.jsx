import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/utils/constants'

export default function WhatsAppButton() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    // Bounce animation every 3s, infinite
    gsap.to(ref.current, {
      y: -8,
      duration: 0.4,
      ease: 'power2.out',
      yoyo: true,
      repeat: -1,
      repeatDelay: 2.6,
    })
  }, [])

  return (
    <a
      ref={ref}
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#20bf5b] transition-colors"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  )
}
