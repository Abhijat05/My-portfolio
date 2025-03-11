import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section id="home" className="py-12">
      <h2 className="text-2xl font-bold text-green-400 border-b border-green-700 pb-2 mb-10">
        <span className="font-mono">{'<'}</span> About Me <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm a passionate developer focused on creating elegant, user-friendly web applications that solve real-world problems.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With expertise in both front-end and back-end technologies, I build responsive, accessible applications that provide exceptional user experiences.
          </p>
          
          <motion.div 
            className="code-block mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <pre>
{`const developer = {
  name: 'Abhijat Sinha',
  languages: ['JavaScript', 'Python', 'TypeScript'],
  focus: ['Web Development', 'UI/UX', 'Performance'],
  learning: 'Machine Learning'
};`}
            </pre>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-green-400 mb-2">Technical Expertise</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-gray-200">Frontend</h4>
              <ul className="space-y-2 text-gray-300">
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
            
            <div className="space-y-3">
              <h4 className="font-bold text-gray-200">Backend</h4>
              <ul className="space-y-2 text-gray-300">
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
          
          <div className="mt-6">
            <h4 className="font-bold text-gray-200 mb-2">Other Skills</h4>
            <p className="text-gray-300">
              Git, CI/CD, Testing, Responsive Design, Performance Optimization
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe