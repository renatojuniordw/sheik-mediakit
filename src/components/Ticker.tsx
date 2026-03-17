const TICKER_ITEMS = [
  '15,7 MILHÕES DE VIEWS',
  '616K COMPARTILHAMENTOS',
  '5,3M CONTAS ALCANÇADAS',
  '94% NÃO SEGUIDORES',
  '38K SEGUIDORES',
  '+26% CRESCIMENTO',
  'RECIFE PARA O BRASIL',
]

export const Ticker = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="overflow-hidden w-full"
      style={{ backgroundColor: 'var(--cyan)', borderTop: '1px solid rgba(0,0,0,0.1)' }}
      aria-hidden="true"
    >
      <div className="ticker-track py-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-4"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              letterSpacing: '3px',
              fontSize: '14px',
              color: 'var(--black)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ color: 'rgba(0,0,0,0.4)', fontSize: '8px' }}>●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
