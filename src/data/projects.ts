export type Project = {
  id: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  href: string
  external?: boolean
  category: 'engineering' | 'music'
}

export const engineeringProjects: Project[] = [
  {
    id: 'certchamps',
    title: 'CertChamps',
    description:
      'Co-founder of a Leaving Cert platform designed to make practicing questions as trivial as possible.',
    image: '/images/certchamps/CertChamps.png',
    imageAlt: 'CertChamps Logo',
    href: '/projects/certchamps',
    category: 'engineering',
  },
  {
    id: 'cleaner-grid',
    title: 'Cleaner Grid 2026',
    description:
      "Won third place in EirGrid's Cleaner Grid 2026 competition taking home a €3,000 prize.",
    image: '/images/cleanergrid/aurafarm.png',
    imageAlt: 'Cleaner Grid, Aura Farm',
    href: '/projects/cleaner-grid',
    category: 'engineering',
  },
  {
    id: 'hongkong',
    title: 'CUHK, Research',
    description:
      'Research program at CUHK Hong Kong where I worked on an MRI-compatible soft robotic catheter.',
    image: '/images/hongkong/finished_design.jpg',
    imageAlt: 'Hong Kong research',
    href: '/projects/hongkong',
    category: 'engineering',
  },
  {
    id: 'portababe',
    title: 'Porta-Babe-V1',
    description: 'A WiFi-connected teddy bear: ESP32, Firebase, and a lot of soldering.',
    image: '/images/portababe/finished.jpeg',
    imageAlt: 'Porta-Babe V1',
    href: '/projects/portababe',
    category: 'engineering',
  },
]

export const musicProjects: Project[] = [
  {
    id: 'spotify',
    title: 'Spotify',
    description: 'Fully self-produced solo artist. Latest release: EPOCH.',
    image: '/images/spotify/EPOCH.jpg',
    imageAlt: 'Spotify, EPOCH',
    href: 'https://open.spotify.com/artist/6y3hZBJ36gbwd9ACjWJYvL',
    external: true,
    category: 'music',
  },
]
