import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const AboutMe = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('background');
  
  const tabs = [
    { id: 'background', label: 'Background' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <section id="home" className="py-12">
      <motion.h2 
        className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400 border-green-700' : 'text-green-600 border-green-300'} border-b pb-2 mb-10`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono">{'<'}</span> About Me <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Personal Info */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-1 flex-1 ${theme === 'dark' ? 'bg-green-800/50' : 'bg-green-200'}`}></div>
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              Abhijat Sinha
            </h3>
            <div className={`h-1 flex-1 ${theme === 'dark' ? 'bg-green-800/50' : 'bg-green-200'}`}></div>
          </div>
          
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
            I'm a passionate <span className="text-green-400 font-medium">Full-Stack Developer</span> with a keen eye for detail and a dedication to writing clean, efficient code.
          </p>
          
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            My journey in web development started 1 years ago, and I've been crafting digital experiences that are both functional and beautiful ever since. I'm driven by the challenge of solving complex problems and creating intuitive user interfaces.
          </p>
          
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'} mt-6`}>
            <h4 className={`font-bold mb-3 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              Quick Facts:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Chennai, India</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>1 year of development experience</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Computer Science Student</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Open source contributor</span>
              </li>
            </ul>
          </div>
          
          <motion.div 
            className={`code-block mt-8 ${theme === 'dark' ? '' : 'bg-gray-800'} overflow-x-auto rounded-lg`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <pre className="text-white p-4 text-xs sm:text-sm md:text-base whitespace-pre-wrap">
              <span className="text-pink-500">const</span> 
              <span className="text-blue-400"> abhijat</span> 
              <span className="text-white"> = </span>
              <span className="text-yellow-300">{'{'}</span><br/>
              <span className="ml-2 md:ml-4 text-blue-300">role:</span>
              <span className="text-white"> </span>
              <span className="text-green-300">'Full-Stack Developer'</span>
              <span className="text-white">,</span><br/>
              <span className="ml-2 md:ml-4 text-blue-300">languages:</span>
              <span className="text-white"> </span>
              <span className="text-yellow-300">[</span>
              <span className="text-green-300">'JavaScript'</span>
              <span className="text-white">,</span>
              <span className="text-green-300">'TypeScript'</span>
              <span className="text-white">,</span>
              <span className="text-green-300">'Python'</span>
              <span className="text-yellow-300">]</span>
              <span className="text-white">,</span><br/>
              <span className="ml-2 md:ml-4 text-blue-300">frameworks:</span>
              <span className="text-white"> </span>
              <span className="text-yellow-300">[</span>
              <span className="text-green-300">'React'</span>
              <span className="text-white">,</span>
              <span className="text-green-300">'Node.js'</span>
              <span className="text-white">,</span>
              <span className="text-green-300">'Express'</span>
              <span className="text-yellow-300">]</span>
              <span className="text-white">,</span><br/>
              <span className="ml-2 md:ml-4 text-blue-300">interests:</span>
              <span className="text-white"> </span>
              <span className="text-yellow-300">[</span>
              <span className="text-green-300">'Web Dev'</span>
              <span className="text-white">,</span>
              <span className="text-green-300">'UI/UX'</span>
              <span className="text-white">,</span>
              <span className="text-green-300">'Open Source'</span>
              <span className="text-yellow-300">]</span>
              <span className="text-white">,</span><br/>
              <span className="ml-2 md:ml-4 text-blue-300">currentFocus:</span>
              <span className="text-white"> </span>
              <span className="text-green-300">'Building apps'</span><br/>
              <span className="text-yellow-300">{'}'}</span>
              <span className="text-white">;</span>
            </pre>
          </motion.div>
        </motion.div>
        
        {/* Right Column - Tabbed Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tab Navigation */}
          <div className="flex border-b mb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 font-medium transition-colors relative ${
                  activeTab === tab.id 
                    ? `${theme === 'dark' ? 'text-green-400' : 'text-green-600'}` 
                    : `${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme === 'dark' ? 'bg-green-400' : 'bg-green-600'}`}
                    layoutId="activeTab"
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="min-h-[300px]">
            {/* Background Tab */}
            {activeTab === 'background' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  I started my journey in tech with a deep curiosity about how websites work. This led me to pursue formal education in Computer Science, where I discovered my passion for web development.
                </p>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  I'm currently focused on building my skills in modern web technologies like React, Node.js, and cloud platforms. My goal is to become a versatile full-stack developer capable of creating end-to-end solutions.
                </p>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  My approach combines technical knowledge with creative problem-solving, allowing me to develop solutions that are both functional and visually appealing.
                </p>
              </motion.div>
            )}
            
            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-green-400">B.Tech in Computer Science Engineering</h4>
                      <p className="text-sm">Specialization in Cloud Computing</p>
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>2022-2026</span>
                  </div>
                  <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    SRM Institute of Science and Technology
                  </p>
                </div>
                
                <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-green-400">Higher Secondary Education</h4>
                      <p className="text-sm">Science & Mathematics</p>
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>2020-2022</span>
                  </div>
                  <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Sri Chaitanya College of Education
                  </p>
                </div>
                
                <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-green-400">Secondary Education</h4>
                      <p className="text-sm">CBSE</p>
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>2010-2020</span>
                  </div>
                  <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Kendriya Vidyalaya Sangathan
                  </p>
                </div>
              </motion.div>
            )}
            
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                
                <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-gray-800/20 border-green-900/30' : 'bg-green-50 border-green-100'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${theme === 'dark' ? 'text-green-400' : 'text-green-500'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Looking for Opportunities</h4>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    I'm actively seeking internships and entry-level positions where I can apply my skills and grow as a developer.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="mt-8">
            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Technical Expertise</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-gray-100'}`}>
                <h4 className="font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'TypeScript', 'TailwindCSS'].map((tech) => (
                    <span 
                      key={tech} 
                      className={`text-xs px-2 py-1 rounded ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-green-400'
                          : 'bg-white text-green-600 border border-green-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-gray-100'}`}>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'REST APIs'].map((tech) => (
                    <span 
                      key={tech} 
                      className={`text-xs px-2 py-1 rounded ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-green-400'
                          : 'bg-white text-green-600 border border-green-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    </section>
  )
}

export default AboutMe