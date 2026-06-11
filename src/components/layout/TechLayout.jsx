import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TechNavbar from './TechNavbar'
import TechFooter from './TechFooter'
import Loader from './Loader'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './ScrollProgress'
import '../../styles/tech.css'

export default function TechLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="tech-portal">
      <Loader />
      <ScrollProgress />
      <TechNavbar />
      <main id="main-content" className="flex-grow-1" style={{ paddingTop: '64px' }}>
        <Outlet />
      </main>
      <TechFooter />
      <ScrollToTop />
    </div>
  )
}
