'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const hobbies = [
    'Basketball',
    'Travelling',
    'Journaling',
    'Binging movies',
    'Watching NBA games'
  ]

  const food = [
    'In N Out',
    'California Pizza Kitchen',
    'Salt and Straw'
  ]

  const movies = [
    '10 Things I Hate About You',
    'Letter to Juliet',
    'Jab We Met',
    'F1 Movie'
  ]

  return (
    <section className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Picture Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/20">
              <Image
                src="/about-photo.jpeg"
                alt="Sreya Gudipati"
                fill
                className="object-cover object-center scale-125"
                priority
              />
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-indigo-400 mb-4">Hello! 👋</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I am <span className="text-white font-semibold">Sreya Gudipati</span>, an undergraduate student at the University of Texas at Dallas majoring in <span className="text-purple-400 font-semibold">Cognitive Science</span> with a specialization in Human Computer Interaction and AI. I am passionate about understanding how the human brain connects with technology and using that knowledge to create meaningful experiences.
                </p>
                <p>
                  Even though my focus is Cognitive Science, I am very interested in <span className="text-indigo-400 font-semibold">Software Engineering</span> and <span className="text-indigo-400 font-semibold">AI and ML</span> because of how fast these fields are growing and the impact they have on society. I have experience with <span className="text-purple-400">Python</span>, <span className="text-purple-400">Java</span>, and <span className="text-purple-400">C++</span>, which has allowed me to explore different areas in tech. Recently, I have been getting more interested in how large systems work behind the scenes and how they keep apps running smoothly at scale.
                </p>
                <p>
                  I am always excited to learn, build, and work on projects that make technology more useful and intuitive for people.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hobbies, Food, Movies Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <span>🏀</span> Hobbies
            </h3>
            <ul className="space-y-2">
              {hobbies.map((hobby, index) => (
                <motion.li
                  key={hobby}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="text-gray-300 flex items-center gap-2"
                >
                  <span className="text-indigo-400">•</span>
                  <span>{hobby}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Food */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <span>🍕</span> Food
            </h3>
            <ul className="space-y-2">
              {food.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="text-gray-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Movies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
              <span>🎬</span> Movies
            </h3>
            <ul className="space-y-2">
              {movies.map((movie, index) => (
                <motion.li
                  key={movie}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  className="text-gray-300 flex items-center gap-2"
                >
                  <span className="text-pink-400">•</span>
                  <span>{movie}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
