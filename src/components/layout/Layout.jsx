import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
