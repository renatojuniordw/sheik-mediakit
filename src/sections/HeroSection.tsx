import { motion } from "framer-motion";
import { useScrollSnap } from "../hooks/useScrollSnap";

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const fadeUp = (delay: number) =>
  prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay },
      };

export const HeroSection = () => {
  const { scrollTo } = useScrollSnap();

  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/*
          VIDEO_PLACEHOLDER
          Substituir este bloco (<img> + overlay) pelo vídeo de fundo:

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/assets/diego-hero.jpg"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        */}
        <img
          src="/assets/diego-hero.jpg"
          alt="Diego Sheik em foto de apresentacao do midia kit"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.70)" }}
        />
        {/* Decorative ghost text */}
        <span
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "clamp(120px, 22vw, 260px)",
            color: "var(--white)",
            opacity: 0.03,
            letterSpacing: "8px",
          }}
          aria-hidden="true"
        >
          SHEIK
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 text-center pt-20">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-3 mb-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <span
            className="dot-pulse w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] tracking-[4px] uppercase text-white/80">
            Criador de Conteúdo · Recife-PE
          </span>
        </motion.div>

        {/* Big Typography Hero */}
        <div className="relative mb-6">
          {/* Decorative Ghost Text */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 font-display text-[25vw] leading-none select-none pointer-events-none text-white whitespace-nowrap"
          >
            SHEIK
          </motion.span>

          <div className="relative z-10">
            <motion.h1
              id="hero-title"
              {...fadeUp(0.2)}
              className="font-display text-[clamp(60px,12vw,160px)] leading-[0.85] tracking-tighter text-white"
            >
              DIEGO
              <br />
              <span
                className="text-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                SHEIK
              </span>
            </motion.h1>
            <motion.p
              {...fadeUp(0.3)}
              className="font-mono text-[10px] tracking-[4px] uppercase text-white/65 mt-3"
            >
              Midia kit oficial para publicidade, Reels patrocinados e campanhas
              com marcas
            </motion.p>
          </div>
        </div>

        {/* Description */}
        <motion.div
          {...fadeUp(0.45)}
          className="max-w-2xl bg-black/40 border border-white/5 p-5 backdrop-blur-md relative overflow-hidden group"
        >
          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-acid/50 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-acid" />

          <p className="text-lg md:text-xl text-white font-medium leading-tight">
            "As melhores respostas para as{" "}
            <span className="text-acid italic">piores</span> perguntas."
          </p>
          <p className="text-sm text-white/65 mt-2 font-mono tracking-tight uppercase">
            Criador de conteudo de humor em Recife-PE com 15,7 milhoes de views
            no periodo analisado
          </p>
          <p className="text-sm text-white/70 mt-3 leading-relaxed">
            Diego Sheik conecta humor regional, linguagem popular e alta taxa
            de compartilhamento para campanhas com marcas que buscam alcance
            organico e lembranca de mensagem.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <button
            onClick={() => scrollTo("contato")}
            className="group relative px-8 py-4 font-mono text-xs tracking-widest uppercase font-bold transition-all duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--cyan)", color: "#ffffff" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = "#ffffff";
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Fechar Parceria{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </span>
            <div className="absolute inset-0 bg-black/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>

          <button
            onClick={() => scrollTo("numeros")}
            className="group px-8 py-4 border border-white/40 text-white font-mono text-xs tracking-widest uppercase transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--acid)";
              e.currentTarget.style.color = "var(--acid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Ver Métricas →
          </button>
        </motion.div>
      </div>

      {/* Ticker — absolute bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <Ticker />
      </div> */}
    </section>
  );
};
