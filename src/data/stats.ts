import instagramData from '../../public/instagram.json'

export const STATS = {
  views: instagramData.insights.views_30d,
  interactions: instagramData.insights.interactions_30d,
  accountsReached: instagramData.insights.accounts_reached_30d,
  shares: '539K', // Approximate from 539,125
  followers: instagramData.profile.followers.toLocaleString('pt-BR'),
  newFollowers: instagramData.profile.followers_growth_30d.toLocaleString('pt-BR'),
  growth: '+24,0%', // From image
  profileVisits: '41.305',
  reposts: '68.331',
  saves: '39.490',
  comments: '13.297',
  likes: '1.27MI',
  nonFollowerInteractions: instagramData.insights.non_followers_interactions,
  nonFollowerViews: instagramData.insights.non_followers_views,
  reelsInteractionShare: '99,9%',
  period: '28 Mar – 26 Abr 2026',
} as const
