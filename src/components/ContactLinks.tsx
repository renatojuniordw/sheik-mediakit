interface ContactLinkProps {
  href: string;
  label: string;
  sub: string;
  icon: string;
  description: string;
}

const ContactLink = ({ href, label, sub, icon, description }: ContactLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-6 p-6 border-b border-white/5 hover:bg-white/5 transition-all duration-300"
    aria-label={`${label}: ${sub}. ${description}`}
  >
    <div className="w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-cyan/10 border border-white/10 group-hover:border-cyan/50 transition-colors duration-300 text-2xl">
      {icon}
    </div>
    <div>
      <p className="font-mono text-[9px] tracking-[4px] uppercase text-white/60 group-hover:text-cyan transition-colors duration-300 mb-1">
        {label}
      </p>
      <p className="font-mono text-sm text-white group-hover:text-cyan transition-colors duration-300 font-bold">
        {sub}
      </p>
      <p className="text-xs text-white/55 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="ml-auto w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-acid group-hover:bg-acid transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
      <span className="text-black text-sm">→</span>
    </div>
  </a>
);

export const ContactLinks = () => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10">
    <ContactLink
      href="mailto:diegosheik.contato@gmail.com"
      label="E-mail Comercial"
      sub="diegosheik.contato@gmail.com"
      icon="✉️"
      description="Canal ideal para briefings, propostas comerciais e envio de materiais."
    />
    <ContactLink
      href="https://instagram.com/diegosheik_"
      label="Redes Sociais"
      sub="@diegosheik_"
      icon="📸"
      description="Perfil oficial para validar linguagem, audiencia e repertorio criativo."
    />
  </div>
);
