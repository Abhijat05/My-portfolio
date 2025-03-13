import React from 'react';
import { motion } from 'framer-motion';
import AboutMe from '../components/AboutMe';
import { useTheme } from '../context/ThemeContext';

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
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="space-y-16"
    >
      <motion.div variants={itemVariants}>
        <motion.div
          className="mb-12 text-center"
          variants={itemVariants}
        >
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
            variants={itemVariants}
          >
            <span className="font-mono">{'<'}</span>
            Hello, I'm Abhijat
            <span className="font-mono">{'/>'}</span>
          </motion.h1>
          
          <motion.p 
            className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            variants={itemVariants}
          >
            Welcome to my portfolio. Let's build something amazing together.
          </motion.p>
        </motion.div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <AboutMe />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;