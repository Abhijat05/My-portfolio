import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Terminal from './components/Terminal'
import MatrixRain from './components/MatrixRain'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  useEffect(() => {
    // Add this to fix the backface-visibility issue in some browsers
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    
    const handleResize = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <ThemeProvider>
      <MatrixRain />
      <div className="min-h-screen flex flex-col bg-black text-gray-200">
        <Header />
        <main className="flex-grow py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-20"
          >
            <AboutMe />
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="projects">
              <h2 className="text-2xl font-bold text-green-400 border-b border-green-700 pb-2 mb-8">
                <span className="font-mono">{'<'}</span> Projects <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                  title="Algorithmic Trading Bot" 
                  description="Python-based trading algorithm using machine learning for market prediction" 
                  link="#"
                  github="https://github.com/yourusername/trading-bot"
                  technologies={['Python', 'TensorFlow', 'Pandas']} 
                />
                <ProjectCard 
                  title="Personal Task Manager" 
                  description="React application with Redux for state management and user authentication" 
                  link="#" 
                  github="https://github.com/yourusername/task-manager"
                  technologies={['React', 'Redux', 'Firebase']} 
                />
                <ProjectCard 
                  title="API Development" 
                  description="RESTful API built with Node.js and Express with MongoDB integration" 
                  link="#" 
                  github="https://github.com/yourusername/api-project"
                  technologies={['Node.js', 'Express', 'MongoDB']} 
                />
              </div>
            </section>
            
            <section id="contact" className="pb-12">
              <h2 className="text-2xl font-bold text-green-400 border-b border-green-700 pb-2 mb-8">
                <span className="font-mono">{'<'}</span> Contact <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-gray-300">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>
                  
                  <div className="space-y-4">
                    <motion.a 
                      href="mailto:your.email@example.com"
                      className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-green-400 text-xl">📧</span>
                      <span className="group-hover:underline">your.email@example.com</span>
                    </motion.a>
                    
                    <motion.a 
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-green-400 text-xl">💻</span>
                      <span className="group-hover:underline">github.com/yourusername</span>
                    </motion.a>
                    
                    <motion.a 
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-green-400 text-xl">🔗</span>
                      <span className="group-hover:underline">linkedin.com/in/yourusername</span>
                    </motion.a>
                  </div>
                </div>
                
                <div>
                  <Terminal />
                </div>
              </div>
            </section>
          </motion.div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App