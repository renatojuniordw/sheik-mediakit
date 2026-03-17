export const AUDIENCE = {
  gender: {
    followers: { male: 59.7, female: 40.3 },
    views: { male: 78.4, female: 21.6 },
  },
  age: {
    followers: [
      { range: '25–34', pct: 41.7 },
      { range: '18–24', pct: 25.6 },
      { range: '35–44', pct: 15.5 },
      { range: '13–17', pct: 9.7 },
      { range: '45–54', pct: 5.3 },
      { range: '55–64', pct: 1.4 },
      { range: '65+',   pct: 0.7 },
    ],
    views: [
      { range: '25–34', pct: 38.9 },
      { range: '18–24', pct: 29.0 },
      { range: '35–44', pct: 14.4 },
      { range: '13–17', pct: 12.2 },
    ],
  },
  cities: {
    followers: [
      { city: 'Recife',                   pct: 16.1 },
      { city: 'Jaboatão dos Guararapes',  pct: 5.6 },
      { city: 'Olinda',                   pct: 3.5 },
      { city: 'Paulista (PE)',             pct: 3.3 },
      { city: 'São Paulo',                pct: 2.7 },
    ],
    views: [
      { city: 'São Paulo',               pct: 4.6 },
      { city: 'Recife',                  pct: 4.0 },
      { city: 'Jaboatão dos Guararapes', pct: 1.8 },
      { city: 'Rio de Janeiro',          pct: 1.8 },
    ],
  },
  countries: [
    { country: '🇧🇷 Brasil',    pct: 94.8 },
    { country: '🇵🇹 Portugal',  pct: 2.1 },
    { country: '🇺🇸 EUA',       pct: 0.4 },
    { country: '🇦🇷 Argentina', pct: 0.3 },
  ],
  viewSources: [
    { source: 'Aba Reels', pct: 58.4 },
    { source: 'Stories',   pct: 20.7 },
    { source: 'Explorar',  pct: 9.2 },
    { source: 'Feed',      pct: 6.4 },
    { source: 'Perfil',    pct: 1.2 },
  ],
} as const
