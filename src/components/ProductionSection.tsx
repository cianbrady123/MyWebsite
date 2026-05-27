import { useState } from 'react'
import { site } from '../data/site'
import TrackPortfolio from './TrackPortfolio'

export default function ProductionSection() {
  const { production } = site
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <section id={production.id} className="section section--production">
      <div className="section__inner">
        <div className="production-panel">
          <div className="production-panel__pitch">
            <h2 className="production-panel__title">{production.title}</h2>
            <p className="production-panel__headline">{production.headline}</p>
            <p className="production-panel__text">{production.pitch}</p>
            <ul className="production-services">
              {production.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <div className="production-panel__cta-row">
              <div
                className={`production-panel__cta-block${contactOpen ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="production-panel__cta"
                  onClick={() => setContactOpen((open) => !open)}
                  aria-expanded={contactOpen}
                  aria-controls="production-contact"
                >
                  {production.ctaLabel}
                </button>
                <div className="production-panel__contact-reveal">
                  <div id="production-contact" className="production-panel__contact-details">
                    <a href={`mailto:${production.contactEmail}`}>
                      {production.contactEmail}
                    </a>
                    <a href={`tel:${production.contactPhone}`}>
                      {production.contactPhoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
              <div className="production-panel__pricing">
                <div className="production-panel__price-tiers">
                  {production.pricing.map((tier) => (
                    <div key={tier.id} className="production-panel__price">
                      <span className="production-panel__price-label">{tier.label}</span>
                      <span className="production-panel__price-amounts">
                        <span className="production-panel__price-current">{tier.current}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <TrackPortfolio />
        </div>
      </div>
    </section>
  )
}
