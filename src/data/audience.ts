import instagramData from '../../public/instagram.json'

export const AUDIENCE = {
  gender: {
    followers: instagramData.audience.gender.followers,
    views: { male: 78.4, female: 21.6 }, // Not provided in new screenshots, keep old or estimate? Let's keep old for views
  },
  age: {
    followers: instagramData.audience.age.followers,
    views: instagramData.audience.age.views,
  },
  cities: {
    followers: instagramData.audience.cities.followers,
    views: instagramData.audience.cities.views,
  },
  countries: instagramData.audience.countries,
  viewSources: [
    { source: 'Aba Reels', pct: 58.4 },
    { source: 'Stories',   pct: 20.7 },
    { source: 'Explorar',  pct: 9.2 },
    { source: 'Feed',      pct: 6.4 },
    { source: 'Perfil',    pct: 1.2 },
  ],
} as const
