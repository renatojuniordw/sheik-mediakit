import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        black: '#0A0A0C',
        white: '#F8FAFC',
        cyan: '#00F0FF',
        acid: '#CCFF00',
        lead: '#1A1A1E',
        'gray-1': '#121214',
        'gray-2': '#1E1E22',
        'gray-3': '#2D2D35',
        border: '#2A2A30',
        muted: '#8E9196',
      },
    },
  },
  plugins: [],
} satisfies Config
