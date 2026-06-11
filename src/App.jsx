import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import TechLayout from './components/layout/TechLayout'
import PortalGateway from './pages/PortalGateway'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import TechHomePage from './pages/technology/TechHomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portal Gateway Page (Landing Selector) */}
        <Route path="/" element={<PortalGateway />} />

        {/* Construction Sector Portal Routes */}
        <Route path="/construction" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Technology Sector Portal Routes */}
        <Route path="/technology" element={<TechLayout />}>
          <Route index element={<TechHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
