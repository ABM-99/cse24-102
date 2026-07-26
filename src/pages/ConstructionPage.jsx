import { Helmet } from 'react-helmet-async'
import { HardHat, Building2, Hammer, Leaf, Zap, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import Button from '../components/shared/Button'
import CTASection from '../components/shared/CTASection'

// PLACEHOLDER service data — replace descriptions and features with real content
const CONSTRUCTION_SERVICES = [
  {
    icon: Building2,
    title: 'Architectural Design',
    description: '3D visualisations, technical drawings, and design development that brings your concept to life before a single brick is laid.',
    features: ['3D renderings & walkthroughs', 'Technical drawings', 'Material & finish selection'],
  },
  {
    icon: HardHat,
    title: 'Residential & Commercial Construction',
    description: 'Turnkey construction from foundation to handover — new builds, extensions, and multi-unit developments delivered on time and on budget.',
    features: ['New build construction', 'Structural engineering', 'Project management'],
  },
  {
    icon: Hammer,
    title: 'Renovation & Restoration',
    description: 'Breathing new life into existing structures — whether it\'s a modern interior redesign or careful heritage restoration.',
    features: ['Full interior renovation', 'Facade upgrades', 'Historical preservation'],
  },
  {
    icon: Leaf,
    title: 'Landscape Design',
    description: 'Beautiful, functional outdoor environments that complement your building and the landscape around it.',
    features: ['Garden design', 'Irrigation systems', 'Outdoor structures'],
  },
  {
    icon: Building2,
    title: 'Civil Works & Infrastructure',
    description: 'Roads, earthworks, drainage, and civil infrastructure delivered with precision and built to specification.',
    features: ['Earthworks & grading', 'Drainage systems', 'Civil engineering'],
  },
  {
    icon: Zap,
    title: 'Electrical & Plumbing',
    description: 'Full electrical and plumbing installation and maintenance by certified technicians — including solar power solutions.',
    features: ['Complete wiring', 'Solar installations', 'Plumbing systems'],
  },
]

const WHY_CONSTRUCTION = [
  { title: 'Turnkey Delivery', desc: 'From concept and design through to construction and handover — we manage the entire process so you don\'t have to.' },
  { title: 'Quality Craftsmanship', desc: 'Every detail matters. We hold ourselves to exacting standards of workmanship on every project we touch.' },
  { title: 'On Time, On Budget', desc: 'Rigorous project management and transparent reporting ensure projects stay on track from day one.' },
  { title: 'Locally Rooted', desc: 'We understand the land, the regulations, and the communities of Botswana — and we build accordingly.' },
]

export default function ConstructionPage() {
  return (
    <>
      <Helmet>
        <title>Construction Division | First Minds</title>
        <meta name="description" content="First Minds Construction — Architectural Design, Residential & Commercial Construction, Civil Works, and Infrastructure services in Botswana." />
      </Helmet>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="division-hero division-hero--construction section-navy" aria-labelledby="construction-heading">
        <div className="division-hero-accent" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="division-hero-badge">
            <HardHat size={14} aria-hidden="true" />
            Construction Division
          </div>
          <h1 id="construction-heading">
            Built with Precision.<br />Designed to Last.
          </h1>
          {/* PLACEHOLDER description — update with final approved copy */}
          <p className="division-hero-sub">
            From residential builds and commercial developments to civil infrastructure —
            we deliver construction that reflects quality, craftsmanship, and care for the people
            who will use it.
          </p>
          <div className="hero-ctas">
            <Button to="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="division-services division-services--construction section-padding" aria-labelledby="construction-services-heading">
        <div className="container">
          <SectionHeader
            eyebrow="What We Build"
            title="Construction Services"
            subtitle="Comprehensive construction and design services, delivered with professionalism from the first consultation to the final handover."
            eyebrowColor="construction"
          />

          {/* PLACEHOLDER service cards — update with final content */}
          <div className="division-services-grid" role="list">
            {CONSTRUCTION_SERVICES.map(({ icon: Icon, title, description, features }) => (
              <article key={title} className="service-card service-card--construction" role="listitem">
                <div className="service-card-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="service-card-features" aria-label={`${title} features`}>
                  {features.map((f) => (
                    <li key={f} className="service-feature-item">
                      <span className="service-feature-dot service-card--construction" aria-hidden="true" />
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
      <section className="division-why division-why--construction section-padding section-navy" aria-labelledby="why-construction-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Why First Minds"
            title="Construction You Can Count On."
            subtitle="We bring expertise, accountability, and genuine care to every project."
            eyebrowColor="construction"
          />

          <div className="why-grid" role="list">
            {WHY_CONSTRUCTION.map(({ title, desc }) => (
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

      {/* ── PROJECT HIGHLIGHT IMAGE ───────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div
            style={{
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              aspectRatio: '21/7',
              background: 'var(--color-grey-light)'
            }}
          >
            {/* PLACEHOLDER hero image — replace with real project photography */}
            <img
              src="/images/modern-house.webp"
              alt="First Minds construction project"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Let's Build Your Vision."
        subtitle="Tell us about your project — we'll provide expert guidance from day one."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
      />
    </>
  )
}
