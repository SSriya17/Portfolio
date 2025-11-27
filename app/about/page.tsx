import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'
import About from '@/components/About'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <ParticleBackground />
      <About />
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-800 mt-20">
        <p>© 2025 Sreya Gudipati. All Rights Reserved.</p>
      </footer>
    </main>
  )
}
