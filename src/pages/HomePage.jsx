import React from 'react';
import { motion } from 'framer-motion';
import AboutMe from '../components/AboutMe';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiArrowDown, HiCode, HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';

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
      {/* Hero Section with improved layout */}
      <motion.div 
        className={`min-h-screen flex flex-col justify-center items-center px-4 relative ${theme === 'dark' ? 'bg-grid-pattern' : ''}`}
        variants={itemVariants}
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 rounded-full opacity-10 blur-3xl"
          animate={{ 
            backgroundColor: theme === 'dark' ? ['#10B981', '#3B82F6', '#10B981'] : ['#34D399', '#60A5FA', '#34D399'],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 rounded-full opacity-10 blur-3xl"
          animate={{ 
            backgroundColor: theme === 'dark' ? ['#3B82F6', '#10B981', '#3B82F6'] : ['#60A5FA', '#34D399', '#60A5FA'],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Main content */}
        <motion.div className="z-10 text-center">
          <motion.div
            className="inline-block mb-6 p-2 px-4 rounded-full bg-opacity-20 backdrop-blur-sm"
            style={{ backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.1)' }}
            variants={itemVariants}
          >
            <span className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              Full-Stack Developer
            </span>
          </motion.div>
          
          <motion.h1 
            className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
            variants={itemVariants}
          >
            <span className="font-mono">{'<'}</span>
            Hello, I'm Abhijat
            <span className="font-mono">{'/>'}</span>
          </motion.h1>
            
          <motion.h2 
            className={`text-2xl md:text-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto`}
            variants={itemVariants}
          >
            I craft <span className="underline decoration-green-400 decoration-4 underline-offset-4">exceptional digital experiences</span> with code
          </motion.h2>
            
          <motion.p 
            className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto mb-10`}
            variants={itemVariants}
          >
            Specializing in building responsive, user-friendly web applications with React, 
            Node.js and modern frontend technologies that solve real-world problems.
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12"
            variants={itemVariants}
          >
            <Link to="/projects">
              <motion.button 
                className={`px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white font-medium flex items-center min-w-40 justify-center`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiCode className="mr-2" /> View My Work
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                className={`px-6 py-3 rounded-lg ${theme === 'dark' ? 'border border-green-600 text-green-400 hover:bg-green-900/20' : 'border border-green-500 text-green-600 hover:bg-green-50'} font-medium flex items-center min-w-40 justify-center`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiOutlineDocumentText className="mr-2" /> Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links with improved styling */}
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            {[
              { icon: <FaGithub />, url: "https://github.com/Abhijat05", label: "GitHub" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/abhijat-sinha-990ab82a4", label: "LinkedIn" },
              { icon: <SiLeetcode />, url: "https://leetcode.com/abhijat05/", label: "LeetCode" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex flex-col items-center ${theme === 'dark' ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors`}
                whileHover={{ y: -3 }}
                aria-label={social.label}
              >
                <span className="text-2xl md:text-3xl">{social.icon}</span>
                <span className="text-xs mt-1">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <button 
            onClick={scrollToAbout}
            className={`flex flex-col items-center ${theme === 'dark' ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors`}
            aria-label="Scroll down"
          >
            <span className="text-sm mb-1">Scroll Down</span>
            <HiArrowDown className="text-xl animate-bounce" />
          </button>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        id="about-section"
        className={`py-16 ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-50'}`}
        variants={itemVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <AboutMe />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;