import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
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
  
  // Improved typing effect
  useEffect(() => {
    const titles = [
      "Web Developer",
      "UI/UX Designer",
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

  useEffect(() => {
    // Apply the theme class to the body element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]
  
  return (
    <motion.header 
      className={`sticky top-0 z-50 py-3 px-4 md:px-6 ${
        theme === 'dark' ? 'bg-gray-900/90' : 'bg-gray-100/90'
      } backdrop-blur-sm ${
        theme === 'dark' ? 'text-white' : 'text-gray-800'
      } ${
        scrolled ? 'shadow-md shadow-black/10' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center w-full md:w-auto justify-between">
          <NavLink to="/" className="group">
            <div className="flex items-center">
              <motion.div
                className="hidden md:block text-green-400 font-mono mr-1"
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 10 }}
              >
                {'<'}
              </motion.div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-green-400 glow-text group-hover:text-green-300 transition-colors duration-300">
                Abhijat
              </h1>
              
              <motion.div
                className="hidden md:block text-green-400 font-mono ml-1"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 10 }}
              >
                {' />'}
              </motion.div>
            </div>
            
            <div className="hidden md:flex items-center h-6 mt-1 overflow-hidden">
              <p className="text-sm font-mono" style={{ color: theme === 'dark' ? '#9CA3AF' : '#4B5563' }}>
                <span style={{ color: theme === 'dark' ? '#F472B6' : '#DB2777' }}>const</span> role = <span style={{ color: theme === 'dark' ? '#FCD34D' : '#D97706' }}>"{typingEffect}"</span>
                <motion.span 
                  className="inline-block bg-green-400 w-1 h-4 ml-1 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              </p>
            </div>
          </NavLink>
          
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden text-green-400 p-2 rounded-md"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1.5">
              <motion.span 
                className="w-5 h-0.5 bg-green-400 block"
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span 
                className="w-5 h-0.5 bg-green-400 block"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className="w-5 h-0.5 bg-green-400 block"
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block mt-4 md:mt-0">
          <ul className="flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `px-3 py-2 text-base transition-colors relative rounded-md ${
                    isActive
                      ? 'text-green-400' 
                      : theme === 'dark' 
                        ? 'text-gray-300 hover:text-green-400' 
                        : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span 
                          className={`absolute inset-0 ${
                            theme === 'dark' ? 'bg-green-900/20' : 'bg-green-100'
                          } rounded-md z-[-1]`}
                          layoutId="activeNavItem"
                          transition={{ type: 'spring', duration: 0.6 }}
                        />
                      )}
                      {item.name}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
            
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="ml-2"
            >
              <motion.button
                onClick={toggleTheme}
                className={`relative px-3 py-1 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-200 hover:bg-gray-300'
                } text-sm transition-colors flex items-center gap-2`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === 'dark' ? 0 : 180,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </motion.div>
              </motion.button>
            </motion.li>
          </ul>
        </nav>
        
        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="md:hidden w-full mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-md overflow-hidden shadow-lg`}>
                <ul className={`divide-y ${theme === 'dark' ? 'divide-gray-700/50' : 'divide-gray-300/50'}`}>
                  {navItems.map((item) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.indexOf(item) * 0.1 }}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => `block px-4 py-3 ${
                          isActive
                            ? theme === 'dark'
                              ? 'text-green-400 bg-green-900/10' 
                              : 'text-green-600 bg-green-100/50'
                            : theme === 'dark'
                              ? 'text-gray-300'
                              : 'text-gray-600'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    </motion.li>
                  ))}
                  <motion.li 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      onClick={() => {
                        toggleTheme();
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} flex items-center`}
                    >
                      <span className="mr-2">{theme === 'dark' ? '☀️' : '🌙'}</span>
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                  </motion.li>
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent absolute bottom-0 left-0 right-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />
    </motion.header>
  );
}

export default Header;