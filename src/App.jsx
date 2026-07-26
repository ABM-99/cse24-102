import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TechnologyPage from './pages/TechnologyPage'
import ConstructionPage from './pages/ConstructionPage'
import ContactPage from './pages/ContactPage'

// PortalGateway.jsx has been retired — the split-portal architecture is replaced
// by a unified single-brand shell. All routes share one Layout, Navbar, and Footer.
// TechLayout, TechNavbar, and TechFooter have been removed from active routing.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"             element={<HomePage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/technology"   element={<TechnologyPage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/contact"      element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
