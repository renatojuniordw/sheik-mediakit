import { useState } from "react";
import { useScrollSnap } from "../hooks/useScrollSnap";

interface NavProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: "sobre", label: "Sobre" },
  { id: "numeros", label: "Números" },
  { id: "audiencia", label: "Audiência" },
  { id: "formatos", label: "Formatos" },
  { id: "cases", label: "Cases" },
];

export const Nav = ({ activeSection }: NavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo } = useScrollSnap();

  const handleNav = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Navegação principal"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(8,8,8,0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNav("hero")}
          className="focus:outline-none"
          aria-label="Ir para o início"
        >
          <span
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "22px",
              letterSpacing: "3px",
              color: "var(--cyan)",
            }}
          >
            DIEGOSHEIK_
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              onMouseEnter={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.color = 'var(--cyan)'
                  const bar = e.currentTarget.querySelector('.nav-bar') as HTMLElement
                  if (bar) bar.style.transform = 'scaleX(1)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.80)'
                  const bar = e.currentTarget.querySelector('.nav-bar') as HTMLElement
                  if (bar) bar.style.transform = 'scaleX(0)'
                }
              }}
              className="relative font-mono text-[10px] tracking-[2px] uppercase pb-1 transition-colors duration-200"
              style={{
                color: activeSection === id ? 'var(--cyan)' : 'rgba(255,255,255,0.80)',
              }}
            >
              {label}
              <span
                className="nav-bar absolute bottom-0 left-0 w-full h-px bg-cyan origin-left transition-transform duration-300"
                style={{
                  transform: activeSection === id ? 'scaleX(1)' : 'scaleX(0)',
                  boxShadow: '0 0 6px var(--cyan)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNav("contato")}
          className="hidden md:block transition-all duration-200 px-5 py-2 font-mono text-[10px] tracking-[2px] uppercase text-acid border border-acid/60  hover:text-white"
          aria-label="Fechar parceria — ir para contato"
        >
          Fechar Parceria →
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-200"
              style={{
                backgroundColor: "var(--white)",
                transformOrigin: "center",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translateY(6px)"
                    : menuOpen && i === 1
                      ? "scaleX(0)"
                      : menuOpen && i === 2
                        ? "rotate(-45deg) translateY(-6px)"
                        : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`text-left px-6 py-4 transition-all duration-300 font-mono text-[11px] tracking-[2px] uppercase border-b border-white/5 ${
                activeSection === id
                  ? "text-cyan"
                  : "text-white hover:text-cyan"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contato")}
            className="mx-6 my-4 px-5 py-3 font-mono text-[11px] tracking-[2px] uppercase text-black bg-acid"
            aria-label="Fechar parceria"
          >
            Fechar Parceria →
          </button>
        </div>
      )}
    </nav>
  );
};
