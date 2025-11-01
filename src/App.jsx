import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import Terminal from './components/Terminal'
import InitSequence from './components/InitSequence'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import NotFoundPage from './pages/NotFoundPage'


const ThemedContent = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [showTerminalOverlay, setShowTerminalOverlay] = useState(false);
  const [initialized, setInitialized] = useState(false);
  
  // Check if this is the first visit in current session
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
  useEffect(() => {
    // Check if we've already initialized during this session
    const hasInitialized = sessionStorage.getItem('initialized');
    if (hasInitialized) {
      setInitialized(true);
      setIsFirstVisit(false);
    } else {
      // On first visit, start with initialization sequence
      setInitialized(false);
      setIsFirstVisit(true);
    }
  }, []);
  
  const handleInitComplete = () => {
    setInitialized(true);
    // Save initialization state to session storage
    sessionStorage.setItem('initialized', 'true');
  };
  
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    
    const handleResize = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    
    
    const handleKeyDown = (e) => {
      
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        setShowTerminalOverlay(prev => !prev);
      }
      
      else if (e.key === 'Escape' && showTerminalOverlay) {
        setShowTerminalOverlay(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showTerminalOverlay]);
  
  if (isFirstVisit && !initialized) {
    return <InitSequence onComplete={handleInitComplete} />;
  }
  
  // Check if current page is HomePage to apply different layout
  const isHomePage = location.pathname === '/';
  
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/projects", element: <ProjectsPage /> },
    { path: "/skills", element: <SkillsPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "*", element: <NotFoundPage /> }
  ];
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
      <Header isHomePage={isHomePage} />
      <main className={`flex-grow ${isHomePage ? '' : 'py-12 px-4 md:px-8 max-w-6xl mx-auto w-full'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, element }) => (
              <Route 
                key={path} 
                path={path} 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {element}
                  </motion.div>
                } 
              />
            ))}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Terminal shortcut hint */}
      <div className="fixed bottom-4 right-4 z-40">
        <motion.button 
          className="bg-gray-800 text-gray-300 px-3 py-2 rounded-md text-sm flex items-center space-x-2 shadow-lg"
          onClick={() => setShowTerminalOverlay(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-green-400">{'>'}</span>
          <span>Terminal</span>
          <span className="text-xs text-gray-500 ml-2">(Ctrl+T)</span>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {showTerminalOverlay && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTerminalOverlay(false)}
          >
            <motion.div 
              className="w-full max-w-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Terminal />
              <p className="text-center text-gray-500 text-xs mt-2">
                Press <span className="bg-gray-800 text-gray-300 px-1 rounded">ESC</span> to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemedContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;