import { m } from './MotionProvider'

interface FormatCardProps {
  num: string
  title: string
  icon: string
  description: string
  bullets: readonly string[]
  tag: string
  delay?: number
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const FormatCard = ({ num, title, icon, description, bullets, tag, delay = 0 }: FormatCardProps) => {
  return (
    <m.div
      initial={prefersReduced ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col p-8 h-full bg-lead/40 border border-white/5 hover:border-cyan/50 transition-all duration-500 overflow-hidden"
    >
      {/* Decorative glitch scanline on hover */}
      <div className="absolute inset-0 bg-cyan/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 pointer-events-none" />
      
      {/* Ghost number */}
      <span
        className="absolute top-4 right-4 select-none pointer-events-none font-display text-[120px] leading-none text-white opacity-[0.02] group-hover:opacity-10 transition-opacity duration-500"
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="flex items-start gap-4 mb-6 relative z-10">
        <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-cyan transition-colors duration-500 text-2xl">
          {icon}
        </div>
        <div>
          <p className="font-mono text-[9px] tracking-[4px] uppercase text-acid mb-1 italic">
            {num}
          </p>
          <h3 className="font-display text-3xl tracking-tight text-white group-hover:text-cyan transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-white/70 leading-relaxed mb-8 relative z-10 group-hover:text-white transition-colors duration-300">
        {description}
      </p>

      <ul className="flex-1 flex flex-col gap-3 mb-8 relative z-10">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-3 group/item"
          >
            <span className="text-acid group-hover/item:translate-x-1 transition-transform duration-300">→</span>
            <span className="text-[13px] text-white/90 group-hover/item:text-white transition-colors duration-300">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-white/5 relative z-10 flex justify-between items-center">
        <span className="font-mono text-[9px] tracking-widest uppercase text-cyan font-bold">
          {tag}
        </span>
        <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-cyan group-hover:shadow-[0_0_8px_var(--cyan)] transition-all duration-500" />
      </div>
    </m.div>
  )
}
