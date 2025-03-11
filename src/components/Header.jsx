import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typingEffect, setTypingEffect] = useState('')
  const { theme, toggleTheme } = useTheme();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])
  
  // Simplified typing effect
  useEffect(() => {
    const titles = [
      "Web Developer", 
      "React Expert", 
      "UI Designer", 
      "Problem Solver"
    ]
    
    let idx = 0;
    let currentTitle = 0;
    let isDeleting = false;
    
    const type = () => {
      const current = titles[currentTitle];
      
      if (isDeleting) {
        setTypingEffect(current.substring(0, idx - 1));
        idx--;
      } else {
        setTypingEffect(current.substring(0, idx + 1));
        idx++;
      }
      
      let timing = isDeleting ? 80 : 120;
      
      if (!isDeleting && idx === current.length) {
        timing = 1500;
        isDeleting = true;
      } else if (isDeleting && idx === 0) {
        isDeleting = false;
        currentTitle = (currentTitle + 1) % titles.length;
        timing = 500;
      }
      
      setTimeout(type, timing);
    };
    
    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const navItems = ['Home', 'Projects', 'Skills', 'Contact']
  
  return (
    <motion.header 
      className={`sticky top-0 z-50 py-4 px-6 bg-gray-900/95 backdrop-blur-sm text-white ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center w-full md:w-auto justify-between">
          <motion.div>
            <motion.h1 
              className="text-2xl md:text-3xl font-bold font-mono text-green-400"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden md:inline">{'<'}</span>
              <motion.span
                animate={{ 
                  textShadow: ['0 0 5px rgba(74, 222, 128, 0.3)', '0 0 10px rgba(74, 222, 128, 0.5)', '0 0 5px rgba(74, 222, 128, 0.3)'] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Abhijat.Sinha
              </motion.span>
              <span className="hidden md:inline">{' />'}</span>
            </motion.h1>
            <motion.p 
              className="text-sm text-gray-400 font-mono hidden md:block mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-pink-400">function</span>{" "}
              <span className="text-amber-300">{typingEffect}</span>
              <motion.span 
                className="inline-block bg-green-400 w-1 h-4 ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            </motion.p>
          </motion.div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden text-green-400 p-2 rounded-md"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1.5">
              <motion.span 
                className="w-6 h-0.5 bg-green-400 block"
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span 
                className="w-6 h-0.5 bg-green-400 block"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className="w-6 h-0.5 bg-green-400 block"
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block mt-4 md:mt-0">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`px-3 py-2 text-base transition-colors relative ${activeLink === item ? 'text-green-400' : 'text-gray-300 hover:text-green-400'}`}
                  onClick={() => setActiveLink(item)}
                >
                  {activeLink === item && (
                    <motion.span 
                      className="absolute inset-0 bg-green-900/20 rounded-md z-[-1]"
                      layoutId="activeNavItem"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  {item}
                </a>
              </li>
            ))}
            
            <li>
              <button
                onClick={toggleTheme}
                className="px-3 py-1 rounded bg-gray-800 text-gray-300 hover:text-green-400 transition-colors"
              >
                {theme === 'dark' ? 'Matrix' : 'Dark'}
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden w-full mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="bg-gray-800 rounded-md overflow-hidden">
                <ul className="divide-y divide-gray-700">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className={`block px-4 py-3 ${activeLink === item ? 'text-green-400 bg-green-900/20' : 'text-gray-300'}`}
                        onClick={() => {
                          setActiveLink(item);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={toggleTheme}
                      className="w-full text-left px-4 py-3 text-gray-300"
                    >
                      {theme === 'dark' ? 'Matrix Mode' : 'Dark Mode'}
                    </button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <motion.div 
        className="h-0.5 bg-green-500/40 absolute bottom-0 left-0 right-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />
    </motion.header>
  );
}

export default Header