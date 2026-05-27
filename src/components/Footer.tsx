import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__links" aria-label="Footer">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.links.spotify} target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <Link to="/cv">CV</Link>
        </nav>
        <p className="footer__meta">
          © {year} {site.name} ·{' '}
          <a href={site.links.githubSource} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </p>
      </div>
    </footer>
  )
}
