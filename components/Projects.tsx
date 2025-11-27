'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl: string
}

const projects: Project[] = [
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
    githubUrl: 'https://github.com/SSriya17/FocusMate'
  },
  {
    title: 'BioBoard',
    description: 'Health and fitness web application providing comprehensive tracking, analytics, and visualization for personal wellness and fitness goals. Features multiple ML models for health predictions and insights.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Random Forest', 'Neural Networks', 'Flask', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/SSriya17/BioBoard'
  },
  {
    title: 'HackathonApp',
    description: 'T-Mobile X PNC Hackathon application showcasing innovative solutions combining telecommunications and financial technology services.',
    tech: ['Python', 'React', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/SSriya17/HackathonApp'
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
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
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
