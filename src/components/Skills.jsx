import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'Node.js', level: 80, color: '#68A063' },
    { name: 'HTML/CSS', level: 90, color: '#E34F26' },
    { name: 'TailwindCSS', level: 85, color: '#38B2AC' },
    { name: 'MongoDB', level: 75, color: '#4DB33D' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Git', level: 80, color: '#F05032' }
  ]
  
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-green-400 border-b border-green-700 pb-2 mb-8">
        <span className="font-mono">{'<'}</span> Skills <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Skill bars */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-gray-200">Technical Proficiency</h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-green-400">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Skill categories */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-200">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'JavaScript', 'TypeScript', 'CSS/SCSS', 'TailwindCSS', 'Redux'].map((tech) => (
                <motion.div 
                  key={tech}
                  className="px-4 py-3 bg-gray-800 rounded-md flex items-center"
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: 'rgba(20, 83, 45, 0.4)'
                  }}
                >
                  <span className="text-green-400 mr-2">•</span>
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-200">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Firebase', 'PostgreSQL'].map((tech) => (
                <motion.div 
                  key={tech}
                  className="px-4 py-3 bg-gray-800 rounded-md flex items-center"
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: 'rgba(20, 83, 45, 0.4)'
                  }}
                >
                  <span className="text-green-400 mr-2">•</span>
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="code-block mt-12 text-sm max-w-3xl">
        <pre>
{`// My learning roadmap
const currentlyLearning = ['Advanced React Patterns', 'GraphQL'];
const nextToLearn = ['Machine Learning', 'Web3 Development'];

function continousLearning() {
  return currentlyLearning.concat(nextToLearn);
}`}
        </pre>
      </div>
    </section>
  )
}

export default Skills