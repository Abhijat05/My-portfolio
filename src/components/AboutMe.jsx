import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section id="home" className="py-12">
      <h2 className="text-2xl font-bold text-green-400 border-b border-green-700 pb-2 mb-8">
        <span className="font-mono">{'<'}</span> About Me <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <motion.p 
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello! I'm a passionate developer with experience in building web applications and solving complex problems.
          </motion.p>
          <motion.p 
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I specialize in front-end development with React, but also work with back-end technologies to create full-stack applications.
          </motion.p>
          
          <motion.div 
            className="code-block mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <pre>
{`const developer = {
  name: 'Abhijat Sinha',
  languages: ['JavaScript', 'Python', 'TypeScript'],
  frameworks: ['React', 'Node.js', 'Express'],
  currentlyLearning: 'Machine Learning'
};`}
            </pre>
          </motion.div>
        </div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-green-400">Technical Background</h3>
          <p className="text-gray-300 leading-relaxed">
            With a strong foundation in modern web technologies, I create responsive, accessible, and performant applications that deliver great user experiences.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <h4 className="font-bold text-gray-200">Frontend</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>React.js
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>HTML5/CSS3
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>TailwindCSS
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>JavaScript (ES6+)
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-200">Backend</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>Node.js
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>Express
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>MongoDB
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">›</span>RESTful APIs
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe