import { Helmet } from 'react-helmet-async'
import { Brain, Code2, Zap, Radio, MessageSquare, BarChart3, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import Button from '../components/shared/Button'
import CTASection from '../components/shared/CTASection'

// PLACEHOLDER service data — replace descriptions, features, and icons with real content
const TECH_SERVICES = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Custom AI models, machine learning pipelines, and intelligent automation tailored to your business processes.',
    features: ['Predictive analytics', 'Natural language processing', 'Computer vision'],
    division: 'technology'
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'End-to-end software engineering — from web and mobile applications to enterprise platforms and APIs.',
    features: ['Web & mobile apps', 'API development', 'Cloud-native architecture'],
    division: 'technology'
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Workflow automation that eliminates manual effort, reduces errors, and frees your team to focus on what matters.',
    features: ['Process mapping', 'RPA integration', 'Document automation'],
    division: 'technology'
  },
  {
    icon: Radio,
    title: 'IoT Solutions',
    description: 'Connected device ecosystems for smart monitoring, asset tracking, and real-time operational intelligence.',
    features: ['Sensor networks', 'Real-time dashboards', 'Predictive maintenance'],
    division: 'technology'
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with custom dashboards, reporting tools, and data engineering.',
    features: ['Business intelligence', 'Data pipelines', 'Interactive dashboards'],
    division: 'technology'
  },
  {
    icon: MessageSquare,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help you make the right decisions — from infrastructure to digital transformation.',
    features: ['Technology strategy', 'System integration', 'Digital roadmaps'],
    division: 'technology'
  },
]

const WHY_TECH = [
  { title: 'Integrated Approach', desc: 'We understand both technology and physical infrastructure, giving us unique insight into end-to-end solutions.' },
  { title: 'Built for Botswana', desc: 'Local expertise and context — we build solutions that fit the environment they operate in.' },
  { title: 'Scalable by Design', desc: 'Every system we build is designed to grow with your business, not hold it back.' },
  { title: 'Outcome-Focused', desc: 'We measure success by results — not deliverables. If it doesn\'t work for you, it\'s not done.' },
]

export default function TechnologyPage() {
  return (
    <>
      <Helmet>
        <title>Technology Division | First Minds</title>
        <meta name="description" content="First Minds Technologies — AI, Software Development, Automation, IoT, and IT Consulting services in Botswana." />
      </Helmet>
      <section className="division-hero division-hero--tech section-navy" aria-labelledby="tech-heading">
        <div className="division-hero-accent" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="division-hero-badge">
            <Brain size={14} aria-hidden="true" />
            Technology Division
          </div>
          <h1 id="tech-heading">
            Intelligent Software.<br />Real-World Impact.
          </h1>
          {/* PLACEHOLDER description — update with final approved copy */}
          <p className="division-hero-sub">
            We build technology that solves real problems — custom software, AI systems, automation,
            and IoT solutions designed for the way businesses actually work.
          </p>
          <div className="hero-ctas">
            <Button to="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="division-services division-services--tech section-padding" aria-labelledby="tech-services-heading">
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            title="Technology Services"
            subtitle="From a single application to a fully integrated digital ecosystem — we design and build technology that works."
            eyebrowColor="tech"
          />

          {/* PLACEHOLDER service cards — update with final content and icons */}
          <div className="division-services-grid" role="list">
            {TECH_SERVICES.map(({ icon: Icon, title, description, features }) => (
              <article key={title} className="service-card service-card--tech" role="listitem">
                <div className="service-card-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="service-card-features" aria-label={`${title} features`}>
                  {features.map((f) => (
                    <li key={f} className="service-feature-item">
                      <span className="service-feature-dot service-card--tech" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="division-why division-why--tech section-padding section-navy" aria-labelledby="why-tech-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Why First Minds"
            title="Built Different. Delivered Better."
            subtitle="We're not a typical software house. We're an integrated solutions company."
          />

          <div className="why-grid" role="list">
            {WHY_TECH.map(({ title, desc }) => (
              <div key={title} className="why-item" role="listitem">
                <div className="why-item-icon">
                  <CheckCircle size={20} aria-hidden="true" />
                </div>
                <div className="why-item-content">
                  <h4>{title}</h4>
                  {/* PLACEHOLDER — update with final approved copy */}
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Ready to Build Something Smart?"
        subtitle="Tell us your challenge. We'll engineer the solution."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
      />
    </>
  )
}
