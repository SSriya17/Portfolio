'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Scroll spy: detect which section is in view
      if (pathname === '/') {
        const sections = ['projects', 'skills', 'contact']
        const scrollPosition = window.scrollY + 100 // Offset for nav bar
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
        
        // If scrolled to top, set to home
        if (window.scrollY < 200) {
          setActiveSection('home')
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navLinks = [
    { name: 'Home', href: '/', sectionId: 'home' },
    { name: 'Projects', href: '/#projects', sectionId: 'projects' },
    { name: 'Skills', href: '/#skills', sectionId: 'skills' },
    { name: 'About', href: '/about', sectionId: 'about' },
    { name: 'Contact', href: '/#contact', sectionId: 'contact' },
  ]

  const isActive = (link: typeof navLinks[0]) => {
    if (pathname === '/about' && link.sectionId === 'about') return true
    if (pathname === '/' && link.sectionId === activeSection) return true
    if (pathname === '/' && link.sectionId === 'home' && activeSection === 'home') return true
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors ${
                    active
                      ? 'text-white font-bold'
                      : 'text-gray-300 hover:text-white font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const active = isActive(link)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block transition-colors py-2 ${
                      active
                        ? 'text-white font-bold'
                        : 'text-gray-300 hover:text-white font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
