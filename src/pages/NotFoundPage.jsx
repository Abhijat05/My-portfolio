import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NotFoundPage = () => {
  const { theme } = useTheme();
  const [typingComplete, setTypingComplete] = useState(false);
  const [terminalLines, setTerminalLines] = useState(['', '', '', '']);

  // Terminal typing animation effect
  useEffect(() => {
    const lines = [
      "$ find /path/to/page",
      "searching...",
      "ERROR: Page not found in directory",
      "404"
    ];
    
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let typingInterval;
    
    const startTyping = () => {
      if (currentLineIndex >= lines.length) {
        setTypingComplete(true);
        return;
      }
      
      typingInterval = setInterval(() => {
        if (currentCharIndex < lines[currentLineIndex].length) {
          const currentLine = lines[currentLineIndex].substring(0, currentCharIndex + 1);
          
          setTerminalLines(prev => {
            const newLines = [...prev];
            newLines[currentLineIndex] = currentLine;
            return newLines;
          });
          
          currentCharIndex++;
        } else {
          clearInterval(typingInterval);
          currentLineIndex++;
          currentCharIndex = 0;
          setTimeout(startTyping, 300); // Add delay between lines
        }
      }, 50);
    };
    
    // Begin typing animation
    startTyping();
    
    return () => {
      if (typingInterval) clearInterval(typingInterval);
    };
  }, []);
  
  return (
    <motion.div
      className={`min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={`text-9xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <span className="inline-block animate-pulse">4</span>
        <span className="inline-block animate-bounce">0</span>
        <span className="inline-block animate-pulse">4</span>
      </motion.div>
      
      <motion.h2
        className={`text-2xl mt-8 mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Page Not Found
      </motion.h2>
      
      {/* Terminal window effect */}
      <motion.div
        className="w-full max-w-md mb-8 overflow-hidden rounded-md shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-gray-700 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-center flex-1 text-gray-300 text-sm">Terminal</div>
        </div>
        
        <div className="bg-gray-900 p-4 text-left h-48 overflow-y-auto font-mono">
          {terminalLines.map((line, index) => (
            <div key={index} className="text-green-400 text-sm mb-1">
              {line}
              {index === terminalLines.length - 1 && !typingComplete && line.length > 0 && 
                <span className="animate-pulse">▌</span>
              }
            </div>
          ))}
          {typingComplete && (
            <div className="text-green-400 text-sm mb-1 animate-pulse">▌</div>
          )}
        </div>
      </motion.div>
      
      <div className="flex gap-4">
        <Link to="/">
          <motion.button
            className={`px-6 py-3 ${
              theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
            } text-white rounded-md flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>← Return Home</span>
          </motion.button>
        </Link>

        <Link to="/contact">
          <motion.button
            className={`px-6 py-3 ${
              theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            } ${theme === 'dark' ? 'text-white' : 'text-gray-800'} rounded-md flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Report Issue</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;