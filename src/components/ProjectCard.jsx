import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, link, github, technologies = [] }) => {
  return (
    <motion.div 
      className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-green-900/10 hover:border-green-700/70 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold text-green-400 mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      
      {technologies.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-800 text-xs rounded-md text-green-400 border border-gray-700/50">
                {tech}
              </span>
            ))} 
          </div>
        </div>
      )}
      
      <div className="flex space-x-3">
        {github && (
          <a 
            href={github} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <i className="devicon-github-original text-lg"></i>
          </a>
        )}
        <a 
          href={link} 
          className="inline-block text-green-400 border border-green-700/70 px-3 py-1 rounded-md hover:bg-green-900/20 transition-colors"
        >
          View Project 
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard