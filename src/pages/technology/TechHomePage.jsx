import { useEffect, useState } from 'react'
import AOS from 'aos'
import { ArrowRight, Sparkles, Check } from 'lucide-react'

export default function TechHomePage() {
  const [activeFaq, setActiveFaq] = useState(null)
  const [chatStep, setChatStep] = useState(0)

  useEffect(() => {
    document.title = 'Technologies | First Minds'
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const handleNextChatStep = () => {
    if (chatStep < 2) {
      setChatStep(chatStep + 1)
    } else {
      setChatStep(0)
    }
  }

  const faqs = [
    {
      q: 'What is an AI-native intelligence platform?',
      a: 'An AI-native intelligence platform is built from the ground up with artificial intelligence at its core. Unlike traditional BI tools that bolt on AI features, First Minds uses AI to understand your data schema, generate insights, and provide natural language interfaces for data exploration.'
    },
    {
      q: 'How is First Minds different from traditional BI tools?',
      a: 'Traditional BI tools require extensive setup, manual query writing, and technical expertise. First Minds uses AI to automate these processes, allowing anyone to get insights from data using natural language. Our AI understands context, learns from your data, and provides actionable recommendations.'
    },
    {
      q: 'How is First Minds different from AI tools like ChatGPT?',
      a: 'While general AI tools are useful for brainstorming, First Minds is purpose-built for production analytics. We connect directly to your real data stack, understand your database schema and metric definitions, and return answers grounded in governed sources with enterprise-grade security.'
    },
    {
      q: 'What data sources does First Minds support?',
      a: 'First Minds supports 750+ integrations across databases, warehouses, and SaaS tools, including PostgreSQL, MySQL, Snowflake, BigQuery, Salesforce, HubSpot, Stripe, and Google Analytics. Teams can connect their existing stack directly.'
    },
    {
      q: 'How does First Minds prevent hallucinations and ensure accuracy?',
      a: 'First Minds translates natural language into structured queries that are validated and executed directly against your connected databases. Responses are grounded in your actual schema and governed metric definitions. Generated queries can be reviewed, traced, and re-run for verification.'
    },
    {
      q: 'Is First Minds secure for production and enterprise use?',
      a: 'First Minds is designed for enterprise environments with SOC 2 Type II compliance, encryption in transit and at rest, and strict data access boundaries. Customer data is never used to train models. We offer role-based access controls and self-hosted deployment options.'
    }
  ]

  const integrations = [
    { name: 'PostgreSQL', char: 'P', color: '#3b82f6' },
    { name: 'MySQL', char: 'M', color: '#f97316' },
    { name: 'Snowflake', char: 'S', color: '#06b6d4' },
    { name: 'BigQuery', char: 'B', color: '#2563eb' },
    { name: 'Salesforce', char: 'S', color: '#0ea5e9' },
    { name: 'HubSpot', char: 'H', color: '#fb923c' },
    { name: 'Stripe', char: 'S', color: '#a855f7' },
    { name: 'MongoDB', char: 'M', color: '#22c55e' },
    { name: 'Redis', char: 'R', color: '#ef4444' },
    { name: 'Elasticsearch', char: 'E', color: '#eab308' },
    { name: 'Kafka', char: 'K', color: '#6366f1' },
    { name: 'Airflow', char: 'A', color: '#14b8a6' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="tech-hero">
        <div className="tech-hero-video-bg">
          <video autoplay="" muted="" loop="" playsinline="" preload="auto">
            <source src="/tech/ai video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="tech-hero-content">
          <a href="#" className="tech-hero-badge" data-aos="fade-down">
            <span className="tech-badge-dot"></span>
            New: First Minds Autopilot
            <ArrowRight size={12} />
          </a>

          <h1 className="display-4 fw-bold" data-aos="fade-up" data-aos-delay="100">
            {"AI-Native Intelligence".split("").map((char, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${index * 0.03}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="tech-hero-sub" data-aos="fade-up" data-aos-delay="300">
            Build insights, dashboards, and predictions in seconds using all your data.
          </p>

          <div className="tech-hero-ctas" data-aos="fade-up" data-aos-delay="400">
            <a href="#" className="btn-tech btn-tech-primary btn-tech-lg">
              Start free <ArrowRight size={14} />
            </a>
            <a href="#" className="btn-tech btn-tech-outline btn-tech-lg">Book a demo</a>
          </div>
        </div>

        <div className="tech-scroll-cue">
          <div className="tech-scroll-mouse">
            <div className="tech-scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="tech-trusted">
        <div className="container">
          <div className="tech-trusted-label" data-aos="fade-up">Trusted by 100+ teams to ship insights fast</div>
          <div className="tech-trusted-logos" data-aos="fade-up" data-aos-delay="100">
            <span className="tech-t-logo">Acme Corp</span>
            <span className="tech-t-logo">TechFlow</span>
            <span className="tech-t-logo">DataSync</span>
            <span className="tech-t-logo">CloudBase</span>
            <span className="tech-t-logo">NeuralX</span>
            <span className="tech-t-logo">Quantum</span>
            <span className="tech-t-logo">Vertex</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="tech-testimonials">
        <div className="container">
          <div className="tech-testi-grid">
            <div className="tech-testi-card" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="tech-testi-head">
                  <div className="tech-testi-avatar">CG</div>
                  <div>
                    <div className="tech-testi-name">Claudio Godoy</div>
                    <div className="tech-testi-role">AI Agents Lead · TechFlow</div>
                  </div>
                </div>
                <p className="tech-testi-quote">"Before First Minds, reports could take weeks of back and forth. Now, they can be ready in hours."</p>
              </div>
              <a href="#" className="tech-case-link">
                Read case study <ArrowRight size={14} />
              </a>
            </div>

            <div className="tech-testi-card" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="tech-testi-head">
                  <div className="tech-testi-avatar">SC</div>
                  <div>
                    <div className="tech-testi-name">Sarah Chen</div>
                    <div className="tech-testi-role">Founder · DataSync</div>
                  </div>
                </div>
                <p className="tech-testi-quote">"First Minds is the first tool that writes and runs queries, catches its own errors, self-corrects, and genuinely nails it."</p>
              </div>
              <a href="#" className="tech-case-link">
                Read case study <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="tech-features" id="features">
        <div className="container">
          
          {/* Feature 1: Dashboards */}
          <div className="tech-feature-block" data-aos="fade-up">
            <div className="tech-feature-text">
              <h2 className="tech-feature-title">Create dashboards with a prompt</h2>
              <p className="tech-feature-desc">Describe what you want to track and let First Minds generate a custom dashboard for you in minutes.</p>
            </div>
            <div className="tech-feature-visual">
              <div className="tech-fv-bar">
                <div className="tech-fv-dots">
                  <div className="tech-fv-dot" style={{ background: '#ef4444' }}></div>
                  <div className="tech-fv-dot" style={{ background: '#eab308' }}></div>
                  <div className="tech-fv-dot" style={{ background: '#22c55e' }}></div>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--tech-text3)', marginLeft: '8px', fontWeight: 500 }}>Live Dashboard</span>
              </div>
              <div className="tech-fv-body">
                <div className="tech-dashboard-grid">
                  <div className="tech-dash-card">
                    <div className="tech-dash-label">Revenue</div>
                    <div className="tech-dash-value">$28.3K</div>
                    <div className="tech-dash-change positive">+68% ($16,800)</div>
                  </div>
                  <div className="tech-dash-card">
                    <div className="tech-dash-label">New Subscriptions</div>
                    <div className="tech-dash-value">508</div>
                    <div className="tech-dash-change positive">+189% (+176)</div>
                  </div>
                  <div className="tech-dash-card">
                    <div className="tech-dash-label">CAC</div>
                    <div className="tech-dash-value">$42.50</div>
                    <div className="tech-dash-change">Customer Acquisition</div>
                  </div>
                  <div className="tech-dash-card">
                    <div className="tech-dash-label">Burnrate</div>
                    <div className="tech-dash-value">$32.5K</div>
                    <div className="tech-dash-change negative">-12% vs last month</div>
                  </div>
                </div>
                <div className="tech-prompt-bar">
                  <div className="tech-prompt-dot"></div>
                  <span className="tech-prompt-text">Generate a dashboard showing our core growth KPIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Interactive AI Chat */}
          <div className="tech-feature-block" data-aos="fade-up">
            <div className="tech-feature-text">
              <h2 className="tech-feature-title">Ask anything about your business</h2>
              <p className="tech-feature-desc">Get instant answers, uncover important trends, and make confident decisions faster.</p>
            </div>
            <div className="tech-feature-visual">
              <div className="tech-fv-bar d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="tech-fv-dots">
                    <div className="tech-fv-dot" style={{ background: '#ef4444' }}></div>
                    <div className="tech-fv-dot" style={{ background: '#eab308' }}></div>
                    <div className="tech-fv-dot" style={{ background: '#22c55e' }}></div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--tech-text3)', marginLeft: '8px', fontWeight: 500 }}>First Minds AI</span>
                </div>
                <button 
                  onClick={handleNextChatStep} 
                  className="btn-tech btn-tech-outline" 
                  style={{ padding: '4px 10px', fontSize: '11px', borderRadius: '4px' }}
                >
                  Click to Interact
                </button>
              </div>
              <div className="tech-fv-body">
                <div className="tech-chat-mock">
                  {chatStep >= 0 && (
                    <div className="tech-chat-bubble user" data-aos="fade-left">
                      What were our top growth trends this week?
                    </div>
                  )}
                  {chatStep >= 1 && (
                    <div className="tech-chat-bubble ai" data-aos="fade-right">
                      <strong style={{ color: 'var(--tech-text)' }}><Sparkles size={14} className="me-1 inline" style={{ display: 'inline-block', verticalAlign: 'middle', color: '#c4b5fd' }} /> Top trends this week:</strong>
                      <ul className="mt-2" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li className="d-flex align-items-center gap-2 mb-1"><Check size={14} style={{ color: '#22c55e' }} /> Revenue up 18% vs last week</li>
                        <li className="d-flex align-items-center gap-2 mb-1"><Check size={14} style={{ color: '#22c55e' }} /> New subscriptions: +42 users</li>
                        <li className="d-flex align-items-center gap-2 mb-1"><Check size={14} style={{ color: '#22c55e' }} /> Churn rate decreased to 2.1%</li>
                      </ul>
                      <p className="mt-2 mb-0">Would you like me to generate a live dashboard for these trends?</p>
                    </div>
                  )}
                  {chatStep >= 2 && (
                    <>
                      <div className="tech-chat-bubble user" data-aos="fade-left">
                        Yes, create it
                      </div>
                      <div className="tech-chat-success" data-aos="fade-up">
                        <Check size={14} /> Dashboard created successfully
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Integrations Section */}
      <section className="tech-integrations">
        <div className="container">
          <div className="tech-int-header" data-aos="fade-up">
            <h2 className="tech-int-title">All your data in one place</h2>
            <p className="tech-int-desc">Connect your own database, or use First Minds Warehouse to aggregate and query your business insights.</p>
            <a href="#" className="tech-int-btn">See all 750+ integrations</a>
          </div>
          <div className="tech-int-grid animate-fade-in" data-aos="fade-up" data-aos-delay="100">
            {integrations.map((int, i) => (
              <div className="tech-int-card" key={i}>
                <div className="tech-int-icon" style={{ backgroundColor: int.color }}>{int.char}</div>
                <span>{int.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="tech-faq" id="faq">
        <div className="container">
          <h2 className="tech-faq-title" data-aos="fade-up">FAQ</h2>
          <div className="tech-faq-list" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, i) => (
              <div key={i} className={`tech-faq-item ${activeFaq === i ? 'open' : ''}`}>
                <button className="tech-faq-q" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <svg 
                    className="tech-faq-chevron" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div className="tech-faq-ans" style={{ maxHeight: activeFaq === i ? '200px' : '0' }}>
                  <div className="tech-faq-ans-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tech-cta">
        <div className="container">
          <h2 className="tech-cta-title" data-aos="fade-up">Get started in under 30 minutes</h2>
          <p className="tech-cta-desc" data-aos="fade-up" data-aos-delay="100">We can help you migrate your data and dashboards from any other tool.</p>
          <div className="tech-hero-ctas" data-aos="fade-up" data-aos-delay="200">
            <a href="#" className="btn-tech btn-tech-primary btn-tech-lg">
              Start free <ArrowRight size={14} />
            </a>
            <a href="#" className="btn-tech btn-tech-outline btn-tech-lg">Book a demo</a>
          </div>
        </div>
      </section>
    </>
  )
}
