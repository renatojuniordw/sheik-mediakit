import { motion } from "framer-motion";
import { ContactLinks } from "../components/ContactLinks";
import { STATS } from "../data/stats";

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const CONTATO_STATS = [
  { value: STATS.views, label: "views por mês" },
  { value: STATS.interactions, label: "interações / mês" },
  { value: STATS.accountsReached, label: "contas alcançadas" },
  { value: STATS.growth, label: "crescimento em 30 dias" },
];

export const ContatoSection = () => {
  return (
    <section
      id="contato"
      className="snap-section flex flex-col relative bg-black"
    >
      <div className="flex-1 flex flex-col md:flex-row relative z-10">
        {/* Left — Dynamic Lead/Cyan */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: -30 }}
          whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-[55%] flex flex-col justify-between p-10 lg:p-20 bg-lead/30 relative overflow-hidden border-r border-white/5"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-px bg-cyan/30" />
              <p className="font-mono text-[10px] tracking-[4px] uppercase text-cyan font-bold">
                Agendamento Direto
              </p>
            </motion.div>

            <h2 className="font-display text-[clamp(48px,6vw,92px)] leading-none tracking-tighter text-white mb-8">
              CONECTE SUA MARCA AOS{" "}
              <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                MILHÕES.
              </span>
            </h2>

            <p className="font-mono text-sm text-white/60 leading-relaxed max-w-md italic border-l-2 border-cyan/20 pl-6">
              "Viralização não é sorte, é estratégia. Vamos transformar seu
              produto na próxima trend do Diego Sheik."
            </p>
          </div>

          <div className="mt-12 relative z-10">
            <ContactLinks />
          </div>
        </motion.div>

        {/* Right — Stats Summary */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: 30 }}
          whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:w-[45%] flex flex-col justify-center bg-lead/40 backdrop-blur-3xl border-l border-white/5"
        >
          {CONTATO_STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex items-center justify-between px-10 lg:px-16 py-10 group transition-all duration-500 hover:bg-white/5"
              style={{
                borderBottom:
                  i < CONTATO_STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
            >
              <div className="flex flex-col">
                <p className="font-display text-[clamp(44px,5vw,64px)] text-acid leading-none group-hover:text-cyan transition-colors duration-300">
                  {value}
                </p>
                <p className="font-mono text-[9px] tracking-[3px] uppercase text-white/55 mt-2">
                  Indicador-Chave
                </p>
              </div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-white font-bold text-right max-w-[140px] leading-tight">
                {label}
              </p>
            </div>
          ))}

          {/* Bottom Branding */}
          <div className="mt-auto p-10 flex justify-between items-center bg-black/20">
            <p className="font-mono text-[8px] text-white/45 tracking-widest uppercase italic">
              © 2026 Diego Sheik Media Kit
            </p>
            <a
              href="http://unificando.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 font-mono text-[8px] tracking-widest uppercase text-white/30 hover:text-cyan transition-colors duration-300 italic"
            >
              Dev por
              <span className="text-cyan/60 group-hover:text-cyan transition-colors duration-300 not-italic font-bold">
                Unificando
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
