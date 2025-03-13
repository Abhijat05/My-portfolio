import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../context/ThemeContext';

const ProjectsPage = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400 border-green-700' : 'text-green-600 border-green-300'} border-b pb-2 mb-10`}>
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
    </motion.div>
  );
};

export default ProjectsPage;