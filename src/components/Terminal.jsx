import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Abhijat\'s portfolio terminal!' },
    { type: 'system', content: 'Type "help" to see available commands.' },
  ]);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);
  
  const commands = {
    help: () => ({
      type: 'system',
      content: `
Available commands:
- help: Show this help message
- about: Learn about me
- skills: View my technical skills
- projects: See my projects
- contact: How to reach me
- clear: Clear the terminal
      `
    }),
    about: () => ({
      type: 'system',
      content: 'I am a passionate developer with experience in web applications and complex problem-solving.'
    }),
    skills: () => ({
      type: 'system',
      content: 'Frontend: React, HTML/CSS, TailwindCSS, JavaScript\nBackend: Node.js, Express, MongoDB, RESTful APIs'
    }),
    projects: () => ({
      type: 'system',
      content: 'My projects include:\n- Algorithmic Trading Bot\n- Personal Task Manager\n- API Development'
    }),
    contact: () => ({
      type: 'system',
      content: 'Email: abhijat@example.com\nGitHub: github.com/abhijat\nLinkedIn: linkedin.com/in/abhijat'
    }),
    clear: () => {
      setHistory([]);
      return null;
    },
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const newInput = input.trim().toLowerCase();
      
      // Add input to history
      setHistory(prev => [...prev, { type: 'input', content: `$ ${newInput}` }]);
      
      // Process command
      if (commands[newInput]) {
        const output = commands[newInput]();
        if (output) {
          setHistory(prev => [...prev, output]);
        }
      } else {
        setHistory(prev => [...prev, { 
          type: 'error', 
          content: `Command not found: ${newInput}. Type "help" to see available commands.` 
        }]);
      }
      
      setInput('');
    }
  };
  
  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  return (
    <motion.div 
      className="bg-gray-900 border border-green-700 rounded-md overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal header */}
      <div className="flex items-center p-2 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-1 mr-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs font-mono text-gray-400">portfolio-terminal</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm h-80 overflow-y-auto">
        {history.map((entry, i) => (
          <div 
            key={i} 
            className={`mb-2 ${
              entry.type === 'input' ? 'text-blue-400' : 
              entry.type === 'error' ? 'text-red-400' : 'text-green-300'
            }`}
          >
            {entry.content.split('\n').map((line, j) => (
              <div key={j}>{line}</div>
            ))}
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="text-blue-400 mr-2">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-gray-200 w-full"
            autoFocus
          />
          <span className={`w-2 h-4 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;