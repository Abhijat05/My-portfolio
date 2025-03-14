import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const resetInitialization = () => {
    // Remove the initialized flag from session storage
    sessionStorage.removeItem('initialized');
    // Reload the page to trigger init sequence
    window.location.reload();
  };

  return (
    <footer className="p-6 bg-gray-900 text-gray-400 border-t border-green-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-green-400 text-lg font-mono mb-2">Abhijat Sinha</h3>
              <p className="text-sm mb-3">Web Developer & Designer</p>
              
              <motion.button
                onClick={resetInitialization}
                className="text-xs text-green-400 hover:text-green-300 font-mono flex items-center"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1">↺</span> Replay initialization
              </motion.button>
            </motion.div>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <i className="devicon-github-original text-2xl hover:text-green-400 transition-colors"></i>
              <span className="text-xs mt-1">GitHub</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <i className="devicon-linkedin-plain text-2xl hover:text-green-400 transition-colors"></i>
              <span className="text-xs mt-1">LinkedIn</span>
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <i className="devicon-twitter-original text-2xl hover:text-green-400 transition-colors"></i>
              <span className="text-xs mt-1">Twitter</span>
            </motion.a>
          </div>
          
          <div>
            <div className="font-mono flex flex-col items-end">
              <div className="flex space-x-3 mb-3">
                {['React', 'TailwindCSS', 'Framer'].map((tech, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="px-2 py-1 bg-gray-800 text-xs rounded-md text-green-400 border border-gray-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1 }}
                className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer