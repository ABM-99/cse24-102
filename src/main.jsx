import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

// Core design tokens + global reset — MUST be first
import './styles/index.css'

// Bootstrap layout utilities (grid, flexbox) — kept for stability
// Bootstrap's color tokens are overridden by our CSS variables
import 'bootstrap/dist/css/bootstrap.min.css'

// Page-specific styles
import './styles/navbar.css'
import './styles/footer.css'
import './styles/home.css'
import './styles/about.css'
import './styles/tech.css'
import './styles/portfolio.css'
import './styles/contact.css'

// Shared component styles
import './styles/components.css'
import './styles/animations.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
