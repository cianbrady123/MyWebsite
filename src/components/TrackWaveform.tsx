import { useEffect, useId, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import type { Track } from '../data/tracks'

const WAVE_COLOR = 'rgba(196, 125, 40, 0.35)'
const PROGRESS_COLOR = '#c47d28'
const CURSOR_COLOR = '#a86820'

type Props = {
  track: Track
  isActive: boolean
  onActivate: () => void
  onDeactivate: () => void
}

export default function TrackWaveform({
  track,
  isActive,
  onActivate,
  onDeactivate,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wsRef = useRef<WaveSurfer | null>(null)
  const onActivateRef = useRef(onActivate)
  const onDeactivateRef = useRef(onDeactivate)
  const labelId = useId()
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)

  onActivateRef.current = onActivate
  onDeactivateRef.current = onDeactivate

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ws = WaveSurfer.create({
      container,
      url: track.src,
      height: 48,
      waveColor: WAVE_COLOR,
      progressColor: PROGRESS_COLOR,
      cursorColor: CURSOR_COLOR,
      cursorWidth: 2,
      barWidth: 2,
      barGap: 1,
      barRadius: 2,
      normalize: true,
      interact: true,
      dragToSeek: true,
    })

    wsRef.current = ws

    ws.on('ready', () => setReady(true))
    ws.on('play', () => {
      setPlaying(true)
      onActivateRef.current()
    })
    ws.on('pause', () => setPlaying(false))
    ws.on('finish', () => {
      setPlaying(false)
      onDeactivateRef.current()
    })
    ws.on('interaction', () => {
      onActivateRef.current()
    })

    return () => {
      ws.destroy()
      wsRef.current = null
      setReady(false)
      setPlaying(false)
    }
  }, [track.src])

  useEffect(() => {
    if (!isActive && playing) {
      wsRef.current?.pause()
    }
  }, [isActive, playing])

  const togglePlay = async () => {
    const ws = wsRef.current
    if (!ws || !ready) return

    if (playing) {
      ws.pause()
      onDeactivateRef.current()
      return
    }

    onActivateRef.current()
    try {
      await ws.play()
    } catch {
      onDeactivateRef.current()
    }
  }

  return (
    <article className="track-player">
      <div className="track-player__meta">
        <p className="track-player__title" id={labelId}>
          {track.title}
          {track.artist && <span className="track-player__artist"> · {track.artist}</span>}
          {track.year && <span className="track-player__year"> · {track.year}</span>}
        </p>
      </div>

      <div className={`track-player__controls${playing ? ' is-playing' : ''}`}>
        <button
          type="button"
          className="track-player__play"
          onClick={togglePlay}
          disabled={!ready}
          aria-labelledby={labelId}
          aria-pressed={playing}
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <div
          ref={containerRef}
          className="track-player__wave"
          role="group"
          aria-label={`${track.title} waveform`}
        />
        {!ready && <span className="track-player__loading">Loading…</span>}
      </div>
    </article>
  )
}
