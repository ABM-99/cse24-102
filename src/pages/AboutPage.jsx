import { Helmet } from 'react-helmet-async'
import { Shield, Target, Users, Globe, Award, Lightbulb } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import CTASection from '../components/shared/CTASection'

// Company values — PLACEHOLDER copy, update with approved brand voice
const VALUES = [
  {
    icon: Target,
    title: 'Precision & Quality',
    desc: 'We hold ourselves to the highest standards in everything we build — physical or digital.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We stay at the frontier of technology and construction practice to deliver better outcomes.'
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'We work alongside our clients, not just for them. Long-term relationships are our measure of success.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Transparent, honest, and accountable — at every stage of every project.'
  },
  {
    icon: Globe,
    title: 'Community Impact',
    desc: 'We build for the future of Botswana and the communities that depend on what we create.'
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We don\'t settle for adequate. Every deliverable carries our mark of pride and craftsmanship.'
  },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | First Minds</title>
        <meta name="description" content="Learn about First Minds (PTY) LTD — one company with Technology and Construction divisions, built on a mission to create intelligent, lasting solutions." />
      </Helmet>
      {/* ── PAGE HERO ─────────────────────────────────────────────────── */}
      <section className="about-hero section-navy" aria-labelledby="about-heading">
        <div className="container">
          <span className="page-header-eyebrow">Our Company</span>
          <h1 id="about-heading">Built on Purpose.<br />Driven by Solutions.</h1>
          {/* PLACEHOLDER subtitle — update with final approved brand copy */}
          <p className="about-hero-sub">
            First Minds is where technology meets infrastructure. We are one company, two divisions,
            and an unwavering belief that the best solutions come from the intersection of both worlds.
          </p>
        </div>
      </section>

      {/* ── BRAND MANIFESTO ───────────────────────────────────────────── */}
      <section className="manifesto section-padding" aria-labelledby="manifesto-heading">
        <div className="container">
          <div className="manifesto-inner">
            <span className="section-eyebrow eyebrow--tech" id="manifesto-heading">
              Why We Exist
            </span>
            {/*
              BRAND MANIFESTO — This is the approved v1 copy. Update this block with the
              final brand-approved version before or shortly after launch.
            */}
            <blockquote className="manifesto-quote">
              We believe that technology and infrastructure are not separate disciplines —
              they are two sides of the same solution. First Minds exists to design, build, and
              deliver intelligent outcomes that create real, lasting value for the businesses,
              communities, and environments we serve.
            </blockquote>
            <p className="manifesto-attribution">— First Minds (PTY) LTD</p>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────── */}
      <section className="about-story section-padding section-navy" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="One Company. One Vision."
                subtitle="First Minds was founded with a clear belief: that the companies best positioned to solve today's complex challenges are those that can move fluently between the physical and the digital world."
                align="left"
              />
              {/* PLACEHOLDER — update this narrative with real company history when available */}
              <p style={{ lineHeight: 1.75, marginTop: 'var(--space-4)' }}>
                We built our construction division first — developing expertise in architectural design,
                civil works, and project delivery across Botswana. As our clients' needs evolved, so did we.
                Our technology division grew from a recognition that intelligent software and connected
                systems are now as foundational to a project's success as concrete and steel.
              </p>
              <p style={{ lineHeight: 1.75, marginTop: 'var(--space-3)' }}>
                Today, First Minds operates at the intersection of both — delivering fully integrated
                solutions for clients who need more than a contractor or a software vendor. They need a partner.
              </p>
            </div>
            <div className="about-story-image">
              {/* PLACEHOLDER image — replace with real company/team photo */}
              <img
                src="/images/construction-team.jpg"
                alt="First Minds team on a construction site"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────────── */}
      <section className="mission-vision section-padding" aria-labelledby="mv-heading">
        <div className="container">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Mission &amp; Vision"
            eyebrowColor="construction"
          />

          <div className="mission-vision-grid">
            <div className="mv-card mv-card--mission">
              <div className="mv-card-icon">
                <Target size={24} aria-hidden="true" />
              </div>
              <h3>Our Mission</h3>
              {/* PLACEHOLDER mission statement — update with approved copy */}
              <p>
                To deliver intelligent, integrated solutions across technology and construction —
                empowering our clients to build better, work smarter, and leave a meaningful mark
                on the communities around them.
              </p>
            </div>

            <div className="mv-card mv-card--vision">
              <div className="mv-card-icon">
                <Globe size={24} aria-hidden="true" />
              </div>
              <h3>Our Vision</h3>
              {/* PLACEHOLDER vision statement — update with approved copy */}
              <p>
                To be Botswana's most trusted partner for technology-driven development — a company
                known for building things that work, that last, and that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────────────────────────── */}
      <section className="about-values section-padding section-navy" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="These principles guide every decision, every project, and every relationship."
          />

          <div className="values-grid" role="list">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="value-card" role="listitem">
                <div className="value-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h4>{title}</h4>
                {/* PLACEHOLDER — refine value descriptions with final brand copy */}
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Ready to Work with First Minds?"
        subtitle="Tell us about your project and let's explore what we can build together."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
      />
    </>
  )
}
