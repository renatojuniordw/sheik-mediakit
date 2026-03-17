import { motion } from 'framer-motion'

interface Stat {
  label: string
  value: string
}

interface ViralCardProps {
  views: string
  title: string
  date: string
  insight: string
  stats: readonly Stat[]
  delay?: number
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const ViralCard = ({ views, title, date, insight, stats, delay = 0 }: ViralCardProps) => {
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col p-8 bg-lead/40 border border-white/5 hover:border-acid/30 transition-all duration-500"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-acid/5 translate-x-12 -translate-y-12 rotate-45 pointer-events-none" />
      
      {/* Views destaque */}
      <div className="mb-8 relative z-10">
        <p className="font-display text-[72px] leading-none text-acid tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
          {views}
        </p>
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-white/70 mt-2">
          Total Impressions
        </p>
      </div>

      <div className="mb-8 relative z-10">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        <p className="font-mono text-[10px] text-white/70 tracking-widest uppercase">
          {date}
        </p>
      </div>

      {/* Stats grid 3x2 */}
      <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="group/stat">
            <p className="font-display text-2xl text-white group-hover/stat:text-cyan transition-colors duration-300">
              {stat.value}
            </p>
            <p className="font-mono text-[8px] tracking-widest uppercase text-white/70 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Insight screenshot thumbnail */}
      <div className="mt-auto relative group-hover:shadow-[0_0_20px_rgba(204,255,0,0.1)] transition-shadow duration-500">
        <div className="absolute inset-0 border border-white/10 pointer-events-none z-10" />
        <img
          src={insight}
          alt={`Insights do Instagram — ${title}`}
          className="w-full grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700 object-cover object-top h-[140px]"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 border border-white/10">
          <p className="font-mono text-[7px] text-acid tracking-[2px] uppercase">Verified API</p>
        </div>
      </div>
    </motion.div>
  )
}
