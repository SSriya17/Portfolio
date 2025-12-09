'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  webUrl?: string
  highlights?: string
  icon?: React.ReactNode
  isPortfolio?: boolean
}

const PORTFOLIO_GITHUB_URL = 'https://github.com/SSriya17/portfolio'

const projects: Project[] = [
  {
    title: 'Interactive Developer Portfolio',
    description: 'Modern portfolio website showcasing projects and technical skills through clean design and engaging animations. Built with performance-first approach featuring custom particle system, parallax effects, and responsive layouts.',
    highlights: 'Lighthouse 100 • <1s Load Time • Responsive Design • 60fps Animations',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas API', 'Lucide Icons'],
    githubUrl: PORTFOLIO_GITHUB_URL,
    icon: <Sparkles className="w-5 h-5" />,
    isPortfolio: true
  },
  {
    title: 'BioBoard',
    description: 'Health and fitness web application providing comprehensive tracking, analytics, and visualization for personal wellness and fitness goals. Features multiple ML models for health predictions and insights.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Random Forest', 'Neural Networks', 'Flask', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/SSriya17/BioBoard',
    webUrl: 'https://bio-board-seven.vercel.app/'
  },
  {
    title: 'HackathonApp',
    description: 'T-Mobile X PNC Hackathon application showcasing innovative solutions combining telecommunications and financial technology services.',
    tech: ['Python', 'React', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/SSriya17/HackathonApp',
    webUrl: 'https://bridgelens.streamlit.app/'
  },
  {
    title: 'AccountSync',
    description: 'All-in-one outreach hub integrating Gmail, Outlook, and Teams with AI-powered scheduling capabilities for seamless communication management.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'OAuth 2.0', 'REST APIs', 'AI/ML'],
    githubUrl: 'https://github.com/SSriya17/AccountSync'
  },
  {
    title: 'FocusMate',
    description: 'Productivity and focus application designed to help users maintain concentration and achieve their goals through innovative time management features.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/SSriya17/FocusMate',
    webUrl: 'https://focus-mate-mu.vercel.app'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, AI/ML integration, and innovative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 ${
                project.isPortfolio 
                  ? 'border-indigo-500/40' 
                  : 'border-gray-800'
              }`}
            >
              {/* Pulsing glow effect for portfolio */}
              {project.isPortfolio && (
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 blur-sm pointer-events-none -z-10"
                />
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {project.icon && (
                    <span className="text-indigo-400">{project.icon}</span>
                  )}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.isPortfolio ? (
                    <button
                      disabled
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-800/50 text-gray-500 cursor-not-allowed opacity-70 text-xs"
                      title="You're viewing it!"
                    >
                      <span>You're Viewing It</span>
                      <span>✨</span>
                    </button>
                  ) : project.webUrl ? (
                    <a
                      href={project.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 transition-colors"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : null}
                </div>
              </div>

              {project.highlights && (
                <div className="mb-4">
                  <p className="text-xs text-indigo-400/80 font-medium mb-2">
                    {project.highlights}
                  </p>
                </div>
              )}
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
