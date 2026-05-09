import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // Simulate async submission (no backend)
    await new Promise(resolve => setTimeout(resolve, 1200))
    console.log('Contact form data:', {
      ...data,
      _to: import.meta.env.VITE_CONTACT_EMAIL,
    })
    toast.success("Thank you! We'll get back to you shortly.", {
      duration: 4000,
      style: {
        background: '#111B30',
        color: '#E8F0FF',
        border: '1px solid #1E2D4A',
      },
      iconTheme: { primary: '#10B981', secondary: '#E8F0FF' },
    })
    reset()
  }

  const inputClass = (field) =>
    `w-full bg-brand-dark border rounded-lg px-4 py-3 text-brand-light text-sm placeholder-brand-muted/60 outline-none transition-colors duration-200 ${
      errors[field] ? 'border-red-500/70' : 'border-brand-border focus:border-brand-blue'
    }`

  return (
    <div className="bg-brand-card border border-brand-border rounded-2xl p-8">
      <h3 className="font-display text-2xl font-bold text-brand-light mb-6">Send Us a Message</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1.5">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              className={inputClass('name')}
              placeholder="Your full name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1.5">
              Company
            </label>
            <input
              className={inputClass('company')}
              placeholder="Company name"
              {...register('company')}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1.5">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              className={inputClass('email')}
              placeholder="your@email.com"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email format' },
              })}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              className={inputClass('phone')}
              placeholder="+91 XXXXX XXXXX"
              {...register('phone', {
                minLength: { value: 10, message: 'Minimum 10 digits' },
              })}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Service dropdown */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1.5">
            Service Interest
          </label>
          <select
            className={`${inputClass('service')} bg-brand-dark`}
            {...register('service')}
          >
            <option value="">Select a service…</option>
            <option value="designing">Designing</option>
            <option value="packaging">Integrated Packaging</option>
            <option value="spm">Special Purpose Machines (SPM)</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1.5">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            rows={5}
            className={`${inputClass('message')} resize-y min-h-[120px]`}
            placeholder="Describe your requirement…"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full bg-gradient-cta text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-opacity disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            'Send Enquiry'
          )}
        </motion.button>
      </form>
    </div>
  )
}
