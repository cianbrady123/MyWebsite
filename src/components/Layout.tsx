import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <Header />
      <main className={isHome ? undefined : 'page-main page-main--detail'}>
        <Outlet />
      </main>
      {!isHome && <Footer />}
    </>
  )
}
