import React from 'react';
import { motion } from 'framer-motion';
import AboutMe from '../components/AboutMe';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiArrowDown } from 'react-icons/hi';

const HomePage = () => {
  const { theme } = useTheme();
  
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Hero Section */}
      <motion.div 
        className="min-h-screen flex flex-col justify-center items-center px-4"
        variants={itemVariants}
      >
        <motion.h1 
          className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
          variants={itemVariants}
        >
          <span className="font-mono">{'<'}</span>
          Hello, I'm Abhijat
          <span className="font-mono">{'/>'}</span>
        </motion.h1>
          
        <motion.h2 
          className={`text-2xl md:text-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-8 text-center max-w-2xl`}
          variants={itemVariants}
        >
          Full-Stack Developer & Problem Solver
        </motion.h2>
          
        <motion.p 
          className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl text-center mb-10`}
          variants={itemVariants}
        >
          I build responsive, user-friendly web applications with modern technologies. 
          Let's turn your ideas into reality.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex space-x-6 mb-12"
          variants={itemVariants}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
            className={`text-3xl ${theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} transition-colors`}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
            className={`text-3xl ${theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} transition-colors`}>
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer"
            className={`text-3xl ${theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} transition-colors`}>
            <SiLeetcode />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <button 
            onClick={scrollToAbout}
            className={`flex items-center px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'} transition-colors font-medium text-lg`}
          >
            Learn More <HiArrowDown className="ml-2" />
          </button>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        id="about-section"
        className="py-16"
        variants={itemVariants}
      >
        <AboutMe />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;