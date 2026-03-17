import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  sub?: string
  highlight?: boolean
  delay?: number
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const StatCard = ({ value, label, sub, highlight = false, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col justify-between p-8 h-full transition-all duration-500 overflow-hidden group ${
        highlight ? 'bg-cyan' : 'bg-lead/60 border border-white/10'
      }`}
    >
      {/* Decorative glitch effect on hover for non-highlight cards */}
      {!highlight && (
        <div className="absolute top-0 left-0 w-1 h-0 bg-cyan group-hover:h-full transition-all duration-500" />
      )}
      
      <div>
        <div className="flex justify-between items-start mb-4">
          <p
            className={`font-display text-[clamp(44px,6vw,72px)] leading-none tracking-tighter transition-colors duration-300 ${
              highlight ? 'text-black font-black' : 'text-white group-hover:text-cyan'
            }`}
          >
            {value}
          </p>
          {!highlight && <span className="font-mono text-[8px] opacity-60 mt-2 text-white/60">METRIC_00{Math.floor(delay * 10) || 1}</span>}
        </div>
        
        <p
          className={`font-mono text-xs tracking-[0.2em] uppercase font-bold leading-tight ${
            highlight ? 'text-black/70' : 'text-white/70 group-hover:text-white'
          }`}
        >
          {label}
        </p>
      </div>
      
      {sub && (
        <div className={`mt-6 pt-4 border-t ${highlight ? 'border-black/10' : 'border-white/5'}`}>
          <p
            className={`font-mono text-[10px] tracking-tight flex items-center gap-2 ${
              highlight ? 'text-black/50' : 'text-acid font-bold uppercase'
            }`}
          >
            {!highlight && <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />}
            {sub}
          </p>
        </div>
      )}
    </motion.div>
  )
}
