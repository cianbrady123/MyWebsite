export const site = {
  name: 'Cian Brady',
  headline: 'Engineer · Musician',
  tagline:
    'Electrical engineering at UCD, robotics, research, and software, and self-produced music on Spotify.',
  engineering: {
    id: 'engineering',
    title: 'Engineering',
  },
  music: {
    id: 'music',
    title: 'Music',
    subtitle: 'Self-produced solo artist',
  },
  production: {
    id: 'production',
    title: 'Production · Mix · Master',
    headline: 'Bring your song from the ground up',
    pitch:
      'I work with artists who want a finished record. I can build your song from scratch and take it all the way through production, mixing, and mastering, or step in to finish a track you have already started.',
    services: ['Production', 'Mixing', 'Mastering'],
    portfolioTitle: 'Portfolio',
    portfolioEmpty:
      'Add tracks in src/data/tracks.ts and put MP3s in public/audio/.',
    ctaLabel: 'Start a project',
    contactEmail: 'cianjbrady@gmail.com',
    contactPhone: '+353868616359',
    contactPhoneDisplay: '+353 86 861 6359',
    pricing: [
      {
        id: 'full',
        label: 'Full track',
        current: '€75',
      },
      {
        id: 'demo',
        label: 'Demo',
        current: '€15',
      },
    ],
  },
  links: {
    github: 'https://github.com/cianbrady123',
    githubSource: 'https://github.com/cianbrady123/cianbrady123.github.io',
    spotify: 'https://open.spotify.com/artist/6y3hZBJ36gbwd9ACjWJYvL',
    linkedin: 'https://www.linkedin.com/in/cian-brady-2b798428b/',
  },
} as const
