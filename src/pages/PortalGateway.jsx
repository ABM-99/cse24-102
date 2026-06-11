import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HardHat, Cpu, ArrowRight } from 'lucide-react'
import '../styles/gateway.css'

export default function PortalGateway() {
  const navigate = useNavigate()
  const [loading] = useState(() => {
    const choice = sessionStorage.getItem('portal_choice')
    return choice === 'construction' || choice === 'technology'
  })

  useEffect(() => {
    const choice = sessionStorage.getItem('portal_choice')
    if (choice === 'construction') {
      navigate('/construction')
    } else if (choice === 'technology') {
      navigate('/technology')
    }
  }, [navigate])

  const selectPortal = (portal) => {
    sessionStorage.setItem('portal_choice', portal)
    navigate(`/${portal}`)
  }

  if (loading) {
    return (
      <div className="gateway-loading">
        <div className="gateway-spinner"></div>
      </div>
    )
  }

  return (
    <div className="gateway-container">
      {/* Huge Watermark Logo in Background */}
      <div className="gateway-watermark">
        <img src="/tech/logo.png" alt="Watermark" />
      </div>

      <div className="gateway-content">
        <div className="gateway-header" data-aos="fade-down">
          <img src="/tech/logo.png" alt="First Minds Logo" className="gateway-logo" />
          <h1 className="gateway-title">FIRST MINDS</h1>
          <p className="gateway-subtitle">
            One Brand. Endless Innovation. Select a portal to begin your journey.
          </p>
        </div>

        <div className="gateway-cards">
          {/* Construction Portal Card */}
          <div 
            className="gateway-card construction" 
            onClick={() => selectPortal('construction')}
            data-aos="fade-right"
          >
            <div className="gateway-card-glow"></div>
            <div className="gateway-card-icon">
              <HardHat size={36} />
            </div>
            <h2>First Minds Construction</h2>
            <p>
              Premium architectural design, turnkey residential & commercial construction, 
              renovation, landscape design, and property maintenance in Botswana.
            </p>
            <span className="gateway-card-btn">
              Enter Portal <ArrowRight size={16} />
            </span>
          </div>

          {/* Technology Portal Card */}
          <div 
            className="gateway-card technology" 
            onClick={() => selectPortal('technology')}
            data-aos="fade-left"
          >
            <div className="gateway-card-glow"></div>
            <div className="gateway-card-icon">
              <Cpu size={36} />
            </div>
            <h2>First Minds Technologies</h2>
            <p>
              AI-native intelligence platform. Connect databases, generate dashboards 
              with simple prompts, ask natural language queries, and automate your insights.
            </p>
            <span className="gateway-card-btn">
              Enter Portal <ArrowRight size={16} />
            </span>
          </div>
        </div>

        <div className="gateway-footer">
          <p>© {new Date().getFullYear()} First Minds (PTY) LTD. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
