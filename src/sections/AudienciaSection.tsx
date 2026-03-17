import { motion } from "framer-motion";
import { AudienceBar } from "../components/AudienceBar";
import { AUDIENCE } from "../data/audience";

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const SectionTitle = ({ children }: { children: string }) => (
  <p
    className="mb-3"
    style={{
      fontFamily: '"Space Mono", monospace',
      fontSize: "9px",
      letterSpacing: "2.5px",
      textTransform: "uppercase",
      color: "var(--cyan)",
    }}
  >
    {children}
  </p>
);

export const AudienciaSection = () => {
  return (
    <section id="audiencia" className="snap-section relative bg-black">
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
              Dados Reais
            </p>
          </motion.div>

          <motion.h2
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[clamp(44px,5vw,72px)] leading-none tracking-tighter text-white"
          >
            QUEM CONSOME O{" "}
            <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              CONTEÚDO.
            </span>
          </motion.h2>
        </div>

        {/* Global Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5">
          {/* Main Stats Column — Gender & Age */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {/* Gênero Breakdown */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={prefersReduced ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-lead/40 flex flex-col justify-between"
            >
              <div>
                <SectionTitle>Demografia por Gênero</SectionTitle>
                <div className="flex gap-10 mt-6 mb-8">
                  <div className="group">
                    <p className="font-display text-5xl text-acid transition-transform duration-300 group-hover:scale-110">
                      {AUDIENCE.gender.followers.male}%
                    </p>
                    <p className="font-mono text-[9px] text-white/70 tracking-widest uppercase mt-2">
                      Masculino
                    </p>
                  </div>
                  <div className="group">
                    <p className="font-display text-5xl text-cyan transition-transform duration-300 group-hover:scale-110">
                      {AUDIENCE.gender.followers.female}%
                    </p>
                    <p className="font-mono text-[9px] text-white/70 tracking-widest uppercase mt-2">
                      Feminino
                    </p>
                  </div>
                </div>

                {/* Visual Gender Split Bar */}
                <div className="flex w-full h-3 mb-10 group relative overflow-hidden">
                  <div
                    style={{ width: `${AUDIENCE.gender.followers.male}%` }}
                    className="h-full bg-acid transition-all duration-1000 ease-out shadow-[0_0_15px_var(--acid-40)]"
                  />
                  <div
                    style={{ width: `${AUDIENCE.gender.followers.female}%` }}
                    className="h-full bg-cyan transition-all duration-1000 ease-out shadow-[0_0_15px_var(--cyan-40)]"
                  />
                </div>
              </div>

              {/* Insight Box */}
              <div className="p-4 bg-acid/5 border-l-2 border-acid backdrop-blur-sm">
                <p className="font-mono text-[10px] text-acid font-bold uppercase leading-tight">
                  "Viralização Orgânica: 94,1% das interações vêm de
                  não-seguidores."
                </p>
              </div>
            </motion.div>

            {/* Age Breakdown */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={prefersReduced ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-lead/40"
            >
              <SectionTitle>Distribuição Etária</SectionTitle>
              <div className="flex flex-col gap-6 mt-6">
                {AUDIENCE.age.followers.map(({ range, pct }, i) => (
                  <AudienceBar
                    key={range}
                    label={range}
                    pct={pct}
                    delay={0.1 * i}
                    color="var(--cyan)"
                  />
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="font-mono text-[9px] text-white/70 uppercase tracking-widest leading-relaxed">
                  Audiência predominante entre{" "}
                  <span className="text-white">18 e 34 anos</span> — alto poder
                  de engajamento e consumo.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Side Column — Geography */}
          <div className="lg:col-span-4 bg-lead/60 p-8 flex flex-col justify-between">
            <div>
              <SectionTitle>Top Cidades</SectionTitle>
              <div className="flex flex-col gap-5 mt-6 mb-12">
                {AUDIENCE.cities.followers
                  .slice(0, 5)
                  .map(({ city, pct }, i) => (
                    <AudienceBar
                      key={city}
                      label={city}
                      pct={pct}
                      delay={0.2 + 0.05 * i}
                      color="var(--acid)"
                    />
                  ))}
              </div>

              <SectionTitle>Alcance Global</SectionTitle>
              <div className="flex flex-col gap-3 mt-6">
                {AUDIENCE.countries.map(({ country, pct }) => (
                  <div
                    key={country}
                    className="flex items-center justify-between py-2 border-b border-white/5 group"
                  >
                    <span className="text-xs text-white/70 group-hover:text-white transition-colors duration-300 font-mono tracking-tighter">
                      {country}
                    </span>
                    <span className="font-display text-xl text-acid">
                      {pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 group cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-cyan/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative z-10 p-4 border border-cyan/20 bg-cyan/5 transition-colors duration-300 group-hover:border-cyan">
                <p className="font-mono text-[8px] text-cyan uppercase tracking-[3px] mb-1">
                  Engajamento Local
                </p>
                <p className="text-sm text-white font-medium italic">
                  "A maior força do humor regional com alcance nacional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
