import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__headline">{site.headline}</p>
      <p className="hero__tagline">{site.tagline}</p>
      <div className="hero__actions">
        <a href={`#${site.engineering.id}`} className="hero__btn hero__btn--eng">
          Explore engineering
        </a>
        <a href={`#${site.music.id}`} className="hero__btn hero__btn--music">
          Listen to music
        </a>
        <a href={`#${site.production.id}`} className="hero__btn hero__btn--production">
          Hire me to produce
        </a>
      </div>
    </section>
  )
}
