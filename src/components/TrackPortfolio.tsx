import { useState } from 'react'
import type { Track } from '../data/tracks'
import { tracks } from '../data/tracks'
import { site } from '../data/site'
import TrackWaveform from './TrackWaveform'

type Props = {
  items?: Track[]
}

export default function TrackPortfolio({ items = tracks }: Props) {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const hasTracks = items.length > 0

  return (
    <div className="track-portfolio">
      <h3 className="track-portfolio__title">{site.production.portfolioTitle}</h3>

      {hasTracks ? (
        <ul className="track-list">
          {items.map((track) => (
            <li key={track.id}>
              <TrackWaveform
                track={track}
                isActive={playingId === track.id}
                onActivate={() => setPlayingId(track.id)}
                onDeactivate={() => setPlayingId(null)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="track-portfolio__empty">{site.production.portfolioEmpty}</p>
      )}
    </div>
  )
}
