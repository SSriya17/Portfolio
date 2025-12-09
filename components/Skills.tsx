'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  isLearning?: boolean
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Go', isLearning: true }
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'HTML/CSS' },
      { name: 'Tailwind' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'Kafka', isLearning: true },
      { name: 'gRPC', isLearning: true }
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'Time-series DB', isLearning: true }
    ]
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'Machine Learning' },
      { name: 'AI Integration' },
      { name: 'Data Analysis' }
    ]
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Kubernetes', isLearning: true },
      { name: 'Prometheus', isLearning: true },
      { name: 'Grafana', isLearning: true }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'VS Code' },
      { name: 'Postman' }
    ]
  },
  {
    name: 'Concepts',
    skills: [
      { name: 'Full-Stack Development' },
      { name: 'API Design' },
      { name: 'Agile' },
      { name: 'Problem Solving' },
      { name: 'Distributed Systems', isLearning: true },
      { name: 'Event-Driven Architecture', isLearning: true },
      { name: 'Operational Transformation', isLearning: true }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of technologies and concepts I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => {
                  const isLearning = skill.isLearning
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <span
                        className={`inline-block px-3 py-1.5 rounded-lg border cursor-default whitespace-nowrap ${
                          isLearning
                            ? 'text-xs bg-purple-500/12 text-purple-300/60 border-purple-500/30 border-dashed opacity-60'
                            : 'text-sm bg-purple-500/20 text-purple-300 border-purple-500/30'
                        }`}
                      >
                        {skill.name}
                        {isLearning && <span className="ml-1">🔨</span>}
                      </span>
                      {isLearning && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
                          Currently learning through projects
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

