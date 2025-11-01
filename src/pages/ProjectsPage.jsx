import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../context/ThemeContext';

const ProjectsPage = () => {
  const { theme } = useTheme();
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "DISCTS",
      description: "DISCTS is a full-stack inventory management application that allows businesses to track products, manage stock levels, and streamline inventory operations.",
      link: "#",
      github: "https://github.com/Abhijat05/discts",
      technologies: ['React', 'Hono', 'Shadcn UI', 'DynamoDB', 'Clerk', 'Tailwind CSS', 'Machine Learning'],
      category: 'fullstack'
    },
    {
      title: "AI-LAB",
      description: "AI Lab is a modern web application that offers a unified interface to interact with various AI large language models through OpenRouter's API.",
      link: "#",
      github: "https://github.com/Abhijat05/AI-Lab",
      technologies: ['React', 'OpenRouter Api', 'Shadcn UI', 'Axios', 'Lucide-React', 'Radix UI', 'Tailwind CSS'],
      category: 'fullstack'
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400 border-green-700' : 'text-green-600 border-green-300'} border-b pb-2`}>
          <span className="font-mono">{'<'}</span> Projects <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
        </h2>

        <div className="mt-4 md:mt-0">
          <motion.button
            className={`px-4 py-2 rounded-lg flex items-center ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setShowFilter(!showFilter)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="mr-2">Filter Projects</span>
            <svg className={`w-4 h-4 transition-transform ${showFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </motion.button>

          {showFilter && (
            <motion.div
              className={`absolute mt-2 p-2 rounded-lg shadow-lg z-10 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {['all', 'frontend', 'fullstack', 'backend'].map(category => (
                <button
                  key={category}
                  className={`block w-full text-left px-4 py-2 rounded ${filter === category ?
                    (theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700') :
                    'hover:bg-opacity-10 hover:bg-green-500'}`}
                  onClick={() => setFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
        Here are some of my featured projects. Each demonstrates different skills and technologies I've worked with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              github={project.github}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className={`mt-16 p-6 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
          Want to see more?
        </h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
          Check out my GitHub profile for more projects and code samples
        </p>
        <a
          href="https://github.com/Abhijat05"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Visit GitHub Profile
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;