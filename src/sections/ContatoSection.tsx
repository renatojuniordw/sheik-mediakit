import { m } from "../components/MotionProvider";
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

const FAQS = [
  {
    question: "Que marcas combinam com o perfil de Diego Sheik?",
    answer:
      "Marcas que querem awareness, lembranca e compartilhamento performam bem com o tom espontaneo do criador, especialmente em humor, varejo, servicos, food, eventos e produtos do dia a dia.",
  },
  {
    question: "Qual formato costuma gerar mais alcance organico?",
    answer:
      "O Reel patrocinado e o formato principal do midia kit porque conversa com o comportamento atual da audiencia e concentra 98,4% das interacoes informadas.",
  },
  {
    question: "Os dados do midia kit sao auditaveis?",
    answer:
      "Sim. Os indicadores apresentados foram organizados a partir do painel profissional do Instagram e indicam claramente o periodo de referencia usado na analise.",
  },
];

export const ContatoSection = () => {
  return (
    <section
      id="contato"
      className="snap-section flex flex-col relative bg-black"
      aria-labelledby="contato-title"
    >
      <div className="flex-1 flex flex-col md:flex-row relative z-10">
        {/* Left — Dynamic Lead/Cyan */}
        <m.div
          initial={prefersReduced ? false : { opacity: 0, x: -30 }}
          whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-[55%] flex flex-col justify-between p-10 lg:p-20 bg-lead/30 relative overflow-hidden border-r border-white/5"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <m.div
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
            </m.div>

            <h2
              id="contato-title"
              className="font-display text-[clamp(48px,6vw,92px)] leading-none tracking-tighter text-white mb-8"
            >
              CONECTE SUA MARCA AOS{" "}
              <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                MILHÕES.
              </span>
            </h2>

            <p className="font-mono text-sm text-white/60 leading-relaxed max-w-md italic border-l-2 border-cyan/20 pl-6">
              "Viralização não é sorte, é estratégia. Vamos transformar seu
              produto na próxima trend do Diego Sheik."
            </p>

            <div className="mt-8 max-w-xl space-y-3 text-sm text-white/70 leading-relaxed">
              <p>
                Este midia kit foi estruturado para facilitar a avaliacao de
                marcas, agencias e equipes de marketing sobre alcance, publico
                e formatos comerciais.
              </p>
              <p>
                Base de metricas: <span className="text-white">{STATS.period}</span>.
                Ultima atualizacao editorial:{" "}
                <span className="text-white">17 mar 2026</span>.
              </p>
            </div>
          </div>

          <div className="mt-12 relative z-10">
            <ContactLinks />
          </div>
        </m.div>

        {/* Right — Stats Summary */}
        <m.div
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

          <div className="p-10 border-t border-white/5 bg-black/10">
            <p className="font-mono text-[10px] tracking-[4px] uppercase text-cyan mb-5">
              FAQ para marcas e agencias
            </p>
            <div className="space-y-5">
              {FAQS.map(({ question, answer }) => (
                <article key={question}>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {question}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="mt-auto px-10 py-7 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 bg-black/20">
            <p className="font-mono text-[9px] text-white/40 tracking-widest uppercase">
              © 2026 Diego Sheik Media Kit
            </p>
            <a
              href="https://unificando.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5"
            >
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300">
                Site criado pela
              </span>
              <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-cyan group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all duration-300">
                Unificando
              </span>
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300">
                — quero o meu
              </span>
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
};
