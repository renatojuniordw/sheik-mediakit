import { motion } from 'framer-motion'

interface AudienceBarProps {
  label: string
  pct: number
  delay?: number
  color?: string
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const AudienceBar = ({ label, pct, delay = 0, color = 'var(--cyan)' }: AudienceBarProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full group">
      <div className="flex justify-between items-end">
        <span className="font-mono text-[9px] tracking-widest uppercase text-white/70 group-hover:text-cyan transition-colors duration-300">
          {label}
        </span>
        <span className="font-mono text-[10px] text-white font-bold">
          {pct}%
        </span>
      </div>
      <div className="relative w-full h-1.5 bg-white/5 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ 
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}44`
          }}
          initial={prefersReduced ? false : { width: 0 }}
          whileInView={prefersReduced ? {} : { width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}
