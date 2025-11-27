import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <ParticleBackground />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 Sreya Gudipati. All Rights Reserved.</p>
      </footer>
    </main>
  )
}
