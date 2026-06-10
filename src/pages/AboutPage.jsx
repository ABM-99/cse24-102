import { useEffect } from 'react'
import AOS from 'aos'
import PageHeader from '../components/shared/PageHeader'
import OurStory from '../components/about/OurStory'
import MissionVision from '../components/about/MissionVision'


export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | First Minds (PTY) LTD'
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  return (
    <div className="container flex-grow-1 mt-1 pt-1" data-aos="fade-up">
      <article className="about-section">
        <PageHeader title="About Our Company" subtitle="At First Minds (PTY) LTD, we transform visionary concepts into exceptional built environments through innovative construction solutions." />
        <OurStory />
        <MissionVision />
      </article>
    </div>
  )
}
