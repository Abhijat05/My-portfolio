import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NotFoundPage = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={`text-9xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        404
      </motion.div>
      
      <motion.h2
        className="text-2xl mt-8 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Page Not Found
      </motion.h2>
      
      <motion.div
        className="code-block max-w-md mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <pre className="text-left text-sm">
{`function findPage(path) {
  // Page not found in router
  if (!routes.includes(path)) {
    return {
      error: 404,
      message: 'Page not found'
    };
  }
}`}
        </pre>
      </motion.div>
      
      <Link to="/">
        <motion.button
          className={`px-6 py-3 ${
            theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
          } text-white rounded-md flex items-center gap-2`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>← Return Home</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;