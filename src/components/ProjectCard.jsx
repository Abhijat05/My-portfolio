import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ProjectCard = ({ title, description, link, github, technologies = [] }) => {
  const { theme } = useTheme();
  
  // For the 3D tilt effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (center = no rotation, edges = max rotation)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Convert to rotation degrees (-10 to 10 degrees)
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const resetRotation = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative group perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className={`relative ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-gray-200'
        } rounded-xl overflow-hidden shadow-xl border`}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-green-600 to-cyan-500'
            : 'bg-gradient-to-r from-green-400 to-cyan-400'
        } rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`}></div>
        
        {/* Card content */}
        <div className={`relative z-10 p-6 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900 to-slate-950'
            : 'bg-gradient-to-br from-gray-50 to-white'
        } h-full flex flex-col`}>
          {/* Top with title */}
          <div className="mb-4">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
              theme === 'dark'
                ? 'bg-green-500/10 text-green-400'
                : 'bg-green-100 text-green-600'
            } mb-2`}>Project</span>
            <h3 className={`text-xl font-bold ${
              theme === 'dark'
                ? 'text-white/90'
                : 'text-gray-800'
            }`}>{title}</h3>
          </div>
          
          {/* Description */}
          <p className={`text-sm mb-6 leading-relaxed flex-grow ${
            theme === 'dark'
              ? 'text-gray-300'
              : 'text-gray-600'
          }`}>{description}</p>
          
          {/* Tech stack */}
          {technologies.length > 0 && (
            <div className="mb-5">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-1 rounded-full ${
                      theme === 'dark'
                        ? 'bg-slate-800/80 text-green-400 border-slate-700/50'
                        : 'bg-gray-100 text-green-600 border-gray-200/50'
                    } border`}
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className={`flex justify-between items-center mt-auto pt-4 border-t ${
            theme === 'dark'
              ? 'border-slate-800/70'
              : 'border-gray-200/70'
          }`}>
            {github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'text-slate-400 hover:text-green-400'
                    : 'text-gray-500 hover:text-green-600'
                } transition-colors`}
                style={{ transform: "translateZ(20px)" }}
              >
                <i className="devicon-github-original text-lg"></i>
                <span className="text-xs font-medium opacity-0 group-hover/btn:opacity-100 transition-opacity -translate-x-2 group-hover/btn:translate-x-0">Source</span>
              </a>
            )}
            
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-3 py-1.5 rounded-lg overflow-hidden group/link"
              style={{ transform: "translateZ(20px)" }}
            >
              <span className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
                theme === 'dark'
                  ? 'from-green-600 to-cyan-500'
                  : 'from-green-500 to-cyan-400'
              }`}></span>
              <span className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
                theme === 'dark'
                  ? 'from-green-600 to-cyan-500'
                  : 'from-green-500 to-cyan-400'
              } opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-md`}></span>
              <span className="relative flex items-center text-xs font-semibold text-white">
                View Live
                <svg className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard