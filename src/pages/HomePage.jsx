import { useEffect } from 'react'
import AOS from 'aos'
import HeroCarousel from '../components/home/HeroCarousel'
import WelcomeSection from '../components/home/WelcomeSection'
import ServicesHighlights from '../components/home/ServicesHighlights'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/shared/CTASection'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Home | First Minds (PTY) LTD'
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  return (
    <>
      <HeroCarousel />
      <WelcomeSection />
      <ServicesHighlights />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  )
}
