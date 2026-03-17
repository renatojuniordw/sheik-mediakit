import { m } from './MotionProvider'

interface Stat {
  label: string
  value: string
}

interface ViralCardProps {
  views: string
  title: string
  date: string
  url: string
  stats: readonly Stat[]
  delay?: number
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const ViralCard = ({ views, title, date, url, stats, delay = 0 }: ViralCardProps) => {
  return (
    <m.div
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
          Total de Impressões
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

      {/* CTA — Ver no Instagram */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-between px-5 py-4 border border-white/10 hover:border-acid hover:bg-acid/5 transition-all duration-300 group/cta"
      >
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4 text-white/50 group-hover/cta:text-acid transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="font-mono text-[9px] tracking-[3px] uppercase text-white/50 group-hover/cta:text-acid transition-colors duration-300">
            Assistir no Instagram
          </span>
        </div>
        <span className="text-white/30 group-hover/cta:text-acid transition-colors duration-300 text-sm">→</span>
      </a>
    </m.div>
  )
}
