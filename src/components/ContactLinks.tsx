interface ContactLinkProps {
  href: string
  label: string
  sub: string
  icon: string
}

const ContactLink = ({ href, label, sub, icon }: ContactLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-6 p-6 border-b border-white/5 hover:bg-white/5 transition-all duration-300"
    aria-label={`${label}: ${sub}`}
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
    </div>
    <div className="ml-auto w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-acid group-hover:bg-acid transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
      <span className="text-black text-sm">→</span>
    </div>
  </a>
)

export const ContactLinks = () => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10">
    <ContactLink
      href="mailto:diegosheik.contato@gmail.com"
      label="Business Email"
      sub="diegosheik.contato@gmail.com"
      icon="✉️"
    />
    <ContactLink
      href="https://wa.me/5581999591979"
      label="Direct Line"
      sub="(81) 99959-1979"
      icon="💬"
    />
    <ContactLink
      href="https://instagram.com/diegosheik_"
      label="Social Media"
      sub="@diegosheik_"
      icon="📸"
    />
  </div>
)
