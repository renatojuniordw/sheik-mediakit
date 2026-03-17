import { motion } from 'framer-motion'
import { FormatCard } from '../components/FormatCard'
import { FORMATS } from '../data/formats'
import { useScrollSnap } from '../hooks/useScrollSnap'

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const FormatosSection = () => {
  const { scrollTo } = useScrollSnap()

  return (
    <section
      id="formatos"
      className="snap-section overflow-y-auto relative bg-black"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
            <p className="font-mono text-[10px] tracking-[4px] uppercase text-acid">
              Soluções Criativas
            </p>
          </motion.div>

          <motion.h2
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[clamp(44px,5vw,72px)] leading-none tracking-tighter text-white"
          >
            FORMATOS DE <span className="text-cyan">PARCERIA.</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FORMATS.map((format, i) => (
            <div
              key={format.num}
              className={i === 0 ? 'md:scale-105 relative z-20' : ''}
            >
              <FormatCard
                num={format.num}
                title={format.title}
                icon={format.icon}
                description={format.description}
                bullets={format.bullets}
                tag={format.tag}
                delay={0.1 * (i + 1)}
              />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 p-8 border border-white/5 bg-lead/30 backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-white/20" />
            <p className="font-mono text-[10px] tracking-widest text-white/80 uppercase font-bold">
              Projetos customizados sob demanda.
            </p>
          </div>
          
          <button
            onClick={() => scrollTo('contato')}
            className="group relative px-8 py-4 font-mono text-[10px] tracking-[3px] uppercase font-bold transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: 'var(--acid)',
              color: '#ffffff',
              boxShadow: '0 0 20px rgba(204,255,0,0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(204,255,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(204,255,0,0.15)'
            }}
          >
            <span className="relative z-10">Solicitar Proposta →</span>
            <div className="absolute inset-0 bg-black/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
