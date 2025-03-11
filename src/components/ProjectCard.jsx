import React from 'react'

const ProjectCard = ({ title, description, link, technologies = [] }) => {
  return (
    <div className="p-5 card-gradient border border-gray-700 rounded-lg shadow-lg hover:border-green-700 transition-all duration-300">
      <h3 className="text-xl font-bold text-green-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      {technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-800 text-xs rounded-md text-green-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <a 
        href={link} 
        className="inline-block mt-2 text-green-400 border border-green-700 px-3 py-1 rounded hover:bg-green-900 hover:bg-opacity-30 transition-colors"
      >
        View Project <span className="ml-1">→</span>
      </a>
    </div>
  )
}

export default ProjectCard