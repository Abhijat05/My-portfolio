import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon, name, description, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="perspective">
      <motion.div
        className="relative w-full h-40 preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-lg border border-gray-700 bg-gray-800 p-4 flex flex-col items-center justify-center"
          style={{ zIndex: isFlipped ? 0 : 1 }}
        >
          <div className="text-3xl mb-2" style={{ color }}>
            {icon}
          </div>
          <h3 className="text-lg font-bold text-green-400">{name}</h3>
          <p className="text-sm text-center text-gray-400 mt-1">Click to learn more</p>
        </motion.div>
        
        {/* Back of card */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-lg border border-gray-700 bg-gray-800 p-4 flex flex-col justify-center"
          style={{ transform: 'rotateY(180deg)', zIndex: isFlipped ? 1 : 0 }}
        >
          <p className="text-gray-300 text-sm">{description}</p>
          <button
            className="mt-3 text-xs text-green-400 hover:underline self-end"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            Flip back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'Node.js', level: 80, color: '#68A063' },
    { name: 'HTML/CSS', level: 90, color: '#E34F26' },
    { name: 'TailwindCSS', level: 85, color: '#38B2AC' },
    { name: 'MongoDB', level: 75, color: '#4DB33D' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Git', level: 80, color: '#F05032' }
  ];

  const skillCards = [
    { 
      icon: <i className="devicon-javascript-plain"></i>,
      name: 'JavaScript', 
      description: 'Modern ES6+ JavaScript for dynamic, interactive web applications with emphasis on functional programming patterns.',
      color: '#F7DF1E' 
    },
    { 
      icon: <i className="devicon-react-original"></i>,
      name: 'React', 
      description: 'Building reusable component-based UIs with React hooks, context API, and efficient state management.',
      color: '#61DAFB' 
    },
    { 
      icon: <i className="devicon-nodejs-plain"></i>,
      name: 'Node.js', 
      description: 'Server-side JavaScript with Express for RESTful APIs, middleware integration, and full-stack development.',
      color: '#68A063' 
    },
    { 
      icon: <i className="devicon-html5-plain"></i>,
      name: 'HTML/CSS', 
      description: 'Semantic HTML5 markup with modern CSS (Grid, Flexbox) for responsive layouts and animations.',
      color: '#E34F26' 
    },
    { 
      icon: <i className="devicon-tailwindcss-plain"></i>,
      name: 'TailwindCSS', 
      description: 'Utility-first CSS framework for rapid UI development with consistent design systems.',
      color: '#38B2AC' 
    },
    { 
      icon: <i className="devicon-mongodb-plain"></i>,
      name: 'MongoDB', 
      description: 'NoSQL database design with schema modeling, aggregation pipelines, and Atlas cloud integration.',
      color: '#4DB33D' 
    },
  ];
  
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-green-400 border-b border-green-700 pb-2 mb-8">
        <span className="font-mono">{'<'}</span> Skills <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Skill bars */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-gray-200">Technical Proficiency</h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-green-400">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Skill categories */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-200">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'JavaScript', 'TypeScript', 'CSS/SCSS', 'TailwindCSS', 'Redux'].map((tech) => (
                <motion.div 
                  key={tech}
                  className="px-4 py-3 bg-gray-800 rounded-md flex items-center"
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: 'rgba(20, 83, 45, 0.4)'
                  }}
                >
                  <span className="text-green-400 mr-2">•</span>
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-200">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Firebase', 'PostgreSQL'].map((tech) => (
                <motion.div 
                  key={tech}
                  className="px-4 py-3 bg-gray-800 rounded-md flex items-center"
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: 'rgba(20, 83, 45, 0.4)'
                  }}
                >
                  <span className="text-green-400 mr-2">•</span>
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="code-block mt-12 text-sm max-w-3xl">
        <pre>
{`// My learning roadmap
const currentlyLearning = ['Advanced React Patterns', 'GraphQL'];
const nextToLearn = ['Machine Learning', 'Web3 Development'];

function continousLearning() {
  return currentlyLearning.concat(nextToLearn);
}`}
        </pre>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold mb-8 text-gray-200">Explore My Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCards.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills