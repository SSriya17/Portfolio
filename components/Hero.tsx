'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const fullName = 'Sreya Gudipati'

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setShowCursor(false)
          setShowContent(true)
        }, 500)
      }
    }, 100) // Typing speed

    return () => clearInterval(typingInterval)
  }, [])

  // Blinking cursor effect
  useEffect(() => {
    if (!showCursor) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [showCursor])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Typing Animation for Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">
              {displayedText}
              {showCursor && (
                <span className="inline-block w-0.5 h-[1em] bg-indigo-400 ml-1 animate-pulse">|</span>
              )}
            </span>
          </motion.h1>

          {/* Content Container - Always rendered to prevent layout shift */}
          <div className="h-[150px] flex flex-col items-center justify-start">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5, delay: showContent ? 0.2 : 0 }}
              className="flex gap-6 justify-center mb-8"
            >
              <motion.a
                href="https://github.com/SSriya17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all group"
                aria-label="GitHub"
                initial={{ scale: 0 }}
                animate={{ scale: showContent ? 1 : 0 }}
                transition={{ duration: 0.3, delay: showContent ? 0.4 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 group-hover:text-indigo-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sreya-gudipati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all group"
                aria-label="LinkedIn"
                initial={{ scale: 0 }}
                animate={{ scale: showContent ? 1 : 0 }}
                transition={{ duration: 0.3, delay: showContent ? 0.5 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 group-hover:text-indigo-400 transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:gudipatisreya@gmail.com"
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all group"
                aria-label="Email"
                initial={{ scale: 0 }}
                animate={{ scale: showContent ? 1 : 0 }}
                transition={{ duration: 0.3, delay: showContent ? 0.6 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6 group-hover:text-indigo-400 transition-colors" />
              </motion.a>
            </motion.div>

            {/* Scroll Indicator - positioned under icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.6, delay: showContent ? 0.8 : 0 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors cursor-pointer"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
