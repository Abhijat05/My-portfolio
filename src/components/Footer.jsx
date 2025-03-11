import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [time, setTime] = useState(new Date())
  const [typewriterComplete, setTypewriterComplete] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const formattedTime = time.toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const codeLines = [
    'const portfolio = new DevPortfolio();',
    'portfolio.init();',
    'portfolio.render();',
    '// Thanks for visiting!'
  ]

  useEffect(() => {
    if (lineIndex < codeLines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex(lineIndex + 1)
      }, 1500)
      return () => clearTimeout(timer)
    } else {
      setTypewriterComplete(true)
    }
  }, [lineIndex])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <footer className="p-6 bg-gray-900 text-gray-400 border-t border-green-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.p 
              className="text-center md:text-left font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-green-400">{'</'}</span> 
              <motion.span
                animate={{ color: ['#4ADE80', '#F472B6', '#4ADE80'] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Built with React & TailwindCSS
              </motion.span> 
              <span className="text-green-400">{'>'}</span>
            </motion.p>
            <p className="text-xs mt-2 font-mono text-center md:text-left">
              <span className="text-pink-400">const</span> <span className="text-blue-400">lastUpdated</span> = <span className="text-orange-400">"2023-05-25"</span>;
            </p>
          </div>
          
          <motion.div 
            className="flex space-x-6 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl hover:text-green-400 transition-colors"
              whileHover={{ y: -3, scale: 1.2 }}
            >
              <i className="devicon-github-original"></i>
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl hover:text-green-400 transition-colors"
              whileHover={{ y: -3, scale: 1.2 }}
            >
              <i className="devicon-linkedin-plain"></i>
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl hover:text-green-400 transition-colors"
              whileHover={{ y: -3, scale: 1.2 }}
            >
              <i className="devicon-twitter-original"></i>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="code-block px-3 py-1 hidden md:block font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-500">terminal</span>
            </div>
            <div className="h-px bg-gray-700 my-1"></div>
            <span className="text-blue-400">user@portfolio</span>:<span className="text-green-400">~$</span> echo $TIME<br />
            <span className="text-green-300">{formattedTime}</span><br />
            <span className="text-blue-400">user@portfolio</span>:<span className="text-green-400">~$</span> run-portfolio<br />
            {codeLines.slice(0, lineIndex + 1).map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className={line.startsWith('//') ? 'text-gray-500' : 'text-amber-300'}>
                  {line}
                </span>
              </motion.div>
            ))}
            {typewriterComplete && (
              <motion.span 
                className="inline-block h-4 w-2 bg-green-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center md:justify-start gap-2"
            >
              {['React', 'TailwindCSS', 'Framer Motion', 'Vite'].map((tech, index) => (
                <motion.span 
                  key={index} 
                  variants={item}
                  className="px-2 py-1 bg-gray-800 text-xs rounded-md text-green-400 border border-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <div className="mt-4 md:mt-0 font-mono text-xs">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5 }}
                className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"
              />
              <p className="mt-2 text-center md:text-right">
                <span className="text-green-400">{'/* '}</span>
                <span>Made with 💻 and ☕</span>
                <span className="text-green-400">{' */'}</span>
                <motion.span 
                  className="ml-1 inline-block"
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 4, duration: 1 }}
                >
                  👋
                </motion.span>
              </p>
              <p className="text-center md:text-right text-gray-500 mt-1">
                &copy; {new Date().getFullYear()} Abhijat Sinha
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer