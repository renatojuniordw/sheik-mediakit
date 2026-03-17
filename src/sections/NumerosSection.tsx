import { motion } from "framer-motion";
import { StatCard } from "../components/StatCard";
import { STATS } from "../data/stats";

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const BREAKDOWN = [
  { label: "Reels", value: STATS.reelsInteractionShare },
  { label: "Curtidas", value: STATS.likes },
  { label: "Comentários", value: STATS.comments },
  { label: "Salvamentos", value: STATS.saves },
];

export const NumerosSection = () => {
  return (
    <section
      id="numeros"
      className="snap-section relative bg-black"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--cyan) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: -20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-acid shadow-[0_0_8px_var(--acid)]" />
              <p className="font-mono text-[10px] tracking-[4px] uppercase text-cyan">
                Performance em Tempo Real
              </p>
            </motion.div>

            <motion.h2
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[clamp(48px,6vw,96px)] leading-[0.85] tracking-tighter text-white"
            >
              NÚMEROS QUE
              <br />
              <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                ESCANCARAM IMPACTO.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {/* Big card — col-span 2 */}
          <div className="md:col-span-2">
            <StatCard
              value={STATS.views}
              label="Visualizações Totais (Orgânico)"
              sub={`Crescimento Real: ${STATS.growth} no período`}
              delay={0.15}
            />
          </div>
          <StatCard
            value={STATS.interactions}
            label="Interações Ativas"
            delay={0.2}
          />

          <StatCard
            value={STATS.accountsReached}
            label="Novas Contas Alcançadas"
            delay={0.25}
          />
          <StatCard
            value={STATS.shares}
            label="Compartilhamentos Via DM"
            delay={0.3}
          />
          <StatCard
            value={STATS.newFollowers}
            label="Seguidores Convertidos"
            delay={0.35}
          />
        </div>

        {/* Breakdown bar — Fragmented stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {BREAKDOWN.map(({ label, value }, idx) => (
            <motion.div
              key={label}
              initial={prefersReduced ? false : { opacity: 0, y: 10 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="p-4 border-l-2 border-white/10 hover:border-acid transition-all duration-300 bg-lead/20"
            >
              <p className="font-mono text-[8px] tracking-[4px] uppercase text-white/70 mb-2">
                {label}
              </p>
              <p className="font-display text-2xl text-white tracking-widest">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
