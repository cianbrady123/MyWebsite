import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        {site.name}
      </Link>
      <nav className="header__nav" aria-label="Main">
        {isHome ? (
          <>
            <a href={`#${site.engineering.id}`} data-theme="engineering">
              Engineering
            </a>
            <a href={`#${site.music.id}`} data-theme="music">
              Music
            </a>
            <a href={`#${site.production.id}`} data-theme="music">
              Production
            </a>
          </>
        ) : (
          <Link to="/">Home</Link>
        )}
        <Link to="/cv" className={pathname === '/cv' ? 'active' : undefined}>
          CV
        </Link>
      </nav>
    </header>
  )
}
