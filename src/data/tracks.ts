/**
 * Add portfolio tracks here. Put audio files in public/audio/
 *
 * Example:
 * {
 *   id: 'track-slug',
 *   title: 'Song Title',
 *   artist: 'Artist Name',
 *   src: '/audio/track-slug.mp3',
 *   year: '2025',
 * }
 */
export type Track = {
  id: string
  title: string
  artist?: string
  src: string
  year?: string
}

export const tracks: Track[] = [
  {
    id: 'american-girl',
    title: 'American Girl',
    src: '/audio/American_Girl.mp3',
  },
  {
    id: 'cabin-in-the-woods',
    title: 'Cabin In The Woods',
    src: '/audio/CabinInTheWoods.mp3',
  },
  {
    id: 'adrenaline',
    title: 'Adrenaline',
    src: '/audio/ADRENALINE.wav',
  },
  {
    id: 'it-never-happened',
    title: 'It Never Happened',
    src: '/audio/it%20never%20happened.wav',
  },
]
