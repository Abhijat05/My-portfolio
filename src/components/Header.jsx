import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [location.pathname]);
  
  // Handle scroll effect with improved threshold
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <motion.header 
      ref={headerRef}
      className={`sticky top-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${
        scrolled 
          ? `${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} shadow-lg`
          : `${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'}`
      } backdrop-blur-md ${
        theme === 'dark' ? 'text-white' : 'text-gray-800'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      {/* Removing the glowing accent line that appears when scrolled */}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center w-full md:w-auto justify-between">
          <NavLink to="/" className="group flex items-center">
            {/* Logo container without the glow effect */}
            <div className="relative">
              {/* Removing the subtle background glow effect */}
              
              <div className="flex items-center relative z-10">
                <motion.div
                  className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full mr-3 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-green-500 to-green-700' 
                      : 'bg-gradient-to-br from-green-400 to-green-600'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-white font-bold text-lg">A</span>
                </motion.div>
                
                <div>
                  <h1 className="text-2xl md:text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    Abhijat
                  </h1>
                  
                  <div className="hidden md:block text-xs font-mono" style={{ color: theme === 'dark' ? '#9CA3AF' : '#4B5563' }}>
                    <span style={{ color: theme === 'dark' ? '#F472B6' : '#DB2777' }}>const</span> role = <span style={{ color: theme === 'dark' ? '#FCD34D' : '#D97706' }}>"Full-Stack Developer"</span>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          
          {/* Rest of the header code remains the same */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden p-2 rounded-md"
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center items-center h-6 w-6 relative">
              <motion.span 
                className={`absolute w-5 h-0.5 block transition-all duration-300 ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                }`}
                animate={mobileMenuOpen 
                  ? { rotate: 45, y: 0 } 
                  : { rotate: 0, y: -6 }
                }
              />
              <motion.span 
                className={`absolute w-5 h-0.5 block transition-all duration-300 ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                }`}
                animate={mobileMenuOpen 
                  ? { opacity: 0, x: 20 } 
                  : { opacity: 1, x: 0 }
                }
              />
              <motion.span 
                className={`absolute w-5 h-0.5 block transition-all duration-300 ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                }`}
                animate={mobileMenuOpen 
                  ? { rotate: -45, y: 0 } 
                  : { rotate: 0, y: 6 }
                }
              />
            </div>
          </motion.button>
        </div>
        
        {/* Rest of your component code remains unchanged */}
        <nav className="hidden md:block mt-4 md:mt-0">
          <ul className="flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.li 
                key={item.name} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `px-3 py-2 text-base font-medium transition-all relative rounded-md ${
                    isActive
                      ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
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
                            theme === 'dark' 
                              ? 'bg-green-900/20 border border-green-800/30' 
                              : 'bg-green-50 border border-green-100'
                          } rounded-md z-[-1]`}
                          layoutId="activeNavItem"
                          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                        />
                      )}
                      {item.name}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
            
            {/* Theme toggle */}
            <motion.li 
              className="ml-3"
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={toggleTheme}
                className={`relative px-3 py-2 rounded-full overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-gray-100 border border-gray-200'
                } transition-colors flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-5 h-5 flex items-center justify-center"
                  initial={false}
                  animate={{ 
                    rotate: theme === 'dark' ? 0 : 180,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                >
                  {theme === 'dark' ? (
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-300"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-blue-600"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                    >
                      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                    </motion.svg>
                  )}
                </motion.div>
              </motion.button>
            </motion.li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-x-0 top-[60px] z-50 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav 
              className={`mx-4 mt-2 rounded-xl shadow-xl overflow-hidden border ${
                theme === 'dark' 
                  ? 'bg-gray-900/95 border-gray-800' 
                  : 'bg-white/95 border-gray-100'
              } backdrop-blur-md`}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <ul className={`divide-y ${theme === 'dark' ? 'divide-gray-800' : 'divide-gray-100'}`}>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `flex items-center px-6 py-4 ${
                        isActive
                          ? theme === 'dark'
                            ? 'text-green-400 bg-green-900/20' 
                            : 'text-green-600 bg-green-50'
                          : theme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.span 
                          className={`ml-2 text-sm ${
                            theme === 'dark' ? 'text-green-500' : 'text-green-600'
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          •
                        </motion.span>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={toggleTheme}
                    className={`flex items-center justify-between w-full px-6 py-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                    <span className="text-xl">
                      {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                      )}
                    </span>
                  </button>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;