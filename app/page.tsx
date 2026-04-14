import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { ProcessSection } from '@/components/sections/process'
import { SkillsSection } from '@/components/sections/skills'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
