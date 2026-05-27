import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProductionSection from '../components/ProductionSection'
import ProjectGrid from '../components/ProjectGrid'
import Section from '../components/Section'
import { engineeringProjects, musicProjects } from '../data/projects'
import { site } from '../data/site'

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        id={site.engineering.id}
        title={site.engineering.title}
        theme="engineering"
      >
        <ProjectGrid projects={engineeringProjects} theme="engineering" />
      </Section>
      <Section
        id={site.music.id}
        title={site.music.title}
        subtitle={site.music.subtitle}
        theme="music"
      >
        <ProjectGrid projects={musicProjects} theme="music" />
      </Section>
      <ProductionSection />
      <Footer />
    </>
  )
}
