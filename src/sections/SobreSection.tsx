import { motion } from "framer-motion";
import { useScrollSnap } from "../hooks/useScrollSnap";

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const PILLS = [
  "Humor",
  "Reels Interativos",
  "Recife-PE",
  "Motoboy",
  "+50Mi views",
  "Conta verificada",
];

const MINI_CARDS = [
  { value: "+50MI", label: "Views acumuladas" },
  { value: "132K", label: "Conta anterior" },
  { value: "348", label: "Publicações" },
  { value: "94,8%", label: "Audiência BR" },
];

export const SobreSection = () => {
  const { scrollTo } = useScrollSnap();

  return (
    <section
      id="sobre"
      className="snap-section relative bg-black"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-lead/50 skew-x-[-12deg] translate-x-1/4 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 h-full items-center">
          {/* Left — content */}
          <div className="lg:w-[55%]">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: -20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <p className="font-mono text-[10px] tracking-[4px] uppercase text-cyan border-b border-cyan/30 pb-1">
                A Jornada do Sheik
              </p>
            </motion.div>

            <motion.h2
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[clamp(48px,6vw,84px)] leading-[0.9] tracking-tighter text-white mb-8"
            >
              MOTOBOY DE DIA,
              <br />
              <span className="text-cyan underline decoration-cyan/30 decoration-4 underline-offset-8 italic drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                VIRAL DE NOITE.
              </span>
            </motion.h2>

            <div className="space-y-6 max-w-xl">
              <motion.p
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                Diego é o reflexo da autenticidade recifense. Motoboy por
                profissão, criador por instinto. Ele transforma o cotidiano e as
                "piores" perguntas em conteúdo magnético.
              </motion.p>

              <motion.p
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                Diego construiu sua base do zero, focando em um único pilar:
                <span className="text-white font-bold">
                  {" "}
                  verdade sem filtro
                </span>
                . O resultado? Mais de 50 milhões de views e uma audiência que
                respira cada frame.
              </motion.p>
            </div>

            {/* Pills */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={prefersReduced ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 my-10"
            >
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 text-[9px] font-mono tracking-widest uppercase border border-white/10 hover:border-cyan hover:text-cyan transition-all duration-300 cursor-default bg-lead/20 backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.button
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={prefersReduced ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => scrollTo("numeros")}
              className="group flex items-center gap-4 font-mono text-xs tracking-widest uppercase text-acid"
            >
              <span className="w-12 h-px bg-acid transition-all duration-300 group-hover:w-20" />
              Explorar métricas —
            </motion.button>
          </div>

          {/* Right — Visual Stack */}
          <div className="lg:w-[45%] flex flex-col gap-6 relative">
            {/* Main Photo with technical frame */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
              whileInView={prefersReduced ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-2 border border-white/5 bg-lead/30"
            >
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-cyan" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-cyan" />

              <div className="overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="/assets/diego-sobre.jpg"
                  alt="Diego Sheik"
                  className="w-full object-cover aspect-[4/5] scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-cyan/5 mix-blend-overlay" />
              </div>
            </motion.div>

            {/* Quick Metrics Grid */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {MINI_CARDS.map(({ value, label }, idx) => (
                <div
                  key={label}
                  className="p-6 bg-lead/40 border border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-1 opacity-20 font-mono text-[8px] border-b border-l border-white/20">
                    00{idx + 1}
                  </div>
                  <p className="font-display text-4xl text-cyan group-hover:text-acid transition-colors duration-300">
                    {value}
                  </p>
                  <p className="font-mono text-[8px] tracking-widest uppercase text-white/70 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
