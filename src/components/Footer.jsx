import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();
  
  const resetInitialization = () => {
    // Remove the initialized flag from session storage
    sessionStorage.removeItem('initialized');
    // Reload the page to trigger init sequence
    window.location.reload();
  };
  
  const socialLinks = [
    { 
      name: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      url: 'https://github.com/Abhijat05'
    },
    { 
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-xl" />,
      url: 'https://linkedin.com/in/abhijat-sinha-990ab82a4'
    },
    { 
      name: 'Email',
      icon: <FaEnvelope className="text-xl" />,
      url: 'mailto:contact@example.com'
    }
  ];

  return (
    <motion.footer 
      className={`py-8 ${
        theme === 'dark' 
          ? 'bg-black text-gray-400' 
          : 'bg-white text-gray-600'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Brand Section */}
          <div className="col-span-1">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center">
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 rounded-full mr-3 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-green-500 to-green-700' 
                      : 'bg-gradient-to-br from-green-400 to-green-600'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-white font-bold text-lg">A</span>
                </motion.div>
                
                <div>
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}>
                    Abhijat
                  </h3>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    Full-Stack Developer
                  </p>
                </div>
              </Link>
              
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Creating elegant solutions through code and design
              </p>
              
              <motion.button
                onClick={resetInitialization}
                className={`text-xs ${
                  theme === 'dark' 
                    ? 'text-green-400 hover:text-green-300'
                    : 'text-green-600 hover:text-green-500'
                } font-mono flex items-center`}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1">↺</span> Replay initialization
              </motion.button>
            </div>
          </div>

          {/* Connect Section */}
          <div className="col-span-1">
            <h4 className={`text-base font-semibold mb-4 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 text-sm ${
                    theme === 'dark' ? 'hover:text-green-400' : 'hover:text-green-600'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="col-span-1">
            <h4 className={`text-base font-semibold mb-4 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TailwindCSS', 'Framer Motion', 'Vite'].map((tech, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-2 py-1 text-xs rounded-md ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-green-400 border border-gray-700' 
                      : 'bg-gray-100 text-green-600 border border-gray-200'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;