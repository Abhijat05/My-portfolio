import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Abhijat\'s portfolio terminal!' },
    { type: 'system', content: 'Type "help" to see available commands.' },
  ]);
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();


  const commands = {
    help: () => ({
      type: 'system',
      content: `
Available commands:
- about: Learn about me
- skills: View my technical skills
- projects: See my projects
- contact: How to reach me
- clear: Clear the terminal

Navigation commands:
- cd /home: Navigate to home page
- cd /skills: Navigate to skills page
- cd /projects: Navigate to projects page
- cd /contact: Navigate to contact page
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
    }
  };


  const handleKeyDown = (e) => {

    if (e.key === 'ArrowUp' && commandHistory.length > 0) {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[commandHistory.length - 1 - newIndex]);
    } else if (e.key === 'ArrowDown' && historyIndex > -1) {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setInput(newIndex >= 0 ? commandHistory[commandHistory.length - 1 - newIndex] : '');
    } else if (e.key === 'Enter' && input.trim()) {
      const newInput = input.trim();


      setCommandHistory(prev => [...prev, newInput]);
      setHistoryIndex(-1);


      setHistory(prev => [...prev, { type: 'input', content: `$ ${newInput}` }]);


      if (newInput.startsWith('cd ')) {
        const path = newInput.substring(3).trim();
        handleNavigation(path);
      } else {

        const commandName = newInput.toLowerCase();
        if (commands[commandName]) {
          const output = commands[commandName]();
          if (output) {
            setHistory(prev => [...prev, output]);
          }
        } else {
          setHistory(prev => [...prev, {
            type: 'error',
            content: `Command not found: ${commandName}. Type "help" to see available commands.`
          }]);
        }
      }

      setInput('');
    }
  };


  const handleNavigation = (path) => {
    let targetPath;

    if (path === '/home' || path === 'home' || path === '/') {
      targetPath = '/';
    } else if (path.startsWith('/')) {
      targetPath = path;
    } else {
      targetPath = `/${path}`;
    }


    const validPaths = ['/', '/skills', '/projects', '/contact'];

    if (validPaths.includes(targetPath)) {
      navigate(targetPath);
      setHistory(prev => [...prev, {
        type: 'system',
        content: `Navigated to: ${targetPath}`
      }]);
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Invalid path: ${path}. Valid paths are: /home, /skills, /projects, /contact`
      }]);
    }
  };


  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }


    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);


  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <motion.div
      className={`${theme === 'dark' ? 'bg-gray-900 border-green-700' : 'bg-gray-100 border-green-600'} border rounded-md overflow-hidden shadow-lg`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleTerminalClick}
    >
      {/* Terminal header */}
      <div className={`flex items-center p-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'} border-b`}>
        <div className="flex space-x-1 mr-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className={`text-xs font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>portfolio-terminal</span>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className={`p-4 font-mono text-sm h-80 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
        {history.map((entry, i) => (
          <div
            key={i}
            className={`mb-2 ${entry.type === 'input' ?
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600' :
              entry.type === 'error' ?
                'text-red-400' :
                theme === 'dark' ? 'text-green-300' : 'text-green-600'
              }`}
          >
            {entry.content.split('\n').map((line, j) => (
              <div key={j}>{line}</div>
            ))}
          </div>
        ))}

        <div className="flex items-center">
          <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`bg-transparent border-none outline-none ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} w-full mx-2`}
            autoFocus
            spellCheck="false"
          />
          <span className={`w-2 h-4 ${theme === 'dark' ? 'bg-green-400' : 'bg-green-600'} ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;