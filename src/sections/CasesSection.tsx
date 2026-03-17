import { m } from '../components/MotionProvider'
import { ViralCard } from '../components/ViralCard'
import { VIRALS } from '../data/virals'

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const CasesSection = () => {
  return (
    <section
      id="cases"
      className="snap-section overflow-y-auto relative bg-black"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <m.div
            initial={prefersReduced ? false : { opacity: 0, x: -20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
            <p className="font-mono text-[10px] tracking-[4px] uppercase text-acid">
              Performance Viral
            </p>
          </m.div>

          <m.h2
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[clamp(44px,5vw,72px)] leading-none tracking-tighter text-white"
          >
            VÍDEOS QUE <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">EXPLODIRAM.</span>
          </m.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VIRALS.map((viral, i) => (
            <ViralCard
              key={viral.title}
              views={viral.views}
              title={viral.title}
              date={viral.date}
              url={viral.url}
              stats={viral.stats}
              delay={0.1 * (i + 1)}
            />
          ))}
        </div>

        {/* Footer note */}
        <m.div
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={prefersReduced ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-4 py-6 border-t border-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-acid animate-pulse" />
          <p className="font-mono text-[9px] tracking-widest text-white/70 uppercase">
            Dados auditáveis diretamente via painel profissional do Instagram.
          </p>
        </m.div>
      </div>
    </section>
  )
}
